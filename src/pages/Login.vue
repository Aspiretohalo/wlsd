<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <el-card class="box-card w-margin">
                        <img class="logo" src="../assets/logo.png" alt="">
                        <el-form :model="form">
                            <el-form-item>
                                <el-input v-model="form.phoneNumber" placeholder="手机号" />
                            </el-form-item>
                            <el-form-item>
                                <el-input v-model="form.verificationCode" placeholder="验证码">
                                    <template #append>
                                        <el-button>发送验证码</el-button>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <div class="wxLogin">
                                <span>其他方式登录</span>
                                <img src="../assets/icon/微信.svg" width="36">
                            </div>
                            <el-form-item>
                                <el-button class="login_btn" type="primary" round @click="onSubmit">登录/注册</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="protocol">注册或登录即代表您同意《用户协议》和《隐私协议》</div>
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
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    phoneNumber: '',
    verificationCode: '',
})
const onSubmit = () => {
    console.log('submit!')
}
</script>

<style lang="scss" scoped>
:deep(.el-card__body) {
    padding: 50px 40px;
}

:deep(.el-input__inner) {
    height: 42px;
}

.box-card {
    width: 26%;
    height: 500px;

    .logo {
        height: 42px;
        margin-bottom: 30px;
    }

    .wxLogin {
        display: flex;

        span {
            font-size: 16px;
        }

        img {
            margin-left: 30px;
        }
    }

    .login_btn {
        width: 100%;
        height: 45px;
        margin-top: 40px;
    }

    .protocol {
        margin-top: 40px;
        font-size: 12px;
    }
}
</style>