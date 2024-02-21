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
                                <h2>100</h2>
                                <el-button @click="centerDialogVisible = true" style="margin-left: 20px;"
                                    round>查看明细</el-button>
                                <el-dialog v-model="centerDialogVisible" title="积分详情" width="500" align-center>
                                    <div class="detail_item" v-for="o in 10" :key="o">
                                        <div class="item_msg">
                                            <h3 class="item_name">
                                                完善资料
                                            </h3>
                                            <div class="time">
                                                2024.2.21
                                            </div>
                                        </div>
                                        <div class="integral_amount">
                                            +100
                                        </div>
                                    </div>
                                </el-dialog>
                            </div>
                            <el-menu :router="true" :default-active="defaultMenu" class="el-menu-vertical-demo">
                                <el-menu-item index="/integral/integralDetails">
                                    <el-icon>
                                        <setting />
                                    </el-icon>
                                    <span>积分详情</span>
                                </el-menu-item>
                                <el-menu-item index="/integral/integralGifts">
                                    <el-icon>
                                        <setting />
                                    </el-icon>
                                    <span>积分兑换</span>
                                </el-menu-item>
                                <el-menu-item index="/integral/integralLottery">
                                    <el-icon>
                                        <setting />
                                    </el-icon>
                                    <span>积分抽奖</span>
                                </el-menu-item>
                                <el-menu-item index="/integral/integralRules">
                                    <el-icon>
                                        <setting />
                                    </el-icon>
                                    <span>积分规则</span>
                                </el-menu-item>
                            </el-menu>
                        </el-card>
                        <div class="msg_right">
                            <el-card class="record">
                                <router-view></router-view>
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
import { computed, reactive, onMounted } from 'vue'
import getDrawRecord from '../functions/getDrawRecord';
import { ref } from 'vue'

const centerDialogVisible = ref(false)
onMounted(async () => {
    await getDrawRecord((JSON.parse(sessionStorage.getItem("User") || "null") || "").userId)
})
const route = useRoute();
const defaultMenu = computed(() => { return route.path })
const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")


</script>

<style lang="scss" scoped>
* {
    text-align: left;
}

:deep(.el-card) {
    --el-dialog-width: 35%
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