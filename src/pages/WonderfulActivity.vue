<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin" style="margin-top: 80px;display: flex;justify-content: start;">精彩活动</h1>
                    <el-carousel height="500px" :interval="5000" arrow="always" indicator-position="none">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <div class="activity w-margin">
                                <el-image style="width: 800px;height: 500px;"
                                    src="https://th.bing.com/th/id/R.171e8fe1aa1544a1868ab710eed82d82?rik=FLPxvVVL9C9bnQ&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2fallimg%2f200710%2f14-200G00Z321.jpg&ehk=Lb0IHCCZIdqYQOi28m%2borU8c1ARGbTEC%2f8WYzfwRuHo%3d&risl=&pid=ImgRaw&r=0"
                                    fit="fill" />
                                <el-card class="card">
                                    活动内容
                                </el-card>
                            </div>
                        </el-carousel-item>
                    </el-carousel>

                    <el-card class="all_activities w-margin">
                        <div class="select">
                            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
                                <el-radio-button label="top">全部</el-radio-button>
                                <el-radio-button label="right">西湖论剑</el-radio-button>
                                <el-radio-button label="bottom">格致论道</el-radio-button>
                                <el-radio-button label="left">安恒信息新品发布</el-radio-button>
                            </el-radio-group>
                        </div>
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

import { ref } from 'vue'

const tabPosition = ref('全部')
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

.all_activities {
    margin-top: 100px;
}

.activity {
    position: relative;
    display: flex;
    justify-content: flex-start;

    .card {
        position: absolute;
        top: 70px;
        right: -50px;
        width: 500px;
        height: 360px;
    }
}

:deep(.el-carousel__arrow) {
    height: 60px;
    width: 60px;
}

:deep(.el-carousel__arrow--left) {
    align-items: center;
    top: 300px;
    left: 24px;
    font-size: 15px;
}

//右箭头
:deep(.el-carousel__arrow--right) {
    align-items: center;
    top: 300px;
    right: 24px;
    font-size: 15px;
}
</style>