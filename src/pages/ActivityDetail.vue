<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="main bgc">
							<div class="ax-row wow animate__animated animate__fadeInLeft" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInLeft;">
            <h1 class="text-overflow2 ax-align-left">西湖论剑安全特训营·网络攻防蓝队实战技法进阶班</h1>
            <div class="tag">
                <span class="date" style="margin: 0"></span>
            </div>
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
// import setActivityParticipation from '../functions/setActivityParticipation';
// import setActivityThumb from '../functions/setActivityThumb';
// import cancelActivityParticipation from '../functions/cancelActivityParticipation';
// import cancelActivityThumb from '../functions/cancelActivityThumb';
import addActivityViews from '../functions/addViewsActivity';
import { onBeforeMount } from 'vue';
onBeforeMount(async () => {
    await addActivityViews(SingleActivity.value.activity.itemId)
    SingleActivity.value.activity.itemViews++
})
const SingleActivity: any = ref(JSON.parse(sessionStorage.getItem("SingleActivity") || "null") || "")
// const ActivityDetail: any = ref(JSON.parse(sessionStorage.getItem("ActivityDetail") || "null") || "")

// const handleSetActivityParticipation = async () => {
//     await setActivityParticipation(SingleActivity.value.activity.itemId)
//     SingleActivity.value = JSON.parse(sessionStorage.getItem("SingleActivity") || "null") || ""
// }

// const handleSetThumb = async () => {
//     await setActivityThumb(SingleActivity.value.activity.itemId)
//     SingleActivity.value = JSON.parse(sessionStorage.getItem("SingleActivity") || "null") || ""
// }
// const handleCancelActivityParticipation = async () => {
//     await cancelActivityParticipation(SingleActivity.value.activity.itemId)
//     SingleActivity.value = JSON.parse(sessionStorage.getItem("SingleActivity") || "null") || ""
// }

// const handleCancelThumb = async () => {
//     await cancelActivityThumb(SingleActivity.value.activity.itemId)
//     SingleActivity.value = JSON.parse(sessionStorage.getItem("SingleActivity") || "null") || ""
// }

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
.text-overflow, .text-overflow2, .text-overflow3 {
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
