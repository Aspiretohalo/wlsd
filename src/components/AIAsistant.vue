<template>
    <div class="box animate__animated animate__bounceInLeft" v-show="showContent">
        <img src="../assets/智能助手.gif" @click="centerDialogVisible = true">
    </div>
    <el-dialog class="AIAsistant" style="margin-left: 200px" v-model="centerDialogVisible" width="550" align-center
        overflow :close-on-click-modal="false" draggable>
        <div class="content">
            <iframe class="iframe-no-border" src="http://localhost:5174" width="500px" height="600px"></iframe>
        </div>
        <!-- <div class="btns">
            <el-button round type="primary" plain>智能助手</el-button>
        </div> -->
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
// const router = useRouter();
const centerDialogVisible = ref(false)

// const goTo = () => {
//     router.push('/integral/integralGifts')
// }
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
</script>

<style lang="scss" scoped>
:deep(.el-dialog) {
    border-radius: 15px;
}

.box {
    cursor: pointer;
    position: fixed;
    bottom: 250px;
    left: 20px;
}


.AIAsistant {

    .content {
        // height: 500px;
    }
}

.iframe-no-border {
    border: none;
}
</style>