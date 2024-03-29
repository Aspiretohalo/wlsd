<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <div class="name w-margin">
                        <el-avatar :size="64" :src="user.userAvatar" />
                        <span style="margin-left: 20px;">{{ user.userName }}</span>
                    </div>
                    <div class="message w-margin">
                        <el-card class="msg_card">
                            <div class="Integral">
                                <img src="../assets/icon/积分.svg" alt="" width="32" height="32">
                                <h2>{{ user.integral }}</h2>
                                <el-button @click="handleButtonClick" style="margin-left: 20px;" round>查看明细</el-button>
                                <el-dialog v-model="centerDialogVisible" title="积分详情" width="500" align-center>
                                    <div class="detail_item" v-for="item in formattedData" :key="item.id">
                                        <div class="item_msg">
                                            <h3 class="item_name">
                                                {{ item.integralName }}
                                            </h3>
                                            <div class="time">
                                                {{ item.integralTime }}
                                            </div>
                                        </div>
                                        <div class="integral_amount">
                                            +{{ item.integralAmount }}
                                        </div>
                                    </div>
                                </el-dialog>
                            </div>
                            <el-menu :router="true" :default-active="defaultMenu" class="el-menu-vertical-demo">
                                <el-menu-item index="/integral/integralDetails">
                                    <span>积分详情</span>
                                </el-menu-item>
                                <el-menu-item index="/integral/integralGifts">
                                    <span>积分兑换</span>
                                </el-menu-item>
                                <el-menu-item index="/integral/integralLottery">
                                    <span>积分抽奖</span>
                                </el-menu-item>
                                <el-menu-item index="/integral/integralRules">
                                    <span>积分规则</span>
                                </el-menu-item>
                            </el-menu>
                        </el-card>
                        <div class="msg_right">
                            <el-card class="record">
                                <router-view @child="getNewUser"></router-view>
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
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { ref } from 'vue'

const centerDialogVisible = ref(false)

const route = useRoute();
const defaultMenu = computed(() => { return route.path })
const user: any = ref(JSON.parse(sessionStorage.getItem("User") || "null") || "")
const IntegralDetail: any = ref(JSON.parse(sessionStorage.getItem("IntegralDetail") || "null") || "")
const getNewUser = (value1: any, value2: any) => {
    user.value = value1;
    IntegralDetail.value = value2
    formattedData.value = IntegralDetail.value.reverse().map((item: any) => {
        const originalDate = new Date(item.integralTime);
        const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

        return { ...item, integralTime: formattedTime };
    })
    console.log(formattedData.value);

}
// const formattedData: Ref<Array<{ integralTime: string, integralName: string, id: number, integralAmount: number }>> = ref([]);
// 更新 formattedData
const formattedData = ref(IntegralDetail.value.reverse().map((item: any) => {
    const originalDate = new Date(item.integralTime);
    const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

    return { ...item, integralTime: formattedTime };
}))
const handleButtonClick = () => {
    centerDialogVisible.value = true;
};

</script>

<style lang="scss" scoped>
* {
    text-align: left;
}



:deep(.el-card) {
    --el-dialog-width: 35%;
    background-color: rgba($color: #fff, $alpha: 0.5);
}

:deep(.el-card) {
    border-radius: 15px;
}

:deep(.el-dialog__body) {
    padding: 30px;
}

:deep(.el-dialog) {
    border-radius: 15px;
}

:deep(.el-menu) {
    border-right: 0px;
    background-color: transparent;
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
        height: 300px;

        .Integral {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;

            h2 {
                margin-left: 20px;
            }
        }
    }

    .msg_right {
        margin-left: 20px;
        width: 100%;

        :deep(.el-card__body) {
            padding: 0;
        }
    }

}

.detail_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
    padding: 20px;

    .item_name {
        color: black;
        font-size: large;
    }

    .integral_amount {
        color: gold;
    }
}

.detail_item:first-child {
    border-top: 0;
}
</style>