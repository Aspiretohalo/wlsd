<template>
    <div class="main index_main">
        <DisplayTextInSmoke></DisplayTextInSmoke>
        <div class="meetings">
            <div class="agenda w-margin">
                <h1 style="padding-top: 30px;"><img src="../assets/title/大会总览.png" width="400"></h1>
                <h3 style="margin-bottom: 0;color: #0c166a;">Conference Overview</h3>
                <div class="overview_main" @click="goToAgenda(6)">
                    <img src="../assets/agenda/0.png" class="img_main" alt="">
                    <div class="words">
                        <div class="mask">
                            <div class="time">5月7日 09:00 - 12:00</div>
                            <div class="title">主论坛</div>
                        </div>
                    </div>
                </div>
                <div class="overviews animate__animated animate__fadeInUp">
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
            <h1 style="padding-top: 30px;color: #0c166a;"><img src="../assets/title/优质博客.png" width="400"></h1>
            <h3 style="margin-bottom: 30px;color: #0c166a;">Excellent Blog</h3>
            <div class="blog">
                <div class="main_blog">
                    <img src="https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/blog%2Fblog1.png"
                        style="width: 550px;height: 350px;object-fit: cover;border-radius: 15px;">
                    <div class="title" style="font-size: 20px;font-weight: 700;margin-top: 5px;">“AI
                        程序员”席卷而来，吴恩达四步设计让Agent提前超越GPT-5
                    </div>
                    <div class="description" style="color: #777;text-align: justify;margin-top: 5px;">
                        <span class="topic">
                            #AI #人工智能 #吴恩达 #Agent #GPT-5
                        </span>现在，随着 AI Agents
                        的应用浮出水面，这种幻想逐渐走入了现实。Agent 可以翻译为“代理”，在 AI
                        领域有了“智能体“这一含义，是当前人工智能技术的发展方向，它可以代表用户执行任务并做出决策，具有高度的自主性和适应性。随着 AI Agents 的应用浮出水面，这种幻想逐渐走入了现实。
                    </div>
                </div>
                <div class="sub_blog">
                    <div class="post" v-for="item in topThreePosts " :key="item.id">
                        <div class="img">
                            <img :src="item.post.postCover" alt="" width="250" height="150">
                        </div>
                        <div class="post_content">
                            <el-link :underline="false" @click="goToPage(item.post.id)">
                                <h3 class="post_title">
                                    {{ item.post.title }}
                                </h3>
                            </el-link>
                            <div class="msg">
                                <div class="user">
                                    <img :src="item.user.userAvatar"
                                        style="width: 30px;height: 30px; border-radius: 50%;margin-right: 8px;" />
                                </div>
                                <div class="name" style="margin-right: 10px;">
                                    {{ item.user.userName }}
                                </div>
                                <div class="date">
                                    {{ item.post.postTime }}
                                </div>
                                <div class="tag" style="margin-left: 20px;">
                                    <el-tag v-if="item.post.type == '分享'" type="success" effect="dark">{{ item.post.type
                                        }}</el-tag>
                                    <el-tag v-else type="warning" effect="dark">{{ item.post.type }}</el-tag>
                                </div>
                            </div>
                            <div class="description">
                                <span class="topic" v-for="tag in item.post.postType.split(',')" :key="tag">
                                    #{{ tag.trim() }}
                                </span>
                                {{ item.post.postDescription }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <h1 style="padding-top: 30px;color: #0c166a;"><img src="../assets/title/大咖云集.png" width="400"></h1>
            <h3 style="margin-bottom: 0;color: #0c166a;">Gathering Of Experts</h3>
            <Committee></Committee>

            <h1 style="padding-top: 30px;color: #0c166a;"><img src="../assets/title/合作伙伴.png" width="400"></h1>
            <h3 style="margin-bottom: 0;color: #0c166a;margin-bottom: 20px;">Collaboration Partner</h3>
            <div class="partner">
                <div class="box" v-for="(box, index) in boxes" :key="index" :style="{
                    width: boxWidth(index),
                    backgroundImage: !box.expanded ? 'url(' + box.bg + ')' : 'url(' + box.bg2 + ')',
                }" @mouseover="expandBox(index)">
                    <div class="content" v-if="!box.expanded">
                        <h2 class="title">{{ box.title }}</h2>
                        <div class="imgs">
                            <div class="bg" v-if="box.expanded" v-for="i in box.partners" :key="i">
                                <img :src="i" style="width: 80px;">
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h2 class="title">{{ box.title }}</h2>
                        <div class="imgs">
                            <div class="bg" v-if="box.expanded && showImage" v-for="i in box.partners" :key="i">
                                <img :src="i" style="width: 80px;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <Exhibitor></Exhibitor> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import Highlights from './Highlights.vue';
import DisplayTextInSmoke from './DisplayTextInSmoke.vue';
import getMeetingById from '../functions/getMeetingById';
import Committee from './Committee.vue';
import getPostById from '../functions/getPostById';
import getPostByIdNotLogin from '../functions/notLogin/getPostByIdNotLogin';
import getAllPostCommentNotLogin from '../functions/PostComment/notLogin/getAllPostCommentNotLogin';
import getAllPostComment from '../functions/PostComment/getAllPostComment';
import getPostCommentCount from '../functions/PostComment/getPostCommentCount';
// import Exhibitor from '../components/Exhibitor.vue';
import { reactive, ref, watch } from 'vue'


const showImage = ref(false);
const boxes = ref([
    {
        expanded: true,
        title: '生态合作伙伴',
        partners: [
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png",
            'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png",
            "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png"
        ]
        , bg: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/highlight%2F%E4%BA%AE%E7%82%B9%E8%83%8C%E6%99%AF_%E6%9C%AA%E5%B1%95%E5%BC%80.png',
        bg2: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/highlight%2F%E5%B1%95%E5%BC%801.png',
    }, // 初始时第一个 box 展开
    {
        expanded: false, title: '战略合作伙伴',
        partners: [
            "https://img2023.gcsis.cn/2023/4/60234dda9f664775a5b991bd8412dca1.png",
            "https://ala-gift.cdn.bcebos.com/gift/2023-9/1694673658416/%E5%92%96%E5%95%A1%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%403x.png",
            "https://ala-gift.cdn.bcebos.com/gift/2023-9/1694673663919/%E9%A4%90%E9%A5%AE%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%403x.png",
            "https://ala-gift.cdn.bcebos.com/gift/2023-9/1694685067453/%E8%BD%BB%E9%A3%9F%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%403x.png",
            "https://ala-gift.cdn.bcebos.com/gift/2023-9/1694682256942/%E9%9B%B6%E9%A3%9F%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%403x.png",
            "https://ala-gift.cdn.bcebos.com/gift/2023-9/1694682045449/%E8%B5%9E%E5%8A%A9%E5%95%86%402x_19.png",
        ]
        , bg: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/highlight%2F%E4%BA%AE%E7%82%B9%E8%83%8C%E6%99%AF2_%E6%9C%AA%E5%B1%95%E5%BC%80.png',
        bg2: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/highlight%2F%E5%B1%95%E5%BC%802.png',
    },
    {
        expanded: false, title: '新闻媒体',
        partners: [
            "https://img2023.gcsis.cn/2024/4/62f13ffc63b244539bde19bfd9aed55c.png",
            "https://img2023.gcsis.cn/2023/4/5c64dfd9685d4ea0b48a4df497a28669.png",
            "https://img2023.gcsis.cn/2023/4/e0ac725f69aa45229e72e8c451393147.png",
            "https://img2023.gcsis.cn/2023/4/2933697fbe214fe2aec9457a124ba92f.png",
            "https://img2023.gcsis.cn/2023/4/e4d7fcbe27f94fa0a1ecb8b9d9b7aa90.png",
            "https://img2023.gcsis.cn/2024/4/2e4d265afd1542f3b8e3f176278f5090.png",

        ]
        , bg: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/highlight%2F%E4%BA%AE%E7%82%B9%E8%83%8C%E6%99%AF3_%E6%9C%AA%E5%B1%95%E5%BC%80.png',
        bg2: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/highlight%2F%E5%B1%95%E5%BC%803.png',
    }
]);

const expandBox = (index: number) => {
    boxes.value.forEach((box, i) => {
        if (i === index) {
            box.expanded = true;
        } else {
            box.expanded = false;
        }
    });
};
watch(boxes, () => {
    showImage.value = false; // Hide images when boxes change
    setTimeout(() => {
        showImage.value = true; // Show images after 1 second
    }, 500);
}, { deep: true });
const boxWidth = (index: number) => {
    return boxes.value[index].expanded ? '700px' : '250px';
};
import { useRouter } from 'vue-router'

const router = useRouter();
const user: any = reactive(JSON.parse(sessionStorage.getItem("User") || "null") || "")
const token: any = ref(localStorage.getItem('token') || null)
const goToPage = async (id: number) => {
    if (token.value != null) {
        await getPostById(id)
        await getAllPostComment(id, user.userId)
    } else {
        await getPostByIdNotLogin(id)
        await getAllPostCommentNotLogin(id)
    }
    await getPostCommentCount(id)
    router.push('/postDetail/' + id)
}
const goToAgenda = async (id: Number) => {
    await getMeetingById(id, user.userId)

    router.push('/agendaDetail/' + id)
}
const goToAgendaPage = () => {
    router.push('/conferenceAgenda')
}
const AllPost: any = ref(JSON.parse(sessionStorage.getItem("AllPost") || "null") || "")

const formattedData = AllPost.value.map((item: any) => {
    const originalDate = new Date(item.post.postTime);

    // 时区设置为中国
    const formattedTime = originalDate.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

    return { ...item, post: { ...item.post, postTime: formattedTime } };
});
const topThreePosts = formattedData
    .slice() // 克隆数组以避免改变原始数组
    .sort((a: any, b: any) => b.post.views - a.post.views) // 按浏览量降序排序
    .slice(0, 3); // 取前三条数据

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

.blog {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 80px;
    width: 1200px;

    .main_blog {
        .title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
        }

        .topic {
            font-size: 15px;
            font-weight: 700;
            color: #000;
        }
    }

    .sub_blog {
        margin-left: 20px;

        .post {
            display: flex;
            justify-content: flex-start;
            border-bottom: 1px solid #ababab;
            padding: 5px;

            img {
                border-radius: 8px;
            }

            .post_content {
                text-align: left;
                width: 350px;
                padding-left: 20px;
            }

            .description {
                font-size: 14px;
                color: #6b6b6b;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;

                .topic {
                    font-size: 15px;
                    font-weight: 700;
                    color: #000;
                }
            }

            .msg {
                display: flex;
                justify-content: flex-start;
            }
        }
    }
}

.partner {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    margin-bottom: 80px;

    .content {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
    }

    .box {
        position: relative;
        height: 400px;
        margin-left: 5px;
        // background: rgba($color: #fff, $alpha: 0.7);
        background-size: cover;
        border: 1px solid #fff;
        border-radius: 10px;
        transition: 0.5s ease;
        padding: 20px;

        .title {
            font-size: 32px;
        }

        .imgs {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .bg {
                margin-left: 35px;
                margin-top: 10px;
                width: 100px;
                height: 80px;
                background: #fff;
                border-radius: 15%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }
    }
}

.banner {
    width: 100%;
    height: 650px;
}


.index_main {
    position: relative;

    .bg_tradition {
        position: absolute;
        top: 800px;
        height: 300px;
        width: 100%;
        z-index: 2000;
        background-color: #fff;
    }
}

.agenda {
    margin-bottom: 100px;

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