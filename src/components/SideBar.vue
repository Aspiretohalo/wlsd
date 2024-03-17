<template>
    <nav class="social">
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
            <li @click="visitMiniProgram">
                <div class="icon">
                    <img src="../assets/sidebar_icon/小程序.png" alt="">
                </div>
                <span>小程序访问</span>
            </li>
            <li>
                <div class="icon">
                    <img src="../assets/sidebar_icon/游戏.png" alt="">
                </div>
                <span>趣味游戏</span>
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

import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const token: any = ref(localStorage.getItem('token') || null)

const router = useRouter();

const sharePoster = () => {
    if (token.value != null) {
        console.log('点击了“分享海报”按钮');
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

const visitMiniProgram = () => {
    console.log('点击了“小程序访问”按钮');
};

</script>

<style scoped lang="scss">
:deep(.el-backtop) {
    width: 100%;
    position: initial;
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
    right: -10px;
    cursor: pointer;
}

.social ul {
    padding: 0px;
    transform: translate(270px, 0);
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
