<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="main bgc">
                <div class="banner">
                    <h2>{{ SingleNews.newsTitle }}</h2>

                </div>
                <div class="content" v-for="o in 8" :key="o">
                    <template v-if="isLink(NewsDetail['detail' + o])">
                        <img :src="NewsDetail['detail' + o]" alt="Link Image">
                    </template>
                    <template v-else>
                        {{ NewsDetail['detail' + o] }}
                    </template>
                </div>
            </el-main>
            <el-footer style="padding: 0;">
                <Bottom></Bottom>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
import Bottom from '../components/Bottom.vue'
import { ref } from 'vue'
import { reactive } from 'vue';

const SingleNews: any = ref(JSON.parse(sessionStorage.getItem("SingleNews") || "null") || "")
const NewsDetail: any = reactive(JSON.parse(sessionStorage.getItem("NewsDetail") || "null") || "")
const isLink = (value: string) => {
    // 判断是否是链接，这里简单示例，你可能需要根据实际情况修改判断逻辑
    return value.startsWith('http') || value.startsWith('https');
}

</script>

<style lang="scss" scoped>
.main {
    padding: 0;
}

.banner {
    height: 300px;
    background-color: rgba($color: #fff, $alpha: 0.5);
}

.content {}
</style>