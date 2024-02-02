<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin" style="margin-top: 80px;display: flex;justify-content: start;">新闻资讯</h1>
                    <NewsNav></NewsNav>
                    <div class="picures w-margin">
                        <h3>精彩花絮</h3>
                        <h5>Highlights</h5>
                        <el-row class="">
                            <el-col :span="8" v-for="item in MediaVideo" :key="item.videoId">
                                <img style="width: 90%; height: 200px;cursor: pointer; margin-top: 20px;"
                                    :src="item.videoCover" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2"
                                    :initial-index="4" fit="cover" lazy />
                                <div class="words">
                                    <div class="title">{{ item.videoTitle }}</div>
                                    <div class="views"><img src="../assets/icon/浏览量.png" style="width: 20px;">{{
                                        item.videoViews }}</div>
                                </div>
                            </el-col>
                        </el-row>
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

const MediaVideo = ref(JSON.parse(sessionStorage.getItem("MediaVideo") || "null") || "")
</script>

<style lang="scss" scoped>
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