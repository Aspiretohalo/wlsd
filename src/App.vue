<template>
  <router-view></router-view>
  <SideBar v-if="showSider"></SideBar>
  <AIAsistant v-if="showSider"></AIAsistant>
</template>

<script lang="ts" setup>
import SideBar from './components/SideBar.vue'
import AIAsistant from './components/AIAsistant.vue'
import { watchEffect, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route);

const showSider = ref(true)
const checkSider = () => {
  if (route.path === '/login') {
    showSider.value = false;
  } else {
    showSider.value = true;
  }
};

// 初始加载时检查一次当前路由，以确定初始时是否应该展示侧边栏
checkSider();

// 监听路由变化，每次路由变化时检查侧边栏显示状态
watchEffect(() => {
  checkSider();
});

</script>

<style></style>
