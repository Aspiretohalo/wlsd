<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <div class="name w-margin">
                        <el-avatar :size="64" :src="circleUrl" />
                        <span style="margin-left: 20px;">cy</span>
                    </div>
                    <div class="message w-margin">
                        <el-card class="msg_card">

                            <el-menu :router="true" :default-active="defaultMenu" class="el-menu-vertical-demo">
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
                                <el-menu-item index="/integral/integralDetails">
                                    <el-icon>
                                        <setting />
                                    </el-icon>
                                    <span>积分详情</span>
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
import { computed } from 'vue';

const route = useRoute();
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
const defaultMenu = computed(() => { return route.path })

</script>

<style lang="scss" scoped>
* {
    text-align: left;
}

:deep(.el-card) {
    --el-dialog-width: 35%
}

:deep(.el-dialog__body) {
    padding: 30px;
}

:deep(.el-menu) {
    border-right: 0px;
    // border-top: 2px solid #e2e2e2;
    // border-bottom: 2px solid #e2e2e2;
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
        // height: 800px;

    }

    .msg_right {
        margin-left: 20px;
        width: 100%;
    }
}
</style>