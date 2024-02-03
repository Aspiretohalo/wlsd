<template>
    <div>
        <div class="Conference_Highlights w-margin">
            <h1>大会亮点</h1>
            <h3>Conference Highlights</h3>
            <el-row class="data">
                <el-col :span="5" v-for="i in 5" :key="i">
                    <el-statistic title="Daily active users" :value="268500">
                        <template #suffix>
                            <el-icon style="vertical-align: -0.125em">
                                <Plus />
                            </el-icon>
                        </template>
                    </el-statistic>
                </el-col>
            </el-row>
            <div class="Highlights">
                <el-card class="Highlights_card" :body-style="{ backgroundColor: item.style, height: '100%' }"
                    v-for="item in Highlights" :key="item.style">
                    <h2>{{ item.HighlightsTitle }}</h2>
                    <div style="text-align: left;">{{ item.HighlightsDescription }}</div>
                </el-card>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import { ref } from 'vue';

const Highlights = ref([
    {
        HighlightsTitle: '议题更前沿',
        HighlightsDescription: '大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作。',
        style: '#f0f0fb',
    }, {
        HighlightsTitle: '线上更精彩',
        HighlightsDescription: '“掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。',
        style: '#f3f9fc',
    }, {
        HighlightsTitle: '成果更显著',
        HighlightsDescription: '将推出国内首份《2023中国数字安全能力洞察报告》，报告涵盖趋势、科技、人才、实践等多部分内容，引领行业发展方向。',
        style: '#fef2f0',
    },
])
</script>

<style lang="scss" scoped>
.Conference_Highlights {

    h1,
    h3 {
        margin: 20px auto;
    }

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
        margin-top: 30px;
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
</style>