<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="bgc" style="padding: 0;width: 100vw;overflow: hidden;">
                <SideBar></SideBar>
                <IndexMain></IndexMain>
            </el-main>
            <el-footer style="padding: 0;">
                <Bottom></Bottom>
            </el-footer>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import TopNav from '../components/TopNav.vue'
import Bottom from '../components/Bottom.vue'
import IndexMain from '../components/IndexMain.vue'
import SideBar from '../components/SideBar.vue'

import getUserMsg from '../functions/getUserMsg';
import getAllExpert from '../functions/getAllExpert';
import getAllCommittee from '../functions/getAllCommittee';
import getAllWonderfulPictures from '../functions/getAllWonderfulPictures';
import getAllMediaVideo from '../functions/getAllMediaVideo';
import { onMounted } from 'vue'

onMounted(async () => {
    await getUserMsg()
    await getAllExpert()
    await getAllCommittee()
    await getAllWonderfulPictures()
    await getAllMediaVideo()
    await getAllMeetings()
})
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}
</style>