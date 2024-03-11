<script setup lang="ts">

import { ref } from 'vue';

const PastReview = ref([
  {
    past_title: '2023  数字安全@数字中国',
    past_descrpition: '2023年“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。本届大会主题为“数字安全@数字中国”，大会将邀请相关政府部门、科研院所，以及数字生态各领域的参与者、构建者、守护者，共同探讨数字中国的发展和安全之道。大会将设主论坛、数字安全成果展、多个平行论坛及研讨会，结合数字安全前沿技术、行业应用、人才培养、企业治理等议题展开讨论、展示成果。',
    past_cover: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/2023%E8%A5%BF%E6%B9%96%E8%AE%BA%E5%89%91.png',
    past_url: 'https://www.gcsis.cn/'
  }, {
    past_title: '2022  构建安全可信的数字世界',
    past_descrpition: '2022年西湖论剑·网络安全大会由浙江省互联网信息办公室、 浙江省经济和信息化厅、浙江省公安厅、浙江省科学技术协会、浙江省工商业联合会、 浙江省通信管理局、杭州市人民政府主办，拟于2022年7月2日-3日召开，主题为“构建安全可信的数字世界” 。  作为国内首个进入十年的网络安全大会，本次大会将首设北京、杭州双主场 ，大会议题聚焦“两法一条例”落地实施、 助力 “ 浙江数字化改革 ”  高质量发展等方向 ， 从关键信息基础设施安全、数字城市安全、个人信息安全、亚运网络安全、 信创安全、云安全、元宇宙安全等网络安全数据安全的新技术、新应用、新场景出发 ， 邀请相关政府部门领导、两院院士、知名专家、 网络安全从业者等一起，分析现状、研判趋势 , 探讨“构建安全可信的数字世界”的可行路径。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/29a758735bb846ebbd97cc6253599431.jpg',
    past_url: 'https://2022.gcsis.cn/'
  }, {
    past_title: '2021 安全:数字化改革之根本',
    past_descrpition: '2021年的西湖论剑大会于4月24日在杭州国际博览中心举办，本届大会主题为 “安全：数字化改革之根基”。届时，大会邀请相关主管部门领导、国内外知名专家学者、网络信息安全行业从业者们，共同解读中国网络信息安全产业政策、法规、行业标准等，厘清网络信息安全发展方向。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/18d77b52d6434149a4c9cf9b05820973.png',
    past_url: 'https://2021.gcsis.cn/'
  }, {
    past_title: '2020 数治安全 智理未来',
    past_descrpition: '2020西湖论剑·网络安全线上峰会，主题为“数治安全 智理未来”。通过北京、杭州两地直播间同步连线直播的形式，聚焦后疫情时代的网络安全新业态、新模式，延续两会的热议话题，邀请政府主管部门领导、知名专家学者和网络安全专家“云聚集”，系统解读数字中国发展浪潮中的智慧城市安全、大数据安全、云安全、5G安全、工业互联网安全等多领域方向的最新成果，共推数字世界新时代。峰会设立1个主论坛，6个分论坛，首创青年科学家对话、首推网络安全云上展览，以更为新颖的方式，更多对话替代主题演讲，将“论”进行到底。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/f7d59c7c91604d93bc0ceead3971134a.png',
    past_url: 'https://2020.gcsis.cn/'
  }, {
    past_title: '2019 安全：赋能数字新时代',
    past_descrpition: '2019年4月19日-21日在杭州国际博览中心隆重举行的主题为“安全：赋能数字新时代”的西湖论剑网络安全大会，邀请政府主管部门、知名专家学者和优秀企业家作为主讲嘉宾，系统解读政府在构建数字技术、数字经济、数字政府、数字社会等领域顶层设计，涵盖数字经济时代网络安全最新前沿技术及创新成果分享，包括智慧城市安全、云安全、移动安全、大数据安全、工控安全、物联网安全等多个方向。包含主论坛、网络安全创新成果展、全新升级的网络安全技能大赛和十多个技术、管理及行业分论坛，共话网络安全前沿核心议题，共推数字新时代。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/b609edef7ee64f02bd5e7446e1f58bb7.png',
    past_url: 'https://2020.gcsis.cn/review/2019/'
  }, {
    past_title: '2018 新时代 新安全 新力量',
    past_descrpition: '2018年4月27日，2018西湖论剑·网络安全大会在浙江杭州国际博览中心隆重召开，设置了主论坛和工业互联网信息安全、智慧城市信息安全、应急响应及威胁情报等8个分论坛。  中国科学院院士、中国工程院院士、联合国犯罪和司法研究所技术与安全项目负责人、全球顶级网安企业代表、主管部门网络安全业务负责人等国内外知名专家学者和行业内优秀企业家围绕网络空间安全战略、关键信息基础设施保护、产业发展趋势、人才培养等领域进行了深度交流，分享了行业内最佳创新案例和安全技术实践。来自全球网络安全相关行业近3000名嘉宾出席。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/16d1e34ed332452c9e343b94fceb44aa.png',
    past_url: 'https://2021.gcsis.cn/review/2018/index.html'
  }, {
    past_title: '2017 智引新安全 数领大未来',
    past_descrpition: '2017西湖论剑（中国网络安全创新分享大会）在世界互联网大会永久举办地桐乡乌镇举行。 2017西湖论剑由中央网信办网络安全协调局、公安部网络安全保卫局、国家信息中心、浙江省网信办、浙江省公安厅、浙江省经信委、浙江省科技厅、浙江省通管局联合指导，中国网络空间安全协会、中国信息产业商会信息安全产业分会主办，杭州安恒信息技术有限公司承办。以“智引新安全，数领大未来”为主题，见证大数据、人工智能与网络安全的美丽邂逅，深刻解读《网络安全法》。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/24675cc22fec4db082693bd05707a25d.png',
    past_url: 'https://2021.gcsis.cn/review/2017/index.html'
  }, {
    past_title: '2016 安若磐石，云之可栖',
    past_descrpition: '2016年10月16日下午，2016杭州·云栖大会火爆了4天之后，在杭州云栖小镇国际会展中心落下帷幕。本届大会是今年继G20杭州峰会之后，杭州举办的首个吸引全球科技人才的大会，也是在国内科技创新及互联网等领域有着极大影响力。 大会以“飞天·进化”为主题涵盖了包括电商、网络安全、人工智能、游戏、多媒体、互联网+、政务、国际、大数据、生命科学、物联网等共计20个方向和领域，数百场主题演讲、数万平米创新展览体验区和国内外顶尖科技亮相，参会人数近4万人。',
    past_cover: 'https://img2023.gcsis.cn/2023/3/b5634e81fab6463c9128c3f361ecd843.png',
    past_url: 'https://2021.gcsis.cn/review/2016/index.html'
  },
])
</script>

<template>
  <div style="width: 100%">
    <div class="container">
      <div class="content">

        <div v-for="item in PastReview" :key="item.past_title" class="card">
          <img :src="item.past_cover" alt="" style="height: 100%;" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 60px;
  position: relative;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 900px;

    .card {
      width: 150px;
      height: 208px;
      margin: 20px;
      transform: rotateY(0);
      transition: 0.3s;
      border-radius: 6px;
      border: 5px solid #fff;
      cursor: pointer;
      position: relative;

      img {
        width: 100%;
        object-fit: cover;
      }

      &:hover {
        transform: rotateY(0) scale(1.25) !important;
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.6);

        &~.card {
          transform: rotateY(-25deg);
        }
      }
    }

    &:hover {
      .card {
        transform: rotateY(25deg);
      }
    }
  }
}
</style>
