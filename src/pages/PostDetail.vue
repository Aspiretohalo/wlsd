<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="main bgc">
                <div class="banner">
                    <h2 class="title">{{ SinglePost.title }}</h2>
                    <div class="msg">
                        <div class="date">
                            {{ SinglePost.postTime }}
                        </div>
                    </div>
                </div>
                <div v-html="SinglePost.content" style="width: 1000px; margin:50px auto;">

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
const SinglePost: any = ref(JSON.parse(sessionStorage.getItem("SinglePost") || "null") || "")
console.log(SinglePost.value);

</script>

<style lang="scss" scoped>
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
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;

        .date {
            margin-left: 20px;
        }
    }
}

.content {
    margin-bottom: 40px;
    width: 800px;
}
</style>
