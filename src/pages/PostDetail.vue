<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="main bgc">
                <div class="banner">
                    <h2 class="title">{{ SinglePost.post.title }}</h2>
                    <div class="date">
                        {{ formattedData.post.postTime }}
                    </div>
                    <div class="msg">
                        <div class="user">
                            <img :src="SinglePost.user.userAvatar" style="border-radius: 50%;margin-right: 8px;" />
                        </div>
                        <div class="name" style="margin-right: 10px;">
                            {{ SinglePost.user.userName }}
                        </div>
                    </div>
                    <div class="btn">
                        <div class="icon_item">
                            <img src="../assets/icon/浏览量(黑).png" alt="" class="icon">
                            {{ SinglePost.post.itemViews }}
                        </div>
                        <div class="circle flex-h icon_item" :class="SinglePost.thumbed ? 'check' : ''">
                            <div class="img-box" :class="SinglePost.thumbed ? 'img-box-check' : ''">
                                <img v-if="SinglePost.thumbed == false" @click="handleSetThumb()"
                                    src="../assets/icon/点赞.png" alt="" />
                                <img v-else @click="handleCancelThumb()" src="../assets/icon/点赞(红).svg" alt="" />
                            </div>
                            {{ SinglePost.thumbCount }}
                        </div>
                        <div class="icon_item">
                            <img src="../assets/icon/评论_论剑堂.png" @click="drawer = true" class="icon"
                                style="cursor: pointer;">
                            {{ PostCommentCount }}
                        </div>
                    </div>

                </div>

                <el-drawer v-model="drawer" title="评论" style="text-align: left;">
                    <el-empty description="暂无评论" v-if="PostCommentCount == 0" />
                    <el-card class="leftcc" v-else>
                        <!-- <el-button type="primary" @click="dialogCommentVisible = true;" plain round
                            style="margin: 20px;">发表评论</el-button> -->
                        <div class="bk-container">
                            <div v-infinite-scroll="load" class="infinite-list">
                                <!-- <el-dialog v-model="dialogCommentVisible" title="发表评论" center width="500" align-center>
                                    <el-form :model="comment" style="max-width: 450px">
                                        <el-form-item>
                                            <el-input v-model="comment.words" :rows="2" type="textarea" />
                                        </el-form-item>
                                    </el-form>
                                    <template #footer>
                                        <div class="dialog-footer">
                                            <el-button @click="dialogCommentVisible = false">取消</el-button>
                                            <el-button type="primary"
                                                @click="handleComment; dialogCommentVisible = false">
                                                确认
                                            </el-button>
                                        </div>
                                    </template>
</el-dialog> -->
                                <div v-for="i in rootPostComment " :key="i.postComment.id" class="infinite-list-item">
                                    <div class="bk-infor">
                                        <el-avatar class="avatar" :src="i.user.userAvatar">
                                        </el-avatar>
                                        <div class="intxt">
                                            <h3>{{ i.user.userName }}</h3>
                                            <el-popover placement="top" trigger="hover" :popper-style="{
                        background: `url(${getVIPGrade(i.user.experience)?.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat', border: 0, borderRadius: '15px', height: '85px'
                    }" width="200">
                                                <template #reference>
                                                    <img :src="getMedalImg(i.user.medal)?.img"
                                                        style="width: 30px;margin-left: 10px;cursor: pointer;">
                                                </template>
                                                <template #default>
                                                    <div class="demo-rich-conent"
                                                        style="display: flex;align-items: center;justify-content: space-around;margin-top: 25px;">
                                                        <img :src="getMedalImg(i.user.medal)?.img"
                                                            style="width: 30px;" />
                                                        <div v-if="i.user.experience < 30000"
                                                            style="text-align: center;margin-left: 50px;margin-top: 10px;">
                                                            {{
                        getMedalImg(i.user.medal)?.title }} </div>
                                                        <div v-else
                                                            style="text-align: center;margin-left: 50px;margin-top: 10px;color: #fff;">
                                                            {{
                        getMedalImg(i.user.medal)?.title }} </div>
                                                    </div>
                                                </template>
                                            </el-popover>
                                            <img v-if="i.user.certification == 1" style="width: 60px;margin-left: 10px;"
                                                src="https://cdn.huodongxing.com/Content/v2.0/img/vip/a1.png" />
                                        </div>
                                        <el-text class="elintxt">{{ i.postComment.replyTime }}</el-text>

                                    </div>
                                    <div class="bk-content">
                                        <el-text class="contxt">{{ i.postComment.content }}</el-text>
                                    </div>

                                    <!-- <el-dialog v-model="dialogReplyVisible" title="回复" center width="500" align-center>
                                        <el-form :model="reply" style="max-width: 450px">
                                            <el-form-item>
                                                <el-input v-model="reply.words" :rows="2" type="textarea" />
                                            </el-form-item>
                                        </el-form>
                                        <template #footer>
                                            <div class="dialog-footer">
                                                <el-button @click="dialogCommentVisible = false">取消</el-button>
                                                <el-button type="primary"
                                                    @click=" handleReply(i.postComment.id); dialogReplyVisible = false">
                                                    确认
                                                </el-button>
                                            </div>
                                        </template>
                                    </el-dialog> -->
                                    <div class="bk-communicate">
                                        <div class="circle icon_item">
                                            <div class="replyBtn" @click="">
                                                回复
                                            </div>
                                        </div>
                                        <div class="circle icon_item" :class="i.thumbed ? 'check' : ''">
                                            <div class="img-box" :class="i.thumbed ? 'img-box-check' : ''">
                                                <img v-if="i.thumbed == false"
                                                    @click="handleSetCommentThumb(i.postComment.id, i.postComment.postId)"
                                                    src="../assets/icon/点赞.png" alt="" />
                                                <img v-else
                                                    @click="handleCancelCommentThumb(i.postComment.id, i.postComment.postId)"
                                                    src="../assets/icon/点赞(红).svg" alt="" />
                                            </div>
                                            {{ i.thumbCount }}
                                        </div>

                                    </div>

                                    <div v-for="reply in replyPostComment(i.postComment.id)" :key="reply.postComment.id"
                                        class="infinite-list-item2">
                                        <div class="bk-infor2">
                                            <img class="avatar2" :src="reply.user.userAvatar" />
                                            <div class="intxt">
                                                <div class="content">
                                                    <h3 style="margin-right: 20px;white-space: nowrap;">
                                                        {{ reply.user.userName }}
                                                    </h3>
                                                    <el-popover placement="top" trigger="hover" :popper-style="{
                        background: `url(${getVIPGrade(reply.user.experience)?.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat', border: 0, borderRadius: '15px', height: '85px'
                    }" width="200">
                                                        <template #reference>
                                                            <img :src="getMedalImg(reply.user.medal)?.img"
                                                                style="width: 30px;margin-left: 10px;cursor: pointer;">
                                                        </template>
                                                        <template #default>
                                                            <div class="demo-rich-conent"
                                                                style="display: flex;align-items: center;justify-content: space-around;margin-top: 25px;">
                                                                <img :src="getMedalImg(reply.user.medal)?.img"
                                                                    style="width: 30px;" />
                                                                <div v-if="reply.user.experience < 30000"
                                                                    style="text-align: center;margin-left: 50px;margin-top: 10px;">
                                                                    {{ getMedalImg(reply.user.medal)?.title }} </div>
                                                                <div v-else
                                                                    style="text-align: center;margin-left: 50px;margin-top: 10px;color: #fff;">
                                                                    {{ getMedalImg(reply.user.medal)?.title }} </div>
                                                            </div>
                                                        </template>
                                                    </el-popover>
                                                    <img v-if="reply.user.certification == 1"
                                                        style="width: 60px;margin-left: 10px;"
                                                        src="https://cdn.huodongxing.com/Content/v2.0/img/vip/a1.png" />
                                                    <el-text class="elintxt">{{ reply.postComment.replyTime }}</el-text>

                                                </div>
                                                <div class="contxt">{{ reply.postComment.content }}</div>
                                                <div class="bk-communicate">
                                                    <div class="circle icon_item">
                                                        <div class="replyBtn" @click=" handleReply(i.postComment.id)">
                                                            回复
                                                        </div>
                                                    </div>
                                                    <div class="circle icon_item" :class="reply.thumbed ? 'check' : ''">
                                                        <div class="img-box"
                                                            :class="reply.thumbed ? 'img-box-check' : ''">
                                                            <img v-if="reply.thumbed == false"
                                                                @click="handleSetCommentThumb(reply.postComment.id, reply.postComment.postId)"
                                                                src="../assets/icon/点赞.png" alt="" />
                                                            <img v-else
                                                                @click="handleCancelCommentThumb(reply.postComment.id, reply.postComment.postId)"
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
                </el-drawer>
                <div v-html="SinglePost.post.content" style="width: 1000px; margin:50px auto;">

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
import setPostThumb from '../functions/setPostThumb';
import cancelPostThumb from '../functions/cancelPostThumb';
import setPostCommentThumb from '../functions/PostComment/setPostCommentThumb';
import cancelPostCommentThumb from '../functions/PostComment/cancelPostCommentThumb';
import { getVIPGrade } from '../functions/vip/getVIPGrade'; // 导入封装的函数
import { getMedalImg } from '../functions/vip/getMedalImg'; // 导入封装的函数
import addPostViews from '../functions/addPostViews';
import { ref, computed, onBeforeMount } from 'vue'

onBeforeMount(async () => {
    const SinglePost: any = ref(JSON.parse(sessionStorage.getItem("SinglePost") || "null") || "")
    await addPostViews(SinglePost.value.post.id)
    SinglePost.value.post.itemViews++

})
const drawer = ref(false)
// const formattedData2 = computed(() => {
//     console.log(AllPostComment.value);

//     if (!AllPostComment.value || !AllPostComment.value.replyTime) return null;

//     const originalDate = new Date(SinglePost.value.post.postTime);
//     const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

//     return { ...SinglePost.value.post, post: { postTime: formattedTime } };
// });

const SinglePost: any = ref(JSON.parse(sessionStorage.getItem("SinglePost") || "null") || "")
const formattedData = computed(() => {
    if (!SinglePost.value.post || !SinglePost.value.post.postTime) return null;

    const originalDate = new Date(SinglePost.value.post.postTime);
    const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

    return { ...SinglePost.value.post, post: { postTime: formattedTime } };
});

const token: any = ref(localStorage.getItem('token') || null)
import { ElMessage } from 'element-plus'
const handleSetThumb = async () => {
    if (token.value != null) {
        await setPostThumb(SinglePost.value.post.id)
        SinglePost.value = JSON.parse(sessionStorage.getItem("SinglePost") || "null") || ""
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
}
const handleCancelThumb = async () => {
    await cancelPostThumb(SinglePost.value.post.id)
    SinglePost.value = JSON.parse(sessionStorage.getItem("SinglePost") || "null") || ""
}
// const comment = reactive({
//     words: ''
// })
// const reply = reactive({
//     words: ''
// })
const PostCommentCount: any = ref(JSON.parse(sessionStorage.getItem("PostCommentCount") || "null") || "")
console.log(PostCommentCount.value);

const AllPostComment: any = ref(JSON.parse(sessionStorage.getItem("AllPostComment") || "null") || "")

const rootPostComment = computed(() => {
    return AllPostComment.value.filter((postComment: any) => postComment.postComment.replyLevel === 0)
        .map((item: any) => {
            const originalDate = new Date(item.postComment.replyTime);
            // 时区设置为中国
            const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
            item.postComment.replyTime = formattedTime;

            return item

        });
});
const replyPostComment = computed(() => (id: number) => {
    return AllPostComment.value
        .filter((postComment: any) => postComment.postComment.replyLevel !== 0 && postComment.postComment.replyParentId === id)
        .map((item: any) => {
            const originalDate = new Date(item.postComment.replyTime);
            const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
            item.postComment.replyTime = formattedTime;

            return item
        });
});

//博客
const count = ref(0)
const load = () => {
    count.value += 2
}

const handleReply = async (id: number) => {
    if (token.value != null) {
        console.log(id);

        // await setCommentReply(id, reply.words)
        AllPostComment.value = JSON.parse(sessionStorage.getItem("AllPostComment") || "null") || ""
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
}
// const handleComment = async () => {
//     if (token.value != null) {
//         // await setPostComment(comment.words)
//         AllPostComment.value = JSON.parse(sessionStorage.getItem("AllPostComment") || "null") || ""
//     } else {
//         ElMessage({
//             message: '请先登录',
//             type: 'warning',
//         })
//     }
// }
const handleSetCommentThumb = async (id: number, post_id: number) => {
    if (token.value != null) {
        await setPostCommentThumb(id, post_id)
        AllPostComment.value = JSON.parse(sessionStorage.getItem("AllPostComment") || "null") || ""
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }

}
const handleCancelCommentThumb = async (id: number, post_id: number) => {
    await cancelPostCommentThumb(id, post_id)

    AllPostComment.value = JSON.parse(sessionStorage.getItem("AllPostComment") || "null") || ""
}

// const getMedalImg = (medalId: number) => {
//     switch (medalId) {
//         case 1:
//             return {
//                 img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/title%2F%E5%8D%9A%E5%AE%A2.png', // 假设徽章ID为1对应的图片路径
//                 title: '博客达人'
//             }
//         case 2:
//             return {
//                 img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/title%2F%E6%89%93%E5%8D%A1.png', // 假设徽章ID为2对应的图片路径
//                 title: '打卡之星'
//             }
//         case 3:
//             return {
//                 img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/title%2F%E7%82%B9%E8%B5%9E.png', // 假设徽章ID为2对应的图片路径
//                 title: '身经百赞'
//             }
//         case 4:
//             return {
//                 img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/title%2F%E7%BA%BF%E4%B8%8B%E8%A7%82%E7%9C%8B.png', // 假设徽章ID为2对应的图片路径
//                 title: '身临其境'
//             }
//         case 5:
//             return {
//                 img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/title%2F%E8%AF%84%E8%AE%BA.png', // 假设徽章ID为2对应的图片路径
//                 title: '评易近人'
//             }
//         case 6:
//             return {
//                 img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/title%2F%E9%80%9A%E5%85%B3.png',// 假设徽章ID为2对应的图片路径
//                 title: '游戏霸主'
//             }
//     }
// }
</script>

<style lang="scss" scoped>
.main {
    padding: 0;
}

:deep(.el-popper) {
    padding: 0;
}

:deep(.el-popover.el-popper) {
    padding: 0;
    height: 90px;
}

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

.banner {
    height: 300px;
    background-color: rgba($color: #fff, $alpha: 0.5);

    .title {
        font-size: 34px;
        padding-top: 70px;
    }

    .date {
        margin-left: 20px;
        margin-top: 30px;
        font-size: 20px;
    }

    .msg {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;

        img {
            height: 40px;
            height: 40px;
        }

        .name {
            font-size: 20px;
        }
    }

    .btn {
        display: flex;
        justify-content: center;
        margin-top: 10px;
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

.content {
    margin-bottom: 40px;
    width: 800px;
}

:deep(.el-drawer__body) {
    padding: 0;
}

.leftcc {
    text-align: left;
    background-color: rgba($color: #fff, $alpha: 0.5);

    .box {
        display: flex;
        justify-content: space-between;

        .card {
            height: 300px;
            background-color: rgba($color: #fff, $alpha: 0.5);
        }
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
                width: 80%;
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
        width: 50px;
        height: 50px;
    }

    .bk-infor {
        padding-top: 10px;
        width: 350px;
        height: 70px;
        display: flex;
        margin-top: 10px;
        margin-left: 10px;

    }

    .bk-infor .intxt {
        display: flex;
        align-items: center;
    }

    .elintxt {
        color: #000;
        margin-left: 30px;
    }

    .bk-content {
        padding-top: 10px;
        padding-right: 30px;
        padding-left: 10px;
        // width: 500px;
        //height: 200px;
        text-align: justify;
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

    .replyBtn {
        width: 50px;
        cursor: pointer;
    }

    .replyBtn:hover {
        color: #409EFF;
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
                cursor: pointer;
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
}
</style>
