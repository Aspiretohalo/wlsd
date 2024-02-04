<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin" style="margin-top: 80px;display: flex;justify-content: start;">参会指南</h1>
                    <el-card class="box w-margin">
                        <template #header>
                            <div class="card-header">
                                <span>Card name</span>
                                <el-button class="button" text>Operation button</el-button>
                            </div>
                        </template>
                        <div class="guide_item">
                            <h2>大会签到</h2>
                            <div class="tip">
                                <span>温馨提示</span>
                                <div>大会胸卡将作为参会期间唯一身份认证，遗失无补，请妥善保管</div>
                            </div>
                            <div class="requirements">
                                <div class="position">
                                    <div style="font-size: 20px; margin-top: 5px;">1.大会位置</div>
                                    <div style="font-size: 16px; color: #555;margin-top: 5px;">杭州洲际酒店正门入口</div>
                                </div>
                                <div class="position">
                                    <div style="font-size: 20px; margin-top: 5px;">2.签到时间</div>
                                    <div style="font-size: 16px; color: #555;margin-top: 5px;">5月7日 上午 08:00-9:00
                                        下午13:00-13:30</div>
                                    <div style="font-size: 16px; color: #555;margin-top: 5px;">5月8日 上午 08:00-9:00
                                        下午13:00-13:30</div>
                                </div>
                                <div class="position">
                                    <div style="font-size: 20px; margin-top: 5px;">3.签到流程</div>
                                    <div style="font-size: 16px; color: #555;margin-top: 5px;">通过大会【短信】签到，领取大会胸卡</div>
                                </div>
                                <div class="position">
                                    <div style="font-size: 20px; margin-top: 5px;">4.嘉宾领取大会胸卡须知:</div>
                                    <div style="font-size: 16px; color: #555;margin-top: 5px;">
                                        ① 嘉宾自行领取个人参会胸卡，不代领</div>
                                    <div style="font-size: 16px; color: #555;margin-top: 5px;">
                                        ② 每位嘉宾专属码只有一次领证时效，不可重复领取 </div>
                                    <div style="font-size: 16px; color: #555;margin-top: 5px;">
                                        ③ 嘉宾在会议期间需全程佩戴</div>
                                </div>
                            </div>
                        </div>
                        <div class="guide_item">
                            <h2>大会场馆</h2>
                            <div class="tip">
                                <span>温馨提示</span>
                                <div>活动场馆照片如下：</div>
                            </div>
                            <img src="https://img2023.gcsis.cn/2023/4/42089a0585c7403191042decc029556f.jpeg">
                        </div>
                        <div class="guide_item">
                            <h2>场馆平面图</h2>
                            <div class="tip">
                                <span>温馨提示</span>
                                <div>场馆平面图如下</div>
                            </div>
                            <img src="https://img2023.gcsis.cn/2023/5/ddd7d65178194490ae1f576865602b50.jpg">
                        </div>
                        <div class="guide_item">
                            <h2>大会交通</h2>
                            <div class="tip">
                                <span>温馨提示</span>
                                <div>活动场馆与各主要交通枢纽距离如下：</div>
                            </div>
                            <div class="item">
                                <el-card class="card" :body-style="{ backgroundColor: item.style, height: '100%' }"
                                    v-for="item in transport" :key="item.style">
                                    <h2>{{ item.title }}</h2>,
                                    <div style="text-align: left;">地铁：{{ item.underground }}</div>
                                    <div style="text-align: left; margin-top: 20px;">出租车{{ item.taxi }}</div>
                                </el-card>
                            </div>

                        </div>
                        <div class="guide_item">
                            <h2>酒店住宿</h2>
                            <div class="tip">
                                <span>温馨提示</span>
                                <div>1、大会所提供酒店信息仅供参考，以酒店为准。</div>
                                <div>2、在入住期间的相关事宜，请与酒店沟通处理。</div>
                            </div>
                            <img
                                src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/197a579ab6974165b5c975eefcb730c7.png">
                        </div>
                        <div class="guide_item">
                            <h2 style="margin-bottom: 20px;">联系我们</h2>
                            <el-card :body-style="{ height: '100%', }">
                                <div class="persons">
                                    <div class="person">
                                        <div class="name">薛女士</div>
                                        <div class="job"> 会务咨询</div>
                                        <div class="phone">+86-13810244613</div>
                                        <div class="email">mia.xue@dbappsecurity.com.cn</div>
                                    </div>
                                    <div class="person">
                                        <div class="name">朱女士</div>
                                        <div class="job">商务合作</div>
                                        <div class="phone">+86-15988310161</div>
                                        <div class="email">yuki.zhu@dbappsecurity.com.cn</div>
                                    </div>
                                </div>

                            </el-card>
                        </div>
                    </el-card>
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

const transport = ref([
    {
        title: '杭州萧山国际机场—杭州洲际酒店',
        underground: '搭乘地铁7号线（吴山广场方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。',
        taxi: '路程25公里 时间约50分钟 车费60元左右.',
        style: '#f0f0fb',
    }, {
        title: '杭州东站—杭州洲际酒店',
        underground: '搭乘地铁4号线（浦沿方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。',
        taxi: '路程7公里时长约20分钟车费20元左右。',
        style: '#fef2f0',
    }
])
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

:deep(.el-card__body) {
    background-color: rgba($color: #fff, $alpha: 0.3);
}

.box {
    background-color: rgba($color: #fff, $alpha: 0.3);

    .guide_item {
        padding: 0 30px;

        .persons {
            display: flex;
            justify-content: space-around;

            .person {
                text-align: left;

                .name {
                    font-size: 22px;
                }
            }

            div {
                margin-top: 10px;
            }
        }

        .requirements {
            text-align: left;

            .position {
                padding: 20px;
                border-bottom: 1px solid #eee;
            }
        }

        .item {
            display: flex;
            justify-content: space-between;

            .card {
                margin-top: 20px;
                width: 48%;

                h2 {
                    margin-top: 0;
                }
            }
        }

        .tip {
            border-radius: 5px;
            border: 2px solid #ffd3b3;
            background-color: rgba($color: #fff8f3, $alpha: 1);
            // height: 50px;
            padding: 20px;
            text-align: left;
            margin-top: 10px;

            span {
                color: #fa6400;
            }
        }

        h2 {
            margin-top: 50px;
            display: flex;
            justify-content: start;
        }

        img {
            margin-top: 20px;
            width: 100%;
        }
    }
}
</style>