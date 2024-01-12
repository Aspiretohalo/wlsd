<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin" style="margin-top: 80px;display: flex;justify-content: start;">大咖云集</h1>
                    <Committee></Committee>
                    <div class="speakers w-margin">
                        <h2>大会嘉宾</h2>
                        <h5>speakers</h5>
                        <el-row class="data">
                            <el-col :span="5" v-for="i in 12" :key="i">
                                <el-image style="width: 200px; height: 200px; margin-top: 20px;"
                                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" lazy />
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
import Committee from '../components/Committee.vue';
</script>

<style lang="scss" scoped>
.speakers {
    .el-col-5 {
        width: 20%;
        flex: none;
    }
}
</style>