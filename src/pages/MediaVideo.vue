<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 style="padding-top: 30px;color: #0c166a;"><img src="../assets/title/新闻资讯.png" width="400"> </h1>

                    <NewsNav></NewsNav>
                    <div class="picures w-margin">
                        <h3>精彩花絮</h3>
                        <h5>Highlights</h5>
                        <el-row class="">
                            <el-col :span="8" v-for="item in MediaVideo" :key="item.videoId">
                                <img style="object-fit: cover;width:360px; height: 200px;cursor: pointer; margin-top: 20px;"
                                    :src="item.videoCover" @click="handlePreview()" />

                                <div class="words">
                                    <div class="title">{{ item.videoTitle }}</div>
                                    <div class="views"><img src="../assets/icon/浏览量.png" style="width: 20px;">{{
                                item.videoViews }}</div>
                                </div>

                            </el-col>
                        </el-row>
                        <el-dialog :destroy-on-close="true" v-model="videoDialogVisible" width="850" align-center
                            :close-on-click-modal="false">
                            <video src="../assets/大会介绍.mp4" muted type="video/mp4" autoplay width="800"></video>
                        </el-dialog>
                    </div>
                </el-main>
                <el-footer style="padding: 0;">
                    <Bottom></Bottom>
                </el-footer>
            </el-container>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TopNav from '../components/TopNav.vue'
import Bottom from '../components/Bottom.vue'
import NewsNav from '../components/NewsNav.vue';
import { ref } from 'vue'
const videoDialogVisible = ref(false)
const handlePreview = () => {
    videoDialogVisible.value = true

}
const MediaVideo = ref(JSON.parse(sessionStorage.getItem("MediaVideo") || "null") || "")
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

:deep(.el-dialog) {
    background-color: rgba($color: #fff, $alpha: 1);
}

.words {
    position: relative;

    .title {
        color: #e6e6e6;
        position: absolute;
        bottom: 15px;
        left: 25px;
        font-size: 12px;
        background: rgba(0, 0, 0, .5);
    }

    .views {
        color: #e6e6e6;
        position: absolute;
        bottom: 15px;
        right: 25px;
        font-size: 12px;
        background: rgba(0, 0, 0, .5);
        display: flex;
        align-items: center;
    }
}
</style>