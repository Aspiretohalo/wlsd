<template>
    <div class="pad">
        <h3 style="padding-left: 20px;">积分兑换</h3>
        <div class="gifts">
            <el-card class="gift_item" v-for="item in IntegralGifts" :key="item.id">
                <img :src="item.img" alt="">
                <div class="gift_msg">
                    <div class="msg">
                        <div class="gift_name">
                            {{ item.giftName }}
                        </div>
                        <div class="price">
                            {{ item.price }}
                        </div>
                    </div>
                    <el-button round type="warning">
                        兑换
                    </el-button>
                </div>

            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const IntegralGifts: any = ref(JSON.parse(sessionStorage.getItem("IntegralGifts") || "null") || "")
</script>

<style lang="scss" scoped>
.pad {
    padding: 20px;
}

.gifts {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .gift_item {
        margin-top: 20px;
        margin-left: 20px;
        width: 30%;
        height: 220px;

        img {
            width: 100%;
            height: 160px;
        }

        .gift_msg {
            display: flex;
            justify-content: space-between;
            padding: 10px;

            .msg {
                width: 70%;
            }

            .gift_name {
                white-space: nowrap;
                /* 不换行 */
                overflow: hidden;
                /* 隐藏溢出部分 */
                text-overflow: ellipsis;
                /* 显示省略号 */
            }

            .price {
                color: gold;
            }
        }
    }

    // .gift_item:last-child {
    //     margin-right: auto;
    // }
}
</style>