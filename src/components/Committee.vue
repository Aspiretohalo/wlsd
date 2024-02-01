<template>
    <div>
        <el-card class="w-margin">
            <h2>专家委员会</h2>
            <h5>Expert Committee</h5>
            <div class="demo-image">
                <el-carousel :autoplay="false" trigger="click" arrow="always">
                    <el-carousel-item class="carousel" v-for="item in 8" :key="item">
                        <div v-for="i in 5" :key="i" class="Expert_Committee">
                            <el-image style="width: 100px; height: 100px"
                                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill" />
                            <div class="demonstration">专家{{ i }}</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>

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
        }
    }
}
</style>../functions/getUserMsg