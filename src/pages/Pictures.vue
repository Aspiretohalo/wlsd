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
                        <h3>精彩图片</h3>
                        <h5>pictures</h5>
                        <el-row class="">
                            <el-col :span="8" v-for="item in WonderfulPictures" :key="item.pictureId">
                                <img style="width: 90%;  margin-top: 20px;" :src="item.pictureUrl" :zoom-rate="1.2"
                                    :max-scale="7" :min-scale="0.2" :preview-src-list="item.pictureUrl" :initial-index="4"
                                    fit="cover" lazy />
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
import NewsNav from '../components/NewsNav.vue'

import { ref } from 'vue'

const WonderfulPictures = ref(JSON.parse(sessionStorage.getItem("WonderfulPictures") || "null") || "")
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

.pictures {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

}

.el-col-5 {
    width: 20%;
    flex: none;
}
</style>