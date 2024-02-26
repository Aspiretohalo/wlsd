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
                                        <el-button @click="onShow">发送验证码</el-button>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <div class="islider" v-if="show">
                                <Slider @getImg="getImg" @validImg="validImg" @close="onClose" :log="true"></Slider>
                            </div>

                            <div class="wxLogin">
                                <img src="../assets/icon/微信.svg" width="36">
                                <el-button @click="getWechatQRCode">微信扫码登录</el-button>
                                <div v-if="qrCodeUrl">
                                    <img :src="qrCodeUrl" alt="微信登录二维码" />
                                </div>
                            </div>

                            <el-form-item>
                                <el-button class="login_btn" type="primary" round
                                    @click="handleLogin(form)">登录/注册</el-button>
                            </el-form-item>


                        </el-form>

                        <!-- <el-checkbox v-model="isChecked">选项</el-checkbox> -->
                        <el-checkbox class="protocol">注册或登录即代表您同意《用户协议》和《隐私协议》</el-checkbox>
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
import myAxios from '../plugins/myAxios';
import { ElMessage } from 'element-plus'
import router from '../config/router';
import getUserMsg from '../functions/getUserMsg';

// do not use same name with ref
const form = reactive({
    phoneNumber: '',
    verificationCode: '',
})
const handleLogin = async (user: { phoneNumber: string, verificationCode: string }) => {
    let obj = {
        phoneNumber: user.phoneNumber,
        userPassword: user.verificationCode
    }
    try {
        // 创建章节，即将章节信息传给后端，存入数据库
        const response = await myAxios.post('/user/login', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        localStorage.setItem('token', response.data.data.jwt)
        ElMessage({
            showClose: true,
            message: '登录成功',
            type: 'success',
        })
        await getUserMsg()
        router.push('/')
        console.log(response);
    } catch (error) {
        ElMessage({
            showClose: true,
            message: '账号或密码错误',
            type: 'error',
        })
        console.error('账号或密码错误', error);
    }
}

//
import { ref } from 'vue';
import Slider from "../components/Slider.vue";

const show = ref(false);
const loginForm = ref({});

const onShow = () => {
    show.value = true;
};

const onClose = () => {
    show.value = false;
};

// 获取滑动验证码
const getImg = (callback) => {
    sliderCaptcha().then((res) => {
        callback(res.data.data);
    }, error => {
        callback(error);
    });
};

// 操作滑动后返回值，并传去后端验证
const validImg = (movePercent, id, callback) => {
    loginForm.value.code = movePercent; // 手动定位返回的值
    loginForm.value.key = id; // 后台返回的id，再传回去
    handleLogin(); // 登陆请求方法
    callback(false);
    show.value = true;
};

//微信登录请求
import axios from 'axios';

const qrCodeUrl = ref(null);

const getWechatQRCode = async () => {
    try {
        // 请求后端接口获取二维码 URL
        const response = await axios.get('/api/wechat-login-qrcode');
        qrCodeUrl.value = response.data.url; // 假设后端返回的数据中有 url 字段
    } catch (error) {
        console.error('获取二维码失败:', error);
    }
};

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
</style>../functions/Request../functions/getUserMsg