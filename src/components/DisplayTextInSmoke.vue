<script setup lang="ts">
import { ref } from 'vue';

const videoRef = ref<HTMLVideoElement | null>(null);
const pRef = ref<HTMLParagraphElement | null>(null);


</script>

<template>
  <div style="width: 100%">
    <div class="container">
      <video muted autoPlay preload="true" x5-video-player-fullscreen="true" x5-playsinline="true" playsInline
        webkit-playsinline="true" ref="videoRef" loop>
        <source src="../../public/background.mp4" />
      </video>
      <p ref="pRef">
        <span class="span1">西</span>
        <span class="span1">湖</span>
        <span class="span1">论</span>
        <span class="span1">剑</span>
        <span class="span1">·</span>
        <span class="span1">数</span>
        <span class="span1">字</span>
        <span class="span1">安</span>
        <span class="span1">全</span>
        <span class="span1">大</span>
        <span class="span1">会</span>
      <div class="time">
        2024.5.5-5.7
      </div>
      <div class="button">
        <el-button class="btn" round plain>购票参会</el-button>
        <el-button class="btn" round plain>预约直播</el-button>
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
    margin: 0;
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