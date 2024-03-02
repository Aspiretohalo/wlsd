<template>
    <div class="ccmain w-margin">
        <!-- <h1>社区中心</h1> -->
        <!-- 左边栏目 -->
        <el-card class="leftcc">
            <div class="upload">
                <h2>主题分享</h2>
                <el-input v-model="textarea1" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
                    class="custom-input" placeholder="有什么新鲜事想分享给大家？" />

                <div class="upload-container">
                    <el-upload v-model:file-list="fileList" class="upload-p"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        :on-preview="handlePreview" :on-remove="handleRemove" list-type="picture">
                        <el-button type="primary">上传图片视频</el-button>
                    </el-upload>

                    <el-button type="primary" class="topic-button" @click="showClick">
                        #话题
                    </el-button>

                    <el-button type="primary" class="upload-send">
                        发布<el-icon class="el-icon--right">
                            <Upload />
                        </el-icon>
                    </el-button>
                </div>
                <el-dropdown ref="dropdown1">
                    <span class="el-dropdown-link" @click="showDropdown"></span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="selectTopic('唱')">唱</el-dropdown-item>
                            <el-dropdown-item @click="selectTopic('跳')">跳</el-dropdown-item>
                            <el-dropdown-item @click="selectTopic('rap')">rap</el-dropdown-item>
                            <el-dropdown-item @click="selectTopic('篮球')">篮球</el-dropdown-item>
                            <el-dropdown-item @click="selectTopic('小黑子')">小黑子</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

            </div>
            <div class="popularity-ranking">
                <h2 class="popularity-h2">热点话题排行榜</h2>
                <el-table :data="tableDataToShow" height="300" style="width: 100%;">
                    <el-table-column prop="Ranking" label="排名" width="60" />
                    <el-table-column prop="topic" label="话题" width="150" />
                    <el-table-column prop="heat" label="热度" />
                </el-table>
                <el-button class="popularity-bt" v-if="!showAllTopics" @click="showAllTopics = true"
                    type="primary">显示更多</el-button>
            </div>
        </el-card>

        <!-- 博客 -->
        <el-card class="rightcc">
            <el-input v-model="input1" class="search" size="large" placeholder="请输入关键字" :prefix-icon="Search" />
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
                                <img class="bk-img" v-for="url in i.blogImg" :key="url.id" :src="url.imgUrl" />
                            </div>
                        </div>
                        <div class="bk-communicate">
                            <el-button class="bkc" round @click="toggleComments">
                                <el-icon class="bk-ic">
                                    <img src="../assets/icon/评论.png" alt="" class="icon">
                                    <el-text>5</el-text>
                                </el-icon>
                            </el-button>
                            <div class="circle icon_item" :class="i.thumbed ? 'check' : ''">
                                <div class="img-box" :class="i.thumbed ? 'img-box-check' : ''">
                                    <img v-if="i.thumbed == false" @click="handleSetThumb(i.blog.id)"
                                        src="../assets/icon/点赞.png" alt="" />
                                    <img v-else @click="handleCancelThumb(i.blog.id)" src="../assets/icon/点赞(红).svg"
                                        alt="" />
                                </div>
                                {{ i.thumbCount }}
                            </div>
                        </div>

                        <div v-for="reply in replyBlog(i.blog.id)" :key="reply.blog.id" class="infinite-list-item2">
                            <div class="bk-infor2">
                                <img class="avatar2" :src="reply.user.userAvatar" />
                                <div class="intxt">
                                    <div class="content">
                                        <h3 style="margin-right: 20px;white-space: nowrap;">{{ reply.user.userName }}
                                        </h3>
                                        <el-text class="elintxt">{{ reply.blog.replyTime }}</el-text>

                                    </div>
                                    <div class="contxt">{{ reply.blog.content }}</div>
                                    <div class="bk-communicate">
                                        <el-button class="bkc" round @click="toggleComments">
                                            <el-icon class="bk-ic">
                                                <img src="../assets/icon/评论.png" alt="" class="icon">
                                                <el-text>5</el-text>
                                            </el-icon>
                                        </el-button>
                                        <div class="circle icon_item" :class="reply.thumbed ? 'check' : ''">
                                            <div class="img-box" :class="reply.thumbed ? 'img-box-check' : ''">
                                                <img v-if="reply.thumbed == false"
                                                    @click="handleSetThumb(reply.blog.id)" src="../assets/icon/点赞.png"
                                                    alt="" />
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
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import type { UploadProps, UploadUserFile } from 'element-plus'
import { Upload } from '@element-plus/icons-vue'
import type { DropdownInstance } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { computed } from 'vue';
import setBlogThumb from '../functions/setBlogThumb';
import cancelBlogThumb from '../functions/cancelBlogThumb';

const Blog: any = ref(JSON.parse(sessionStorage.getItem("Blog") || "null") || "")
const rootBlog = computed(() => {
    return Blog.value.filter((blog: any) => blog.blog.replyLevel === 0);
})
const replyBlog = computed(() => (id: number) => {
    return Blog.value.filter((blog: any) => {
        return blog.blog.replyLevel !== 0 && blog.blog.replyParentId === id;
    });
})
const textarea1 = ref('')

const fileList = ref<UploadUserFile[]>([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
])

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (file) => {
    console.log(file)
}

const dropdown1 = ref<DropdownInstance>()

function showDropdown() {
    if (!dropdown1.value) return;
    dropdown1.value.handleOpen();
}


function showClick() {
    console.log(Blog.value[0].blog.replyTime);

    if (!dropdown1.value) return
    dropdown1.value.handleOpen()
    textarea1.value += `# `;

}

const selectTopic = (topic: any) => {
    textarea1.value += `${topic} `;
};

// 排行榜
const tableData = [
    { Ranking: '1', topic: '小黑子', heat: '2.5亿' },
    { Ranking: '2', topic: '唱', heat: '1000万' },
    { Ranking: '3', topic: '跳', heat: '500万' },
    { Ranking: '4', topic: 'rap', heat: '401.5万' },
    { Ranking: '5', topic: '篮球', heat: '2.5万' },
    { Ranking: '6', topic: 'Tom', heat: '2.5万' },

];

const showAllTopics = ref(false);

const tableDataToShow = ref(tableData.slice(0, 10));//显示前10条数据

watchEffect(() => {
    if (showAllTopics.value) {
        tableDataToShow.value = [...tableData];
    }
});//显示所有数据

//搜索框
const input1 = ref('')

//博客
const count = ref(0)
const load = () => {
    count.value += 2
}

const showComments = ref(true);

const toggleComments = () => {
    showComments.value = !showComments.value;
};
const handleSetThumb = async (id: number) => {
    await setBlogThumb(id)
    Blog.value = JSON.parse(sessionStorage.getItem("Blog") || "null") || ""
}

const handleCancelThumb = async (id: number) => {
    await cancelBlogThumb(id)
    Blog.value = JSON.parse(sessionStorage.getItem("Blog") || "null") || ""
}
</script>

<style lang="scss" scoped>
.ccmain {
    display: flex;
    justify-content: space-between;
}


.leftcc {
    margin-right: 20px;
    display: inline-block;
    height: 800px;
    width: 32%;
}

//发布样式
.upload {
    margin: 0 auto;
    width: 200px;
    height: 300px;
}

.custom-input {
    padding-top: 5px;
    height: 46px;
}

.upload-container {
    display: inline-block;
    vertical-align: top;
    padding-top: 50px;
}

.upload-p,
.upload-send {
    vertical-align: top;
}


.upload-p {
    display: inline-block;
    text-align: left;
}

.rightcc {
    text-align: left;
    padding-left: 30px;
    width: 64%;
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