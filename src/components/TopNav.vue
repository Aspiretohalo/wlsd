<template>
    <div class="topNav">
        <div class="middle">
            <img class="logo" src="../assets/logo.png" @click="goToIndex()">
            <el-menu class="el-menu-demo" :default-active="defaultMenu" mode="horizontal" :router="true"
                :ellipsis="false">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/conferenceAgenda">大会议程</el-menu-item>
                <el-menu-item index="/aboutConference">关于大会</el-menu-item>
                <el-menu-item index="/expertCommittee">大咖云集</el-menu-item>
                <el-menu-item index="/wonderfulActivity">精彩活动</el-menu-item>
                <el-menu-item index="/exhibitorStyle">展商风采</el-menu-item>
                <el-menu-item index="/results">成果发布</el-menu-item>
                <el-menu-item index="/news">媒体中心</el-menu-item>
                <el-menu-item index="/attendanceGuide">参会指南</el-menu-item>
                <!-- <el-menu-item index="#">社区中心</el-menu-item> -->
                <el-menu-item index="/communityCenter">社区中心</el-menu-item>
            </el-menu>
            <div class="login" v-if="token == null && route.path != '/login'">
                <el-link type="info" :underline="false" style="border-right: 1px solid;padding-right: 3px;"
                    @click="goToLogin()">登录</el-link>
                <el-link type="info" :underline="false" style="padding-left: 3px;" @click="goToRegister()">注册</el-link>
            </div>
            <div class="user" v-else-if="token != null && route.path != '/login'">
                <el-popover placement="bottom-end" :width="300" trigger="click">
                    <template #reference>
                        <el-link type="info" :underline="false">
                            <el-icon size="16">
                                <User />
                            </el-icon>
                            个人中心</el-link>
                    </template>
                    <div class="msg">
                        <el-avatar :size="32" :src="user.userAvatar" />
                        <h2 style="margin-left: 20px;">{{ user.userName }}</h2>
                    </div>

                    <van-cell title="个人主页" to="/user" is-link>

                        <template #icon>
                            <img class="img_icon mr" src="../assets/icon/个人.svg">
                        </template>
                    </van-cell>
                    <van-cell title="报名活动" is-link>

                        <template #icon>
                            <img class="img_icon mr" src="../assets/icon/旅行活动.svg">
                        </template>
                    </van-cell>
                    <van-cell title="订阅" is-link>

                        <template #icon>
                            <img class="img_icon mr" src="../assets/icon/订阅.svg">
                        </template>
                    </van-cell>
                    <van-cell title="积分" to="/integral/integralDetails" is-link>

                        <template #icon>
                            <img class="img_icon mr" src="../assets/icon/积分.svg">
                        </template>
                    </van-cell>
                    <van-cell title="退出登录" is-link @click="logout()">

                        <template #icon>
                            <img class="img_icon mr" src="../assets/icon/退出.svg">
                        </template>
                    </van-cell>
                </el-popover>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive } from 'vue'
import { User } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import getUserMsg from '../functions/getUserMsg';
import getAllExpert from '../functions/getAllExpert';
import getAllCommittee from '../functions/getAllCommittee';
import getAllWonderfulPictures from '../functions/getAllWonderfulPictures';
import getAllMediaVideo from '../functions/getAllMediaVideo';
import getAllMeetings from '../functions/getAllMeetings';
import getAllActivitys from '../functions/getAllActivitys';
import getAllQuestions from '../functions/getAllQuestions';
import getAllBlogs from '../functions/getAllBlogs';
import getAllNews from '../functions/getAllNews';
import getDrawRecord from '../functions/getDrawRecord';
import getIntegralGifts from '../functions/getIntegralGifts';
import getIntegralDetail from '../functions/getIntegralDetail';

import { onMounted } from 'vue'

onMounted(async () => {
    await getUserMsg()
    await getAllExpert()
    await getAllCommittee()
    await getAllWonderfulPictures()
    await getAllMediaVideo()
    await getAllBlogs()
    await getAllMeetings(user.userId)
    await getAllActivitys(user.userId)
    await getAllQuestions(user.userId)
    await getAllNews()
    await getDrawRecord(user.userId)
    await getIntegralGifts()
    await getIntegralDetail(user.userId)
})
const route = useRoute();
const router = useRouter();

const token: any = ref(localStorage.getItem('token') || null)
const defaultMenu = computed(() => { return route.path })

const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const goToIndex = () => {
    router.push('/')
}
const logout = () => {
    localStorage.clear()
    sessionStorage.clear()
    router.push('/login')
}
const goToLogin = () => {
    router.push('/login')
}
const goToRegister = () => {
    router.push('/login')
}
</script>

<style lang="scss" scoped>
.img_icon {
    width: 20px;
}

.mr {
    margin-right: 10px;
}

.msg {
    display: flex;
    justify-content: flex-start;
}

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
        cursor: pointer;
    }

    :deep(.el-menu-item) {
        padding: 0 10px;
    }

    :deep(.el-menu--horizontal) {
        border-bottom: 0;
    }

}

:hover :deep(.van-cell) {
    background-color: #eee;
}
</style>