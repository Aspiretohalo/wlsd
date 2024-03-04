<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <div class="name w-margin">
                        <el-avatar :size="64" :src="form.userAvatar" />
                        <span style="margin-left: 20px;">{{ form.userName }}</span>
                    </div>
                    <div class="message w-margin">
                        <el-card class="msg_card">
                            <el-button type="success" plain style="width: 100%;"
                                @click="handleEdit()">编辑个人资料</el-button>
                            <el-dialog v-model="dialogFormVisible" title="个人资料" width="35%">
                                <el-form :model="form" label-width="80px">
                                    <el-form-item label="姓名">
                                        <el-input v-model="form.userName" autocomplete="off" />
                                    </el-form-item>
                                    <el-form-item label="性别">
                                        <el-input v-model="form.gender" autocomplete="off" />
                                    </el-form-item>
                                    <el-form-item label="公司">
                                        <el-input v-model="form.company" autocomplete="off" />
                                    </el-form-item>
                                    <el-form-item label="部门">
                                        <el-input v-model="form.department" autocomplete="off" />
                                    </el-form-item>
                                    <el-form-item label="职位">
                                        <el-input v-model="form.position" autocomplete="off" />
                                    </el-form-item>
                                    <el-form-item label="联系电话">
                                        <el-input v-model="form.phoneNumber" disabled autocomplete="off" />
                                    </el-form-item>
                                    <el-form-item label="邮箱">
                                        <el-input v-model="form.email" autocomplete="off" />
                                    </el-form-item>
                                </el-form>
                                <template #footer>
                                    <span class="dialog-footer">
                                        <el-button round @click="dialogFormVisible = false">取消</el-button>
                                        <el-button type="primary" round @click="dialogFormVisible = false">
                                            保存
                                        </el-button>
                                    </span>
                                </template>
                            </el-dialog>
                            <el-button type="warning" plain
                                style="width: 100%; margin-top: 20px;margin-left: 0;">定制个性化内容</el-button>
                            <div style="margin-top: 50px;">个人简介</div>
                            <div class="data">
                                <h4>性别</h4><span>{{ form.gender }}</span>
                            </div>
                            <div class="data">
                                <h4>公司</h4><span>{{ form.company }}</span>
                            </div>
                            <div class="data">
                                <h4>部门</h4><span>{{ form.department }}</span>
                            </div>
                            <div class="data">
                                <h4>职位</h4><span>{{ form.position }}</span>
                            </div>
                            <div class="data">
                                <h4>联系电话</h4><span>{{ form.phoneNumber }}</span>
                            </div>
                            <div class="data">
                                <h4>邮箱</h4><span>{{ form.email }}</span>
                            </div>
                        </el-card>
                        <div class="msg_right">
                            <div class="small">
                                <el-card style="width: 49%;height: 100%;">
                                    <span>数据</span>
                                    <div class="actions">
                                        <div><el-icon>
                                                <img src="../assets/icon/thumb.svg" width="20px" alt="">
                                            </el-icon><span>点赞</span>
                                            <div class="amount">12</div>
                                        </div>
                                        <div><el-icon>
                                                <ChatLineRound />
                                            </el-icon><span>评论</span>
                                            <div class="amount">12</div>
                                        </div>
                                        <div><el-icon>
                                                <img src="../assets/icon/share.svg" width="20px" alt="">
                                            </el-icon><span>分享</span>
                                            <div class="amount">12</div>
                                        </div>
                                    </div>
                                </el-card>
                                <el-card class="SignIn">
                                    <span>每日签到</span><el-link class="integral_detail"
                                        @click="checkIntegral()">积分详情<el-icon>
                                            <ArrowRight />
                                        </el-icon></el-link>
                                    <div class="integral">
                                        <el-icon size="28">
                                            <Coin />
                                        </el-icon>{{ form.integral }}
                                    </div>
                                    <el-button class="btn">签到</el-button>
                                    <!-- <el-button class="btn" disabled>已签到</el-button> -->
                                </el-card>
                            </div>
                            <el-card class="record">
                                <el-tabs type="card" class="demo-tabs">
                                    <el-tab-pane label="已订阅">
                                        <el-select v-model="value" class="m-2" placeholder="Select" size="large"
                                            style="width: 240px">
                                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                                :value="item.value" />
                                        </el-select>
                                        <div class="subscription">
                                            <div class="subscription_content" v-for="o in ActivityAndMeetingChoice"
                                                :key="o">
                                                <img style="width: 270px; height: 180px; margin-top: 10px;margin-right: 20px"
                                                    :src="url" />
                                                <el-tag class="subscription_name">西湖论剑</el-tag>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="已点赞">
                                        <div class="thumb">
                                            <div class="thumb_content" v-for="o in 5" :key="o">
                                                <el-image
                                                    style="width: 270px; height: 180px; margin-top: 10px;margin-right: 20px;"
                                                    :src="url" fit="cover" />
                                                <el-tag class="thumb_name">西湖论剑</el-tag>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="评论">Role</el-tab-pane>
                                </el-tabs>
                            </el-card>
                        </div>
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

import { Coin, ChatLineRound, ArrowRight } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const value = ref('全部')

const ActivityAndMeetingChoice: any = ref(JSON.parse(sessionStorage.getItem("ActivityAndMeetingChoice") || "null") || "")

const options = [
    {
        value: '全部',
        label: '全部',
    },
    {
        value: '议程订阅',
        label: '议程订阅',
    },
    {
        value: '活动订阅',
        label: '活动订阅',
    },
]
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const dialogFormVisible = ref(false)

const handleEdit = () => {
    dialogFormVisible.value = true
    console.log(dialogFormVisible.value);
}

const form: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const checkIntegral = () => {
    router.push('/integral/integralDetails')
}
</script>

<style lang="scss" scoped>
* {
    text-align: left;
}

:deep(.el-card) {
    --el-dialog-width: 35%;
    border-radius: 15px;
}

:deep(.el-dialog__body) {
    padding: 30px;
}

:deep(.el-dialog) {
    border-radius: 15px;
}

.name {
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;

    span {
        font-size: 48px;
    }
}

.message {
    display: flex;
    justify-content: flex-start;

    .msg_card {
        width: 350px;
        //
        height: 800px;

        .data {
            margin-top: 20px;
        }
    }

    .msg_right {
        margin-left: 20px;
        width: 100%;

        .small {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            width: 100%;
            height: 200px;
            margin-bottom: 20px;

            .actions {
                margin-top: 20px;
                font-size: 20px;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .amount {
                    margin-top: 20px;
                    text-align: center;
                }

            }

            .SignIn {
                width: 49%;

                .integral_detail {
                    float: right;
                }

                .integral {
                    font-size: 28px;
                    font-weight: 700;
                    margin-top: 30px;
                }

                .btn {
                    margin-top: 20px;
                    width: 80px;
                }
            }
        }

        .record {
            width: 100%;
            margin-top: 20px;

            .subscription {
                display: flex;
                flex-wrap: wrap;

                .subscription_content {
                    position: relative;

                    .subscription_name {
                        position: absolute;
                        top: 15px;
                        left: 10px;
                    }
                }
            }

            .thumb {
                display: flex;
                flex-wrap: wrap;

                .thumb_content {
                    position: relative;

                    .thumb_name {
                        position: absolute;
                        top: 15px;
                        left: 10px;
                    }
                }

            }
        }
    }

}
</style>