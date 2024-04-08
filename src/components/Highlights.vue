<template>
    <div class="bg">
        <div class="Conference_Highlights w-margin">
            <h1 style="padding-top: 30px;color: #0c166a;"><img src="../assets/title/大会亮点.png" width="400"></h1>
            <h3 style="margin-bottom: 0;color: #0c166a;">Conference Highlights</h3>
            <el-row class="data">
                <LineCombination></LineCombination>
            </el-row>
            <div class="Highlights">
                <el-card class="Highlights_card" :body-style="{ backgroundColor: item.style, height: '100%' }"
                    v-for="item in Highlights" :key="item.style">
                    <h2>{{ item.HighlightsTitle }}</h2>
                    <div style="text-align: justify;text-indent: 2em;">{{ item.HighlightsDescription }}</div>
                </el-card>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
// import { Plus } from '@element-plus/icons-vue'
import LineCombination from './LineCombination.vue'
import { ref } from 'vue';
// const highlight_data = ref([
//     {
//         title: '主题演讲',
//         data: '500',
//     }, {
//         title: '合作伙伴',
//         data: '550',
//     }, {
//         title: '与会嘉宾',
//         data: '10000',
//     }, {
//         title: '行业从业者',
//         data: '10万',
//     }, {
//         title: '直播观看',
//         data: '2500万',
//     },
// ])
const Highlights = ref([
    {
        HighlightsTitle: '议题更前沿',
        HighlightsDescription: '大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作。',
        style: 'rgba(240, 240, 251, 0.7)',
    }, {
        HighlightsTitle: '线上更精彩',
        HighlightsDescription: '“掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。',
        style: 'rgba(243, 249, 252, 0.7)',
    }, {
        HighlightsTitle: '成果更显著',
        HighlightsDescription: '将推出国内首份《2023中国数字安全能力洞察报告》，报告涵盖趋势、科技、人才、实践等多部分内容，引领行业发展方向。',
        style: 'rgba(254, 242, 240, 0.7)',
    },
])
</script>

<style lang="scss" scoped>
h3 {
    margin: 20px auto;
}

.bg {
    // background-image: url(../assets/bg.jpg);
    background-size: cover;
    padding-bottom: 70px;
    padding-top: 30px;
}

.Conference_Highlights {
    .data {
        margin-top: 50px;
    }

    .el-col-5 {
        width: 20%;
        flex: none;
    }

    :deep(.el-statistic__content) {
        font-size: 32px;
    }

    .Highlights {
        margin: 30px auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .Highlights_card {
            width: 32%;
            border-radius: 15px;
        }
    }
}

:deep(.el-card) {
    background: rgba($color: #fff, $alpha: 0.5);
}

.Highlights_card:hover {
    transform: translateY(-40px);
}
</style>