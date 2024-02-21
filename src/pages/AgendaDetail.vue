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
                            <video id="my-video" class="video-js" controls preload="auto" width="850" height="480"
                                poster="../assets/videos/poster.png" data-setup="{}" style="display: block;">
                                <source src="../assets/videos/video1.mp4" type="video/mp4" />
                                <p class="vjs-no-js">
                                    To view this video please enable JavaScript, and consider upgrading to a
                                    web browser that
                                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5
                                        video</a>
                                </p>
                            </video>
                            <div class="operation">
                                <h3>{{ SingleMeeting.itemTitle }}</h3>
                                <!-- <div class="icon_items">
                                    
                                </div> -->
                                <div class="btn">
                                    <div class="icon_item">
                                        <img src="../assets/icon/浏览量(黑).png" alt="" class="icon">
                                        {{ 66 }}
                                    </div>
                                    <div class="icon_item">
                                        <img src="../assets/icon/点赞.png" alt="" class="icon">
                                        {{ 88 }}
                                    </div>
                                    <el-button round>订阅+</el-button>
                                    <el-button round>PPT下载</el-button>
                                    <el-button round>AI视频总结</el-button>
                                </div>


                            </div>
                        </div>
                        <div class="agenda">
                            <el-card style="border-radius: 15px;height: 560px;width: 300px;">
                                <div>会议议程</div>
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
import { reactive } from 'vue'
const SingleMeeting: any = reactive(JSON.parse(sessionStorage.getItem("SingleMeeting") || "null") || "")
</script>

<style lang="scss" scoped>
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
</style>