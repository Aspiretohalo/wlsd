<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 style="padding-top: 30px;color: #0c166a;"><img src="../assets/title/新闻资讯.png" width="400"> </h1>

                    <NewsNav></NewsNav>
                    <div class="news w-margin" v-for="item in News" :key="item.newsId">
                        <div class="img">
                            <img :src="item.newsUrl" alt="" width="200">
                        </div>
                        <div class="news_content">
                            <el-link :underline="false" @click="goToNewsPage(item.newsId)">
                                <h3 class="news_title">
                                    {{ item.newsTitle }}
                                </h3>
                            </el-link>

                            <div class="description">
                                {{ item.newsDescription }}
                            </div>
                            <div class="msg">
                                <el-tag class="media" round>
                                    {{ item.newsTag }}
                                </el-tag>
                                <div class="date">
                                    {{ item.newsDate }}
                                </div>
                            </div>
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
import NewsNav from '../components/NewsNav.vue';
import getNewsById from '../functions/getNewsById';
import getNewsDetail from '../functions/getNewsDetail';
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();


const News = ref(JSON.parse(sessionStorage.getItem("News") || "null") || "")
const goToNewsPage = async (newsId: Number) => {
    await getNewsById(newsId)
    await getNewsDetail(newsId)
    router.push('/newsDetail/' + newsId)
}
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

.news {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ababab;
    padding-bottom: 30px;

    img {
        border-radius: 5px;
    }

    .news_content {
        margin-left: 20px;
        text-align: left;

        .description {
            font-size: 14px;
            color: #6b6b6b;
        }

        .msg {
            margin-top: 20px;
            display: flex;
            align-items: center;

            .date {
                margin-left: 20px;
            }
        }
    }
}
</style>