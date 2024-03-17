<template>
    <div class="back" style="position: relative;padding-top: 50px;">
        <el-button @click="goBack" style="position: absolute;left:250px;font-size: 18px;" type="primary" plain
            size="large">返回</el-button>
        <div class="title">
            <div class="logo"><img src="../../assets/logo_small白.png" alt=""></div>
            <h1 class="big-title">Rabbit</h1>
        </div>
        <div class="solution">
            <span style="font-size: 22px;">U2FsdGVkX1/+ydnDPowGbjjJXhZxm2MP2AgI</span>
            破解Rabbit密码
        </div>
        <div class="input-container">
            <input type="text" placeholder="输入flag" class="flag-input">
            <button class="submit-button" @click="checkFlag">提交</button>
        </div>
    </div>
    <el-dialog v-model="dialogFormVisible" title="恭喜！" width="35%">
        <p>你找到了正确的flag！</p>
    </el-dialog>
    <el-dialog v-model="dialogFormVisible2" title="错误" width="35%">
        <p>你输入的答案不正确，请再试一次！</p>
    </el-dialog>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter();
const goBack = () => {
    router.back()
}
const checkFlag = () => {
    const flagInput = document.querySelector('.flag-input') as HTMLInputElement;
    const flagValue = flagInput?.value.trim();

    if (flagValue === 'F1ag{Cute_Rabbit}' || flagValue === 'Cute_Rabbit') {
        dialogFormVisible.value = true
    } else {
        dialogFormVisible2.value = true
    }
};
const dialogFormVisible = ref(false)
const dialogFormVisible2 = ref(false)

</script>

<style lang="scss" scoped>
@property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
}

.solution {
    background-color: rgba(255, 255, 255, 0.1);
    /* 添加半透明背景颜色 */
    border-radius: 10px;
    /* 添加圆角 */
    padding: 20px;
    /* 添加内边距 */
    margin-bottom: 20px;
    /* 添加底部外边距 */
    text-align: center;
    /* 居中文本 */
    width: 30%;
    /* 固定宽度 */
    color: white;
    /* 文本颜色 */
    font-size: 1.5em;
    /* 增大字体大小 */
    line-height: 1.5;
    /* 设置行高，使文字分行显示 */
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #212534;
}

.content {
    margin-bottom: 2rem;
}

.flag-input {
    padding: 10px;
    font-size: 2em;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
}

.submit-button {
    padding: 10px 20px;
    font-size: 2em;
    border: none;
    border-radius: 5px;
    background-color: #3c67e3;
    color: white;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #4e00c2;
}

:root {
    --card-height: 65vh;
    --card-width: calc(var(--card-height) / 1.5);
}

.card-container {
    display: flex;
    /* 使用 Flexbox 布局 */
}

.back {
    min-height: 100vh;
    min-width: 100vw;
    background: #212534;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;

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
    width: var(--card-width);
    height: var(--card-height);
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 3.5em;
    color: rgb(88 199 250 / 0%);
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
    color: rgb(88 199 250 / 100%);
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
