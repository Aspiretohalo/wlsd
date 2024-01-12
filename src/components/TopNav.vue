<template>
    <div class="topNav">
        <div class="middle">
            <img class="logo" src="../assets/logo.png" alt="">
            <el-menu class="el-menu-demo" :default-active="defaultMenu" mode="horizontal" :router="true" :ellipsis="false">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/conferenceAgenda">大会议程</el-menu-item>
                <el-menu-item index="/aboutConference">关于大会</el-menu-item>
                <el-menu-item index="/expertCommittee">大咖云集</el-menu-item>
                <el-menu-item index="/wonderfulActivity">精彩活动</el-menu-item>
                <el-menu-item index="/exhibitorStyle">展商风采</el-menu-item>
                <el-menu-item index="/results">成果发布</el-menu-item>
                <el-menu-item index="/news">媒体中心</el-menu-item>
                <el-menu-item index="/attendanceGuide">参会指南</el-menu-item>
            </el-menu>
            <div class="login">
                <el-link type="info" :underline="false" style="border-right: 1px solid;padding-right: 3px;">登录</el-link>
                <el-link type="info" :underline="false" style="padding-left: 3px;">注册</el-link>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const defaultMenu = computed(() => { return route.path })
</script>

<style lang="scss" scoped>
.topNav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100vw;
    border-bottom: 1px solid rgb(222, 222, 222);
    background-color: #fff;
    position: fixed;
    z-index: 1000;

    .logo {
        height: 48px;
    }

    :deep(.el-menu-item) {
        padding: 0 15px;
    }

    :deep(.el-menu--horizontal) {
        border-bottom: 0;
    }

}
</style>