<template>
    <div>
        <div class="common-layout">
            <el-container style="padding: 0;">
                <el-header style="height: 80px;padding: 0;">
                    <TopNav></TopNav>
                </el-header>
                <el-main class="main bgc">
                    <h1 class="w-margin" style="margin-top: 80px;display: flex;justify-content: start;">大咖云集</h1>
                    <Committee></Committee>
                    <div class="speakers w-margin">
                        <h2>大会嘉宾</h2>
                        <h5 style="margin-bottom: 30px;">speakers</h5>
                        <el-row class="data">
                            <el-col :span="5" v-for="item in AllExpert" :key="item.expertId" ref="card">
                                <!-- <img :src="item.expertImg"
                                    style="width: 150px; height: 150px;border-radius: 50%; margin-top: 20px;">
                                <div class="name">{{ item.expertName }}</div>
                                <div class="position">{{ item.expertPosition }}</div> -->
                                <div class="card">
                                    <div class="card-borders">
                                        <div class="border-top"></div>
                                        <div class="border-right"></div>
                                        <div class="border-bottom"></div>
                                        <div class="border-left"></div>
                                    </div>
                                    <div class="card-content">
                                        <img :src="item.expertImg"
                                            style="width: 150px; height: 150px;border-radius: 50%; margin-top: 20px;">
                                        <div class="name">{{ item.expertName }}</div>
                                        <div class="positon" style="margin-left: 15px;margin-right: 15px">{{
                                item.expertPosition }}</div>

                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-main>
                <el-footer style="padding: 0;">
                    <Bottom></Bottom>
                </el-footer>
            </el-container>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TopNav from '../components/TopNav.vue'
import Bottom from '../components/Bottom.vue'
import Committee from '../components/Committee.vue';
import { ref, onMounted } from 'vue'

const AllExpert = ref(JSON.parse(sessionStorage.getItem("AllExpert") || "null") || "")

onMounted(() => {
    // 创建 IntersectionObserver 实例
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // 如果目标进入视口
            if (entry.isIntersecting) {
                // 添加你的动画类或触发你的动画函数
                entry.target.classList.add('active');
                // 停止观察已经进入视口的元素
                observer.unobserve(entry.target);
            }
        });
    });

    // 遍历每个 card，并开始观察
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});



</script>

<style lang="scss" scoped>
:deep(.el-card) {
    border-radius: 15px;
}

.speakers {
    .el-col-5 {
        width: 20%;
        flex: none;
    }

    .name {
        font-size: 22px;
    }

    .position {
        padding: 0 15px;
        font-size: 12px;
    }
}

.card {
    --card-bg-color: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
    position: relative;
    width: 230px;
    color: white;

    &.active {
        .card-borders {
            .border-top {
                animation: slide-in-horizontal 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
            }

            .border-right {
                animation: slide-in-vertical 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
            }

            .border-bottom {
                animation: slide-in-horizontal-reverse 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
            }

            .border-left {
                animation: slide-in-vertical-reverse 0.8s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
            }
        }

        .card-content {
            animation: bump-in 0.5s 0.8s forwards;

            .avatar {
                animation: bump-in 0.5s 1s forwards;
            }

            .name {
                animation: fill-text-white 1.2s 2s forwards;

                &::before {
                    animation: slide-in-out 1.2s 1.2s cubic-bezier(0.75, 0, 0, 1) forwards;
                }
            }

            .position {
                animation: fade-up 1.2s 2s forwards;
            }
        }
    }

    .card-borders {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .border-top {
            position: absolute;
            top: 0;
            width: 100%;
            height: 2px;
            background: var(--card-bg-color);
            transform: translateX(-100%);
        }

        .border-right {
            position: absolute;
            right: 0;
            width: 2px;
            height: 100%;
            background: var(--card-bg-color);
            transform: translateY(100%);
        }

        .border-bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: var(--card-bg-color);
            transform: translateX(100%);
        }

        .border-left {
            position: absolute;
            top: 0;
            width: 2px;
            height: 100%;
            background: var(--card-bg-color);
            transform: translateY(-100%);
        }
    }

    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 290px;
        margin-bottom: 20px;
        padding: 40px 0 40px 0;
        background: var(--card-bg-color);
        box-shadow: 0 0px 0.7px rgba(0, 0, 0, 0.056),
            0 0px 1.7px rgba(0, 0, 0, 0.081), 0 0px 3.1px rgba(0, 0, 0, 0.1),
            0 0px 5.6px rgba(0, 0, 0, 0.119), 0 0px 10.4px rgba(0, 0, 0, 0.144),
            0 0px 25px rgba(0, 0, 0, 0.2);
        opacity: 0;
        transform: scale(0.6);

        .avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-bottom: 40px;
            opacity: 0;
            transform: scale(0.6);
        }

        .name {
            position: relative;
            font-size: 22px;
            margin-top: 14px;
            letter-spacing: 2px;
            margin-bottom: 40px;
            color: transparent;

            &::before {
                position: absolute;
                content: "";
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                color: black;
                background: white;
                transform: scaleX(0);
                transform-origin: left;
            }
        }

        .position {
            padding: 0 15px;
            font-size: 12px;
            text-align: center;
            opacity: 0;
            transform: translateY(20%);
        }
    }
}

@keyframes bump-in {
    50% {
        transform: scale(1.05);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slide-in-horizontal {
    50% {
        transform: translateX(0);
    }

    to {
        transform: translateX(100%);
    }
}

@keyframes slide-in-horizontal-reverse {
    50% {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}

@keyframes slide-in-vertical {
    50% {
        transform: translateY(0);
    }

    to {
        transform: translateY(-100%);
    }
}

@keyframes slide-in-vertical-reverse {
    50% {
        transform: translateY(0);
    }

    to {
        transform: translateY(100%);
    }
}

@keyframes slide-in-out {
    50% {
        transform: scaleX(1);
        transform-origin: left;
    }

    50.1% {
        transform-origin: right;
    }

    100% {
        transform: scaleX(0);
        transform-origin: right;
    }
}

@keyframes fill-text-white {
    to {
        color: white;
    }
}
</style>