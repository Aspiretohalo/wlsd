<template>
    <div class="ccmain">
        <h1>社区中心</h1>
        <!-- 左边栏目 -->
        <div class="leftcc">
            <div class="upload">
                <h2>主题分享</h2>
                <el-input v-model="textarea1" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" class="custom-input"
                    placeholder="有什么新鲜事想分享给大家？" />

                <div class="upload-container">
                    <el-upload v-model:file-list="fileList" class="upload-p"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :on-preview="handlePreview"
                        :on-remove="handleRemove" list-type="picture">
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
                <el-table :data="tableDataToShow" height="400" style="width: 100%">
                    <el-table-column prop="Ranking" label="排名" width="120" />
                    <el-table-column prop="topic" label="话题" width="120" />
                    <el-table-column prop="heat" label="热度" />
                </el-table>
                <el-button class="popularity-bt" v-if="!showAllTopics" @click="showAllTopics = true"
                    type="primary">显示更多</el-button>
            </div>
        </div>

        <!-- 博客 -->
        <div class="rightcc">

            <el-input v-model="input1" class="search" size="large" placeholder="请输入关键字" :prefix-icon="Search" />

            <div class="bk-container">
                <div v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                    <div v-for="i in count" :key="i" class="infinite-list-item">
                        <div class="bk-infor">
                            <el-avatar class="avatar"
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"> user </el-avatar>
                            <div class="intxt">
                                <h3 style="margin-bottom: 10px;">小黑子 {{ i }}</h3>
                                <el-text class="elintxt">2024-1-17 12:45</el-text>
                            </div>
                        </div>
                        <div class="bk-content">
                            <el-text class="contxt">我最喜欢唱跳rap打篮球了！#唱#跳#rap#篮球</el-text>
                            <el-image class="bk-img" v-for="url in urls" :key="url" :src="url" :fit="fit" />
                        </div>
                        <div class="bk-communicate">
                            <el-button class="bkc">
                                <el-icon class="bk-ic">
                                    <ChatLineRound />
                                    <el-text>5</el-text>
                                </el-icon>
                            </el-button>
                            <el-button class="bkc">
                                <el-icon class="bk-ic">
                                    <View />
                                    <el-text>点赞50</el-text>
                                </el-icon>
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import type { UploadProps, UploadUserFile } from 'element-plus'
import { Upload } from '@element-plus/icons-vue'
import type { DropdownInstance } from 'element-plus'
import { Search, View, ChatLineRound } from '@element-plus/icons-vue'


const textarea1 = ref('')
// const dropdownVisible = ref(false);

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
    { Ranking: '6', topic: 'Tom', heat: 'No. 189, Grove St, Los Angeles' },
    { Ranking: '7', topic: 'Tom', heat: 'No. 189, Grove St, Los Angeles' },
    { Ranking: '8', topic: 'Tom', heat: 'No. 189, Grove St, Los Angeles' },
    { Ranking: '9', topic: 'Tom', heat: 'No. 189, Grove St, Los Angeles' },
    { Ranking: '10', topic: 'Tom', heat: 'No. 189, Grove St, Los Angeles' },
    { Ranking: '11', topic: 'Tom', heat: 'No. 189, Grove St, Los Angeles' },
    { Ranking: '12', topic: 'Tom', heat: 'No. 189, Grove St, Los Angeles' },
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

const urls = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
]

const fit = 'cover'
</script>

<style lang="scss" scoped>
.ccmain {
    // border: 2px solid #000;
    width: 1400px;
    height: 1000px;
    margin-left: 140px;
}


.leftcc,
.rightcc {
    vertical-align: top;
}

.leftcc {
    // border: 1px solid #000;
    width: 398px;
    height: 800px;
    display: inline-block;
}

//发布样式
.upload {
    width: 398px;
    height: 300px;
    // border: 1px solid #000;
}

.custom-input {
    padding-top: 5px;
    width: 380px;
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
    // padding-top: 10px;
    display: inline-block;
    text-align: left;
}

.rightcc {
    // border: 1px solid #000;
    width: 998px;
    height: 800px;
    display: inline-block;
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
    width: 980px;
    height: 700px;
    overflow: hidden;
    max-height: 700px;
    // border: 1px solid #000;

}

.infinite-list {
    height: 700px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    height: 350px;
    // background: var(--el-color-primary-light-9);
    margin: 10px;
    // color: var(--el-color-primary);
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
}

.elintxt {
    color: #000;
}

.bk-content {
    padding-top: 10px;
    margin-left: 200px;
    width: 500px;
    height: 200px;
    // border: 1px solid #000;

}

.contxt {
    color: #000;
    font-size: 20px;
}

.bk-communicate {
    margin-left: 100px;
    width: 700px;
    height: 50px;
    // border: 1px solid #000;
    display: flex;
}

.bk-img {
    width: 150px;
    height: 150px;
    padding-top: 20px;
    padding-right: 20px;
}

.bkc {
    width: 350px;
    height: 50px;
    // border: 1px solid #000;

}

.bk-ic {
    font-size: 30px;
    // padding-top: 10px;
}
</style>