<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="main bgc">
                <h1 class="w-margin" style="margin-top: 30px;margin-bottom: 0;display: flex;justify-content: start;">
                    活动报名</h1>
                <el-card
                    style="width: 1200px;height: 500px;margin: 20px auto;margin-bottom: 100px;border-radius: 10px;">

                </el-card>
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

import addActivityViews from '../functions/addViewsActivity';
import { onBeforeMount } from 'vue';
onBeforeMount(async () => {
    await addActivityViews(SingleActivity.value.activity.itemId)
    SingleActivity.value.activity.itemViews++
})
const SingleActivity: any = ref(JSON.parse(sessionStorage.getItem("SingleActivity") || "null") || "")

</script>

<style lang="scss" scoped>
.main {
    padding: 0;
}

.banner {
    height: 300px;
    background-color: rgba($color: #fff, $alpha: 0.5);
}

.article-tit .ax-row {
    height: 16rem;
    flex-flow: column;
    width: 120rem;
    min-width: 1000px;
}

.text-overflow,
.text-overflow2,
.text-overflow3 {
    display: -webkit-box;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

h1 {
    font-family: "Arial", "Helvetica Neue", "sans-serif", "pingfang SC", "Hiragino Sans GB", "微软雅黑", "microsoft yahei", "宋体", "simsun";
    font-size: 2.8rem;
    line-height: calc(2.8rem + 1.6rem);
}
</style>
