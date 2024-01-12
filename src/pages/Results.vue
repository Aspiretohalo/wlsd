<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <div class="white_paper w-margin">
                        <el-card>
                            <h2>白皮书</h2>
                            <h5>White Paper</h5>
                        </el-card>
                    </div>
                    <div class="New_Product_Launch w-margin">
                        <el-card>
                            <h2>新品发布</h2>
                            <h5>New Product Launch</h5>
                        </el-card>
                    </div>
                    <div class="Books w-margin">
                        <h2>书籍</h2>
                        <h5>Books</h5>
                        <el-card>
                            <div class="card">
                                <el-image style="width: 200px; height: 200px; margin-top: 20px;"
                                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                                </el-image>
                                <div class="text">
                                    <h3>数据安全与隐私计算</h3>
                                    <p>本书首先介绍了业内多个具备代表性的数据安全理论及实践框架，从数
                                        据常见风险出发，引出数据安全保护最佳实践，然后介绍了数字经济时代数据要素市场的基本信息，基于构建数据要素市场、促进数据合规安全流通，释放数据价值等场景中的实践，抽象并总结了一套数据要素可信、安全、合
                                        规流通的体系架构，包括数据安全保护技术与保护数据价值释放的隐私计算 技术，最后针对政务、金融、电力能源、公安行业等重点行业，分析了数据
                                        安全与数据孤岛现象的根本原因，介绍了数据安全实践案例，以及如何通过 部署数据要素流通体系架构，打破“数据壁垒”，促进多方数据融合计算的实践案例。
                                        本书可以作为高校学生、隐私计算技术从业者、数据要素市场从业者、 数据安全行业从业者的入门读物，也可作为相关机构或组织进行数据要素市 场流通体系建设实践的参考指南。
                                    </p>
                                </div>
                            </div>

                            <!-- <div class="img">
                                <el-image style="width: 200px; height: 200px; margin-top: 20px;"
                                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
                                    </el-image>
                            </div> -->

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
</script>

<style lang="scss" scoped>
.Books {
    .card {
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .text {
            width: 500px;

            p {
                padding: 0 50px;

            }
        }
    }
}
</style>