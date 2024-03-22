<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
const videoRef = ref<HTMLVideoElement | null>(null);
const pRef = ref<HTMLParagraphElement | null>(null);

const isReserved = ref(false)
const handleReserve = () => {
  setTimeout(() => {
    ElMessage({
      message: '订阅成功，届时将会提醒您！',
      type: 'success',
    })
    isReserved.value = true
  }, 300);
}
const cancelReserve = () => {
  setTimeout(() => {
    ElMessage({
      message: '已取消订阅，将不会提醒',
      type: 'info',
    })
    isReserved.value = false
  }, 300);
}
</script>

<template>
  <div style="width: 100%">
    <div class="container">
      <video muted autoPlay preload="true" x5-video-player-fullscreen="true" x5-playsinline="true" playsInline
        webkit-playsinline="true" ref="videoRef" loop>
        <source src="../../public/background02.mp4" />
      </video>
      <p ref="pRef">
      <div class="name animate__animated animate__fadeIn">
        <img src="../assets/banner_msg/西湖论剑标题.png">
      </div>
      <div class="time animate__animated animate__fadeIn">
        <img src="../assets/banner_msg/大会时间地点.png" style="height: 40px;">
      </div>
      <div class="button">
        <img src="https://mpics.bdstatic.com/qm/202403/pic_0kRYvT_1709891815.png">
        <img src="https://mpics.bdstatic.com/qm/202403/pic_EJUmzQ_1709891831.png" v-if="!isReserved"
          @click="handleReserve">
        <img src="https://mpics.bdstatic.com/qm/202403/pic_JGUBIj_1709891846.png" v-else @click="cancelReserve">
      </div>
      </p>

    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  // height: 500px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: relative;
  top: -140px;

  .button {
    img {
      width: 200px;
      margin-right: 20px;
      cursor: pointer;
      transition: opacity .2s ease-in-out;
    }

    img:hover {
      opacity: 0.8;
    }
  }

  .name {
    animation-duration: 3s;

    img {
      opacity: 0.9;
    }
  }

  .time {
    animation-duration: 3s;

    img {
      opacity: 0.9;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: color;
    pointer-events: none;
  }

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .time {
    color: rgba($color: #fff, $alpha: 0.8);
    font-weight: 400;
    font-size: 40px;
    margin-top: 30px;
  }

  p {
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    color: rgba($color: #fff, $alpha: 0.8);
    font-size: 80px;
    font-weight: 500;
    letter-spacing: 0.2em;

    @mixin span {
      opacity: 0;
      display: inline-block;

      &:nth-child(1) {
        animation-delay: 0.5s;
      }

      &:nth-child(2) {
        animation-delay: 1.0s;
      }

      &:nth-child(3) {
        animation-delay: 1.5s;
      }

      &:nth-child(4) {
        animation-delay: 2s;
      }

      &:nth-child(5) {
        animation-delay: 2.5s;
        margin-left: 50px;
      }

      &:nth-child(6) {
        animation-delay: 3s;
        margin-left: 50px;
      }

      &:nth-child(7) {
        animation-delay: 3.5s;
      }

      &:nth-child(8) {
        animation-delay: 4s;
      }

      &:nth-child(9) {
        animation-delay: 4.5s;
      }

      &:nth-child(10) {
        animation-delay: 5s;
      }

      &:nth-child(11) {
        animation-delay: 5.5s;
      }
    }

    .span1 {
      @include span;
      animation: textAnimation1 1s linear forwards;
    }

    .span2 {
      @include span;
      animation: textAnimation2 1s linear forwards;
    }

    @keyframes textAnimation1 {
      0% {
        opacity: 0;
        transform: rotateY(90deg);
        filter: blur(10px);
      }

      100% {
        opacity: 1;
        transform: rotateY(0deg);
        filter: blur(0);
      }
    }

    @keyframes textAnimation2 {
      0% {
        opacity: 0;
        transform: rotateY(90deg);
        filter: blur(10px);
      }

      100% {
        opacity: 1;
        transform: rotateY(0deg);
        filter: blur(0);
      }
    }
  }

}
</style>