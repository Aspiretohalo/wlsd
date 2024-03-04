<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <div class="meeting">
                        <div class="video">
                            <video id="player-container-id" width="850" height="480" preload="auto" playsinline
                                webkit-playsinline>

                                <p class="vjs-no-js">
                                    To view this video please enable JavaScript, and consider upgrading to a
                                    web browser that
                                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports
                                        HTML5
                                        video</a>
                                </p>
                            </video>
                            <div class="operation">
                                <h3>{{ SingleMeeting.meeting.itemTitle }}</h3>
                                <div class="btn">
                                    <div class="icon_item">
                                        <img src="../assets/icon/浏览量(黑).png" alt="" class="icon">
                                        {{ SingleMeeting.meeting.itemViews }}
                                    </div>
                                    <div class="circle flex-h icon_item" :class="SingleMeeting.thumbed ? 'check' : ''">
                                        <div class="img-box" :class="SingleMeeting.thumbed ? 'img-box-check' : ''">
                                            <img v-if="SingleMeeting.thumbed == false" @click="handleSetThumb()"
                                                src="../assets/icon/点赞.png" alt="" />
                                            <img v-else @click="handleCancelThumb()" src="../assets/icon/点赞(红).svg"
                                                alt="" />
                                        </div>
                                        {{ SingleMeeting.thumbCount }}
                                    </div>
                                    <el-button type="primary" round plain v-if="SingleMeeting.subscribed == false"
                                        @click="handleSetMeetingSubscription()">订阅+</el-button>
                                    <el-button type="primary" round plain v-else
                                        @click="handleCancelMeetingSubscription()">已订阅</el-button>
                                    <el-button round>PPT下载</el-button>
                                    <el-button round>AI视频总结</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="agenda">
                            <el-card class="agenda_card" style="border-radius: 15px;height: 560px;width: 300px;">
                                <h2 style="margin-bottom: 15px;">会议议程</h2>
                                <el-scrollbar height="530px">
                                    <div class="content" v-for="item in MeetingDetail" :key="item.meetingDetailId">
                                        <div class="time">{{ item.time }}</div>
                                        <div class="title">{{ item.title }}</div>
                                    </div>
                                </el-scrollbar>
                            </el-card>
                        </div>
                    </div>
                    <div class="recommendation">
                        <h2>会议推荐</h2>
                        <h5>Meeting recommendation</h5>
                        <div class="recommendation_cards">
                            <el-card class="card" v-for="i in 3" :key="i">
                                {{ i }}
                            </el-card>
                        </div>
                    </div>
                    <Comment></Comment>
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
import Comment from '../components/Comment.vue';
import TCPlayer from "tcplayer.js";
import { ref } from 'vue'
import setMeetingSubscription from '../functions/setMeetingSubscription';
import setMeetingThumb from '../functions/setMeetingThumb';
import cancelMeetingSubscription from '../functions/cancelMeetingSubscription';
import cancelMeetingThumb from '../functions/cancelMeetingThumb';
import addMeetingViews from '../functions/addViewsMeeting';
import { onBeforeMount, onMounted, onUnmounted } from 'vue';
onBeforeMount(async () => {
    const SingleMeeting: any = ref(JSON.parse(sessionStorage.getItem("SingleMeeting") || "null") || "")

    await addMeetingViews(SingleMeeting.value.meeting.itemId)
    SingleMeeting.value.meeting.itemViews++
})
const MeetingDetail: any = ref(JSON.parse(sessionStorage.getItem("MeetingDetail") || "null") || "")
onMounted(() => {
    const SingleMeeting: any = ref(JSON.parse(sessionStorage.getItem("SingleMeeting") || "null") || "")

    console.log(SingleMeeting.value.meeting.itemAddress);

    var player = TCPlayer('player-container-id', {
        sources: [{
            // src: 'path/to/video',
        }],
        licenseUrl: "https://license.vod2.myqcloud.com/license/v2/1317662942_1/v_cube.license",
    });


    player.src(SingleMeeting.value.meeting.itemAddress); // url 播放地址

    onUnmounted(() => {
        player.dispose();
    });

});
const SingleMeeting: any = ref(JSON.parse(sessionStorage.getItem("SingleMeeting") || "null") || "")


const handleSetMeetingSubscription = async () => {
    await setMeetingSubscription(SingleMeeting.value.meeting.itemId)
    SingleMeeting.value = JSON.parse(sessionStorage.getItem("SingleMeeting") || "null") || ""
}

const handleSetThumb = async () => {
    await setMeetingThumb(SingleMeeting.value.meeting.itemId)
    SingleMeeting.value = JSON.parse(sessionStorage.getItem("SingleMeeting") || "null") || ""
}
const handleCancelMeetingSubscription = async () => {
    await cancelMeetingSubscription(SingleMeeting.value.meeting.itemId)
    SingleMeeting.value = JSON.parse(sessionStorage.getItem("SingleMeeting") || "null") || ""
}

const handleCancelThumb = async () => {
    await cancelMeetingThumb(SingleMeeting.value.meeting.itemId)
    SingleMeeting.value = JSON.parse(sessionStorage.getItem("SingleMeeting") || "null") || ""
}
</script>

<style lang="scss" scoped>
.circle {
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px rgba(223, 46, 58, 0.5);

    .img-box {
        width: 20px;
        height: 20px;
        margin: 5px;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        user-select: none; // 防止快速点击图片被选中，可不加，为提高体验，博主加上了这几行代码。

        & img {
            width: 100%;
            height: 100%;
        }
    }
}

.check {
    -webkit-transition: box-shadow 0.5s;
    -moz-transition: box-shadow 0.5s;
    -o-transition: box-shadow 0.5s;
    transition: box-shadow 0.5s;
    box-shadow: 0px 0px 0px 1em rgba(226, 32, 44, 0);
}

.img-box-check {
    animation: anm 0.5s;
    -moz-animation: anm 0.5s;
    -webkit-animation: anm 0.5s;
    -o-animation: anm 0.5s;
}

@keyframes anm {
    0% {
        transform: scale(0);
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
    }

    50% {
        transform: scale(1.3);
        -webkit-transform: scale(1.3);
        -moz-transform: scale(1.3);
    }

    100% {
        transform: scale(1);
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
    }
}

.operation {
    width: 810px;
    height: 80px;
    background-color: rgba($color: #fff, $alpha: 0.3);
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;

    .btn {
        display: flex;
    }

    .icon_item {
        display: flex;
        align-items: center;
        margin-right: 20px;

        .icon {
            width: 24px;
            height: 24px;
            margin-right: 5px;
        }
    }
}


:deep(.el-card) {
    border-radius: 15px;
}

.meeting {
    margin: 80px auto;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .video {
        display: inline-block;
    }

    .agenda {
        display: inline-block;

        .agenda_card {
            background-color: rgba($color: #fff, $alpha: 0.4);
        }

        .content {
            margin-bottom: 40px;
            padding: 5px 20px;
            text-align: justify;
        }
    }
}

.recommendation {
    margin: 80px auto;
    width: 1200px;

    .recommendation_cards {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;

        .card {

            width: 350px;
            height: 400px;
        }
    }

}

:deep(.el-card__body) {
    padding: 0;
}
</style>../functions/addViewsMeeting