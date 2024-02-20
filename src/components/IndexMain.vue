<template>
    <div class="main">
        <el-carousel :interval="5000" class="carousel" trigger="click">
            <el-carousel-item v-for="item in 4" :key="item" style="height: 650px;">
                <img class="banner" src="../assets/banner/2024banner.png" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="meetings">
            <Highlights></Highlights>
            <Committee></Committee>
            <div class="agenda w-margin">
                <h1>大会总览</h1>
                <h3>Conference Overview</h3>
                <div class="overview_main">
                    <img src="../assets/agenda/0.png" class="img_main" alt="">
                    <div class="words">
                        <div class="time">5月7日 09:00 - 12:00</div>
                        <div class="title">主论坛</div>
                    </div>
                </div>

                <div class="overviews">
                    <div class="overview">
                        <img src="../assets/agenda/1.png" alt="">
                    </div>
                    <div class="overview">
                        <img src="../assets/agenda/2.png" alt="">
                    </div>
                    <div class="overview">
                        <img src="../assets/agenda/3.png" alt="">
                    </div>
                    <div class="overview">
                        <img src="../assets/agenda/4.png" alt="">
                    </div>
                    <div class="overview">
                        <img src="../assets/agenda/5.png" alt="">
                    </div>
                    <div class="overview">
                        <img src="../assets/agenda/6.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Highlights from './Highlights.vue';
import Committee from './Committee.vue';
// import { useRouter } from 'vue-router'

// const router = useRouter();
// const goToAgenda = (id: Number) => {
//     router.push('/agendaDetail/' + id)
// }
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
    width: 100%;
    height: 650px;
}

.words {
    position: relative;

    .title {
        position: absolute;
        font-size: 24px;
    }
}

.agenda {
    .overview_main {
        .img_main {
            width: 100%;
            object-fit: cover;
            height: 150px;
            border-radius: 10px;
        }
    }

    .overviews {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .overview {
            width: 32.7%;

            img {
                margin-top: 8px;
                border-radius: 10px;
                width: 100%;
                object-fit: cover;
                height: 150px;
            }
        }
    }
}
</style>