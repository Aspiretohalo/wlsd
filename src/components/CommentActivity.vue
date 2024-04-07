<template>
    <div class="box w-margin">
        <h2>全部讨论</h2>
        <el-card class="leftcc">
            <el-button type="primary" @click="dialogCommentVisible = true;" plain round
                style="margin: 20px;">发表评论</el-button>
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
                                <el-button @click="dialogCommentVisible = false" round>取消</el-button>
                                <el-button type="primary" @click="handleComment; dialogCommentVisible = false" round>
                                    确认
                                </el-button>
                            </div>
                        </template>
</el-dialog> -->
                    <div v-for="i in rootActivityComment" :key="i.activityComment.id" class="infinite-list-item">
                        <div class="bk-infor">
                            <el-avatar class="avatar" :src="i.user.userAvatar">
                            </el-avatar>
                            <div class="intxt">
                                <div class="userMsg" style="display: flex;align-items: center;">
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
                                                <img :src="getMedalImg(i.user.medal)?.img" style="width: 30px;" />
                                                <div v-if="i.user.experience < 30000"
                                                    style="text-align: center;margin-left: 50px;margin-top: 10px;">
                                                    {{ getMedalImg(i.user.medal)?.title }} </div>
                                                <div v-else
                                                    style="text-align: center;margin-left: 50px;margin-top: 10px;color: #fff;">
                                                    {{ getMedalImg(i.user.medal)?.title }} </div>
                                            </div>
                                        </template>
                                    </el-popover>
                                    <img v-if="i.user.certification == 1" style="width: 60px;margin-left: 10px;"
                                        src="https://cdn.huodongxing.com/Content/v2.0/img/vip/a1.png" />

                                </div>

                                <el-text class="elintxt">{{ i.activityComment.replyTime }}</el-text>
                            </div>
                        </div>
                        <div class="bk-content">
                            <el-text class="contxt">{{ i.activityComment.content }}</el-text>
                        </div>
                        <!-- <el-dialog v-model="dialogReplyVisible" title="回复" center width="500" align-center>
                            <el-form :model="reply" style="max-width: 450px">
                                <el-form-item>
                                    <el-input v-model="reply.words" :rows="2" type="textarea" />
                                </el-form-item>
                            </el-form>
                            <template #footer>
                                <div class="dialog-footer">
                                    <el-button @click="dialogCommentVisible = false" round>取消</el-button>
                                    <el-button type="primary"
                                        @click=" handleReply(i.activityComment.id); dialogReplyVisible = false" round>
                                        确认
                                    </el-button>
                                </div>
                            </template>
                        </el-dialog> -->
                        <div class="bk-communicate">
                            <div class="circle icon_item">
                                <div class="replyBtn" @click="dialogReplyVisible = true;">
                                    回复
                                </div>
                            </div>
                            <div class="circle icon_item" :class="i.thumbed ? 'check' : ''">
                                <div class="img-box" :class="i.thumbed ? 'img-box-check' : ''">
                                    <img v-if="i.thumbed == false"
                                        @click="handleSetCommentThumb(i.activityComment.id, i.activityComment.activityId)"
                                        src="../assets/icon/点赞.png" alt="" />
                                    <img v-else
                                        @click="handleCancelCommentThumb(i.activityComment.id, i.activityComment.activityId)"
                                        src="../assets/icon/点赞(红).svg" alt="" />
                                </div>
                                {{ i.thumbCount }}
                            </div>
                        </div>

                        <div v-for="reply in replyActivityComment(i.activityComment.id)" :key="reply.activityComment.id"
                            class="infinite-list-item2">
                            <div class="bk-infor2">
                                <img class="avatar2" :src="reply.user.userAvatar" />
                                <div class="intxt">
                                    <div class="content">
                                        <h3 style="white-space: nowrap;">{{ reply.user.userName
                                            }}
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
                                        <img v-if="reply.user.certification == 1" style="width: 60px;margin-left: 10px;"
                                            src="https://cdn.huodongxing.com/Content/v2.0/img/vip/a1.png" />
                                        <el-text class="elintxt" style="margin-left: 20px;">{{
                reply.activityComment.replyTime
            }}</el-text>

                                    </div>
                                    <div class="contxt">{{ reply.activityComment.content }}</div>
                                    <div class="bk-communicate">
                                        <div class="circle icon_item">
                                            <div class="replyBtn"
                                                @click="dialogReplyVisible = true; handleReply(i.activityComment.id)">
                                                回复
                                            </div>
                                        </div>
                                        <div class="circle icon_item" :class="reply.thumbed ? 'check' : ''">
                                            <div class="img-box" :class="reply.thumbed ? 'img-box-check' : ''">
                                                <img v-if="reply.thumbed == false"
                                                    @click="handleSetCommentThumb(reply.activityComment.id, reply.activityComment.activityId)"
                                                    src="../assets/icon/点赞.png" alt="" />
                                                <img v-else
                                                    @click="handleCancelCommentThumb(reply.activityComment.id, reply.activityComment.activityId)"
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
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import setActivityCommentThumb from '../functions/ActivityComment/setActivityCommentThumb';
import cancelActivityCommentThumb from '../functions/ActivityComment/cancelActivityCommentThumb';
// import setActivityCommentComment from '../functions/setActivityCommentComment';
// import setActivityCommentReply from '../functions/setActivityCommentReply';
import { getVIPGrade } from '../functions/vip/getVIPGrade'; // 导入封装的函数
import { getMedalImg } from '../functions/vip/getMedalImg'; // 导入封装的函数
const dialogCommentVisible = ref(false)
const dialogReplyVisible = ref(false)
// const comment = reactive({
//     words: ''
// })
// const reply = reactive({
//     words: ''
// })
const AllActivityComment: any = ref(JSON.parse(sessionStorage.getItem("AllActivityComment") || "null") || "")
const rootActivityComment = computed(() => {
    return AllActivityComment.value.filter((activityComment: any) => activityComment.activityComment.replyLevel === 0)
        .map((item: any) => {
            const originalDate = new Date(item.activityComment.replyTime);
            // 时区设置为中国
            const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
            item.activityComment.replyTime = formattedTime;

            return item

        });
});
const replyActivityComment = computed(() => (id: number) => {
    return AllActivityComment.value
        .filter((activityComment: any) => activityComment.activityComment.replyLevel !== 0 && activityComment.activityComment.replyParentId === id)
        .map((item: any) => {
            const originalDate = new Date(item.activityComment.replyTime);
            const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
            item.activityComment.replyTime = formattedTime;

            return item
        });
});

//博客
const count = ref(0)
const load = () => {
    count.value += 2
}

const token: any = ref(localStorage.getItem('token') || null)
import { ElMessage } from 'element-plus'

const handleReply = async (id: number) => {
    if (token.value != null) {
        console.log(id);

        // await setActivityCommentReply(id, reply.words)
        AllActivityComment.value = JSON.parse(sessionStorage.getItem("ActivityComment") || "null") || ""
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
}
// const handleComment = async () => {
//     if (token.value != null) {
//         // await setActivityCommentComment(comment.words)
//         AllActivityComment.value = JSON.parse(sessionStorage.getItem("ActivityComment") || "null") || ""
//     } else {
//         ElMessage({
//             message: '请先登录',
//             type: 'warning',
//         })
//     }
// }
const handleSetCommentThumb = async (id: number, activity_id: number) => {
    if (token.value != null) {
        await setActivityCommentThumb(id, activity_id)
        AllActivityComment.value = JSON.parse(sessionStorage.getItem("AllActivityComment") || "null") || ""
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }

}
const handleCancelCommentThumb = async (id: number, activity_id: number) => {
    await cancelActivityCommentThumb(id, activity_id)

    AllActivityComment.value = JSON.parse(sessionStorage.getItem("AllActivityComment") || "null") || ""
}

</script>

<style lang="scss" scoped>
.box {
    h2 {
        text-align: left;
        margin-bottom: 20px;
    }

    .leftcc {
        text-align: left;
        padding-left: 30px;
        // width: 68%;
        background-color: rgba($color: #fff, $alpha: 0.5);
    }

    .rightcc {
        width: 25%;
    }

    .card {
        height: 300px;
        background-color: rgba($color: #fff, $alpha: 0.5);
    }
}




//排行榜样式

.popularity-h2 {
    padding-top: 10px;
    padding-bottom: 10px;
}

.popularity-bt {
    margin-top: 10px;
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
    padding-right: 30px;
    padding-left: 10px;
    // width: 500px;
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
</style>