<template>
    <div class="main">

        <el-carousel :interval="5000" class="carousel" trigger="click">
            <el-carousel-item v-for="item in 4" :key="item" style="height: 650px;">
                <img class="banner" src="../assets/banner/2024banner.png" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="meetings">
            <div class="Conference_Agenda w-margin">
                <h1>大会议程</h1>
                <el-card class="box-card Highlights">
                    <el-button @click="goToAgenda(1)">议程</el-button>
                </el-card>
            </div>
            <Highlights></Highlights>
            <Committee></Committee>

        </div>
    </div>
</template>

<script lang="ts" setup>
import Highlights from './Highlights.vue';
import Committee from './Committee.vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const goToAgenda = (id: Number) => {
    router.push('/agendaDetail/' + id)
}
</script>

<style lang="scss" scoped>
.carousel {
    height: 650px;
    text-align: center;

    .el-carousel__item h3 {
        color: #475669;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }

    :deep(.el-carousel__indicators--horizontal) {
        bottom: 48px;

        .el-carousel__indicator--horizontal button {
            width: 16px;
            height: 16px;
            background: #ffffff;
            border-radius: 50%;
            opacity: 0.5;
        }

        .el-carousel__indicator--horizontal.is-active button {
            width: 48px;
            height: 16px;
            background: #ffffff;
            opacity: 0.5;
            border-radius: 10px;
        }

    }

    :deep(.el-carousel__arrow) {
        height: 60px;
        width: 60px;
    }

    :deep(.el-carousel__arrow--left) {
        align-items: center;
        top: 300px;
        left: 24px;
        font-size: 15px;
    }

    //右箭头
    :deep(.el-carousel__arrow--right) {
        align-items: center;
        top: 300px;
        right: 24px;
        font-size: 15px;
    }
}


.banner {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    height: 650px;
}

.demonstration {
    color: var(--el-text-color-secondary);
}
</style>