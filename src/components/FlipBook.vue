<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import paper1 from "../assets/images2/html/paper1.png";
import paper2 from "../assets/images2/html/paper2.png";
import paper3 from "../assets/images2/html/paper3.png";
import paper4 from "../assets/images2/html/paper4.png";
import paper5 from "../assets/images2/html/paper5.png";
import paper6 from "../assets/images2/html/paper6.png";
import paper7 from "../assets/images2/html/paper7.png";
import paper8 from "../assets/images2/html/paper8.png";

const pagesList = [
  [paper1, paper2],
  [paper3, paper4],
  [paper5, paper6],
  [paper7, paper8],
];
const classNameArr = [
  "left-show-front-page",
  "left-show-back-page",
  "right-show-front-page",
  "right-show-back-page",
  "left-hide-front-page",
  "left-hide-back-page",
  "right-hide-front-page",
  "right-hide-back-page",
];
let leftPageIndex = 0;
let isFlipping = false;
let autoFlipInterval: NodeJS.Timeout | null = null;

const pagesRef = ref<HTMLDivElement | null>(null);

const goPreviousPage = () => {
  if (leftPageIndex <= -1 || isFlipping) return;
  isFlipping = true;
  if (pagesRef.value) {
    const { children } = pagesRef.value;
    const leftPage = children[leftPageIndex] as HTMLDivElement;
    leftPage.style.animation = "flip-to-right 2s ease-in-out forwards";
    setTimeout(() => {
      leftPage.style.zIndex = "5";
    }, 1000);
  }
  setTimeout(() => {
    leftPageIndex -= 1;
    updatePaperClass();
  }, 2000);
};

const goNextPage = () => {
  if (leftPageIndex >= pagesList.length - 1 || isFlipping)
    return;
  isFlipping = true;
  if (pagesRef.value) {
    const { children } = pagesRef.value;
    const leftNextPage = children[
      leftPageIndex + 1
    ] as HTMLDivElement;
    leftNextPage.style.animation = "flip-to-left 2s ease-in-out forwards";
    setTimeout(() => {
      leftNextPage.style.zIndex = "5";
    }, 1000);
  }
  setTimeout(() => {
    leftPageIndex += 1;
    updatePaperClass();
  }, 2000);
};

const updatePaperClass = () => {
  if (pagesRef.value) {
    const { children } = pagesRef.value;
    Array.prototype.forEach.call(
      children,
      (paper: HTMLDivElement, index: number) => {
        if (paper.attributes && paper.attributes.length) {
          if (paper.attributes.getNamedItem("data-left")) {
            paper.attributes?.removeNamedItem("data-left");
          }
          if (paper.attributes.getNamedItem("data-right")) {
            paper.attributes?.removeNamedItem("data-right");
          }
        }
        const { children } = paper;
        if (index === leftPageIndex) {
          const dataLeft = document.createAttribute("data-left");
          dataLeft.nodeValue = "true";
          paper.attributes.setNamedItem(dataLeft);
          paper.style.transform = "perspective(1000px) rotateY(-180deg)";
          paper.style.zIndex = "4";
          children[0].classList?.remove(...classNameArr);
          children[0].classList?.add("left-show-back-page");
          children[1].classList?.remove(...classNameArr);
          children[1].classList?.add("left-show-front-page");
        } else if (index === leftPageIndex + 1) {
          const dataLeft = document.createAttribute("data-right");
          dataLeft.nodeValue = "true";
          paper.attributes.setNamedItem(dataLeft);
          paper.style.transform = "perspective(1000px) rotateY(0deg)";
          paper.style.zIndex = "4";
          children[0].classList?.remove(...classNameArr);
          children[0].classList?.add("right-show-front-page");
          children[1].classList?.remove(...classNameArr);
          children[1].classList?.add("right-show-back-page");
        } else if (index < leftPageIndex) {
          paper.style.transform = "perspective(1000px) rotateY(-180deg)";
          if (index === leftPageIndex - 1) {
            paper.style.zIndex = "3";
          } else {
            paper.style.zIndex = "2";
          }
          children[0].classList?.remove(...classNameArr);
          children[0].classList?.add("left-hide-back-page");
          children[1].classList?.remove(...classNameArr);
          children[1].classList?.add("left-hide-front-page");
        } else {
          paper.style.transform = "perspective(1000px) rotateY(0deg)";
          if (index === leftPageIndex + 2) {
            paper.style.zIndex = "3";
          } else {
            paper.style.zIndex = "2";
          }
          children[0].classList?.remove(...classNameArr);
          children[0].classList?.add("right-hide-front-page");
          children[1].classList?.remove(...classNameArr);
          children[1].classList?.add("left-hide-back-page");
        }
      }
    );
  }
  isFlipping = false;
};

const autoFlip = () => {
  if (autoFlipInterval) clearInterval(autoFlipInterval);
  autoFlipInterval = setInterval(goNextPage, 5000); // 每5秒翻一页
};

onMounted(() => {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`@keyframes flip-to-left {
        from {
          transform: perspective(1000px) rotateY(0);
        }
        to {
          transform: perspective(1000px) rotateY(-180deg);
        }
      }`);
  styleSheet.insertRule(`@keyframes flip-to-right {
        from {
          transform: perspective(1000px) rotateY(-180deg);
        }
        to {
          transform: perspective(1000px) rotateY(0);
        }
      }`);

  isFlipping = true;
  updatePaperClass();
  autoFlip();
});

onUnmounted(() => {
  if (autoFlipInterval) clearInterval(autoFlipInterval);
});

const PastReview = ref([[{
  past_title: '2023  数字安全@数字中国',
  past_descrpition: '2023年“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。本届大会主题为“数字安全@数字中国”，大会将邀请相关政府部门、科研院所，以及数字生态各领域的参与者、构建者、守护者，共同探讨数字中国的发展和安全之道。',
  past_cover: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/2023%E8%A5%BF%E6%B9%96%E8%AE%BA%E5%89%91.png',
  past_url: 'https://www.gcsis.cn/'
}, {
  past_title: '2022  构建安全可信的数字世界',
  past_descrpition: '2022年西湖论剑·网络安全大会由浙江省互联网信息办公室、 浙江省经济和信息化厅、浙江省公安厅、浙江省科学技术协会、浙江省工商业联合会、 浙江省通信管理局、杭州市人民政府主办，拟于2022年7月2日-3日召开，主题为“构建安全可信的数字世界” 。',
  past_cover: 'https://img2023.gcsis.cn/2023/3/29a758735bb846ebbd97cc6253599431.jpg',
  past_url: 'https://2022.gcsis.cn/'
},],
[
  {
    past_title: '2021 安全:数字化改革之根本',
    past_descrpition: '2021年的西湖论剑大会于4月24日在杭州国际博览中心举办，本届大会主题为 “安全：数字化改革之根基”。届时，大会邀请相关主管部门领导、国内外知名专家学者、网络信息安全行业从业者们，共同解读中国网络信息安全产业政策、法规、行业标准等。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/18d77b52d6434149a4c9cf9b05820973.png',
    past_url: 'https://2021.gcsis.cn/'
  }, {
    past_title: '2020 数治安全 智理未来',
    past_descrpition: '2020西湖论剑·网络安全线上峰会，主题为“数治安全 智理未来”。通过北京、杭州两地直播间同步连线直播的形式，聚焦后疫情时代的网络安全新业态、新模式，延续两会的热议话题，邀请政府主管部门领导、知名专家学者和网络安全专家“云聚集”。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/f7d59c7c91604d93bc0ceead3971134a.png',
    past_url: 'https://2020.gcsis.cn/'
  },
],
[
  {
    past_title: '2019 安全：赋能数字新时代',
    past_descrpition: '2019年4月19日-21日在杭州国际博览中心隆重举行的主题为“安全：赋能数字新时代”的西湖论剑网络安全大会，邀请政府主管部门、知名专家学者和优秀企业家作为主讲嘉宾，系统解读政府在构建数字技术、数字经济、数字政府、数字社会等领域顶层设计。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/b609edef7ee64f02bd5e7446e1f58bb7.png',
    past_url: 'https://2020.gcsis.cn/review/2019/'
  }, {
    past_title: '2018 新时代 新安全 新力量',
    past_descrpition: '2018年4月27日，2018西湖论剑·网络安全大会在浙江杭州国际博览中心隆重召开，设置了主论坛和工业互联网信息安全、智慧城市信息安全、应急响应及威胁情报等8个分论坛。  中国科学院院士、中国工程院院士、联合国犯罪和司法研究所技术与安全项目负责人出席。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/16d1e34ed332452c9e343b94fceb44aa.png',
    past_url: 'https://2021.gcsis.cn/review/2018/index.html'
  },
],
[
  {
    past_title: '2017 智引新安全 数领大未来',
    past_descrpition: '2017西湖论剑（中国网络安全创新分享大会）在世界互联网大会永久举办地桐乡乌镇举行。 2017西湖论剑由中央网信办网络安全协调局、公安部网络安全保卫局、国家信息中心、浙江省网信办、浙江省公安厅、浙江省经信委、浙江省科技厅、浙江省通管局联合指导。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/24675cc22fec4db082693bd05707a25d.png',
    past_url: 'https://2021.gcsis.cn/review/2017/index.html'
  }, {
    past_title: '2016 安若磐石，云之可栖',
    past_descrpition: '2016年10月16日下午，2016杭州·云栖大会火爆了4天之后，在杭州云栖小镇国际会展中心落下帷幕。本届大会是今年继G20杭州峰会之后，杭州举办的首个吸引全球科技人才的大会，也是在国内科技创新及互联网等领域有着极大影响力。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/b5634e81fab6463c9128c3f361ecd843.png',
    past_url: 'https://2021.gcsis.cn/review/2016/index.html'
  },
]

])
const goTo = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div style="width: 100%">
    <div class="container">
      <div class="pages" ref="pagesRef">
        <div v-for="(item, index) in PastReview" :key="index" class="paper" style="border-radius: 20px;">
          <div class="page" style="border-radius: 20px;" @click="goTo(item[0].past_url)">
            <img :src="item[0].past_cover" />
            <div class="msg">
              <h2 class="title">{{ item[0].past_title }}</h2>
              <div class="descrpition">{{ item[0].past_descrpition }}</div>
            </div>
          </div>
          <div class="page" style="border-radius: 20px;" @click="goTo(item[1].past_url)">
            <img :src="item[1].past_cover" />
            <div class="msg">
              <h2 class="title">{{ item[1].past_title }}</h2>
              <div class="descrpition">{{ item[1].past_descrpition }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btns">
        <el-button type="primary" plain class="btn" @click="goPreviousPage">
          上一页
        </el-button>
        <el-button type="primary" plain class="btn" @click="goNextPage">
          下一页
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 0 60px;

  $paperWidth: 500px;
  $paperHeight: 500px;

  .descrpition {
    padding: 20px;
    text-align: justify;
    text-indent: 2rem
  }

  .pages {
    display: flex;
    width: $paperWidth * 2;
    height: $paperHeight;
    position: relative;

    .paper {
      display: flex;
      width: $paperWidth;
      height: $paperHeight;
      position: absolute;
      top: 0;
      left: $paperWidth;
      transform-style: preserve-3d;
      transform-origin: left center;

      &[data-left] {
        z-index: 4;
      }

      &[data-right] {
        z-index: 4;

        &+.paper {
          z-index: 3;
        }
      }

      .page {
        position: absolute;
        cursor: pointer;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform-origin: center;
        background-color: #fff;

        img {
          width: 100%;
          height: 60%;
          object-fit: cover;
        }
      }

      .left-show-front-page,
      .right-show-back-page {
        z-index: 3;
        transform: scale(-1, 1) translateZ(3px);
      }

      .left-show-back-page,
      .right-show-front-page {
        z-index: 4;
        transform: translateZ(4px);
      }

      .left-hide-front-page {
        z-index: 2;
        transform: scale(-1, 1);
      }

      .left-hide-back-page {
        z-index: 1;
      }

      .right-hide-front-page {
        z-index: 2;
      }

      .right-hide-back-page {
        z-index: 1;
        transform: scale(-1, 1);
      }
    }
  }

  .btns {
    margin-top: 50px;
    display: flex;

    .btn {
      cursor: pointer;

      &:not(:first-child) {
        margin-left: 50px;
      }
    }
  }
}
</style>
