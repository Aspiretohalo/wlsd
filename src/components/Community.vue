<template>
    <div class="ccmain w-margin">
        <el-card class="leftcc">
            <el-button class="btn" plain @click="handleRelease()" style="width: 50%;margin: 20px auto;">
                发布内容
            </el-button>
            <el-dialog v-model="dialogFormVisible" width="800">
                <div style="border: 1px solid #ccc">
                    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                        :mode="mode" />
                    <Editor style="height: 300px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                        :mode="mode" @onCreated="handleCreated" />
                </div>
                <div class="message">
                    <el-form :model="form" label-width="auto" style="max-width: 600px;margin-top: 20px;">
                        <el-form-item label="标题">
                            <el-input v-model="form.title" />
                        </el-form-item>
                        <el-form-item label="概要">
                            <el-input v-model="form.post_description" type="textarea"
                                placeholder="摘要：会在推荐、列表等场景外露，帮助读者快速了解内容" />
                        </el-form-item>
                        <el-form-item label="话题">
                            <div class="flex gap-2">
                                <el-tag style="margin-right: 10px;" v-for="tag in dynamicTags" :key="tag" closable
                                    :disable-transitions="false" @close="handleClose(tag)">
                                    {{ tag }}
                                </el-tag>
                                <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" class="w-20"
                                    size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
                                <el-button v-else class="button-new-tag" size="small" @click="showInput">
                                    +新增
                                </el-button>
                            </div>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-radio-group v-model="radio" class="ml-4" @change="console.log(radio)">
                                <el-radio label="分享" size="large">分享</el-radio>
                                <el-radio label="提问" size="large">提问</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="封面上传">
                            <el-upload action="#" list-type="picture-card" :auto-upload="false">
                                <el-icon>
                                    <Plus />
                                </el-icon>

                                <template #file="{ file }">
                                    <div>
                                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                        <span class="el-upload-list__item-actions">
                                            <span class="el-upload-list__item-preview"
                                                @click="handlePictureCardPreview(file)">
                                                <el-icon><zoom-in /></el-icon>
                                            </span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                @click="handleDownload(file)">
                                                <el-icon>
                                                    <Download />
                                                </el-icon>
                                            </span>
                                            <span v-if="!disabled" class="el-upload-list__item-delete"
                                                @click="handleRemove(file)">
                                                <el-icon>
                                                    <Delete />
                                                </el-icon>
                                            </span>
                                        </span>
                                    </div>
                                </template>
                            </el-upload>

                            <el-dialog v-model="dialogVisible">
                                <img w-full :src="dialogImageUrl" alt="预览" />
                            </el-dialog>
                        </el-form-item>
                    </el-form>
                </div>

                <template #footer>
                    <div class="dialog-footer">
                        <el-button round plain @click="dialogFormVisible = false" size="large">取消</el-button>
                        <el-button type="primary" round plain @click="handleSubmit(); dialogFormVisible = false"
                            size="large">
                            发布
                        </el-button>
                    </div>
                </template>
            </el-dialog>

            <!-- <div class="popularity-ranking">
                <h2 class="popularity-h2">热点话题榜</h2>
                <el-table :data="tableData" height="400" style="width: 100%;background: transparent;">
                    <el-table-column prop="Ranking" label="排名" width="60" />
                    <el-table-column prop="topic" label="话题" width="150" />
                    <el-table-column prop="heat" label="热度" />
                </el-table>
            </div> -->
            <div class="popularity-ranking">
                <h2 class="popularity-h2">热点话题榜</h2>
                <el-table :data="tableData" height="400"
                    style="width: 100%;background: transparent;border-color: transparent;">
                    <el-table-column label="排名" width="60">
                        <template v-slot="{ $index }">
                            <!-- 前三行显示图片 -->
                            <img v-if="$index < 3" :src="getRankingImage($index)" style="width: 15px; height: 20px;" />
                            <!-- 其他行显示序号 -->
                            <span v-else>{{ $index + 1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="topic" label="话题" width="150" />
                    <el-table-column prop="heat" label="热度" />
                </el-table>
            </div>

        </el-card>

        <el-card class="rightcc">
            <div class="nav">
                <el-tabs v-model="activeTab" type="card" class="demo-tabs" @tab-change="changeTab(activeTab)">
                    <!-- <el-tab-pane label="全部" name="1"></el-tab-pane> -->
                    <el-tab-pane v-for="o in tabs" :label="o.label" :name="o.name"></el-tab-pane>
                </el-tabs>
                <el-input class="search" v-model="input" style="width: 240px" size="large" placeholder="请输入关键词"
                    :suffix-icon="Search" />
            </div>
            <div class="news" v-for="item in filteredNews " :key="item.id">
                <div class="img">
                    <img :src="item.post.postCover" alt="" width="250" height="150">
                </div>
                <div class="news_content">
                    <el-link :underline="false" @click="goToPage(item.post.id)">
                        <h3 class="news_title">
                            {{ item.post.title }}
                        </h3>
                    </el-link>
                    <div class="msg">
                        <div class="user">
                            <img :src="item.user.userAvatar"
                                style="width: 30px;height: 30px; border-radius: 50%;margin-right: 8px;" />
                        </div>
                        <div class="name" style="margin-right: 10px;">
                            {{ item.user.userName }}
                        </div>
                        <div class="date">
                            {{ item.post.postTime }}
                        </div>
                        <div class="tag" style="margin-left: 20px;">
                            <el-tag v-if="item.post.type == '分享'" type="success" effect="dark">{{ item.post.type
                                }}</el-tag>
                            <el-tag v-else type="warning" effect="dark">{{ item.post.type }}</el-tag>
                        </div>
                    </div>
                    <div class="description">
                        <span class="topic" v-for="tag in item.post.postType.split(',')" :key="tag">
                            #{{ tag.trim() }}
                        </span>
                        {{ item.post.postDescription }}
                    </div>

                </div>
            </div>
        </el-card>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
const dialogFormVisible = ref(false)
import { reactive, computed } from 'vue'
import getPostById from '../functions/getPostById';
import getPostByIdNotLogin from '../functions/notLogin/getPostByIdNotLogin';
import getAllPostCommentNotLogin from '../functions/PostComment/notLogin/getAllPostCommentNotLogin';
import getAllPostComment from '../functions/PostComment/getAllPostComment';
import getPostCommentCount from '../functions/PostComment/getPostCommentCount';
import { useRouter } from 'vue-router'

const router = useRouter();
import { Search } from '@element-plus/icons-vue'
const AllPost: any = ref(JSON.parse(sessionStorage.getItem("AllPost") || "null") || "")
const getRankingImage = (index: number) => {
    switch (index) {
        case 0:
            return 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/modal%2Fmodal1.png';
        case 1:
            return 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/modal%2Fmodal2.png';
        case 2:
            return 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/modal%2Fmodal3.png';
    }
}
const radio = ref('分享')
const activeTab = ref('推荐')
const input = ref('')

const changeTab = ((tab: any) => {
    activeTab.value = tab;
})
const tabs = ref([
    {
        label: '推荐',
        name: '推荐',
    },
    {
        label: '最新发布',
        name: '最新发布',
    },
    {
        label: '热度最高',
        name: '热度最高',
    },
    {
        label: '提问',
        name: '提问',
    },
    {
        label: '分享',
        name: '分享',
    },
])
const token: any = ref(localStorage.getItem('token') || null)
const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")
const goToPage = async (id: number) => {
    if (token.value != null) {
        await getPostById(id)
        await getAllPostComment(id, user.userId)
    } else {
        await getPostByIdNotLogin(id)
        await getAllPostCommentNotLogin(id)
    }
    await getPostCommentCount(id)
    router.push('/postDetail/' + id)
}

const formattedData = AllPost.value.map((item: any) => {
    const originalDate = new Date(item.post.postTime);

    // 时区设置为中国
    const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

    return { ...item, post: { ...item.post, postTime: formattedTime } };
});
// 计算属性：根据选中的选项卡和搜索框关键词过滤后的新闻内容
const filteredNews = computed(() => {
    console.log(input.value);

    // 如果搜索关键词为空，则根据tab返回数据
    if (!input.value.trim()) {
        if (activeTab.value == '提问') {
            return formattedData.filter((item: any) => item.post.type === activeTab.value);
        }
        else if (activeTab.value == '分享') {
            return formattedData.filter((item: any) => item.post.type === activeTab.value);
        }
        else if (activeTab.value === '最新发布') {
            // 按时间排序
            return formattedData.slice().sort((a: any, b: any) => {
                const dateA = new Date(a.post.postTime);
                const dateB = new Date(b.post.postTime);
                return dateB.getTime() - dateA.getTime();
            });
        } else if (activeTab.value === '热度最高') {
            // 按热度排序
            return formattedData.slice().sort((a: any, b: any) => {
                // 假设热度是根据点赞数来衡量的，您可以根据实际情况修改
                return b.post.itemViews - a.post.itemViews;
            });
        } else
            return formattedData; // 如果选中推荐，返回所有新闻内容
    }
    // 如果搜索关键词不为空，根据关键词过滤数据
    return formattedData.filter((item: any) => {
        // 在这里根据您的需求进行搜索条件的匹配，这里假设匹配标题
        const titleMatch = item.post.title.toLowerCase().includes(input.value.trim().toLowerCase());
        const topicMatch = item.post.postType.toLowerCase().includes(input.value.trim().toLowerCase());
        return titleMatch || topicMatch;
    });


});

// do not use same name with ref
const form = reactive({
    title: '',
    post_description: '',

})
import { ElMessage } from 'element-plus'

const handleRelease = () => {
    if (token.value != null) {
        dialogFormVisible.value = true

    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
}
import { nextTick } from 'vue'
import { ElInput } from 'element-plus'

const inputValue = ref('')
const dynamicTags = ref([] as string[])
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()

const handleClose = (tag: string) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
    inputVisible.value = true
    nextTick(() => {
        InputRef.value!.input!.focus()
    })
}

const handleInputConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value)
    }
    inputVisible.value = false
    inputValue.value = ''
}

import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
    console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
    console.log(file)
}


// 富文本编辑器
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IEditorConfig } from '@wangeditor/editor'
import { IToolbarConfig } from '@wangeditor/editor'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const mode = 'default'
// 内容 HTML
const valueHtml = ref('<p></p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<p></p>'
    }, 1500)
})
import { SlateElement } from '@wangeditor/editor'

type ImageElement = SlateElement & {
    src: string
    alt: string
    url: string
    href: string
}
type InsertFnType = (url: string, alt: string, href: string) => void
const toolbarConfig: Partial<IToolbarConfig> = {  // TS 语法
    /* 工具栏配置 */
}

toolbarConfig.excludeKeys = [
    'group-video',
    'insertTable',
    'todo',
    'italic',
]
const editorConfig: Partial<IEditorConfig> = {  // TS 语法
    MENU_CONF: {}
}

// 修改 uploadImage 菜单配置
if (editorConfig.MENU_CONF && typeof editorConfig.MENU_CONF === 'object') {
    // 背景色
    editorConfig.MENU_CONF['bgColor'] = {
        colors: ['rgba(0, 0, 0, 0)']
    }
    editorConfig.MENU_CONF['uploadImage'] = {
        server: 'http://localhost:8085/api/data/upload',
        fieldName: "file",
        // 单个文件的最大体积限制，默认为 2M
        maxFileSize: 5 * 1024 * 1024, // 1M
        // 上传的图片类型
        allowedFileTypes: ["image/*"],
        timeout: 30 * 1000, // 5 秒
        // 上传之前触发
        onBeforeUpload(file: File) { // TS 语法
            console.log(file);

            return file
        },

        // 上传进度的回调函数
        onProgress(progress: number) {  // TS 语法
            // progress 是 0-100 的数字
            console.log('progress', progress)
        },

        // 单个文件上传成功之后
        onSuccess(file: File, res: any) {  // TS 语法
            console.log(`${file.name} 上传成功`, res)
        },

        // 单个文件上传失败
        onFailed(file: File, res: any) {   // TS 语法
            console.log(`${file.name} 上传失败`, res)
        },

        // 上传错误，或者触发 timeout 超时
        onError(file: File, err: any, res: any) {  // TS 语法
            console.log(`${file.name} 上传出错`, err, res)
        },
        // 自定义插入图片
        customInsert(res: any, insertFn: InsertFnType) {  // TS 语法
            // res 即服务端的返回结果

            // 从 res 中找到 url alt href ，然后插入图片

            insertFn(res.data.url, '', '')
        },
    }
    // 插入图片
    editorConfig.MENU_CONF['insertImage'] = {
        onInsertedImage(imageNode: ImageElement | null) {  // TS 语法
            if (imageNode == null) return

            const { src, alt, url, href } = imageNode
            console.log('inserted image', src, alt, url, href)
        },
        checkImage: customCheckImageFn, // 也支持 async 函数
        parseImageSrc: customParseImageSrc, // 也支持 async 函数
    }
    // 编辑图片
    editorConfig.MENU_CONF['editImage'] = {
        onUpdatedImage(imageNode: ImageElement | null) {  // TS 语法
            if (imageNode == null) return

            const { src, alt, url } = imageNode
            console.log('updated image', src, alt, url)
        },
        checkImage: customCheckImageFn, // 也支持 async 函数
        parseImageSrc: customParseImageSrc, // 也支持 async 函数
    }
}

// 自定义校验图片
function customCheckImageFn(src: string, alt: string, url: string): boolean | undefined | string { // TS 语法
    console.log('updated image', src, alt, url)
    if (!src) {
        return
    }
    if (src.indexOf('http') !== 0) {
        return '图片网址必须以 http/https 开头'
    }
    return true

    // 返回值有三种选择：
    // 1. 返回 true ，说明检查通过，编辑器将正常插入图片
    // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
    // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
}
// 转换图片链接
function customParseImageSrc(src: string): string {  // TS 语法
    if (src.indexOf('http') !== 0) {
        return `http://${src}`
    }
    return src
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
    console.log(editor.getMenuConfig('uploadImage'));

}
import addNewPost from '../functions/addNewPost';

const handleSubmit = async () => {
    await addNewPost(form.title, form.post_description, valueHtml.value, dynamicTags.value)
}

// 排行榜
const HotTopic: any = ref(JSON.parse(sessionStorage.getItem("HotTopic") || "null") || "")

// 将数据处理成 el-table 需要的格式
const tableData = HotTopic.value.map((item: any, index: any) => ({
    Ranking: index + 1,
    topic: Object.keys(item)[0],
    heat: Object.values(item)[0]
}));

</script>

<style lang="scss" scoped>
.ccmain {
    display: flex;
    justify-content: space-between;
}

:deep(.el-table tr) {
    background: transparent;
}

:deep(.el-table th.el-table__cell) {
    background: transparent;
}

.leftcc {
    margin-right: 20px;
    display: inline-block;
    height: 550px;
    width: 30%;
    background-color: rgba($color: #fff, $alpha: 0.5);

    .btn {
        border: 0;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        cursor: pointer;
        color: #ffffff;
        background: linear-gradient(to right, #c66cea 50%, rgb(78, 144, 254) 50%);
        background-size: 200% 100%;
        background-position: 100% 0%;
        transition: all 0.5s ease;

        &:hover {
            background-position: 0% 0%;
        }
    }

    //发布样式
    .upload {
        margin: 0 auto;
    }

    .custom-input {
        padding-top: 5px;
        height: 46px;
    }

    .upload-container {
        vertical-align: top;
        padding-top: 50px;
        width: 100%;

        :deep(.el-upload-list__item) {
            width: 30%;
            height: 30%;
        }

        :deep(.el-upload--picture-card) {
            width: 30%;
            height: 100%;
        }
    }

    .upload-p,
    .upload-send {
        vertical-align: top;
    }


    .upload-p {
        display: inline-block;
        text-align: left;
    }
}

.nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
}

:deep(.el-input__wrapper) {
    background-color: rgba($color: #fff, $alpha: 0.7);
}

.rightcc {
    background-color: rgba($color: #fff, $alpha: 0.5);
    width: 68%;

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

                .topic {
                    font-size: 15px;
                    font-weight: 700;
                    color: #000;
                }
            }

            .msg {
                margin: 10px auto;
                display: flex;
                align-items: center;
            }
        }
    }
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