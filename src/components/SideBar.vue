<template>
    <div class="side">
        <div class="sidebar">
            <button class="sidebar-button" @click="sharePoster">分享海报</button>
        </div>
        <div class="sidebar">
            <button class="sidebar-button" @click="playGame">大会闯关</button>
        </div>
        <div class="sidebar">
            <button class="sidebar-button" @click="visitMiniProgram">小程序访问</button>
        </div>
        <div class="sidebar">
            <el-backtop visibility-height="0">
                <button class="sidebar-button" @click="goToTop">返回顶部</button>
            </el-backtop>
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
                                    <el-radio-button :label="option.id" :disabled="currentQuestion.selectedOption !== null">
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
                        <p v-if="currentQuestion.selectedOption === currentQuestion.correctOptionId" class="answer-correct"
                            style="font-size: 15px; color:green;">回答正确！
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
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { ElMessage } from 'element-plus'

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

const sharePoster = () => {
    console.log('点击了“分享海报”按钮');
};

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

const visitMiniProgram = () => {
    console.log('点击了“小程序访问”按钮');
};

const goToTop = () => {
    console.log('点击了“返回顶部”按钮');
};
</script>

<style scoped lang="scss">
:deep(.el-backtop) {
    width: 100%;
    position: initial;
}

.side {
    position: fixed;
    z-index: 1000;
    top: 35%;
    right: 0;
    background-color: #f0f0f0;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    .sidebar {
        // transform: translateY(-50%);
        width: 100px; // 调整侧边栏宽度
        padding: 20px;
        text-align: center;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .sidebar-button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s ease;
    }

    .sidebar-button:hover {
        background-color: #0056b3;
    }
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
