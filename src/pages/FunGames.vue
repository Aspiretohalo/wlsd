<template>
    <div class="background-container">
        <div class="background" :style="{ backgroundColor: currentColor }"></div>
        <h1 class="hcss">大会闯关</h1>
        <!-- <h1 @click="playGame">nhao </h1> -->
        <div @click="playGame">dd</div>
        <div class="content">
            <img class="img-world pixelated" src="../assets/images/ditu.jpg" alt="">
            <div class="level">
                <div class="pos" style="width: 100%; top: 9.5%; left: 10.5%;">
                    <div>
                        <div class="img_holder" @click="playGame">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">财神庙</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 37.1%; left: 12.5%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">法喜寺</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 31.5%; left: 21%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">灵隐寺</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 23.8%; left: 12.5%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">北高峰</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 37.1%; left: 31.5%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">九溪十八涧</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 46.8%; left: 50.5%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">杭州动物园</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 39.1%; left: 62.5%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">苏堤</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 35.7%; left: 78.5%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">雷峰塔</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 14.5%; left: 45.5%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">杭州植物园</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 10%; left: 59.5%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">岳王庙</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 8.7%; left: 80.3%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">断桥</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 12%; left: 68.1%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">西冷印社</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 18.4%; left: 59.4%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">曲院风荷</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 20.1%; left: 73.6%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">湖心亭</div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 28.9%; left: 72.8%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft"></div>
                        </div> -->
                    </div>
                </div>

                <div class="pos" style="width: 100%; top: 12%; left: 68.1%;">
                    <div>
                        <div class="img_holder">
                            <img class="lit" src="../assets/images/guanqia.gif" alt="">
                        </div>
                        <!-- <div class="img_ux_title ux">
                            <div class="ft">西冷印社</div>
                        </div> -->
                    </div>
                </div>

            </div>

            <el-dialog v-model="centerDialogVisible" title="大会知识问答" width="60%" style="height: 550px;border-radius: 20px;"
                align-center>
                <div class="question">
                    <div class="left">
                        <div style="margin-bottom: 30px;">
                            <h3 class="dgh">截至目前，您答对了{{ correctCount }}道题, 获得了{{ score }}积分。</h3>
                            <p class="dgtxt">{{ currentQuestion.question }}</p>
                            <el-radio-group v-model="currentQuestion.selectedOption" size="large">
                                <div class="radio-container">
                                    <div class="radio-item" v-for="option in currentQuestion.options" :key="option.id">
                                        <el-radio-button :label="option.id"
                                            :disabled="currentQuestion.selectedOption !== null">
                                            {{ option.text }}
                                        </el-radio-button>
                                    </div>
                                </div>
                            </el-radio-group>
                        </div>
                        <el-button v-for="(question, index) in questions" :key="question.question" type="primary"
                            @click="renderQuestion(index)">
                            {{ index + 1 }}
                        </el-button>
                    </div>

                    <div class="right">
                        <h2>答案解析</h2>
                        <div v-if="currentQuestion.selectedOption !== null">
                            <p v-if="currentQuestion.selectedOption === currentQuestion.correctOptionId"
                                class="answer-correct" style="font-size: 15px; color:green;">回答正确！
                            </p>
                            <p v-else class="answer-incorrect" style="font-size: 15px; color:red;">回答错误！正确答案是：{{
                                currentQuestion.options.find(option => option.id ===
                                    currentQuestion.correctOptionId)?.text }}</p>
                            <div class="itd">
                                <p>{{ currentQuestion.description }}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="nextQuestion"
                            v-if="currentQuestionIndex < questions.length - 1">下一题</el-button>
                        <el-button type="primary" @click="submitAnswer" v-else>完成</el-button>
                    </span>
                </template>


            </el-dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus'

// 定义背景颜色数组
const backgroundColors = ['#ff7e5f', '#ffac81', '#ffcc70', '#f3e9d2', '#a8e6cf'];

const currentIndex = ref(0);
// 当前背景颜色
const currentColor = ref(backgroundColors[currentIndex.value]);

const changeBackgroundColor = () => {
    currentIndex.value = (currentIndex.value + 1) % backgroundColors.length;
    currentColor.value = backgroundColors[currentIndex.value];
};

onMounted(() => {
    setInterval(changeBackgroundColor, 3000); // 每 3 秒变换一次背景颜色
});



//题目
interface Option {
    id: number;
    text: string;
}

interface Question {
    question: string;
    description: string;
    options: Option[];
    selectedOption: number | null;
    correctOptionId: number;
}


const questions: Question[] = [
    {
        question: '西湖论剑从那一哪年开始的？',
        options: [
            { id: 1, text: '1998' },
            { id: 2, text: '2003' },
            { id: 3, text: '2012' },
            { id: 4, text: '2020' }
        ],
        selectedOption: null,
        correctOptionId: 3,
        description: '西湖论剑·网络安全大会（简称“西湖论剑”）是国内网络安全领域最具影响力的大会之一，自2012年创办至今，已成功举办11届，也是国内首个已举办十周年的网络安全大会。'

    },

    {
        question: '蔡徐坤的幸运数字是什么？',
        options: [
            { id: 1, text: '0' },
            { id: 2, text: '2.5' },
            { id: 3, text: '10' },
            { id: 4, text: '630' }
        ],
        selectedOption: null,
        correctOptionId: 2,
        description: '基尼太没！'

    },

    {
        question: '蔡徐坤最喜欢的是什么？',
        options: [
            { id: 1, text: '唱' },
            { id: 2, text: '跳' },
            { id: 3, text: 'rap' },
            { id: 4, text: '篮球' }
        ],
        selectedOption: null,
        correctOptionId: 4,
        description: '基尼太没！'

    },

    {
        question: '蔡徐坤的口头禅是什么',
        options: [
            { id: 1, text: '你干嘛嗨哟' },
            { id: 2, text: '哇真的是你啊' },
            { id: 3, text: '哎呦' },
            { id: 4, text: 'ji！' }
        ],
        selectedOption: null,
        correctOptionId: 1,
        description: '基尼太没！'

    },
    {
        question: '蔡徐坤最喜欢的是什么？',
        options: [
            { id: 1, text: '唱' },
            { id: 2, text: '跳' },
            { id: 3, text: 'rap' },
            { id: 4, text: '篮球' }
        ],
        selectedOption: null,
        correctOptionId: 4,
        description: '基尼太没！'
    },
    // 添加更多题目...
];

const currentQuestionIndex = ref(0);
const correctCount = ref(0);
const score = ref(0);

const currentQuestion = ref(questions[currentQuestionIndex.value]);

const nextQuestion = () => {
    if (currentQuestion.value.selectedOption !== null) {
        currentQuestionIndex.value++;
        if (currentQuestionIndex.value < questions.length) {
            currentQuestion.value = questions[currentQuestionIndex.value];
        }
    } else {
        // 在这里可以添加一些提示用户选择选项的逻辑
        ElMessage.error('请先选择一个选项！')
    }
};



const centerDialogVisible = ref(false);

const playGame = () => {
    console.log('点击了“大会闯关”按钮');
    centerDialogVisible.value = true;
};

const submitAnswer = () => {
    // 判断用户是否全部回答了题目
    const answeredQuestions = questions.filter(question => question.selectedOption !== null);

    if (answeredQuestions.length === questions.length) {
        // 初始化积分和正确答题数量
        correctCount.value = 0;
        score.value = 0;

        // 遍历所有题目，检查用户的选择是否正确，并计算积分和正确答题数量
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].selectedOption === questions[i].correctOptionId) {
                correctCount.value++;
                score.value += 10; // 每答对一题加10积分
            }
        }

        // 显示提交成功消息
        const message = `提交成功！你答对了${correctCount.value}道题，获得了${score.value}积分`;
        ElMessage({
            message: message,
            type: 'success'
        });

        centerDialogVisible.value = false;

    } else {
        // 显示错误消息
        ElMessage.error('您还有题目未作答！请慎重考虑！');
    }
};



const renderQuestion = (index: number) => {
    // 点击按钮时更新当前题目
    currentQuestionIndex.value = index;
    currentQuestion.value = questions[index];
};

</script>

<style scoped lang="scss">
.hcss {
    margin-top: 18px;
}

.background-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 1s ease-in-out;
    z-index: -1;
}

h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.content {
    // width: 300px;
    // height: 333px;
    // overflow-y: scroll;
    // height: 100%;
    // overscroll-behavior: none;
    pointer-events: all;
    // width: 40vw;
    // min-width: 30vh;
    // max-width: 50vh;
    position: fixed;
    top: 16vh;
    // bottom: 8vh;
    left: 50vw;
    // overflow: scroll;
    transform: translate(-50%);
    box-shadow: 0 0 0 5px #fff, 0 0 0 15px #0000001a, 0 0 0 25px #0000000d, 0 0 0 35px #00000003;
}

.img-world {
    width: 100%;
}

.pixelated {
    image-rendering: pixelated;
}

.level {
    // pointer-events: none;
    width: 100%;
    height: 1300px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

.pos {
    transition: all .3s;
    position: absolute;
    transform: translateY(-100%);
}

.img_holder {
    // width: 12%;

    width: 46px;
    height: 46px;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    transform: translate(-50%);
}

.lit {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* 保持图片比例并适应容器 */
    animation: 5s steps(10, end) infinite pulse;
    display: block;
}

.img_ux_title {
    position: absolute;
    bottom: 100%;
    left: 0%;
    transform: translate(-50%)translateY(-10px);
}

.ux {
    font-size: 30px;
    background-color: black;
    z-index: 9999;
    pointer-events: all;
    position: absolute;
    border: 3px solid #ffffff;

    .ft {
        color: #fff;
    }
}

//答题样式
:deep(.el-backtop) {
    width: 100%;
    position: initial;
}


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
