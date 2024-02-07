<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
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
                            <!-- <h2>5月5日</h2> -->
                            <el-card v-for="item in filteredMeetings" :key="item.itemId" style="margin-bottom: 25px;">
                                <div class="meeting">
                                    <div class="time">
                                        <img src="../assets/icon/时间.png">
                                        {{ item.itemTime }}
                                    </div>
                                    <div class="content">
                                        <h2 class="title">
                                            {{ item.itemTitle }}
                                            <el-tag class="type">{{ item.itemType }}</el-tag>
                                        </h2>
                                        <div class="location">
                                            <img src="../assets/icon/地点.png">
                                            {{ item.itemLocation }}
                                        </div>
                                    </div>
                                    <div class="review">
                                        <el-button type="primary" round plain>订阅+</el-button>
                                        <el-button type="primary" round plain>观看回放</el-button>
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
import { ref, computed } from 'vue'
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
const Meeting = ref(JSON.parse(sessionStorage.getItem("Meeting") || "null") || "")
const filteredMeetings = computed(() => {
    // console.log(activeTab);
    if (activeTab.value == '1') {
        return Meeting.value;
    }
    return Meeting.value.filter((m: any) => {
        console.log(m.itemDate);  // 打印每个 meeting 的 itemDate
        console.log(activeTab.value);
        console.log(m.itemDate == activeTab.value);

        return m.itemDate == activeTab.value;
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