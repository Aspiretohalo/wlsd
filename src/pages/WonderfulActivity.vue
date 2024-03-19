<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin"
                        style="margin-top: 50px;margin-bottom: 0;display: flex;justify-content: start;">
                        热门活动</h1>
                    <el-carousel height="500px" :interval="1000000" arrow="always" indicator-position="none">
                        <el-carousel-item v-for="item in  formattedData " :key="item.activity.itemId">
                            <div class="activity w-margin">
                                <img style="border-radius: 15px;" width="800" height="500"
                                    :src="item.activity.itemCover" />
                                <el-card class="card" :body-style="{
                        height: '320px', display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-between'

                    }">
                                    <div>
                                        <h2>{{ item.activity.itemTitle }}</h2>
                                        <div class="description">
                                            {{ item.activity.itemContent }}
                                        </div>
                                    </div>


                                    <div class="msg">
                                        <el-tag class="media" type="info" round>
                                            已结束
                                        </el-tag>
                                        <div class="date">
                                            {{ item.activity.beginTime }}-{{ item.activity.finishTime }}
                                        </div>
                                        <div class="btn">
                                            <el-button plain round type="primary"
                                                @click="goToActivityPage(item.activity.itemId)">查看详情</el-button>
                                        </div>
                                    </div>

                                </el-card>
                            </div>
                        </el-carousel-item>
                    </el-carousel>

                    <h1 class="w-margin"
                        style="margin-top: 80px;margin-bottom: 0;display: flex;justify-content: start;">
                        活动总览</h1>
                    <el-card class="all_activities w-margin">
                        <!-- <div class="select">
                            <el-tabs v-model="activeTab" type="card" class="demo-tabs">
                                <el-tab-pane label="全部" name="1"></el-tab-pane>
                                <el-tab-pane label="西湖论剑" name="2"></el-tab-pane>
                                <el-tab-pane label="格致论道" name="3"></el-tab-pane>
                                <el-tab-pane label="安恒信息新品发布" name="4"></el-tab-pane>
                            </el-tabs>
                        </div> -->

                        <div class="news" v-for=" item  in  formattedData " :key="item.activity.itemId">
                            <div class="img">
                                <img :src="item.activity.itemCover" alt="" width="250" height="150">
                            </div>
                            <div class="news_content">
                                <el-link :underline="false" @click="goToActivityPage(item.activity.itemId)">
                                    <h3 class="news_title">
                                        {{ item.activity.itemTitle }}
                                    </h3>
                                </el-link>
                                <div class="msg">
                                    <el-tag class="media" type="success" round
                                        v-if="isCurrentTimeInRange(item.activity.beginTime, item.activity.finishTime) == 0">
                                        进行中
                                    </el-tag>
                                    <el-tag class="media" type="info" round
                                        v-else-if="isCurrentTimeInRange(item.activity.beginTime, item.activity.finishTime) < 0">
                                        未开始
                                    </el-tag>
                                    <el-tag class="media" type="info" round v-else>
                                        已结束
                                    </el-tag>
                                    <div class="date">
                                        {{ item.activity.beginTime }}-{{ item.activity.finishTime }}
                                    </div>
                                </div>
                                <div class="description">
                                    {{ item.activity.itemContent }}
                                </div>

                            </div>
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
import getActivityById from '../functions/getNewsById';
// import getNewsDetail from '../functions/getNewsDetail';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// const activeTab = ref('1')

const router = useRouter();

const Activity = ref(JSON.parse(sessionStorage.getItem("Activity") || "null") || "")
const goToActivityPage = async (itemId: Number) => {
    await getActivityById(itemId)
    // await getNewsDetail(newsId)
    router.push('/activityDetail/' + itemId)
}
console.log(Activity.value);

const formattedData = Activity.value.map((item: any) => {
    const originalDate = new Date(item.activity.beginTime);
    const originalDate2 = new Date(item.activity.finishTime);

    // 时区设置为中国
    const formattedTime = originalDate.toLocaleDateString("zh-CN", { timeZone: "Asia/Shanghai" });
    const formattedTime2 = originalDate2.toLocaleDateString("zh-CN", { timeZone: "Asia/Shanghai" });

    return { ...item, activity: { ...item.activity, beginTime: formattedTime, finishTime: formattedTime2 } };
});
const isCurrentTimeInRange = (startTimeStr: any, endTimeStr: any) => {
    // 将字符串转换为日期对象
    const startTime = new Date(startTimeStr);
    const endTime = new Date(endTimeStr);

    // 获取当前时间
    const currentTime = new Date();
    if (currentTime < startTime) {
        return -1;
    } else if (currentTime > endTime) {
        return 1;
    } else {
        return 0;
    }
}
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

.all_activities {
    margin-top: 50px;
    background-color: rgba($color: #fff, $alpha: 0.3);
}

.news:last-child {
    border-bottom: 0;
}

.news {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ababab;
    padding: 20px;

    img {
        border-radius: 5px;
    }

    .news_content {
        padding-left: 20px;
        text-align: left;
        width: 920px;

        .description {
            font-size: 14px;
            color: #6b6b6b;
        }

        .msg {
            margin: 10px auto;
            display: flex;
            align-items: center;

            .date {
                margin-left: 20px;
            }
        }
    }
}

.activity {
    position: relative;
    display: flex;
    justify-content: flex-start;
    margin-top: 50px;

    img {
        border-radius: 15px;
    }

    .card {
        position: absolute;
        // background-color: rgba($color: #fff, $alpha: 0.3);
        top: 70px;
        right: -50px;
        width: 500px;
        height: 360px;

        h2 {
            text-align: justify;
            margin-top: 20px;
            padding-left: 20px;
        }

        .description {
            font-size: 14px;
            color: #6b6b6b;
            text-align: justify;
            text-indent: 2em;
            padding: 20px;

        }

        .msg {
            padding-left: 20px;
            margin: 10px 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .date {
                margin-left: 20px;
            }

            .btn {
                margin-left: 20px;
            }
        }
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

:deep(.el-tabs--card>.el-tabs__header .el-tabs__item.is-active) {
    color: #303133;
    border: 0;
    background-color: #fff;
}

:deep(.el-tabs--card>.el-tabs__header .el-tabs__item.is-active) {
    border-bottom: 0;
}

:deep(.el-tabs--card>.el-tabs__header .el-tabs__item) {
    border-left: 0;
    border-radius: 25px;
}

:deep(.el-tabs--card>.el-tabs__header .el-tabs__nav) {
    border: 0;
}

:deep(.el-tabs__item) {
    border: 0;
}

:deep(.el-tabs__item:hover) {
    color: #303133;
    background-color: #fff;
    transition: opacity 1s;
}

:deep(.el-tabs__header) {
    height: 0;
    border-bottom: 0px;
}
</style>