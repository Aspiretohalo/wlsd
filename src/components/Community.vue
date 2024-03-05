<template>
    <div class="ccmain w-margin">
        <!-- <h1>社区中心</h1> -->
        <!-- 左边栏目 -->

        <el-card class="leftcc">
            <el-button plain @click="dialogFormVisible = true">
                发布内容
            </el-button>
            <el-dialog v-model="dialogFormVisible" width="800">
                <div style="border: 1px solid #ccc">
                    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                        :mode="mode" />
                    <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                        :mode="mode" @onCreated="handleCreated" />
                </div>
                <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取消</el-button>
                        <el-button type="primary" @click="handleSubmit(); dialogFormVisible = false">
                            发布
                        </el-button>
                    </div>
                </template>
            </el-dialog>

            <div class="popularity-ranking">
                <h2 class="popularity-h2">热点话题排行榜</h2>
                <el-table :data="tableDataToShow" height="300" style="width: 100%;background: transparent;">
                    <el-table-column prop="Ranking" label="排名" width="60" />
                    <el-table-column prop="topic" label="话题" width="150" />
                    <el-table-column prop="heat" label="热度" />
                </el-table>
                <el-button class="popularity-bt" v-if="!showAllTopics" @click="showAllTopics = true"
                    type="primary">显示更多</el-button>
            </div>
        </el-card>

        <el-card class="rightcc">
            <div class="news" v-for=" item  in  8 " :key="item">
                <div class="img">
                    <!-- <img :src="item" alt="" width="250" height="150"> -->
                </div>
                <div class="news_content">
                    <el-link :underline="false" @click="">
                        <h3 class="news_title">
                            {{ item }}
                        </h3>
                    </el-link>
                    <div class="msg">

                        <div class="date">
                            {{ item }}-{{ item }}
                        </div>
                    </div>
                    <div class="description">
                        {{ item }}
                    </div>

                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
const dialogFormVisible = ref(false)

// 富文本编辑器
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { IEditorConfig } from '@wangeditor/editor'


// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const mode = 'default'
// 内容 HTML
const valueHtml = ref('<p>hello</p>')

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
const toolbarConfig = {}
const editorConfig: Partial<IEditorConfig> = {  // TS 语法
    MENU_CONF: {}
}
// 修改 uploadImage 菜单配置
if (editorConfig.MENU_CONF && typeof editorConfig.MENU_CONF === 'object') {
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

const handleSubmit = () => {
    console.log(123);
    console.log(valueHtml.value);

}



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
</script>

<style lang="scss" scoped>
.ccmain {
    display: flex;
    justify-content: space-between;
}

.leftcc {
    margin-right: 20px;
    display: inline-block;
    height: 550px;
    width: 30%;
    background-color: rgba($color: #fff, $alpha: 0.5);

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

.rightcc {
    background-color: rgba($color: #fff, $alpha: 0.5);
    width: 65%;

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
}
</style>