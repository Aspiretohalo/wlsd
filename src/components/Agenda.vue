<template>
    <div>
        <h2 style="font-size: 36px;margin-top: 50px;">
            大会议程</h2>
        <h5 style="font-size: 14px;">
            西湖论剑·数字安全大会</h5>
        <div class="nav w-margin">
            <el-tabs v-model="activeTab" type="card" class="demo-tabs" @tab-change="changeTab(activeTab)">
                <el-tab-pane label="全部" name="1"></el-tab-pane>
                <el-tab-pane label="5月5日" name="2023/5/5"></el-tab-pane>
                <el-tab-pane label="5月6日" name="2023/5/6"></el-tab-pane>
                <el-tab-pane label="5月7日" name="2023/5/7"></el-tab-pane>
                <el-tab-pane label="5月8日" name="2023/5/8"></el-tab-pane>
            </el-tabs>
            <el-select v-model="value" class="m-2" placeholder="论坛类型" size="large" style="width: 150px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>

        <el-card class="box w-margin">
            <div class="agenda">
                <el-card class="agenda_item" v-for="item in filteredMeetings" :key="item.meeting.itemId"
                    style="margin-bottom: 25px;">
                    <div class="meeting">
                        <div class="time">
                            <img src="../assets/icon/时间.png">
                            {{ item.meeting.itemDate + ' ' + item.meeting.itemTime }}
                        </div>
                        <div class="content">
                            <h2 class="title">
                                {{ item.meeting.itemTitle }}
                                <el-tag class="type">{{ item.meeting.itemType }}</el-tag>
                            </h2>
                            <div class="location">
                                <img src="../assets/icon/地点.png">
                                {{ item.meeting.itemLocation }}
                            </div>
                        </div>
                        <div class="review">
                            <el-button type="primary" round plain v-if="item.subscribed == false"
                                @click="handleSetMeetingSubscription(item.meeting.itemId)">订阅+</el-button>
                            <el-button type="primary" round plain v-else
                                @click="handleCancelMeetingSubscription(item.meeting.itemId)">已订阅</el-button>
                            <el-button type="primary" round plain
                                @click="goToAgenda(item.meeting.itemId)">观看回放</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import getMeetingById from '../functions/getMeetingById';
import getMeetingDetail from '../functions/getMeetingDetail';
import { reactive } from 'vue'
import { ref, computed } from 'vue'
import setMeetingSubscription from '../functions/setMeetingSubscription';
import cancelMeetingSubscription from '../functions/cancelMeetingSubscription';
import { useRouter } from 'vue-router'
import getMeetingByIdNotLogin from '../functions/notLogin/getMeetingByIdNotLogin';

const router = useRouter();
const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")
const token: any = ref(localStorage.getItem('token') || null)


const goToAgenda = async (id: Number) => {
    if (token.value != null) {
        await getMeetingById(id, user.userId)
    } else {
        await getMeetingByIdNotLogin(id)
    }
    await getMeetingDetail(id)
    router.push('/agendaDetail/' + id)
}
const activeTab = ref('1')
const value = ref('全部')
const options = [
    {
        value: '全部',
        label: '全部',
    },
    {
        value: '主论坛',
        label: '主论坛',
    },
    {
        value: '平行论坛',
        label: '平行论坛',
    },
    {
        value: '科普论坛',
        label: '科普论坛',
    }, {
        value: '掌上论剑',
        label: '掌上论剑',
    },
    {
        value: '生态合作论坛',
        label: '生态合作论坛',
    },
]
import { ElMessage } from 'element-plus'

const Meeting = ref(JSON.parse(sessionStorage.getItem("Meeting") || "null") || "")
const handleSetMeetingSubscription = async (itemId: any) => {
    if (token.value != null) {
        await setMeetingSubscription(itemId)
        Meeting.value = JSON.parse(sessionStorage.getItem("Meeting") || "null") || ""
    } else {
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
    }
}
const handleCancelMeetingSubscription = async (itemId: any) => {
    await cancelMeetingSubscription(itemId)
    Meeting.value = JSON.parse(sessionStorage.getItem("Meeting") || "null") || ""
}
const filteredMeetings = computed(() => {
    // console.log(activeTab);
    if (activeTab.value == '1') {
        return Meeting.value;
    }
    return Meeting.value.filter((m: any) => {
        // console.log(m.meeting.itemDate);  // 打印每个 meeting 的 itemDate
        // console.log(activeTab.value);
        // console.log(m.meeting.itemDate == activeTab.value);

        return m.meeting.itemDate == activeTab.value;
    });
});
const changeTab = ((tab: any) => {
    activeTab.value = tab;
})
</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

.nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
}

.box {
    background-color: rgba($color: #fff, $alpha: 0.3);
    margin-top: 20px;

    .agenda {
        .agenda_item {
            background-color: rgba($color: #fff, $alpha: 0.3);
        }

        .agenda_item:hover {
            background-color: rgba($color: #0055ff, $alpha: 0.3);
        }

        .agenda_item:last-child {
            margin-bottom: 0px !important;
        }

        .meeting {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .time {
                margin-right: 20px;
                display: flex;
                align-items: center;
            }

            img {
                width: 20px;
            }

            .content {
                .type {
                    font-weight: normal;
                    font-size: 16px;
                }

                .location {
                    display: flex;
                    align-items: center;
                }
            }

            .review {
                margin-left: auto;
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