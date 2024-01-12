<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin" style="margin-top: 80px;display: flex;justify-content: start;">关于大会</h1>
                    <div class="about w-margin">
                        <div class="text">
                            <h3>大会介绍</h3>
                            <p>西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”。历届大会期间，国家部委、省市领导，院士、知名专家和优秀企业代表齐聚杭州，共商数字时代的安全之道。
                                2023年是全面贯彻落实党的二十大精神的开局之年，为深入学习贯彻党的二十大精神，推动落实《数字中国建设整体布局规划》尤其是筑牢数字安全屏障的要求，推进数字安全人才培养、科技创新、产业融合发展，以保障数字政务、数字经济、数字社会等数字化生态安全发展。在迎来大会十一年之际，由“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。
                                本届大会主题为“数字安全@数字中国”，大会将邀请相关政府部门、科研院所，以及数字生态各领域的参与者、构建者、守护者，共同探讨数字中国的发展和安全之道。大会将设主论坛、数字安全成果展、多个平行论坛及研讨会，结合数字安全前沿技术、行业应用、人才培养、企业治理等议题展开讨论、展示成果。
                            </p>
                        </div>
                        <div class="image">
                            <video src="../assets/banner/个人所得税.mp4"></video>
                        </div>
                    </div>
                    <Highlights></Highlights>
                    <div class="PastReview w-margin">
                        <h1>往期回顾</h1>
                        <h3>Past Review</h3>
                        <el-carousel class="carousel" :autoplay="false" trigger="click" arrow="always" type="card">
                            <el-carousel-item v-for="item in 8" :key="item">
                                <h3 style="background-color: cornflowerblue; height: 600px; " text="2xl" justify="center">{{
                                    item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
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
import Highlights from '../components/Highlights.vue';
</script>

<style lang="scss" scoped>
.main {

    .about {
        margin-top: 100px;
        display: flex;
        justify-content: space-between;

        .text {

            p {
                padding: 0 50px;

            }
        }
    }

    .PastReview {
        .carousel {
            margin-top: 50px;
        }

    }
}
</style>