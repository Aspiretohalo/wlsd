<template>

    <el-dialog v-model="centerDialogVisible" title="阵营选择" width="500" style="text-align: center;">
        <el-text style="font-size: 18px">请选择你代表的省份：</el-text>
        <el-select v-model="value" placeholder="省份" filterable size="large" style="width: 100px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>

    <el-dialog v-model="rankDialogVisible" width="500" style="text-align: center;" align-center>
        <template #header>
            <p style="font-size: 22px;font-weight: bold;margin: 0;">排行榜</p>
            <p style="display: inline-block;">你代表的省份是：</p>
            <p style="display: inline-block; font-weight: bold ;font-size: 16px;color: #67C23A;">{{ value
                }}</p>
        </template>
        <div style="display: inline-block;padding-top: 0;">
            <div style="width: 420px; background-color: #fff; height: 450px;">
                <el-table :data="rankData" height="450" style="width: 100%;background: transparent;"
                    :header-cell-style="{ background: '#009879', color: '#ffffff' }" class="custom-table">
                    <el-table-column prop="Ranking" label="排名" width="160" />
                    <el-table-column prop="province" label="省份" width="160" />
                    <el-table-column prop="score" label="分数" width="100" />
                </el-table>
            </div>
        </div>
    </el-dialog>

    <el-dialog class="dialog_poster" v-model="shareDialogVisible" title="分享" width="350" style="text-align: center;"
        modal="false" align-center>
        <div class="poster" ref="poster">
            <div
                style="height:500px;display: flex;flex-direction: column; background-image: url(/src/assets/images2/趣味游戏分享.png);background-size: cover;">
                <div class="top">
                    <img src="../../assets/favicon.ico" alt="">
                    <div class="title">
                        快来西湖论剑
                    </div>
                    <div class="title">
                        一起为阵营助力！
                    </div>
                </div>
                <div class="msg_parent" style="padding: 10px 0; margin-top: auto;margin-bottom: 50px;">
                    <div class="msgs">用户名</div>
                    <div class="msgs">答题总数</div>
                    <div class="msgs">解题数量</div>
                    <div class="msgs">贡献分数</div>
                    <div class="msgs child">阿优</div>
                    <div class="msgs child">8</div>
                    <div class="msgs child">3</div>
                    <div class="msgs child">170</div>
                </div>
                <div
                    style="height: 80px;display: flex;justify-content: space-between;margin-bottom: 80px;margin-left: 10px;">
                    <div class="msg_parent" style="height:80px;">
                        <div style="font-size: 20px;font-weight: bold;color: #000;padding-top: 10px;">
                            欢迎来到西湖论剑
                        </div>
                        <div style="font-size: 20px;font-weight: bold;color: #000;">
                            数字安全 牢记于心
                        </div>
                    </div>
                    <div style="width: 100px;height: 100px;margin-right: 10px;margin-left: 10px;">
                        <img src="/src/assets/images/frame.png" style="width: 100%;" alt="">
                    </div>
                </div>
            </div>
        </div>

        <template #footer>
            <div class="dialog-footer" style="display: flex;align-items: center;justify-content: space-between;">
                <el-text style="font-size: 16px;font-weight: bold ;text-align: center;">
                    https://ln.run/VTYE6
                </el-text>
                <el-button type="primary" @click="copyLink" plain style="margin-left: 5px;">
                    复制链接
                </el-button>
                <el-button type="primary" @click="goDown" plain>
                    导出图片
                </el-button>
            </div>
        </template>
    </el-dialog>

    <el-dialog v-model="ruleDialogVisible" title="规则" width="500" style="text-align: center;" align-center>
        <p style="text-align: left; font-size: 16px; margin-left: 25px;">游戏介绍：</p>
        <p style="text-align: left; margin-left: 70px;">1.西湖论剑闯关答题，每道题目仅有一次答题机会！</p>
        <p style="text-align: left; margin-left: 70px;">2.CTF题目解答，寻找藏匿在网站中的信息</p>

        <!-- 每道题目仅有一个正确选项！ -->
        <!-- <p style="text-align: left; margin-left: 70px;">2.大会闯关题目与西湖论剑历史有关！</p> -->
        <!-- <p style="text-align: left; margin-left: 70px;">3.题目选择后无法更改，请慎重选择！</p> -->
        <p style="text-align: left; font-size: 16px; margin-left: 25px;">规则讲解：</p>
        <p style="text-align: left; margin-left: 70px;">1.西湖论剑闯关答题：每答对一道题，为团队贡献10分！</p>
        <p style="text-align: left; margin-left: 70px;">2.CTF解答：答对一题，为团队贡献30分！</p>
        <p style="text-align: left; margin-left: 70px;">3.挑战机会用完？分享活动海报和观看视频获取更多机会！</p>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="ruleDialogVisible = false">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>

    <div class="back" style="position: relative;padding-top: 50px;">
        <el-button @click="goToIndex" style="position: absolute;left:250px;font-size: 18px;" type="primary" plain
            size="large">返回首页</el-button>
        <div class="title">
            <div class="logo"><img src="../../assets/logo_small白.png" alt=""></div>
            <h1 class="big-title">趣味游戏大厅</h1>
        </div>
        <div style="display: flex;">
            <button @click="rankDialogVisible = true" class="custom-btn btn-3"
                style="margin-right: 20px;"><span>排行</span></button>
            <button @click="shareDialogVisible = true" class="custom-btn btn-3"><span>分享</span></button>
            <button @click="ruleDialogVisible = true" class="custom-btn btn-3"
                style="margin-left: 20px;"><span>规则</span></button>
        </div>

        <div class="card-container">
            <div style="display: inline-block;margin-left: 70px;">
                <el-row class="row-bg" justify="space-around" style="margin-top: 50px;">
                    <el-col :span="8">
                        <div class="card card0" @click="gotogame(4)">
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="card card1" @click="gotogame(1)">
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="card card2" @click="gotogame(2)">
                        </div>
                    </el-col>
                </el-row>
                <el-row class="row-bg" justify="start" style="margin-top: 50px;">

                    <el-col :span="8">
                        <div class="card card3" @click="gotogame(3)">
                        </div>
                    </el-col>

                </el-row>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import html2canvas from "html2canvas"

import { ElMessage } from 'element-plus'
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();
const gotogame = (gameid: number) => {
    if (gameid == 1) {
        router.push('/firstgame');
    } else if (gameid == 2) {
        router.push('/secondgame');
    } else if (gameid == 3) {
        router.push('/thirdgame');
    } else if (gameid == 4) {
        router.push('/funGames');
    }
}
const goToIndex = () => {
    router.push('/')
}
const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")
const centerDialogVisible = ref(false)
onMounted(() => {
    if (user.province == '') {
        centerDialogVisible.value = true
    }
});

const posterimg = ref();
// 绑定  需要把那个内容生成图片
const poster = ref();

const goDown = () => {
    //    document.querySelector() document.getElementById
    // html2canvas(绑定的元素,{})
    // 海报图默认是  2倍尺寸
    html2canvas(poster.value, {
        backgroundColor: '#fff',//海报的背景颜色
        useCORS: true, // 允许跨域 
        width: 460, //生成海报的w
        height: 700, //生成海报的h    默认是px
    }).then(canvas => {
        // canvas 其实就是我们所讲的res 的意思 返回报文的意思
        let baseImg = canvas.toDataURL("image/png");
        posterimg.value = baseImg;
        let save = document.createElement('a');
        // <a href=''></a>
        save.href = baseImg;
        // 下载的名字
        save.download = '西湖论剑·趣味游戏'
        // 直接回调a的点击事件
        save.click()
    })
}

//排行榜假数据
const rankData = ref([
    { Ranking: 1, province: '浙江', score: 1210 },
    { Ranking: 2, province: '上海', score: 150 },
    { Ranking: 3, province: '广东', score: 70 },
    { Ranking: 4, province: '北京', score: 60 },
    { Ranking: 5, province: '江苏', score: 60 },
    { Ranking: 6, province: '天津', score: 50 },
    { Ranking: 7, province: '重庆', score: 30 },
    { Ranking: 8, province: '辽宁', score: 30 },
    { Ranking: 9, province: '吉林', score: 20 },
    { Ranking: 10, province: '黑龙江', score: 10 },
    { Ranking: 11, province: '河北', score: 0 },
    { Ranking: 12, province: '山西', score: 0 },
    { Ranking: 13, province: '内蒙古', score: 0 },
    { Ranking: 14, province: '安徽', score: 0 },
    { Ranking: 15, province: '山东', score: 0 },
    { Ranking: 16, province: '河南', score: 0 },
    { Ranking: 17, province: '湖北', score: 0 },
    { Ranking: 18, province: '湖南', score: 0 },
    { Ranking: 19, province: '福建', score: 0 },
    { Ranking: 20, province: '广西', score: 0 },
    { Ranking: 21, province: '海南', score: 0 },
    { Ranking: 22, province: '四川', score: 0 },
    { Ranking: 23, province: '江西', score: 0 },
    { Ranking: 24, province: '贵州', score: 0 },
    { Ranking: 25, province: '云南', score: 0 },
    { Ranking: 26, province: '西藏', score: 0 },
    { Ranking: 27, province: '陕西', score: 0 },
    { Ranking: 28, province: '甘肃', score: 0 },
    { Ranking: 29, province: '青海', score: 0 },
    { Ranking: 30, province: '宁夏', score: 0 },
    { Ranking: 31, province: '新疆', score: 0 },
    { Ranking: 32, province: '台湾', score: 0 },
    { Ranking: 33, province: '香港', score: 0 },
    { Ranking: 34, province: '澳门', score: 0 },
]);



const options = [
    {
        value: '浙江',
        label: '浙江',
    },
    {
        value: '北京',
        label: '北京',
    },
    {
        value: '天津',
        label: '天津',
    },
    {
        value: '上海',
        label: '上海',
    },
    {
        value: '重庆',
        label: '重庆',
    },
    {
        value: '河北',
        label: '河北',
    },
    {
        value: '山西',
        label: '山西',
    },
    {
        value: '辽宁',
        label: '辽宁',
    },
    {
        value: '吉林',
        label: '吉林',
    },
    {
        value: '黑龙江',
        label: '黑龙江',
    },
    {
        value: '江苏',
        label: '江苏',
    },
    {
        value: '安徽',
        label: '安徽',
    },
    {
        value: '福建',
        label: '福建',
    },
    {
        value: '江西',
        label: '江西',
    },
    {
        value: '山东',
        label: '山东',
    },
    {
        value: '河南',
        label: '河南',
    },
    {
        value: '湖北',
        label: '湖北',
    },
    {
        value: '湖南',
        label: '湖南',
    },
    {
        value: '广东',
        label: '广东',
    },
    {
        value: '海南',
        label: '海南',
    },
    {
        value: '四川',
        label: '四川',
    },
    {
        value: '贵州',
        label: '贵州',
    },
    {
        value: '云南',
        label: '云南',
    },
    {
        value: '陕西',
        label: '陕西',
    },
    {
        value: '甘肃',
        label: '甘肃',
    },
    {
        value: '青海',
        label: '青海',
    },
    {
        value: '台湾',
        label: '台湾',
    },
    {
        value: '内蒙古',
        label: '内蒙古',
    },
    {
        value: '广西',
        label: '广西',
    },
    {
        value: '西藏',
        label: '西藏',
    },
    {
        value: '宁夏',
        label: '宁夏',
    },
    {
        value: '新疆',
        label: '新疆',
    },
    {
        value: '香港',
        label: '香港',
    },
    {
        value: '澳门',
        label: '澳门',
    }
]
const value = ref('')
// const value = ref(options[0].value);

const rankDialogVisible = ref(false)
const shareDialogVisible = ref(false)
const ruleDialogVisible = ref(false)

const copyLink = () => {
    const linkText = 'https://ln.run/VTYE6';
    const input = document.createElement('input');
    input.style.opacity = '0';
    input.value = linkText;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    ElMessage({
        message: '复制成功！',
        type: 'success',
    })
}

</script>

<style lang="scss" scoped>
@property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
}

:root {
    --card-height: 65vh;
    --card-width: calc(var(--card-height) / 1.5);
}

.card-container {
    width: 80%;

}

.back {
    min-height: 100vh;
    background: #212534;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
    width: 100vw;

    .title {
        display: flex;
    }
}

.top {
    text-align: left;
    margin-top: 50px;
    margin-left: 30px;

    img {
        margin-bottom: 30px;
    }

    .title {
        font-size: 30px;
        font-weight: 900;
        color: #000;
    }
}

.msg_parent {
    background-color: rgba($color: #fff, $alpha: 0.7);
    width: 90%;
    margin: 0 auto;
    border-radius: 8px;

    .msgs {
        width: 65px;
        color: #000;
        font-size: 15px;
        font-weight: 700;
        display: inline-block;
    }

    .child {
        color: #E6A23C;
        margin-top: 10px;
    }
}

.card {
    background-size: cover;
    /* 使背景图片铺满整个卡片 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: center center;
    /* 将背景图片水平和垂直居中 */
    width: 300px;
    height: 150px;
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 3.5em;
    color: #fff;
    cursor: pointer;
    font-family: cursive;
    margin-right: 4rem;
}

.card0 {
    background-image: url('../../assets/images2/封面.png');
    /* 替换 'your-image-url.jpg' 为你的图片链接 */
}

.card1 {
    background-image: url('https://cdn.pixabay.com/photo/2019/12/17/05/53/security-4700815_960_720.jpg');
    /* 替换 'your-image-url.jpg' 为你的图片链接 */
}

.card2 {
    background-image: url('https://cdn.pixabay.com/photo/2013/11/20/09/35/background-213649_960_720.jpg');
    /* 替换 'your-image-url.jpg' 为你的图片链接 */
}

.card3 {
    background-image: url('https://cdn.pixabay.com/photo/2016/04/13/19/20/binary-1327493_960_720.jpg');
    /* 替换 'your-image-url.jpg' 为你的图片链接 */
}

.card-image {
    position: relative;
    width: 100%;
    height: 100%;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 图片自适应填充 */
}


.card-content-over-image {
    z-index: 1;
}

@media (max-width: 600px) {
    .card {
        width: 100%;
        /* 在小屏幕上，让卡片宽度填满屏幕 */
    }
}

.card-image {
    position: relative;
    width: 100%;
    height: 100%;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 图片自适应填充 */
}

.card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    /* 添加背景以提高文字可读性 */
    color: white;
    text-align: center;
}

.card-content-over-image {
    z-index: 1;
}

@media (max-width: 600px) {
    .card {
        width: 100%;
        /* 在小屏幕上，让卡片宽度填满屏幕 */
    }
}

.card:hover {
    color: rgb(133, 164, 178);
    transition: color 1s;
}

.card:hover:before,
.card:hover:after {
    animation: none;
    opacity: 0;
}


.card::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

.card::after {
    position: absolute;
    content: "";
    top: calc(var(--card-height) / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--card-height) / 6));
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
}

@keyframes spin {
    0% {
        --rotate: 0deg;
    }

    100% {
        --rotate: 360deg;
    }
}

a {
    color: #212534;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 2rem;
}

.big-title {
    margin-left: 20px;
    font-size: 3em;
    color: white;
    margin-bottom: 2rem;
    font-family: 'Arial', sans-serif;
    /* Change the font family */
    font-weight: bold;
    /* Make the font bold */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* Add a text shadow for depth */
    letter-spacing: 2px;
    /* Adjust letter spacing for better readability */
    text-transform: uppercase;
    /* Transform text to uppercase */
}

:deep(.el-table tr:hover) {
    color: #009879;
    font-weight: bold;
}

.custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}

.btn-3 {
    background: rgb(0, 172, 238);
    background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
    width: 130px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;

}

.btn-3 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    font-size: 18px;
}

.btn-3:before,
.btn-3:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
}

.btn-3:before {
    height: 0%;
    width: 2px;
}

.btn-3:after {
    width: 0%;
    height: 2px;
}

.btn-3:hover {
    background: transparent;
    box-shadow: none;
    background-color: #e0e5ec;
}

.btn-3:hover:before {
    height: 100%;
}

.btn-3:hover:after {
    width: 100%;
}

.btn-3 span:hover {
    color: rgba(2, 126, 251, 1);
}

.btn-3 span:before,
.btn-3 span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
}

.btn-3 span:before {
    width: 2px;
    height: 0%;
}

.btn-3 span:after {
    width: 0%;
    height: 2px;
}

.btn-3 span:hover:before {
    height: 100%;
}

.btn-3 span:hover:after {
    width: 100%;
}
</style>
