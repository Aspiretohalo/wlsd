<template>
    <div class="w-margin news_nav">
        <el-menu :default-active="defaultMenu" :router="true" class="el-menu-demo" mode="horizontal" :ellipsis="false">
            <el-menu-item index="/news">新闻资讯</el-menu-item>
            <el-menu-item index="/pictures">精彩图片</el-menu-item>
            <el-menu-item index="/mediaVideo">精彩花絮</el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const defaultMenu = computed(() => { return route.path })
</script>

<style lang="scss" scoped>
.news_nav {

    // margin: 0 auto;
    .el-menu-demo {
        display: flex;
        justify-content: center;
    }
}
</style>