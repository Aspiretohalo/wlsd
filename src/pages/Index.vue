<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="bgc" style="padding: 0;width: 100vw;overflow: hidden;">
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
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}
</style>