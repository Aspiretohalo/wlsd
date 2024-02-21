<template>
    <div class="pad">
        <div class="task">
            <h3>每日任务</h3>
            <div class="task_item" v-for="o in 2" :key="o">
                <div class="left">
                    <img src="../../assets/icon/积分.svg" alt="" width="40" height="40">
                    <div class="task_msg">
                        <div class="title">
                            观看会议视频超过1min
                        </div>
                        <div class="integral">
                            40积分
                        </div>
                    </div>
                </div>

                <el-button round>去完成</el-button>
            </div>
        </div>
        <div class="task">
            <h3>基础任务</h3>
            <div class="task_item">
                <div class="left">
                    <img src="../../assets/icon/积分.svg" alt="" width="40" height="40">
                    <div class="task_msg">
                        <div class="title">
                            完善资料
                        </div>
                        <div class="integral">
                            100积分
                        </div>
                    </div>
                </div>
                <el-button round>去完成</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

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

        .left {
            display: flex;
            justify-content: flex-start;

            .task_msg {
                margin-left: 20px;
            }
        }
    }
}
</style>