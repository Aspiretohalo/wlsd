<template>
    <div class="pad">
        <div class="task">
            <h3>每日任务</h3>
            <div class="task_item" v-for="item in task_daily" :key="item.task_name">
                <div class="left">
                    <div class="task_msg">
                        <div class="title">
                            {{ item.task_name }}
                        </div>
                        <div class="integral">
                            {{ item.task_integral }}积分
                        </div>
                    </div>
                </div>

                <el-button round @click="handleFinish(item)">去完成</el-button>
            </div>
        </div>
        <div class="task">
            <h3>基础任务</h3>
            <div class="task_item" v-for="item in task_common" :key="item.task_name">
                <div class="left">
                    <div class="task_msg">
                        <div class="title">
                            {{ item.task_name }}
                        </div>
                        <div class="integral">
                            {{ item.task_integral }}积分
                        </div>
                    </div>
                </div>
                <el-button round @click="handleFinish(item)">去完成</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import addIntegralDetail from '../../functions/addIntegralDetail';
import { ref } from 'vue'

const task_daily = ref([
    {
        task_id: 1,
        task_name: '每日登录',
        task_integral: 100,
        task_icon: '',
    },
    {
        task_id: 2,
        task_name: '每日登录',
        task_integral: 100,
        task_icon: '',
    },
])
const task_common = ref([
    {
        task_id: 1,
        task_name: '注册账户',
        task_integral: 100,
    },
    {
        task_id: 2,
        task_name: '认证身份',
        task_integral: 200,
    },
    {
        task_id: 3,
        task_name: '完善资料',
        task_integral: 300,
    },
])
import { defineEmits } from 'vue';
const emit = defineEmits(['child'])
const newUser = (data1: any, data2: any) => {
    emit('child', data1, data2)
}
const handleFinish = async (task: any) => {
    await addIntegralDetail(task.task_name, task.task_integral)
    newUser(JSON.parse(sessionStorage.getItem("User") || "null") || "",
        JSON.parse(sessionStorage.getItem("IntegralDetail") || "null") || "")
}

</script>

<style lang="scss" scoped>
.pad {
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.task {
    width: 50%;

    .task_item {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        padding-right: 30px;
        // border-bottom: 1px solid #c7c7c7;

        .left {
            display: flex;
            justify-content: flex-start;


        }
    }
}
</style>