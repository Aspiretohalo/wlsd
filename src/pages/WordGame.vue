<template>
    <div>
        <el-button @click="goBack" style="position: absolute;left:250px;top: 50px;font-size: 18px;" type="primary" plain
            size="large">返回</el-button>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-main class="main bgc">
                    <!-- 视窗盒子 -->
                    <div style="height:100vh;">
                        <!-- 四个按钮 -->
                        <el-button :class="{ 'hidden': !buttonsVisible }" type="primary"
                            @click="hideButtons">刷单诈骗</el-button>
                        <el-button :class="{ 'hidden': !buttonsVisible }" type="primary"
                            @click="hideButtons">假冒好友</el-button>
                        <el-button :class="{ 'hidden': !buttonsVisible }" type="primary"
                            @click="hideButtons">中奖诈骗</el-button>
                        <el-button :class="{ 'hidden': !buttonsVisible }" type="primary"
                            @click="hideButtons">购物诈骗</el-button>

                        <!-- 聊天背景主体 -->
                        <div :class="{ 'hidden': buttonsVisible }" class="chatbg">
                            <!-- 图片src数据库中选取 可以更换 这里是示例 -->
                            <img src="../assets/images/jianzhi.png" class="jianzhibg" alt="">
                            <!-- 视窗控制 滚轮 -->
                            <div class="chatview">
                                <!-- 内容 比如说高度为1000大于外部容器-->
                                <div style="height: 1000px;">

                                    <!-- 左侧聊天 -->
                                    <div class="leftchat">
                                        <div class="avimgleft">
                                            <img src="../assets/images/jianzhi1.jpg" style="width: 100%;" alt="">
                                        </div>
                                        <div class="chat">
                                            <p class="pchat">
                                                你好！
                                                <!-- {{ selectedResponse.response_text }} -->
                                            </p>
                                        </div>
                                    </div>

                                    <!-- 右侧聊天 -->
                                    <div v-show="show" class="rightchat">
                                        <div class="chat1">
                                            <p class="pchat1">
                                                你好！
                                                <!-- {{ selectedOption.option_text }} -->
                                            </p>
                                        </div>
                                        <div class="avimgright">
                                            <img src="../assets/images/daigua.jpg" style="width: 100%;" alt="">
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- 选择 -->
                            <div class="msgsend">
                                <img src="../assets/images/huifu.png" style="width: 100%;" alt="">
                                <div class="choice">
                                    <p class="phover" v-for="option in options" :key="option.option_id"
                                        @click="selectOption">
                                        {{ option.option_text }}
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter();
const goBack = () => {
    router.back()
}
//按钮显示与否
const buttonsVisible = ref(true);

const hideButtons = () => {
    buttonsVisible.value = false;
}




// 定义回复内容接口
interface PtjobResponse {
    response_id: number;
    response_text: string;
}

// 定义选择内容接口
interface PtjobOption {
    option_id: number;
    option_text: string;
    ref: number; // 指向回复内容的ID
}

// 数据
const options: PtjobOption[] = [
    { option_id: 1, option_text: '你好！', ref: 1 },
    { option_id: 2, option_text: '可以尝试一下。', ref: 3 }
    // 其他选择内容数据...
];

const responses: PtjobResponse[] = [
    { response_id: 1, response_text: '亲😀~ 想不想动动手指就赚大钱！' },
    { response_id: 2, response_text: '亲~我公司新上线产品急需提高销量，邀请您兼职刷单！' },
    // 其他回复内容数据...
];

// 状态
const show = ref(false);


// 方法
const selectOption = () => {
    show.value = true;
}
</script>

<style scoped lang="scss">
.hidden {
    display: none !important;
}

.chatbg {
    width: 700px;
    height: 600px;
    margin-left: 450px;

    .jianzhibg {
        width: 100%;
    }

    .chatview {
        background-color: #EDEDED;
        width: 700px;
        height: 700px;
        overflow-y: scroll;

        .leftchat {
            float: left;
            padding-top: 10px;
            clear: both;

            .avimgleft {
                width: 95px;
                height: 95px;
                display: inline-block;
                vertical-align: top;
            }

            .chat {
                position: relative;
                font-size: 16px;
                background-color: #FFFFFF;
                height: 90px;
                margin-left: 20px;
                display: inline-block;
                vertical-align: top;
                border-radius: 20px;

                .pchat {
                    padding-top: 10px;
                    font-size: 20px;
                    padding-left: 15px;
                }
            }

            .chat:before {
                content: "";
                position: absolute;
                top: 50%;
                left: -30px;
                margin-top: -15px;
                border: 15px solid transparent;
                border-right: 15px solid #FFFFFF;
            }
        }

        .rightchat {
            float: right;
            padding-top: 10px;
            clear: both;

            .avimgright {
                width: 95px;
                height: 95px;
                display: inline-block;
                vertical-align: top;
            }


            .chat1 {
                position: relative;
                display: inline-block;
                background-color: #73F056;
                height: 90px;
                margin-right: 20px;
                display: inline-block;
                vertical-align: top;
                border-radius: 20px;

                .pchat1 {
                    padding-top: 10px;
                    font-size: 20px;
                    padding-left: 15px;
                }
            }

            .chat1:before {
                content: "";
                position: absolute;
                top: 50%;
                left: 100%;
                margin-top: -15px;
                border: 15px solid transparent;
                border-left: 15px solid #73F056;
            }
        }

    }

    .msgsend {
        position: relative;
        width: 100%;

        .choice {
            width: 500px;
            height: 100px;
            position: absolute;
            top: 40%;
            left: 45%;
            transform: translate(-50%, -50%);
            z-index: 999;
            text-align: center;
            color: black;
            font-size: 20px;

            .phover:hover {
                color: blue;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
}
</style>
