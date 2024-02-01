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
                            <el-col :span="5" v-for="item in AllExpert" :key="item.expertId">
                                <img :src="item.expertImg" style="width: 200px; height: 200px; margin-top: 20px;">
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
import { ref } from 'vue'

const AllExpert = ref(JSON.parse(sessionStorage.getItem("AllExpert") || "null") || "")
// const AllExpert = ref([
//     {
//         expertId: 1,
//         expertImg: "https://star-wish.oss-cn-hangzhou.aliyuncs.com/c6ed0f8d-f7bb-4c1b-a280-35433fd196df.jpg"
//     }
// ])
</script>

<style lang="scss" scoped>
.speakers {
    .el-col-5 {
        width: 20%;
        flex: none;
    }
}
</style>