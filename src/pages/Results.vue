<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin" style="margin-top: 80px;display: flex;justify-content: start;">成果发布</h1>

                    <div class="white_paper w-margin">
                        <h2>白皮书</h2>
                        <h5>White Paper</h5>
                        <el-card style="margin-top: 20px;"
                            :body-style="{ backgroundColor: 'rgba(249, 240, 251, 0.5)' }">
                            <div class="papers" v-for="item in WhitePaper1" :key="item.title">
                                <div class="img">
                                    <img :src="item.img" style="height: 200px;">
                                </div>
                                <div class="paper">
                                    <h3>{{ item.title }}</h3>
                                    <p style="text-indent: 2em;">{{ item.content }}</p>
                                    <el-button round size="small" @click="goTo">立即下载</el-button>
                                </div>
                            </div>
                            <div class="papers" v-for="item in WhitePaper2" :key="item.title">
                                <div class="paper">
                                    <h3>{{ item.title }}</h3>
                                    <p style="text-indent: 2em;">{{ item.content }}</p>
                                    <el-button round size="small" @click="goTo">立即下载</el-button>
                                </div>
                                <div class="img">
                                    <img :src="item.img" style="height: 200px;">
                                </div>
                            </div>
                            <div class="papers" v-for="item in WhitePaper3" :key="item.title">
                                <div class="img">
                                    <img :src="item.img" style="height: 200px;">
                                </div>
                                <div class="paper">
                                    <h3>{{ item.title }}</h3>
                                    <p style="text-indent: 2em;">{{ item.content }}</p>
                                    <el-button round size="small" @click="goTo">立即下载</el-button>
                                </div>
                            </div>
                        </el-card>
                    </div>
                    <h2>新品发布</h2>
                    <h5>New Product Launch</h5>
                    <div class="w-margin">
                        <div class="New_Product_Launch">
                            <el-card class="New_Product_Launch_card"
                                :body-style="{ backgroundColor: item.style, height: '100%' }" v-for="item in Product"
                                :key="item.style">
                                <img :src="item.img" style="height: 180px;width: 90%;">
                                <h2>{{ item.title }}</h2>
                                <div
                                    style="padding: 0 20px; text-align: justify;text-indent: 2em;font-size: 12px;color: #666;">
                                    {{
                                item.description }}</div>
                            </el-card>
                        </div>

                    </div>
                    <div class="Books w-margin">
                        <h2>书籍</h2>
                        <h5>Books</h5>
                        <el-card style="margin-top: 20px;">
                            <div class="card">
                                <img style="width: 200px; height: 200px; margin-top: 20px;"
                                    src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/cd902015f99246108a0615d4668f5d0d.png" />

                                <div class="text">
                                    <h3>数据安全与隐私计算</h3>
                                    <p style="text-align:justify;text-indent: 2em;">本书首先介绍了业内多个具备代表性的数据安全理论及实践框架，从数
                                        据常见风险出发，引出数据安全保护最佳实践，然后介绍了数字经济时代数据要素市场的基本信息，基于构建数据要素市场、促进数据合规安全流通，释放数据价值等场景中的实践，抽象并总结了一套数据要素可信、安全、合
                                        规流通的体系架构，包括数据安全保护技术与保护数据价值释放的隐私计算 技术，最后针对政务、金融、电力能源、公安行业等重点行业，分析了数据
                                        安全与数据孤岛现象的根本原因，介绍了数据安全实践案例，以及如何通过 部署数据要素流通体系架构，打破“数据壁垒”，促进多方数据融合计算的实践案例。
                                        本书可以作为高校学生、隐私计算技术从业者、数据要素市场从业者、 数据安全行业从业者的入门读物，也可作为相关机构或组织进行数据要素市
                                        场流通体系建设实践的参考指南。
                                    </p>
                                </div>
                            </div>
                        </el-card>
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
import { ref } from 'vue';
const goTo = () => {
    window.open('https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/%E8%A5%BF%E6%B9%96%E8%AE%BA%E5%89%91%C2%B7%E6%95%B0%E5%AD%97%E5%AE%89%E5%85%A8%E5%A4%A7%E4%BC%9A.pptx')
}
const Product = ref([
    {
        title: '下一代防火墙',
        description: '明御防火墙（DAS-TGFW）秉持“持续边界安全态势改善”的理念，以用户为核心，以边界、应用、威胁、权限为防护对象，构建了以资产为视角的可持续智能安全运营防护体系。',
        style: 'rgba(240, 240, 251, 0.5)',
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/bf77ef3740464bd38b383633d30831a6.jpg'
    }, {
        title: '安全托管运营服务MSS',
        description: '提供体系化、常态化的安全托管服务，协助构建7*24小时全天候、全方位的安全运营体系， 实现安全风险从发现到响应处置的闭环，持续不断提高网络安全水平。',
        style: 'rgba(240, 240, 251, 0.5)',
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/500e36be359f492ab623b7998263ccc2.jpg'
    }, {
        title: '安恒信息数据安全',
        description: '全球知名市场研究机构IDC发布《IDC Perspective中国数据安全市场研究》报告认为：安恒信息数据安全解决方案是国内首家覆盖数据全生命周期关联的网络、终端、应用、数据库和接口的综合解决方案，解决数据静态和流动状态中数据泄露、数据篡改、数据滥用和隐私泄露风险。',
        style: 'rgba(240, 240, 251, 0.5)',
        img: 'https://www.dbappsecurity.com.cn/Upload/image/20210517/20210517220626_0138.jpg'
    }
])
const WhitePaper1 = ref([
    {
        title: '2024西湖论剑-12周年精华特刊',
        content: '建没数宇中国是我国的重要国策。在《数宇中国建设整体布局规划〉 (以下简称《规划》)中明确了数字中国建设按照“2522”的整体框架进行布局。整体框架中，一方面着重强调了数字安全的重要性，数字安全和数字技术并列为支撑数字中国建设的两大能力。另一方面，“安全”在2522框架中无处不在——数字基础设施不可无安全保障，数据资源大循环不可无安全赋能，建设公平规范的数字治理生态不可无安全辅助。建设数字中国，构筑数字安全屏障势在必行。',
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/7/70fe3218d7ae4f58ae91a838ed4d64dd.jpg'
    }
])
const WhitePaper2 = ref([
    {
        title: '2024数字安全能力洞察报告',
        content: '数字经济成为全球新一轮科技革命和产业变革的重要引擎，将开启人类数字文明的新时代。数字安全的基础性作用日益突出，在数字化建设进程中，加紧实施国家信息化发展战略，筑牢可信可控的数字安全屏障，夯实数字基础设施安全底座，增强关键基础设施安全韧性，助力数字社会安全发展，已成为支撑现代化建设、增强国家综合实力的必然选择。',
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8cc23042ae8f4a6e80f25997132d13c0.png'
    }
])
const WhitePaper3 = ref([
    {
        title: '安恒信息2024年行业解决方案蓝皮书',
        content: '数字安全是未来数字化发展的重要组成部分，立足数字安全建设。备预不虞，为国常道，安恒信息结合多年网络安全、数据安全经验以及对行业发展趋势的理解和把握，安恒信息首次发布六大行业解决方案蓝皮书，全面介绍网信、公安、运营商、金融、教育、交通六大行业中的解决方案最佳实践，为产业数字化发展指明了方向，全面加速推动经济社会全面发展。',
        img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0bfbde79d1774b43bab8f03d1c75e44c.png'
    }
])
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.5);
}

.New_Product_Launch {
    display: flex;
    justify-content: flex-start;

    .New_Product_Launch_card {
        width: 32%;
        margin-right: 20px;

    }
}

.white_paper {

    .papers {
        margin: 40px auto;
        width: 70%;
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
        border-bottom: 2px dashed var(--el-border-color);

        .paper {
            width: 50%;

            p {
                text-align: left;
                font-size: 12px;
            }
        }

        .img {
            width: 50%;
        }
    }
}

.Books {
    .card {
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: center;

        .text {
            width: 500px;

            p {
                padding: 0 50px;

            }
        }
    }
}
</style>