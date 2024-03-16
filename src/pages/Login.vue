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
                            <div id="captcha-div"></div>

                            <el-form-item>
                                <el-input v-model="form.verificationCode" placeholder="验证码">
                                    <template #append>
                                        <!-- <el-button @click="onShow">发送验证码</el-button> -->
                                        <el-button v-if="!sms.disabled" @click="onShow">
                                            <span>发送验证码</span>
                                        </el-button>
                                        <el-button v-else disabled>
                                            <span>{{ sms.count }}秒后重新发送</span>
                                        </el-button>
                                    </template>
                                </el-input>
                                <!-- span显示图形码验证码是否成功 -->
                                <el-text v-if="captchaVerified" class="mx-1" type="success">图形验证码验证成功！</el-text>
                            </el-form-item>
                            <!-- <div class="slider" v-if="show"> -->
                            <!-- <Slider @getImg="getImg" @validImg="validImg" @close="onClose" :log="true"></Slider> -->
                            <!-- <Slider @close="onClose" :log="true"></Slider>
                            </div> -->

                            <div class="wxLogin">
                                <img class="wx_img" src="../assets/icon/微信.svg" @click="getWechatQRCode" width="36">
                                <div v-if="qrCodeUrl">
                                    <el-dialog v-model="centerDialogVisible" title="扫码登录" align-center width="300">
                                        <qrcode-vue :value="qrCodeUrl"></qrcode-vue>
                                    </el-dialog>
                                    <el-dialog v-model="phoneDialogVisible" title="手机号绑定" align-center width="500"
                                        style="padding: 30px">
                                        <el-form :model="form2">
                                            <el-form-item>
                                                <el-input v-model="form2.phoneNumber" placeholder="手机号" />
                                            </el-form-item>
                                            <el-form-item>
                                                <el-input v-model="form2.verificationCode" placeholder="验证码">
                                                    <!-- <template #append>
                                                        <el-button v-if="!sms.disabled" @click="onShow2">
                                                            <span>发送验证码</span>
                                                        </el-button>
                                                        <el-button v-else disabled>
                                                            <span>{{ sms.count }}秒后重新发送</span>
                                                        </el-button>
                                                    </template> -->
                                                </el-input>

                                                <!-- span显示图形码验证码是否成功 -->
                                                <!-- <el-text v-if="captchaVerified2" class="mx-1"
                                                    type="success">图形验证码验证成功！</el-text> -->
                                            </el-form-item>
                                            <div class="slider" v-if="show2" style="position: fixed;top: 250px;">
                                                <Slider @close="onClose" :log="true"></Slider>
                                            </div>
                                        </el-form>
                                        <template #footer>
                                            <div class="dialog-footer">
                                                <el-button type="primary" plain round
                                                    @click="handlePhoneCombination(form2, tempUserId); phoneDialogVisible = false">
                                                    绑定
                                                </el-button>
                                            </div>
                                        </template>
                                    </el-dialog>
                                </div>
                            </div>
                            <el-form-item>
                                <el-button class="login_btn" type="primary" round
                                    @click="handleLogin(form)">登录/注册</el-button>
                            </el-form-item>
                        </el-form>
                        <el-text class="protocol">注册或登录即代表您同意《用户协议》和《隐私协议》</el-text>
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
import handlePhoneCombination from '../functions/handlePhoneCombination';
import QrcodeVue from 'vue-qrcode';
import { ref, onMounted } from 'vue';
// import Slider from "../components/Slider.vue";

// do not use same name with ref
interface RuleForm {
    phoneNumber: string,
    verificationCode: string,
}
const form = reactive<RuleForm>({
    phoneNumber: '',
    verificationCode: '',
})
const form2 = reactive<RuleForm>({
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
const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// 根据tempUserId登录凭证的值去找登录状态
const checkLoginStatus = async () => {
    try {
        const response = await myAxios.get('/checkLoginStatus', {
            params: {
                tempUserId: tempUserId.value
            },
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });
        console.log(response);
        // 登录成功但未绑定手机号
        if (response.data.isLogin == 1 && response.data.hasPhoneNumber == 0)
            return 0
        else if (response.data.isLogin == 1 && response.data.hasPhoneNumber == 1) {
            // 登录成功且已经绑定手机号
            localStorage.setItem('token', response.data.token)
            return 1
        } else {
            // 登录失败
            return 2
        }


    } catch (error) {
        console.error('获取信息失败', error);
    }
}
const phoneDialogVisible = ref(false)

const start = async () => {
    let i = 0;
    while (i < 20) {
        // 每隔一段时间轮询一次
        await sleep(1000);

        // 检查登录状态，如果登录成功则退出轮询,并在页面作出响应
        const continuePolling = await checkLoginStatus();
        console.log(continuePolling);

        if (continuePolling == 0) {
            centerDialogVisible.value = false
            phoneDialogVisible.value = true
            break;
        } else if (continuePolling == 1) {
            centerDialogVisible.value = false
            ElMessage({
                showClose: true,
                message: '登录成功',
                type: 'success',
            })
            await getUserMsg()
            router.push('/')
            break;
        }

        console.log(`第 ${++i} 次执行`);
    }
};

//微信登录请求

const qrCodeUrl = ref(''); // 存储二维码URL

const centerDialogVisible = ref(false)
const tempUserId = ref('')
const getWechatQRCode = async () => {
    try {
        const response = await myAxios.get('/getQRCode'); // 发送请求到后端

        if (response && response.data) {
            qrCodeUrl.value = (JSON.parse(response.data.qrCodeReturnUrl)).data.qrCodeReturnUrl;
        } else {
            console.error('Error:', response.data.message);
        }
        console.log(JSON.parse(response.data.qrCodeReturnUrl).data.tempUserId)
        // 在这保存一份tempUserId登录凭证
        tempUserId.value = JSON.parse(response.data.qrCodeReturnUrl).data.tempUserId
        start();
        centerDialogVisible.value = true
    } catch (error) {
        console.error('Error:', error);
    }
};



const show = ref(false);
const show2 = ref(false);



// const onShow = () => {
//     show.value = true;

//     setTimeout(() => {
//         verifyCaptcha();
//     }, 5000);
// };
const onShow2 = () => {
    show2.value = true;

    setTimeout(() => {
        verifyCaptcha();
    }, 5000);
};
const onClose = () => {
    show.value = false;
    show2.value = false;
};

// 定义一个响应式变量，表示滑动验证码是否验证成功
const captchaVerified = ref(false);
const captchaVerified2 = ref(false);

const verifyCaptcha = () => {

    // 如果验证通过，将 captchaVerified 设置为 true
    captchaVerified.value = true;

    // 关闭图形验证码
    onClose();
    timerHandler();
};


//60s倒计时
// 验证码计时器
const sms = reactive({
    disabled: false,
    total: 60,
    count: 0
})

// 计时器处理器
const timerHandler = () => {
    sms.count = sms.total
    sms.disabled = true

    let timer = setInterval(() => {
        if (sms.count > 1 && sms.count <= sms.total) {
            sms.count--
        } else {
            sms.disabled = false
            clearInterval(timer)
        }
    }, 1000)
}



//图形验证码逻辑

import "../assets/captcha/tac.css"; // 验证码css
import "../assets/captcha/jquery.min.js"; // 验证码js
import "../assets/captcha/tac.min.js"; // 验证码js

const onShow = () => {

    // 样式配置
    const config = {
        requestCaptchaDataUrl: "http://localhost:8085/api/captcha/gen/random",
        validCaptchaUrl: "http://localhost:8085/api/captcha/check",
        bindEl: "#captcha-div",
        // 验证成功回调函数
        validSuccess: (res: any, c: any, tac: any) => {
            // login();
            console.log(res);
            captchaVerified.value = true;
            timerHandler();
            // 调用短信方法
            tac.destroyWindow();
        }
    };
    new window.TAC(config).init();
};


</script>

<style lang="scss" scoped>
:deep(.el-dialog) {
    border-radius: 15px;
}

:deep(.el-form-item__label) {
    font-size: 18px;
}

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

        .wx_img {
            cursor: pointer;
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
        font-size: 14px;
    }
}

:deep(.el-dialog--center .el-dialog__body) {
    text-align: center;
}
</style>