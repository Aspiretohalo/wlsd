<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="main bgc">
                <div class="banner ax-row wow animate__animated animate__fadeInLeft" data-wow-duration="1s"
                    style="visibility: visible; animation-duration: 1s; animation-name: fadeInLeft;">
                    <h2 class="title text-overflow2 ax-align-left">西湖论剑安全特训营·网络攻防蓝队实战技法进阶班
                    </h2>
                    <div class="msg">
                        <div class="date">
                            2024/3/30
                        </div>
                        <div class="view_btn">
                            <div class="view">
                                <img src="../assets/icon/浏览量(黑).png" class="icon">
                                {{ SingleActivity.activity.itemViews }}

                            </div>
                            <div class="btn">
                                <el-button round @click="goTo(SingleActivity.activity.itemId)">立即报名</el-button>
                            </div>
                        </div>

                    </div>
                </div>
                <div v-html="SingleActivity.activity.html" style="width: 1000px; margin:50px auto;">

                </div>

            </el-main>
            <el-footer style="padding: 0;">
                <Bottom></Bottom>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
import Bottom from '../components/Bottom.vue'
import { ref } from 'vue'
// import setActivityParticipation from '../functions/setActivityParticipation';
// import setActivityThumb from '../functions/setActivityThumb';
// import cancelActivityParticipation from '../functions/cancelActivityParticipation';
// import cancelActivityThumb from '../functions/cancelActivityThumb';
import addActivityViews from '../functions/addViewsActivity';
import { onBeforeMount } from 'vue';
onBeforeMount(async () => {
    await addActivityViews(SingleActivity.value.activity.itemId)
    SingleActivity.value.activity.itemViews++
})
const SingleActivity: any = ref(JSON.parse(sessionStorage.getItem("SingleActivity") || "null") || "")
console.log(SingleActivity.value);

import { useRouter } from 'vue-router'

const router = useRouter();

const token: any = ref(localStorage.getItem('token') || null)
import { ElMessage } from 'element-plus'
const goTo = async (itemId: Number) => {
    if (token.value != null) {
        router.push('/activityParticipation/' + itemId)
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
}
</script>

<style lang="scss" scoped>
.article-tit .ax-row {
    height: 16rem;
    flex-flow: column;
    width: 120rem;
    min-width: 1000px;
}

.text-overflow,
.text-overflow2,
.text-overflow3 {
    display: -webkit-box;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

h1 {
    font-family: "Arial", "Helvetica Neue", "sans-serif", "pingfang SC", "Hiragino Sans GB", "微软雅黑", "microsoft yahei", "宋体", "simsun";
    font-size: 2.8rem;
    line-height: calc(2.8rem + 1.6rem);
}

.main {
    padding: 0;
}

.banner {
    height: 300px;
    background-color: rgba($color: #fff, $alpha: 0.5);

    .title {
        font-size: 34px;
        padding-top: 100px;
    }

    .msg {
        width: 800px;
        margin: 20px auto;

        .date {
            margin-left: 20px;
            margin-right: 50px;
        }

        .view_btn {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: 50px;

            .view {
                display: flex;
                align-items: center;
                margin-right: 30px;

                .icon {
                    width: 24px;
                    height: 24px;
                    margin-right: 5px;
                }
            }
        }

    }
}

.content {
    margin-bottom: 40px;
    width: 800px;
}
</style>
