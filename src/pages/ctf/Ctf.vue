<template>
    <div class="back" style="position: relative;padding-top: 50px;">
        <el-button @click="goToIndex" style="position: absolute;left:250px;font-size: 18px;" type="primary" plain
            size="large">返回首页</el-button>
        <div class="title">
            <div class="logo"><img src="../../assets/logo_small白.png" alt=""></div>
            <h1 class="big-title">趣味游戏大厅</h1>
        </div>
        <div class="card-container">
            <el-row class="row-bg" justify="space-around" style="margin-top: 50px;">
                <el-col :span="6">
                    <div class="card card1" @click="gotogame(4)">
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="card card1" @click="gotogame(5)">
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="card card1" @click="gotogame(1)">
                    </div>
                </el-col>
            </el-row>
            <el-row class="row-bg" justify="space-around" style="margin-top: 50px;">
                <el-col :span="6">
                    <div class="card card2" @click="gotogame(2)">
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="card card3" @click="gotogame(3)">
                    </div>
                </el-col>
                <el-col :span="6">
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
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
    } else if (gameid == 5) {
        router.push('/wordGame');
    }
}
const goToIndex = () => {
    router.push('/')
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
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    /* 使用 Flexbox 布局 */
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
</style>
