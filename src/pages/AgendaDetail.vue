<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main style="padding: 0;width: 100vw;overflow: hidden;">
                    <div class="meeting">
                        <div class="video">
                            <video id="my-video" class="video-js" controls preload="auto" width="850" height="480"
                                poster="../assets/logo.png" data-setup="{}">
                                <source src="../assets/banner/个人所得税.mp4" type="video/mp4" />
                                <p class="vjs-no-js">
                                    To view this video please enable JavaScript, and consider upgrading to a
                                    web browser that
                                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5
                                        video</a>
                                </p>
                            </video>
                            <div style="width: 850px;height: 80px; background-color: aqua;">格致论道@西湖论剑</div>
                        </div>
                        <div class="agenda">
                            <el-card>
                                <div style="height: 560px;width: 300px;">会议议程</div>
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