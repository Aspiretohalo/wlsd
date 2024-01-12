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
            <el-card class="box-card Highlights ">
                <div v-for="o in 4" :key="o" style="height: 200px;">{{ 'List item ' + o }}</div>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'

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
    }
}
</style>