<template>
    <div>
        <el-card class=" w-margin">
            <h2>展商风采</h2>
            <h5>Exhibitor Style</h5>
            <div class="Exhibitors">
                <div class="img" v-for="src in srcList">
                    <img :src="src" alt="" width="100px">
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
const srcList = [
    'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png",
    "https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png"
]
</script>

<style lang="scss" scoped>
.Exhibitors {
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .img {
        width: 200px;
    }
}
</style>