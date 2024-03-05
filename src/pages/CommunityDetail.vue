<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <!-- 博客 -->
                    <el-card class="rightcc">

                        <div class="bk-container">
                            <div v-infinite-scroll="load" class="infinite-list">
                                <div v-for="i in rootBlog" :key="i.blog.id" class="infinite-list-item">
                                    <div class="bk-infor">
                                        <el-avatar class="avatar" :src="i.user.userAvatar">
                                        </el-avatar>
                                        <div class="intxt">
                                            <h3 style="margin-bottom: 10px;">{{ i.user.userName }}</h3>
                                            <el-text class="elintxt">{{ i.blog.replyTime }}</el-text>
                                        </div>
                                    </div>
                                    <div class="bk-content">
                                        <el-text class="contxt">{{ i.blog.content }}</el-text>
                                        <div class="imgs">
                                            <img class="bk-img" v-for="url in i.blogImg" :key="url.id"
                                                :src="url.imgUrl" />
                                        </div>
                                    </div>
                                    <div class="bk-communicate">
                                        <div class="circle icon_item">
                                            <el-icon class="bk-ic">
                                                <img src="../assets/icon/评论.png" alt="" class="icon">
                                                <el-text>5</el-text>
                                            </el-icon>
                                        </div>
                                        <div class="circle icon_item" :class="i.thumbed ? 'check' : ''">
                                            <div class="img-box" :class="i.thumbed ? 'img-box-check' : ''">
                                                <img v-if="i.thumbed == false" @click="handleSetThumb(i.blog.id)"
                                                    src="../assets/icon/点赞.png" alt="" />
                                                <img v-else @click="handleCancelThumb(i.blog.id)"
                                                    src="../assets/icon/点赞(红).svg" alt="" />
                                            </div>
                                            {{ i.thumbCount }}
                                        </div>
                                    </div>

                                    <div v-for="reply in replyBlog(i.blog.id)" :key="reply.blog.id"
                                        class="infinite-list-item2">
                                        <div class="bk-infor2">
                                            <img class="avatar2" :src="reply.user.userAvatar" />
                                            <div class="intxt">
                                                <div class="content">
                                                    <h3 style="margin-right: 20px;white-space: nowrap;">{{
                                reply.user.userName
                            }}
                                                    </h3>
                                                    <el-text class="elintxt">{{ reply.blog.replyTime }}</el-text>

                                                </div>
                                                <div class="contxt">{{ reply.blog.content }}</div>
                                                <div class="bk-communicate">
                                                    <div class="circle icon_item" :class="reply.thumbed ? 'check' : ''">
                                                        <div class="img-box"
                                                            :class="reply.thumbed ? 'img-box-check' : ''">
                                                            <img v-if="reply.thumbed == false"
                                                                @click="handleSetThumb(reply.blog.id)"
                                                                src="../assets/icon/点赞.png" alt="" />
                                                            <img v-else @click="handleCancelThumb(reply.blog.id)"
                                                                src="../assets/icon/点赞(红).svg" alt="" />
                                                        </div>
                                                        {{ reply.thumbCount }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
import setBlogThumb from '../functions/setBlogThumb';
import cancelBlogThumb from '../functions/cancelBlogThumb';
import { ref, computed } from 'vue'
const Blog: any = ref(JSON.parse(sessionStorage.getItem("Blog") || "null") || "")
const rootBlog = computed(() => {
    return Blog.value.filter((blog: any) => blog.blog.replyLevel === 0);
})
const replyBlog = computed(() => (id: number) => {
    return Blog.value.filter((blog: any) => {
        return blog.blog.replyLevel !== 0 && blog.blog.replyParentId === id;
    });
})
//博客
const count = ref(0)
const load = () => {
    count.value += 2
}

const showComments = ref(true);

// const toggleComments = () => {
//     showComments.value = !showComments.value;
// };
const handleSetThumb = async (id: number) => {
    await setBlogThumb(id)
    // Blog.value = JSON.parse(sessionStorage.getItem("Blog") || "null") || ""
}

const handleCancelThumb = async (id: number) => {
    await cancelBlogThumb(id)
    // Blog.value = JSON.parse(sessionStorage.getItem("Blog") || "null") || ""
}
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

.rightcc {
    text-align: left;
    padding-left: 30px;
    width: 64%;
    background-color: rgba($color: #fff, $alpha: 0.5);
}


//排行榜样式

.popularity-h2 {
    padding-top: 10px;
    padding-bottom: 10px;
}

.popularity-bt {
    margin-top: 10px;
}

//搜索框样式
.search {
    padding-top: 20px;
    width: 300px;
    height: 60px;
}


//博客样式
.bk-container {
    margin-left: 10px;
    margin-top: 20px;
}

.infinite-list {
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    border-bottom: 1px solid #cfcfcf;
    margin: 10px;
}

.infinite-list .infinite-list-item2 {
    margin: 10px;

    .bk-infor2 {
        padding-top: 10px;
        width: 80%;
        display: flex;
        margin-top: 10px;
        margin-left: 50px;

        .avatar2 {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        .intxt {
            width: 100%;
            margin-left: 10px;

            .content {
                display: flex;
                justify-content: flex-start;
            }
        }
    }
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}

.avatar {
    width: 70px;
    height: 70px;
}

.bk-infor {
    padding-top: 10px;
    width: 300px;
    height: 70px;
    display: flex;
    margin-top: 10px;
    margin-left: 10px;

}

.bk-infor .intxt {
    margin-top: 10px;
    margin-left: 10px;
    text-align: left;
}

.elintxt {
    color: #000;
}

.bk-content {
    padding-top: 10px;
    width: 500px;
    //height: 200px;
    text-align: left;
}

.contxt {
    color: #000;
    font-size: 20px;
}

.bk-communicate {
    width: 50px;
    height: 50px;
    display: flex;
    margin: 10px;
}

.bk-img {
    width: 150px;
    height: 150px;
    padding-top: 10px;
    padding-right: 10px;
}

.bkc {
    width: 80px;
    height: 50px;
}

.bk-ic {
    font-size: 30px;

    .icon {
        cursor: pointer;
        width: 24px;
        height: 24px;
    }
}

//评论
.bkcomment {
    margin-top: 20px;
    margin-left: 120px;
    // background-color: green;
    width: 440px;


    .comdiv {
        padding-top: 8px;
        padding-left: 10px;
        padding-bottom: 5px;
    }

    .comtxt {
        font-size: 16px;
        color: #000;
    }

    .comput {
        width: 300px;
        // margin-top: 20px;
        // padding-left: 20px;
        padding-right: 50px;
    }
}

.circle {
    border-radius: 50%;
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
</style>