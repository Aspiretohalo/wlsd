<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h2 style="font-size: 36px;">大会议程</h2>
                    <h5 style="font-size: 14px;">西湖论剑·数字安全大会</h5>
                    <el-card class="card w-margin">
                        议程...
                    </el-card>
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
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}
</style>