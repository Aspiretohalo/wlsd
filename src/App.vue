<template>
  <router-view></router-view>
  <SideBar v-if="showSider"></SideBar>

</template>

<script lang="ts" setup>
import SideBar from './components/SideBar.vue'
import { onMounted, watch, ref } from 'vue';
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

onMounted(() => {
  checkSider(); // 初始加载时检查一次
});

// 监听路由变化，每次路由变化时检查侧边栏显示状态
const unwatch = route.watch((to, from) => {
  checkSider();
});

</script>

<style></style>
