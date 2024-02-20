<template>
    <div>
        <el-card class="w-margin box">
            <h2>专家委员会</h2>
            <h5>Expert Committee</h5>
            <div class="demo-image">
                <el-carousel :autoplay="false" trigger="click" indicator-position="none" arrow="always" type="card">
                    <el-carousel-item class="carousel" v-for="item in AllCommittee" :key="item.committeeId">
                        <div class="Expert_Committee">
                            <img style="width: 150px; height: 150px;border-radius: 50%;" :src="item.committeeImg" />
                            <div class="name">{{ item.committeeName }}</div>
                            <div class="position">{{ item.committeePosition }}</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
const AllCommittee = ref([] as {
    committeeId: number;
    committeeImg: string;
    committeeName: string;
    committeePosition: string;
}[]);

onMounted(async () => {
    setTimeout(() => {
        AllCommittee.value = JSON.parse(sessionStorage.getItem("AllCommittee") || "null")
    }, 1000)

})

</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

:deep(.el-carousel__mask) {
    background-color: transparent;
}

.box {
    background-color: rgba($color: #fff, $alpha: 0.3);

}

.demo-image {
    .carousel {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;

        .Expert_Committee {

            // display: flex;
            .name {
                font-size: 22px;
            }

            .position {
                font-size: 14px;
                width: 200px;
            }
        }
    }
}
</style>