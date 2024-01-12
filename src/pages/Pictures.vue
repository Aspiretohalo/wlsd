<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin" style="margin-top: 80px;display: flex;justify-content: start;">新闻资讯</h1>
                    <NewsNav></NewsNav>
                    <div class="picures w-margin" style="height: 500px;">
                        <h3>精彩图片</h3>
                        <h5>pictures</h5>
                        <el-row class="">
                            <el-col :span="5" v-for="i in 12" :key="i">
                                <el-image style="width: 200px; height: 150px; margin-top: 20px;" :src="url" :zoom-rate="1.2"
                                    :max-scale="7" :min-scale="0.2" :preview-src-list="srcList" :initial-index="4"
                                    fit="cover" lazy />
                            </el-col>
                        </el-row>

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
import NewsNav from '../components/NewsNav.vue'
const url =
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
</script>

<style lang="scss" scoped>
.pictures {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

}

.el-col-5 {
    width: 20%;
    flex: none;
}
</style>