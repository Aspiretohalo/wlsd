<template>
    <div>

        <div class="common-layout background-container">
            <el-container style="padding: 0;">
                <el-main class="main bgc">

                    <!-- 规则 排行 -->
                    <div style=" float: left;margin-left: 50px; margin-top: 150px;">
                        <el-button style="font-size: 18px;" @click="goBack" type="primary" plain
                            size="large">返回</el-button>
                        <el-button style=" font-size: 18px;" @click="checkRule" type="primary"
                            size="large">规则</el-button>
                        <h3 style="margin-top: 20px;">
                            排行榜
                        </h3>
                        <div style="width: 180px;margin-top: 20px; background-color: #fff; height: 450px;">
                            <el-table :data="rankData" height="450" style="width: 100%;background: transparent;">
                                <el-table-column prop="Ranking" label="排名" width="60" />
                                <el-table-column prop="province" label="省份" width="60" />
                                <el-table-column prop="score" label="分数" width="70" />
                            </el-table>
                        </div>

                    </div>

                    <div class="content w-margin">
                        <img class="img-world pixelated" src="../assets/images/ditu.jpg" alt="">
                        <div class="pos" v-for="i in Question" :key="i.question.questionId"
                            :style="i.question.position">
                            <div>
                                <div class="img_holder" @click="playGame(i.question.questionId)">
                                    <img class="lit" v-if="i.answered" src="../assets/images/jihe.gif" alt="">
                                    <img class="lit" v-else src="../assets/images/guanqia.gif" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>

        <el-dialog v-model="ruleDialogVisible" title="闯关规则" style="height: 500px;border-radius: 30px;" width="500">
            <p style="text-align: left; font-size: 16px; margin-left: 25px;">游戏介绍：</p>
            <p style="text-align: left; margin-left: 70px;">1.每道题目仅有一个正确选项！</p>
            <p style="text-align: left; margin-left: 70px;">2.大会闯关题目与西湖论剑历史有关！</p>
            <p style="text-align: left; margin-left: 70px;">3.题目选择后无法更改，请慎重选择！</p>
            <p style="text-align: left; font-size: 16px; margin-left: 25px;">规则讲解：</p>
            <p style="text-align: left; margin-left: 70px;">1.每道题目仅有一次答题机会！</p>
            <p style="text-align: left; margin-left: 70px;">2.每答对一道题，增加100积分，榜上高手会有额外奖励！</p>
            <p style="text-align: left; margin-left: 70px;">3.挑战机会用完？分享活动海报和观看视频获取更多机会！</p>
        </el-dialog>

        <el-dialog v-model="centerDialogVisible" width="920"
            style="height: 650px;border-radius: 20px;background-color: transparent;" align-center
            :close-on-click-modal="false" :show-close="false">
            <div class="question">
                <img class="closeBtn" @click="centerDialogVisible = false" src="../assets/images/closeBtn.png"></img>
                <div>
                    <p class="dgtxt">{{ SingleQuestion.question.questionContent }}</p>
                    <el-radio-group v-model="selectedOption" size="large">
                        <div class="radio-container">
                            <div class="radio-item" v-for="option in options" :key="option.id">
                                <el-radio-button :label="option.id" :disabled="selectedOption !== null">
                                    {{ mappedCorrectOption(option.id) }}. {{ option.option }}
                                </el-radio-button>
                            </div>
                        </div>
                    </el-radio-group>

                    <div v-if="answer">
                        <div class="answer">
                            正确答案: {{ mappedCorrectOption(SingleQuestion.question.correctOptionId) }}
                        </div>
                        <div class="analysis">
                            {{ SingleQuestion.question.questionDescription }}
                        </div>
                    </div>

                    <div v-else>
                        <div class="answer">
                            回答错误！
                        </div>
                        <div class="analysis">
                            <el-button type="primary">分享活动</el-button>
                            <el-button type="primary">观看视频</el-button>
                        </div>
                    </div>

                </div>

                <!-- <el-button v-for="(question, index) in questions" :key="question.question" type="primary"
                        @click="renderQuestion(index)">
                        {{ index + 1 }}
                    </el-button> -->
            </div>

        </el-dialog>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
// import { ElMessage } from 'element-plus'
import getQuestionById from "../functions/getQuestionById";
import { useRouter } from 'vue-router'
const router = useRouter();
const goBack = () => {
    router.back()
}
onMounted(() => {
    setInterval(changeBackgroundColor, 3000); // 每 3 秒变换一次背景颜色
});
// 定义背景颜色数组
const backgroundColors = [
    "#ff7e5f",
    "#ffac81",
    "#ffcc70",
    "#f3e9d2",
    "#a8e6cf",
];

const currentIndex = ref(0);
// 当前背景颜色
const currentColor = ref(backgroundColors[currentIndex.value]);

const changeBackgroundColor = () => {
    currentIndex.value = (currentIndex.value + 1) % backgroundColors.length;
    currentColor.value = backgroundColors[currentIndex.value];
};
const user: any = ref(
    JSON.parse(sessionStorage.getItem("User") || "null") || ""
);
const Question: any = ref(
    JSON.parse(sessionStorage.getItem("Question") || "null") || ""
);
const SingleQuestion: any = ref([]);
const options: any = ref([
    {
        id: 1,
        option: "",
    },
    {
        id: 2,
        option: "",
    },
    {
        id: 3,
        option: "",
    },
    {
        id: 4,
        option: "",
    },
]);
const centerDialogVisible = ref(false);
// 映射ABCD
const mappedCorrectOption = computed(() => (correctOptionId: number) => {
    const mapping: { [key: number]: string } = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
    };
    return mapping[correctOptionId] || 0;
});

const playGame = async (questionId: number) => {
    await getQuestionById(questionId, user.value.userId);
    SingleQuestion.value =
        JSON.parse(sessionStorage.getItem("SingleQuestion") || "null") || "";
    options.value[0].option = SingleQuestion.value.question.option1;
    options.value[1].option = SingleQuestion.value.question.option2;
    options.value[2].option = SingleQuestion.value.question.option3;
    options.value[3].option = SingleQuestion.value.question.option4;

    centerDialogVisible.value = true;
};

const selectedOption = ref(null);

// const currentQuestionIndex = ref(0);
// const correctCount = ref(0);
// const score = ref(0);

// const currentQuestion = ref(questions[currentQuestionIndex.value]);

// const nextQuestion = () => {
//     if (currentQuestion.value.selectedOption !== null) {
//         currentQuestionIndex.value++;
//         if (currentQuestionIndex.value < questions.length) {
//             currentQuestion.value = questions[currentQuestionIndex.value];
//         }
//     } else {
//         // 在这里可以添加一些提示用户选择选项的逻辑
//         ElMessage.error('请先选择一个选项！')
//     }
// };

// const submitAnswer = () => {
//     // 判断用户是否全部回答了题目
//     const answeredQuestions = questions.filter(question => question.selectedOption !== null);

//     if (answeredQuestions.length === questions.length) {
//         // 初始化积分和正确答题数量
//         correctCount.value = 0;
//         score.value = 0;

//         // 遍历所有题目，检查用户的选择是否正确，并计算积分和正确答题数量
//         for (let i = 0; i < questions.length; i++) {
//             if (questions[i].selectedOption === questions[i].correctOptionId) {
//                 correctCount.value++;
//                 score.value += 10; // 每答对一题加10积分
//             }
//         }

//         // 显示提交成功消息
//         const message = `提交成功！你答对了${correctCount.value}道题，获得了${score.value}积分`;
//         ElMessage({
//             message: message,
//             type: 'success'
//         });

//         centerDialogVisible.value = false;

//     } else {
//         // 显示错误消息
//         ElMessage.error('您还有题目未作答！请慎重考虑！');
//     }
// };

// const renderQuestion = (index: number) => {
//     // 点击按钮时更新当前题目
//     currentQuestionIndex.value = index;
//     currentQuestion.value = questions[index];
// };

const answer = ref(false);

const ruleDialogVisible = ref(false);


const checkRule = async () => {

    ruleDialogVisible.value = true;
};

//排行榜假数据
const rankData = ref([
    { Ranking: 1, province: '北京', score: 98 },
    { Ranking: 2, province: '上海', score: 95 },
    { Ranking: 3, province: '广东', score: 92 },
    { Ranking: 4, province: '浙江', score: 90 },
    { Ranking: 5, province: '江苏', score: 89 },
]);

</script>

<style scoped lang="scss">
.background-container {
    .title {
        margin-top: 20px;
    }

    .content {
        position: relative;
        pointer-events: all;
        box-shadow: 0 0 0 5px #fff, 0 0 0 15px #0000001a, 0 0 0 25px #0000000d,
            0 0 0 35px #00000003;
        overflow: hidden;

        .img-world {
            margin: 0 auto;
            width: 100%;
            height: 700px;
        }

        .pixelated {
            image-rendering: pixelated;
        }

        .pos {
            transition: all 0.3s;
            position: absolute;
            width: 100%;
        }
    }
}

.img_holder {
    width: 100%;
    width: 46px;
    height: 46px;
    cursor: pointer;
    transition: all 0.3s;
    position: absolute;
}

.lit {
    width: 100%;
    height: auto;
    object-fit: contain;
    /* 保持图片比例并适应容器 */
    animation: 5s steps(10, end) infinite pulse;
    display: block;
}

//答题样式
// :deep(.el-backtop) {
//     width: 100%;
//     position: initial;
// }

.dialog-footer button:first-child {
    margin-right: 10px;
}

.question {
    display: flex;
    justify-content: space-around;
    background-image: url(../assets/images/question_box.png);
    background-size: cover;
    height: 600px;
    width: 900px;
    position: relative;

    .closeBtn {
        position: absolute;
        right: 0;
        top: 60px;
        height: 60px;
        cursor: pointer;
    }

    .closeBtn:hover {
        height: 50px;
        right: 5px;
        transition: 0.3s;
    }

    .dgh {
        text-align: left;
        margin-left: 50px;
    }

    .dgtxt {
        color: #000;
        margin: 20px auto;
        padding-top: 180px;
        font-size: 20px;
        width: 650px;
        text-align: justify;
    }

    .answer {
        color: red;
        position: absolute;
        left: 120px;
        top: 440px;
        font-size: 20px;
        text-align: left;
    }

    .analysis {
        position: absolute;
        width: 700px;
        left: 120px;
        top: 480px;
        font-size: 20px;
        text-align: justify;
    }
}

.radio-container {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;

    .radio-item {
        flex: 0 0 50%;
        /* Each item takes up 50% width (two items per row) */
        box-sizing: border-box;
        padding: 8px;
    }
}

:deep(.el-radio-button__inner) {
    background-color: rgba($color: #fff, $alpha: 0.5);
}
</style>
