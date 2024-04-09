<template>
    <el-dialog v-model="dialogVisiblePoster" width="850" style="border-radius: 15px;" align-center>
        <template #header="{ titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">选择海报模板</h4>
                <div class="tip" style="color:#eebe77;">Tip：可直接使用模板，也可添加元素生成个性化海报！</div>
            </div>
        </template>
        <div class="poster_img">
            <el-checkbox v-for="(o, index) in Poster" :key="index"
                style="margin-right: 0; height: 200px; margin-bottom: 20px;" v-model="o.checked" size="large" border
                @change="handleCheckboxChange(o)">
                <div class="msg">
                    <img class="poster" :src="o.img" :class="{ 'selected': o.checked }" style="width: 100px;">
                </div>
            </el-checkbox>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button round type="primary" plain @click="dialogVisiblePosterMake = true">自定义创建</el-button>
                <el-button round @click="dialogVisiblePoster = false">取消</el-button>
                <el-button type="primary" round @click="handleSave(); dialogVisiblePosterMake = false">
                    保存海报
                </el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="dialogVisiblePosterMake" width="650" style="border-radius: 15px;" align-center>
        <template #header="{ titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">自定义海报</h4>
                <div class="tip" style="color:#eebe77;">Tip：快拖动各元素，制作一份独一无二的海报吧！</div>
            </div>
        </template>
        <PosterEditor ref="posterEditorRef"></PosterEditor>
        <template #footer>
            <span class="dialog-footer">
                <el-button round @click="dialogVisiblePosterMake = false">取消</el-button>
                <el-button type="primary" round @click="goDown();">
                    保存海报
                </el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="dialogVisibleCheck" width="850" style="border-radius: 15px;" align-center>
        <template #header="{ titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">场景打卡</h4>
                <div class="tip" style="color:#eebe77;margin: 0 auto;margin-top: 20px;width: 600px;text-align: left;">
                    Tip：打卡之前需进行个人认证！！</div>
                <div class="tip" style="color:#eebe77;margin: 0 auto;width: 600px;text-align: left;text-indent: 2em;">
                    认证后，需本人在要求的地点、景点，在相关背景下进行合影，即可打卡成功！</div>
            </div>
        </template>
        <h2 style="width: 600px; margin: 0 auto; text-align: left">打卡模板</h2>
        <el-carousel arrow="always" indicator-position="none" height="450px" :autoplay="false">
            <el-carousel-item v-for="(item, index) in checkImg" :key="index">
                <div class="check_img">
                    <img :src="item.img"
                        style="width: 600px;height: 360px;object-fit: cover;border-radius: 8px;margin: 0 auto;">
                    <div class="msg" style="display: flex;align-items: center;justify-content: center;">
                        <h2>{{ item.name }}</h2>
                        <div class="tip" style="margin-left: 20px;">{{ item.tip }}</div>
                    </div>
                    <div class="btn" style="margin-top: 20px;display: flex;justify-content: center;">
                        <el-upload class="upload-demo"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            :disabled="item.uploaded">
                            <el-button type="primary" round v-if="!item.uploaded"
                                @click="handleupload(item); dialogVisible = false" plain>
                                上传照片
                            </el-button>
                            <el-button type="primary" round disabled v-else
                                @click="handleupload(item); dialogVisible = false" plain>
                                审核中
                            </el-button>
                        </el-upload>
                        <!-- <el-button type="primary" round @click="handleCheck(item); dialogVisible = false"
                            style="margin-left: 20px;" plain>
                            提交打卡
                        </el-button> -->
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </el-dialog>
    <el-dialog v-model="dialogVisible" title="小程序码" width="200" align-center>
        <img src="../assets/小程序码.jpg" style="width: 80%;">
    </el-dialog>
    <nav class="social animate__animated animate__bounceInRight" v-show="showContent">
        <ul>
            <li @click="sharePoster">
                <div class="icon">
                    <img src="../assets/sidebar_icon/海报.png" alt="">
                </div>
                <span>海报合成</span>
            </li>
            <li @click="goToGames">
                <div class="icon">
                    <img src="../assets/sidebar_icon/游戏.png" alt="">
                </div>
                <span>趣味游戏</span>
            </li>
            <li @click="goToCheck">
                <div class="icon">
                    <img src="../assets/sidebar_icon/拍照.png" alt="">
                </div>
                <span>场景打卡</span>
            </li>
            <li @click="visitMiniProgram">
                <div class="icon">
                    <img src="../assets/sidebar_icon/小程序.png" alt="">
                </div>
                <span>小程序访问</span>
            </li>
        </ul>
    </nav>
    <el-backtop :right="10">
        <div style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        border-radius: 50%;
        line-height: 40px;
        color: #1989fa;
      ">
            UP
        </div>
    </el-backtop>
</template>

<script setup lang="ts">
// import html2canvas from "html2canvas"
import PosterEditor from "./PosterEditor.vue"

import { ref, onMounted, onUnmounted } from 'vue';
import { ElMessage } from 'element-plus'
const dialogVisiblePoster = ref(false)
const dialogVisibleCheck = ref(false)

import { useRouter, useRoute } from 'vue-router'
const token: any = ref(localStorage.getItem('token') || null)

const router = useRouter();
const route = useRoute();

const posterEditorRef = ref(); // PosterEditor组件的ref

// 保存海报
const goDown = () => {
    const posterEditor = posterEditorRef.value;

    if (!posterEditor) return;

    posterEditor.handleCanvasToImage(); // 调用PosterEditor组件的方法生成海报图片

    setTimeout(() => {
        dialogVisiblePoster.value = false
        dialogVisiblePosterMake.value = false
    }, 1000)
    ElMessage({
        message: '海报保存成功',
        type: 'success',
    })
};

const handleSave = () => {
    let save = document.createElement('a');
    // <a href=''></a>
    save.href = state.CheckedPoster;
    // 下载的名字
    save.download = '西湖论剑·海报'
    save.target = '_blank';
    // 直接回调a的点击事件
    save.click()
}

const sharePoster = () => {
    if (token.value != null) {
        dialogVisiblePoster.value = true
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
};

const goToGames = () => {
    if (token.value != null) {
        router.push('/ctf')
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
};
const goToCheck = () => {
    if (token.value != null) {
        dialogVisibleCheck.value = true
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
};
const dialogVisiblePosterMake = ref(false)
const dialogVisible = ref(false)
const visitMiniProgram = () => {
    dialogVisible.value = true
    console.log('点击了“小程序访问”按钮');
};

const showContent = ref(true);

// 监听页面滚动事件
const handleScroll = () => {
    const scrollY = window.scrollY;

    // 判断页面滚动位置，当滚动到一定位置后显示内容
    if (scrollY <= 700 && route.path == '/') { // 这里500是滚动到的位置，根据实际情况调整
        showContent.value = false;
    } else {
        showContent.value = true;
    }
};

// 监听页面滚动事件
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// 移除滚动事件监听器
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const Poster = ref([
    {
        id: 1,
        checked: false,
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/poster%2F1.png'
    },
    {
        id: 2,
        checked: false,
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/poster%2F2.png'
    },
    {
        id: 3,
        checked: false,
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/poster%2F3.png'
    },
    {
        id: 4,
        checked: false,
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/poster%2F4.png'
    },
    {
        id: 5,
        checked: false,
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/poster%2F5.png'
    },
    {
        id: 6,
        checked: false,
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/poster%2F6.png'
    },
    {
        id: 7,
        checked: false,
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/poster%2F7.png'
    },
])
const checkImg = ref([
    {
        id: 1,
        uploaded: false,
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/e49da182c8364cb7af6d39fe2bcd2fd3.jpg',
        tip: '吉祥物会在哪呢？',
        name: '安恒小龙人打卡',
    },
    {
        id: 2,
        uploaded: false,
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/a6f8ec2f39bf430db23f67d0dfb95ce6.jpg',
        tip: '场馆一楼大厅有一个海报噢',
        name: '场馆一楼大厅',
    },
    {
        id: 3,
        uploaded: false,
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/918ce5b658af4e0f9022c8d483e17647.jpg',
        tip: '和我们的大会签到点合个影吧',
        name: '大会签到点',
    },
])
import state from '../store/state'

const handleCheckboxChange = (checkbox: any) => {

    Poster.value.forEach((item: any) => {
        if (item !== checkbox) {
            item.checked = false;
        }
    });
    state.CheckedPoster = checkbox.img
    console.log(state.CheckedPoster);
};

// const handleCheck = (item: any) => {
//     console.log(item);

// }
const handleupload = (item: any) => {

    // 模拟上传成功后的处理
    setTimeout(() => {
        // 设置对应项的上传状态为true
        item.uploaded = true;
        console.log(item);

    }, 5000);
}
</script>

<style scoped lang="scss">
:deep(.el-checkbox.el-checkbox--large) {
    height: 150px;
}

:deep(.el-checkbox__inner) {
    width: 0;
    height: 0;
    border: 0;
}

:deep(.el-checkbox.el-checkbox--large .el-checkbox__inner) {
    width: 0;
    height: 0;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    background: transparent;
    border: transparent;
}

:deep(.el-checkbox.is-bordered) {
    border: 0;
}

:deep(.el-backtop) {
    width: 100%;
    position: initial;
}

:deep(.el-dialog__body) {
    padding: 30px;
}

:deep(.el-dialog) {
    border-radius: 15px;
}

.selected {
    transition: 0.3s;
    border: 5px solid #409EFF !important
        /* 可以根据需要修改颜色 */
}

.poster_img {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .poster {
        border-radius: 8px;
        border: 5px solid transparent
    }
}

.side {
    position: fixed;
    z-index: 1000;
    top: 35%;
    right: 0;
    background-color: #f0f0f0;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    .sidebar {
        // transform: translateY(-50%);
        width: 100px; // 调整侧边栏宽度
        padding: 20px;
        text-align: center;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .sidebar-button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s ease;
    }

    .sidebar-button:hover {
        background-color: #0056b3;
    }
}



.dialog-footer button:first-child {
    margin-right: 10px;
}

.question {
    display: flex;
    justify-content: space-around;

    .left {
        .dgh {
            text-align: left;
            margin-left: 50px;
        }

        .dgtxt {
            // text-align: left;
            color: #000;
            margin-bottom: 20px;
            font-size: 25px;
        }
    }

    .right {
        width: 30%;

        .itd {
            text-align: justify;
            text-indent: 2em;
        }
    }
}



.radio-container {
    display: flex;
    flex-direction: column;
}

.radio-item {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

a {
    color: white;
    text-decoration: none;
}

.social {
    position: fixed;
    top: 300px;
    right: -255px;

    .btns {
        margin-top: 20px;
    }
}

.social ul {
    padding: 0px;
    transform: translate(20px, 0);
}

.social ul li {
    display: flex;
    align-items: center;
    margin: 5px;
    background: rgba(200, 158, 172, 0.5);
    width: 300px;
    text-align: left;
    padding: 10px;
    border-radius: 30px 0 0 30px;
    transition: all 1.5s;
    cursor: pointer;
}

.social ul li:hover {
    transform: translate(-100px, 0);
    background: #c44a73;
    transition: all 1.5s;
}

.social ul li:hover a {
    color: white;
}

.social ul li:hover img {
    color: #c44a73;
    transform: rotate(360deg);
    transition: all 1.5s;
}

.social ul li img {
    color: #000;
    padding: 10px;
    border-radius: 50%;
    display: inline-block;
    width: 20px;
    height: 20px;
    transform: rotate(0deg);
    text-align: center;
    font-size: 20px;
    animation: bounce;
    /* referring directly to the animation's @keyframe declaration */
    animation-duration: 0.1s;
    /* don't forget to set a duration! */
}

@keyframes youtubeAnim {

    0%,
    100% {
        color: #c9110f;
    }

    50% {
        color: #ff0000;
    }
}
</style>
