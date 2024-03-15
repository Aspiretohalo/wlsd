<template>
    <div class="side">
        <div class="sidebar">
            <button class="sidebar-button" @click="sharePoster">生成海报</button>
        </div>
        <div class="sidebar">
            <button class="sidebar-button" @click="goToGames">趣味游戏</button>
        </div>
        <div class="sidebar">
            <button class="sidebar-button" @click="visitMiniProgram">小程序访问</button>
        </div>
        <div class="sidebar">
            <el-backtop visibility-height="0">
                <button class="sidebar-button">返回顶部</button>
            </el-backtop>
        </div>
    </div>
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
        router.push('/funGames')
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
</style>
