<template>
    <div class="w-margin news_nav">
        <!-- <el-menu :default-active="defaultMenu" :router="true" class="el-menu-demo" mode="horizontal" :ellipsis="false">
            <el-menu-item index="/news">新闻资讯</el-menu-item>
            <el-menu-item index="/pictures">精彩图片</el-menu-item>
            <el-menu-item index="/mediaVideo">精彩花絮</el-menu-item>
        </el-menu> -->
        <el-tabs v-model="activeTab" @click="goToPage(activeTab)" type="card" class="demo-tabs">
            <el-tab-pane label="新闻资讯" name="/news"></el-tab-pane>
            <el-tab-pane label="精彩图片" name="/pictures"></el-tab-pane>
            <el-tab-pane label="精彩花絮" name="/mediaVideo"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();

const activeTab = ref(route.path)
const goToPage = (item: string) => {
    router.push(item)
}

// const defaultMenu = computed(() => { return route.path })
</script>

<style lang="scss" scoped>
:deep(.el-tabs--card>.el-tabs__header .el-tabs__item.is-active) {
    color: #303133;
    border: 0;
    background-color: #fff;
}

:deep(.el-tabs--card>.el-tabs__header .el-tabs__item.is-active) {
    border-bottom: 0;
}

:deep(.el-tabs--card>.el-tabs__header .el-tabs__item) {
    border-left: 0;
    border-radius: 25px;
}

:deep(.el-tabs--card>.el-tabs__header .el-tabs__nav) {
    border: 0;
}

:deep(.el-tabs__item) {
    border: 0;
}

:deep(.el-tabs__item:hover) {
    color: #303133;
    background-color: #fff;
    transition: opacity 1s;
}

:deep(.el-tabs__header) {
    height: 0;
    border-bottom: 0px;
}

:deep(.el-card) {
    border-radius: 15px;
}

:deep(.el-card__body) {
    background-color: rgba($color: #fff, $alpha: 0.3);
}

.news_nav {

    // margin: 0 auto;
    .el-menu-demo {
        display: flex;
        justify-content: center;
    }
}
</style>