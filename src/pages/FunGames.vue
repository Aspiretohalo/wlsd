<template>
    <div>
        <div class="common-layout background-container">
            <el-container style="padding: 0;">
                <el-main class="main bgc">
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

        <el-dialog v-model="centerDialogVisible" title="大会知识问答" width="60%" style="height: 550px;border-radius: 20px;"
            align-center :close-on-click-modal="false">
            <div class="question">
                <div class="left">
                    <div style="margin-bottom: 30px;">
                        <p class="dgtxt">{{ SingleQuestion.question.questionContent }}</p>
                        <el-radio-group v-model="selectedOption" size="large">
                            <div class="radio-container">
                                <div class="radio-item" v-for="option in options" :key="option.id">
                                    <el-radio-button :label="option.id" :disabled="selectedOption !== null">
                                        {{ option.option }}
                                    </el-radio-button>
                                </div>
                            </div>
                        </el-radio-group>
                    </div>
                    <!-- <el-button v-for="(question, index) in questions" :key="question.question" type="primary"
                        @click="renderQuestion(index)">
                        {{ index + 1 }}
                    </el-button> -->
                </div>
            </div>
        </el-dialog>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
// import { ElMessage } from 'element-plus'
import getQuestionById from '../functions/getQuestionById';

onMounted(() => {
    setInterval(changeBackgroundColor, 3000); // 每 3 秒变换一次背景颜色
});
// 定义背景颜色数组
const backgroundColors = ['#ff7e5f', '#ffac81', '#ffcc70', '#f3e9d2', '#a8e6cf'];

const currentIndex = ref(0);
// 当前背景颜色
const currentColor = ref(backgroundColors[currentIndex.value]);

const changeBackgroundColor = () => {
    currentIndex.value = (currentIndex.value + 1) % backgroundColors.length;
    currentColor.value = backgroundColors[currentIndex.value];
};
const user: any = ref(JSON.parse(sessionStorage.getItem("User") || "null") || "")
const Question: any = ref(JSON.parse(sessionStorage.getItem("Question") || "null") || "")
const SingleQuestion: any = ref([])
const options: any = ref([
    {
        id: 1,
        option: ''
    }, {
        id: 2,
        option: ''
    }, {
        id: 3,
        option: ''
    }, {
        id: 4,
        option: ''
    },
])
const centerDialogVisible = ref(false);

const playGame = async (questionId: number) => {
    await getQuestionById(questionId, user.value.userId)
    SingleQuestion.value = JSON.parse(sessionStorage.getItem("SingleQuestion") || "null") || ""
    options.value[0].option = SingleQuestion.value.question.option1
    options.value[1].option = SingleQuestion.value.question.option2
    options.value[2].option = SingleQuestion.value.question.option3
    options.value[3].option = SingleQuestion.value.question.option4

    centerDialogVisible.value = true;
    console.log(selectedOption.value);

};

const selectedOption = ref(null)

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

</script>

<style scoped lang="scss">
.background-container {
    .title {
        margin-top: 20px;
    }

    .content {
        position: relative;
        pointer-events: all;
        box-shadow: 0 0 0 5px #fff, 0 0 0 15px #0000001a, 0 0 0 25px #0000000d, 0 0 0 35px #00000003;
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
            transition: all .3s;
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
    transition: all .3s;
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

    .left {
        .dgh {
            text-align: left;
            margin-left: 50px;
        }

        .dgtxt {
            // text-align: left;
            color: #000;
            margin-bottom: 20px;
            font-size: 25px;
        }
    }

    .right {
        width: 30%;

        .itd {
            text-align: justify;
            text-indent: 2em;
        }
    }
}

.radio-container {
    display: flex;
    flex-direction: column;
}

.radio-item {
    display: flex;
    align-items: center;
    margin-top: 10px;
}
</style>
