<template>
    <div class="main">
        <!-- <el-carousel :interval="5000" class="carousel" trigger="click">
            <el-carousel-item v-for="item in 4" :key="item" style="height: 650px;">
                <img class="banner" src="../assets/banner/2024banner.png" alt="">
            </el-carousel-item>
        </el-carousel> -->
        <DisplayTextInSmoke></DisplayTextInSmoke>
        <div class="meetings">
            <div class="agenda w-margin">
                <h1>大会总览</h1>
                <h3>Conference Overview</h3>
                <div class="overview_main" @click="goToAgenda(6)">
                    <img src="../assets/agenda/0.png" class="img_main" alt="">
                    <div class="words">
                        <div class="mask">
                            <div class="time">5月7日 09:00 - 12:00</div>
                            <div class="title">主论坛</div>
                        </div>
                    </div>
                </div>
                <div class="overviews">
                    <div class="overview" @click="goToAgenda(1)">
                        <div class="front">
                            <img src="../assets/agenda/1.png" alt="">
                            <div class="words">
                                <div class="mask">
                                    <div class="time">5月5日 18:00 - 21:00</div>
                                    <div class="title">格致论道@西湖论剑</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div
                                style="color: white;font-size: 15px;text-indent:28px; padding:8px 8px 8px 8px;text-align:left">
                                "格致论道@西湖论剑是一场汇聚了来自不同领域专家的交流盛会，将于5月5日晚上18:00至21:00在西湖举行。此次论坛汇集了业界顶尖人士，他们将围绕当今社会重要议题展开讨论，分享他们的见解和经验。无论您是行业新秀还是资深专家，都将有机会从这次论坛中获得新的启发和收获。格致论道@西湖论剑，期待您的参与！"
                            </div>
                        </div>
                    </div>
                    <div class="overview" @click="goToAgenda(8)">
                        <div class="front">
                            <img src="../assets/agenda/2.png" alt="">
                            <div class="words">
                                <div class="mask">
                                    <div class="time">5月7日 13:30 - 18:00</div>
                                    <div class="title">数字中国&安全治理论坛</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div
                                style="color: white;font-size: 15px;text-indent:28px; padding:8px 8px 8px 8px;text-align:left">
                                "数字中国&安全治理论坛是一场汇聚了来自不同领域专家的交流盛会，将于5月5日晚上18:00至21:00在西湖举行。此次论坛汇集了业界顶尖人士，他们将围绕当今社会重要议题展开讨论，分享他们的见解和经验。无论您是行业新秀还是资深专家，都将有机会从这次论坛中获得新的启发和收获。"
                            </div>
                        </div>
                    </div>
                    <div class="overview" @click="goToAgenda(21)">
                        <img src="../assets/agenda/3.png" alt="">
                        <div class="words">
                            <div class="mask">
                                <div class="time">5月7日 12:30 - 13:00</div>
                                <div class="title">生态“朋友圈”</div>
                            </div>
                        </div>
                    </div>
                    <div class="overview" @click="goToAgenda(16)">
                        <div class="front">
                            <img src="../assets/agenda/4.png" alt="">
                            <div class="words">
                                <div class="mask">
                                    <div class="time"> 08:30 - 12:10</div>
                                    <div class="title">教育技术产业融合创新发展论坛</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div
                                style="color: white;font-size: 15px;text-indent:28px; padding:8px 8px 8px 8px;text-align:left">
                                "教育技术产业融合创新发展论坛是一场汇聚了来自不同领域专家的交流盛会，将于5月5日晚上18:00至21:00在西湖举行。此次论坛汇集了业界顶尖人士，他们将围绕当今社会重要议题展开讨论，分享他们的见解和经验。无论您是行业新秀还是资深专家，都将有机会从这次论坛中获得新的启发和收获。"
                            </div>
                        </div>
                    </div>
                    <div class="overview" @click="goToAgenda(7)">
                        <div class="front">

                            <img src="../assets/agenda/5.png" alt="">
                            <div class="words">
                                <div class="mask">
                                    <div class="time">5月7日 09:00 - 22:00</div>
                                    <div class="title">生态合作伙伴分论坛</div>
                                </div>
                            </div>
                        </div>
                        <div class="back">
                            <div
                                style="color: white;font-size: 15px;text-indent:28px; padding:8px 8px 8px 8px;text-align:left">
                                "生态合作伙伴分论坛是一场汇聚了来自不同领域专家的交流盛会，将于5月5日晚上18:00至21:00在西湖举行。此次论坛汇集了业界顶尖人士，他们将围绕当今社会重要议题展开讨论，分享他们的见解和经验。无论您是行业新秀还是资深专家，都将有机会从这次论坛中获得新的启发和收获。"
                            </div>
                        </div>
                    </div>
                    <div class="overview" @click="goToAgendaPage()">
                        <img src="../assets/agenda/6.png" alt="">
                        <div class="words">
                            <div class="mask1">
                                <div class="title">查看全部议程</div>
                                <div class="arrow">
                                    <img src="../assets/icon/右箭头.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Highlights></Highlights>
            <Committee></Committee>

            <!-- <Exhibitor></Exhibitor> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import Highlights from './Highlights.vue';
import DisplayTextInSmoke from './DisplayTextInSmoke.vue';
import getMeetingById from '../functions/getMeetingById';
import Committee from './Committee.vue';
// import Exhibitor from '../components/Exhibitor.vue';
import { reactive } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter();
const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")

const goToAgenda = async (id: Number) => {
    await getMeetingById(id, user.userId)

    router.push('/agendaDetail/' + id)
}
const goToAgendaPage = () => {
    router.push('/conferenceAgenda')
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
    width: 100%;
    height: 650px;
}

.agenda {

    .overview_main {
        margin-top: 40px;
        cursor: pointer;

        .img_main {
            width: 100%;
            object-fit: cover;
            height: 150px;
            border-radius: 10px;
            transition: opacity .2s ease-in-out;
        }

        .img_main:hover {
            opacity: 0.7;
        }

        .words {
            position: relative;

            .mask {
                position: absolute;
                top: -115px;
                left: 40%;
                font-size: 24px;
            }
        }
    }

    .overviews {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .overview {
            width: 32.7%;
            cursor: pointer;

            img {
                margin-top: 8px;
                border-radius: 10px;
                width: 100%;
                object-fit: cover;
                height: 150px;
                transition: opacity .2s ease-in-out;
            }

            img:hover {
                opacity: 0.7;
            }

            .words {
                position: relative;

                .mask {
                    text-align: left;
                    position: absolute;
                    top: -60px;
                    left: 4%;
                    font-size: 18px;
                    color: #fff;
                }

                .mask1 {
                    display: flex;
                    align-items: flex-start;
                    color: #fff;
                    text-align: left;
                    position: absolute;
                    top: -40px;
                    left: 4%;

                    .arrow {
                        img {
                            width: 20px;
                            height: 20px;
                            object-fit: fill;
                            margin-top: 2px;
                        }
                    }
                }
            }
        }
    }
}

.overview {
    perspective: 1000px;
}

.overview:hover .front {
    transform: rotateY(180deg);
}

.overview:hover .back {
    transform: rotateY(0deg);
}

.front,
.back {
    position: absolute;
    backface-visibility: hidden;
    transition: ease-in-out 600ms;
}

.front {
    width: 392.4px;
}

.back {
    width: 392.4px;
    height: 150px;
    margin-top: 8px;
    border-radius: 10px;
    background-color: #fff;
    // background: url('http://unsplash.it/1200x800') center center no-repeat;
    // background-image: linear-gradient(to bottom right, #002f4b, #dc4225);
    background: rgb(0, 172, 238);
    background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
    transform: rotateY(-180deg);

}

.card:hover .front {
    transform: rotateY(180deg);
}

.card:hover .back {
    transform: rotateY(0deg);
}
</style>