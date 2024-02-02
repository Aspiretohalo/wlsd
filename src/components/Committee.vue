<template>
    <div>
        <el-card class="w-margin">
            <h2>专家委员会</h2>
            <h5>Expert Committee</h5>
            <div class="demo-image">
                <el-carousel :autoplay="false" trigger="click" arrow="always" type="card">
                    <el-carousel-item class="carousel" v-for="item in AllCommittee" :key="item.committeeId">
                        <div class="Expert_Committee">
                            <img style="width: 100px; height: 100px"
                                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
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

const AllCommittee = ref(JSON.parse(sessionStorage.getItem("AllCommittee") || "null") || "")
</script>

<style lang="scss" scoped>
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
            }
        }
    }
}
</style>../functions/getUserMsg