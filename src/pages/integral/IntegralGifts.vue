<template>
    <div class="pad">
        <h3 style="padding-left: 20px;">积分兑换</h3>
        <div class="gifts">
            <el-card class="gift_item" v-for="o in 8" :key="o">
                <img src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/e49da182c8364cb7af6d39fe2bcd2fd3.jpg"
                    alt="">
                <div class="gift_msg">
                    <div class="msg">
                        <div class="gift_name">
                            安恒小龙人抱枕
                        </div>
                        <div class="price">
                            8000
                        </div>
                    </div>
                    <el-button round>
                        兑换
                    </el-button>
                </div>

            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>

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