<template>
    <div class="common-layout">
        <el-container style="padding: 0;">
            <el-header style="height: 80px;padding: 0;">
                <TopNav></TopNav>
            </el-header>
            <el-main class="main bgc">
                <h1 class="w-margin" style="margin-top: 30px;margin-bottom: 0;display: flex;justify-content: start;">
                    活动报名<span><el-button style="margin-left: 30px;" round plain
                            @click="goTo()">返回活动详情</el-button></span>
                </h1>
                <el-card
                    style="width: 1200px;height: 450px;margin: 20px auto;padding-top: 20px;margin-bottom: 100px;border-radius: 10px;">
                    <div class="activity">
                        <img :src="SingleActivity.activity.itemCover"
                            style="width: 550px; height:380px;object-fit: cover;border-radius: 15px;">
                        <div class="msg">
                            <div class="title"> {{ SingleActivity.activity.itemTitle }} </div>
                            <div class="date">
                                <img src="../assets/icon/时间.png" style="width: 22px;height: 22px;">
                                <span class="time">{{ formattedData.activity.beginTime }}</span> ~
                                <span class="time">{{ formattedData.activity.finishTime }}</span>
                            </div>
                            <div class="location">
                                <img src="../assets/icon/地点.png" style="width: 24px;height: 24px;">
                                <span>{{ SingleActivity.activity.location }}</span>
                            </div>
                            <div class="owner">
                                举办方：
                                <span>{{ SingleActivity.activity.owner }}</span>
                            </div>
                            <div class="ticketType">
                                <div style="font-weight: 700;margin-top: 20px;">活动票种</div>
                                <el-checkbox style="height: 80px;margin-top: 20px;" v-model="checked1" label="Option1"
                                    size="large" border>
                                    <div class="price">￥{{ SingleActivity.activity.price }}</div>
                                    <div class="select">线上基础课</div>
                                </el-checkbox>
                            </div>
                            <div class="btns">
                                <el-button type="primary" @click="dialogVisible = true" round size="large"
                                    v-if="SingleActivityParticipation == ''">立即报名</el-button>
                                <el-button type="primary" disabled round size="large" v-else>已报名</el-button>
                                <div class="view_share">
                                    <div class="view">
                                        <img src="../assets/icon/浏览量(黑).png" class="icon">
                                        {{ SingleActivity.activity.itemViews }}
                                    </div>
                                    <div class="share">
                                        分享
                                        <img src="../assets/icon/分享.png" width="28">
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                    <el-dialog v-model="dialogVisible" title="报名信息填写" width="500" align-center>
                        <el-form :model="ruleForm" label-width="80px" label-position="top"
                            style="width: 80%;margin: 0 auto;" ref="ruleFormRef" :rules="rules">
                            <el-form-item label="姓名" prop="name">
                                <el-input v-model="ruleForm.name" autocomplete="off" />
                            </el-form-item>
                            <el-form-item label="手机号" prop="phoneNumber">
                                <el-input v-model="ruleForm.phoneNumber" autocomplete="off" />
                            </el-form-item>
                            <el-form-item label="邮箱" prop="email">
                                <el-input v-model="ruleForm.email" autocomplete="off" />
                            </el-form-item>
                            <el-form-item label="公司" prop="company">
                                <el-input v-model="ruleForm.company" autocomplete="off" />
                            </el-form-item>
                            <el-form-item label="职位" prop="position">
                                <el-input v-model="ruleForm.position" autocomplete="off" />
                            </el-form-item>
                        </el-form>
                        <template #footer>
                            <div class="dialog-footer" style="width: 80%;margin: 0 auto;">
                                <el-button @click="dialogVisible = false" round>取消</el-button>
                                <el-button type="primary" @click="handleSignUp(ruleFormRef)" round>
                                    提交报名
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>
                </el-card>
            </el-main>
            <el-footer style="padding: 0;">
                <Bottom></Bottom>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import TopNav from '../components/TopNav.vue'
import Bottom from '../components/Bottom.vue'
import { ref, reactive } from 'vue'
const checked1 = ref(false)
const dialogVisible = ref(false)
import addActivityViews from '../functions/addViewsActivity';
import setActivityParticipation from '../functions/Activity/setActivityParticipation';
import getActivityParticipationById from '../functions/Activity/getActivityParticipationById';
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const goTo = () => {
    router.push('/activityDetail/' + route.params.itemId)
}
const SingleActivityParticipation: any = ref(JSON.parse(sessionStorage.getItem("SingleActivityParticipation") || "null") || "")

const SingleActivity: any = ref(JSON.parse(sessionStorage.getItem("SingleActivity") || "null") || "")
import type { FormInstance, FormRules } from 'element-plus'
interface RuleForm {
    name: string
    phoneNumber: string
    email: string
    company: string
    position: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    phoneNumber: '',
    email: '',
    company: '',
    position: '',
})
onMounted(async () => {
    await addActivityViews(SingleActivity.value.activity.itemId)
    SingleActivity.value.activity.itemViews++

    const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")
    await getActivityParticipationById(route.params.itemId, user.userId)

    ruleForm.phoneNumber = user.phoneNumber;
    ruleForm.email = user.email;
    ruleForm.company = user.company;
    ruleForm.position = user.position;
});
const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: '请输入内容', trigger: 'blur' },
    ],
    phoneNumber: [
        { required: true, message: '请输入11位有效手机号码', trigger: 'blur' },
        { min: 11, max: 11, message: '请输入11位有效手机号码', trigger: 'blur' },
    ],
    email: [
        { required: true, message: '请输入内容', trigger: 'blur' },
    ],
    company: [
        { required: true, message: '请输入内容', trigger: 'blur' },
    ],
    position: [
        { required: true, message: '请输入内容', trigger: 'blur' },
    ],
})
const ActivityAndMeetingChoice: any = ref(JSON.parse(sessionStorage.getItem("ActivityAndMeetingChoice") || "null") || "")
const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const handleSignUp = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            router.push('/activityParticipation/' + route.params.itemId + '/aliPay')
            await setActivityParticipation(ruleForm, route.params.itemId)
            ActivityAndMeetingChoice.value = ref(JSON.parse(sessionStorage.getItem("ActivityAndMeetingChoice") || "null") || "")
            await getActivityParticipationById(route.params.itemId, user.userId)

            dialogVisible.value = false
        } else {
            console.log('error submit!', fields)
        }
    })
}

const formattedData = computed(() => {

    if (!SingleActivity.value.activity || !SingleActivity.value.activity.beginTime) return null;

    const originalDate1 = new Date(SingleActivity.value.activity.beginTime);
    const originalDate2 = new Date(SingleActivity.value.activity.finishTime);
    const formattedTime1 = originalDate1.toLocaleDateString("zh-CN", { timeZone: "Asia/Shanghai" });
    const formattedTime2 = originalDate2.toLocaleDateString("zh-CN", { timeZone: "Asia/Shanghai" });

    return { ...SingleActivity.value.activity, activity: { beginTime: formattedTime1, finishTime: formattedTime2 } };
});
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    background-color: rgba($color: #fff, $alpha: 0.5);
}

:deep(.el-checkbox__inner) {
    width: 0;
    height: 0;
    border: 0;
}

:deep(.el-checkbox.el-checkbox--large .el-checkbox__inner) {
    width: 0;
    height: 0;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    background: transparent;
    border: transparent;
}

.activity {
    display: flex;
    justify-content: space-around;

    .msg {
        text-align: left;

        .title {
            font-size: 24px;
            font-weight: 700;
        }

        .date {
            display: flex;
            align-items: center;
            margin-top: 20px;

            .time {
                font-size: 16px;
            }
        }

        .location {
            display: flex;
            align-items: center;
            margin-top: 10px;

            span {
                color: #000;
                cursor: pointer;
                font-size: 16px
            }

            span:hover {
                color: #888
            }
        }

        .owner {
            margin-top: 20px;
        }

        .ticketType {
            margin-top: 20px;
            border-top: 1px solid var(--el-border-color);

            .price {
                font-size: 16px;
            }

            .select {
                font-size: 16px;
                margin-top: 5px;
            }
        }

        .btns {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 30px;

            .view_share {
                display: flex;
                align-items: center;

                .view {
                    display: flex;
                    align-items: center;

                    .icon {
                        width: 24px;
                        height: 24px;
                        margin-right: 5px;
                    }
                }

                .share {
                    display: flex;
                    align-items: center;
                    margin-left: 30px;

                    img {
                        margin-left: 10px;
                        cursor: pointer;
                    }
                }
            }

        }
    }

}

:deep(.el-checkbox) {
    margin-top: 10px;
    cursor: pointer;
    width: 200px;
    height: 60px;
    text-align: left;
    border: 2px solid #eee;
    padding-top: 15px;
    padding-left: 20px;
    border-radius: 15px;
    transition: 0.3s;
}

:deep(.el-checkbox.is-bordered.el-checkbox--large) {
    border-radius: 15px;
}

.main {
    padding: 0;
}

.banner {
    height: 300px;
    background-color: rgba($color: #fff, $alpha: 0.5);
}

.article-tit .ax-row {
    height: 16rem;
    flex-flow: column;
    width: 120rem;
    min-width: 1000px;
}

.text-overflow,
.text-overflow2,
.text-overflow3 {
    display: -webkit-box;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

h1 {
    font-family: "Arial", "Helvetica Neue", "sans-serif", "pingfang SC", "Hiragino Sans GB", "微软雅黑", "microsoft yahei", "宋体", "simsun";
    font-size: 2.8rem;
    line-height: calc(2.8rem + 1.6rem);
}
</style>
