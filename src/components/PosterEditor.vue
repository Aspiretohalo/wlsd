<template>
    <div class="container">
        <div class="left-panel">
            <h2>可用元素</h2>
            <div v-if="draggedImage" class="dragged-image">
                <img crossorigin="anonymous" v-for="item in draggedImage" :key="item.img" :src="item.img"
                    @dragstart="handleDragStart(item, $event)" draggable="true">
            </div>
        </div>
        <div class="right-panel">
            <h2>海报预览</h2>
            <canvas ref="canvasRef" id="canvas" width="350" height="480" @drop="handleCanvasDrop"
                @dragover.prevent></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const canvasRef = ref();

onMounted(() => {
    canvasRef.value = canvasRef.value!;
});

const handleDragStart = (item: { img: string }, event: DragEvent) => {
    event.dataTransfer!.setData('text/plain', JSON.stringify(item));
};
const handleCanvasDrop = (event: DragEvent) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer!.getData('text/plain'));
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    const { img, w, h } = data; // 获取元素的图片地址、宽度和高度
    drawImageOnCanvas(img, offsetX, offsetY, w, h); // 调用绘制函数并传入宽度和高度
};

const drawImageOnCanvas = (imgSrc: string, x: number, y: number, width: number, height: number) => {
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new Image();
    //////////////////////////
    img.crossOrigin = 'anonymous'
    img.onload = function () {
        ctx.drawImage(img, x, y, width, height);
    };
    img.src = imgSrc;
};

const draggedImage = ref([
    {
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/element%2Flogo.png',
        w: 180,
        h: 35,
    },
    {
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/element%2Flogo_small.png',
        w: 100,
        h: 100,
    },
    {
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/element%2F%E5%A4%A7%E4%BC%9A%E6%97%B6%E9%97%B4%E5%9C%B0%E7%82%B9.png',
        w: 250,
        h: 22,
    },
    {
        img: 'https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/element%2F%E4%BA%AE%E7%82%B9%E8%83%8C%E6%99%AF_%E6%9C%AA%E5%B1%95%E5%BC%80.png',
        w: 350,
        h: 480,
    },
]);

const posterimg = ref();
// 绑定  需要把那个内容生成图片
import html2canvas from "html2canvas"

const handleCanvasToImage = () => {
    const canvas = canvasRef.value
    console.log(canvas);

    //    document.querySelector() document.getElementById
    // html2canvas(绑定的元素,{})
    // 海报图默认是  2倍尺寸
    html2canvas(canvas, {
        backgroundColor: '#fff',//海报的背景颜色
        useCORS: true, // 允许跨域 
        allowTaint: true,
        width: 300, //生成海报的w
        height: 480, //生成海报的h    默认是px
    }).then(canvas => {
        // canvas 其实就是我们所讲的res 的意思 返回报文的意思
        let baseImg = canvas.toDataURL("image/png");
        posterimg.value = baseImg;
        let save = document.createElement('a');
        // <a href=''></a>
        save.href = baseImg;
        // 下载的名字
        save.download = '西湖论剑·个性化海报'
        // 直接回调a的点击事件
        save.click()
    })
}
defineExpose({
    handleCanvasToImage,
})
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
}

.left-panel {
    // flex: 1;
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    width: 150px;
}

.right-panel {
    // flex: 1;
    padding: 20px;
    padding-top: 0;
}

.dragged-image img {
    width: 100px;
    margin: 20px auto;

}

canvas {
    border: 1px solid #409EFF;
}
</style>
