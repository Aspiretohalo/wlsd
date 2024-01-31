<template>
    <div class="bottom">
        <div class="middle">
            <img class="logo" src="../assets/logo.png" @click="goToIndex()">
            <div class="title">
                <div class="title-item" @click="goToPages(item.titleRouter)" v-for="item in title" :key="item.titleName">
                    {{ item.titleName }}
                </div>
            </div>
            <img class="ewm" src="../assets/ewm.png">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const title = ref([
    { titleName: '首页', titleRouter: '/' },
    { titleName: '大会议程', titleRouter: '/conferenceAgenda' },
    { titleName: '关于大会', titleRouter: '/aboutConference' },
    { titleName: '大咖云集', titleRouter: '/expertCommittee' },
    { titleName: '精彩活动', titleRouter: '/wonderfulActivity' },
    { titleName: '展商风采', titleRouter: '/exhibitorStyle' },
    { titleName: '成果发布', titleRouter: '/results' },
    { titleName: '媒体中心', titleRouter: '/news' },
    { titleName: '参会指南', titleRouter: '/attendanceGuide' },
    { titleName: '社区中心', titleRouter: '/communityCenter' },
])
const goToPages = (item: string) => {
    router.push(item)
}
const goToIndex = () => {
    router.push('/')
}
</script>

<style lang="scss" scoped>
.bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 300px;
    // background-color: black;


    .logo {
        height: 48px;
        cursor: pointer;
    }

    .title {
        display: flex;
        justify-content: center;

        .title-item {
            font-size: small;
            padding: 0 10px;
            cursor: pointer;
        }
    }

    .ewm {
        width: 100px;
    }
}
</style>