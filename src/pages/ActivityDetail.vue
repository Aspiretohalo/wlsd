<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="main bgc">

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

.content {}
</style>