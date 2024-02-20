<template>
    <div class="box">
        <Turntable></Turntable>
        <div class="record">
            <h2 style="text-align: center;margin-bottom: 20px;">抽奖记录</h2>
            <el-table :data="formattedDrawRecord" height="350" style="width: 100%">
                <el-table-column prop="drawRecordName" label="奖品" width="200px" />
                <el-table-column prop="drawRecordTime" label="中奖时间" width="200px" />
            </el-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Turntable from '../../components/Turntable.vue'
import { ref } from 'vue'
const DrawRecord: any = ref(JSON.parse(sessionStorage.getItem("DrawRecord") || "null") || "")

// 假设 DrawRecord 是从后端获取的数据数组
const formattedDrawRecord = DrawRecord.value.reverse().map((record: any) => {
    const originalDate = new Date(record.drawRecordTime);

    // 时区设置为中国
    const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

    return { ...record, drawRecordTime: formattedTime };
});

</script>

<style lang="scss" scoped>
.box {
    display: flex;
    justify-content: flex-start;

    .record {
        margin: 10px auto;
        // margin-left: 30px;
        // margin-top: 10px;
    }
}
</style>