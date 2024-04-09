<template>
    <div>
        <el-card class="w-margin box">
            <h2>专家委员会</h2>
            <h5 style="margin-bottom: 20px;">Expert Committee</h5>
            <div class="demo-image">
                <el-carousel height="500" :autoplay="false" trigger="click" indicator-position="none" arrow="always">
                    <el-carousel-item class="carousel" v-for="(item, index) in AllCommittee" :key="item.committeeId">
                        <div class="Expert_Committee" v-for="committee in getCommittees(index)"
                            :key="committee.committeeId">
                            <img class="committee-img" :src="committee.committeeImg" />
                            <div class="mask">
                                <div class="name">{{ committee.committeeName }}</div>
                                <div class="position">{{ committee.committeePosition }}</div>
                            </div>
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
const getCommittees = (index: number) => {
    const startIndex = index * 3;
    return AllCommittee.value.slice(startIndex, startIndex + 3);
}
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

.committee-img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
}

.demo-image {
    .carousel {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;

        .Expert_Committee {
            width: 33.33%;
            height: 350px;
            margin-top: 50px;
            padding: 0 10px;
            /* 可以调整图片之间的间距 */
            box-sizing: border-box;
            display: inline-block;
            text-align: center;
            position: relative;

            .mask {
                position: absolute;
                top: 170px;
                left: 50px;
                width: 210px;
                height: 100px;
                background-color: rgba($color: #d9ecff, $alpha: 0.9);
                border-radius: 8px 40px 8px 40px;
            }

            // display: flex;
            .name {
                font-size: 22px;
                // margin-top: 10px;
            }

            .position {
                font-size: 14px;
                width: 190px;
                margin: 0 auto;
            }
        }
    }
}
</style>