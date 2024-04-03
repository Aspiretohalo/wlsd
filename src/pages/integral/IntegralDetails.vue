<template>
    <div class="pad">
        <div class="task">
            <h3>每日任务</h3>
            <div class="task_item" v-for="item in dailyTasks" :key="item.taskId">
                <div class="left">
                    <div class="task_msg">
                        <div class="title">
                            {{ item.taskName }}
                        </div>
                        <div class="integral">
                            <img src="../../assets/icon/金币.png" style="height: 18px;width: 18px;"><span
                                style="color: gold;"> {{ item.integral
                                }}</span>
                        </div>
                    </div>
                </div>
                <el-button round type="warning" @click="handleFinish(item)"
                    v-if="item.status == 'Available'">可领取</el-button>
                <el-button round v-else-if="item.status == 'Not completed'" plain disabled>去完成</el-button>
                <el-button round type="warning" plain disabled v-else>已领取</el-button>
            </div>
        </div>
        <div class="task">
            <h3>基础任务</h3>
            <div class="task_item" v-for="item in basicTasks" :key="item.taskId">
                <div class="left">
                    <div class="task_msg">
                        <div class="title">
                            {{ item.taskName }}
                        </div>
                        <div class="integral">
                            <img src="../../assets/icon/金币.png" style="height: 18px;width: 18px;"><span
                                style="color: gold;"> {{ item.integral
                                }}</span>
                        </div>
                    </div>
                </div>
                <el-button round type="warning" @click="handleFinish(item)"
                    v-if="item.status == 'Available'">可领取</el-button>
                <el-button round v-else-if="item.status == 'Not completed'" plain disabled>去完成</el-button>
                <el-button round type="warning" plain disabled v-else>已领取</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import addIntegralDetail from '../../functions/addIntegralDetail';
import setTaskStatus from '../../functions/Task/setTaskStatus';
import { ref, computed } from 'vue'

const Task: any = ref(JSON.parse(sessionStorage.getItem("Task") || "null") || "")
const TaskStatus: any = ref(JSON.parse(sessionStorage.getItem("TaskStatus") || "null") || "")

const mergedTasks = computed(() => {
    const merged: any = [];

    Task.value.forEach((task: any) => {
        // 查找当前任务在 TaskStatus 中的完成状态
        const status = TaskStatus.value.find((item: any) => item.taskId === task.taskId);

        if (status) {
            let taskStatus = '';
            switch (status.status) {
                case 0:
                    taskStatus = 'Not completed';
                    break;
                case 1:
                    taskStatus = 'Available';
                    break;
                case 2:
                    taskStatus = 'Claimed';
                    break;
            }
            merged.push({
                ...task,
                status: taskStatus,
            });
        } else {
            merged.push({
                ...task,
                status: 'Not completed',
            });
        }
    });
    return merged;
});
const dailyTasks = computed(() => mergedTasks.value.filter((task: any) => task.taskType === '0'));
const basicTasks = computed(() => mergedTasks.value.filter((task: any) => task.taskType === '1'));
import { ElMessage } from 'element-plus'

import { defineEmits } from 'vue';
const emit = defineEmits(['child'])
const newUser = (data1: any, data2: any) => {
    emit('child', data1, data2)
}
const handleFinish = async (task: any) => {
    await addIntegralDetail(task.taskName, task.integral)
    await setTaskStatus(task.taskId)
    TaskStatus.value = JSON.parse(sessionStorage.getItem("TaskStatus") || "null") || ""
    updateTaskCompletionStatus()
    newUser(JSON.parse(sessionStorage.getItem("User") || "null") || "",
        JSON.parse(sessionStorage.getItem("IntegralDetail") || "null") || "")


    ElMessage({
        message: '领取成功！',
        type: 'success',
    })
}
const updateTaskCompletionStatus = () => {
    // 遍历任务列表
    Task.value.forEach((task: any) => {
        // 查找当前任务在更新后的 TaskStatus 中的完成状态
        const status = TaskStatus.value.find((item: any) => item.taskId === task.taskId);
        // 如果找到了对应的完成状态，则更新任务的完成状态
        if (status) {
            switch (status.status) {
                case 0:
                    task.status = 'Not completed';
                    break;
                case 1:
                    task.status = 'Available';
                    break;
                case 2:
                    task.status = 'Claimed';
                    break;
            }
        }
    });
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

            .integral {
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>