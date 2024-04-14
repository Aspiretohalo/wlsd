<template>
    <div class="center-container">
        <button v-show="!showVideo && !finish_record" class="custom-btn btn-6"
            @click="openCameraModal"><span>认证身份</span></button>
        <el-dialog v-model="dialogVisibleVideo" width="450" style="border-radius: 15px;" align-center>
            <video ref="video" v-show="showVideo" autoplay width="400" height="300"></video>
            <img v-if="showImage" class="finished-image" width="400"
                src="https://wlsd-1317662942.cos.ap-nanjing.myqcloud.com/%E6%89%93%E5%8D%A1%E8%AE%A4%E8%AF%81%2F%E5%9B%BE1.jpg"
                alt="Finished Image">
            <el-upload class="upload-demo" action="#">
                <el-button type="primary" round v-if="uploaded == 0" @click="handleUpload(); dialogVisible = false"
                    plain>
                    上传照片
                </el-button>
                <el-button type="success" round disabled v-else-if="uploaded == 1" @click=" dialogVisible = false">
                    打卡成功
                </el-button>
                <el-button type="danger" round disabled v-else-if="uploaded == 2" @click=" dialogVisible = false">
                    打卡失败
                </el-button>
                <el-button type="primary" round disabled v-else plain>
                    审核中
                </el-button>
            </el-upload>

        </el-dialog>

        <!-- <button v-show="sure_btn" class="custom-btn btn-4" @click="save_img">确认</button>
        <input v-show="upload_img" type="file" @change="handleFileUpload" accept="image/*">
        <button v-show="upload_img" @click="toggleRecognition">上传并识别</button> -->

    </div>
</template>

<script>
import axios from "axios";
import { ElMessage } from 'element-plus'
export default {
    data() {
        return {
            uploaded: 0,
            dialogVisibleVideo: false,
            mediaStream: null,
            mediaRecorder: null,
            showVideo: false,
            showImage: false,
            finish_record: false,
            sure_btn: false,
            upload_img: false,
            fileToUpload: null,
            User_name: "ZBH",
            chunks: [], // 用于存储录制的视频数据块
            fileName: "ZBH" // 录制视频文件名
        };
    },
    methods: {
        handleUpload() {
            // 模拟上传成功后的处理
            setTimeout(() => {
                // 设置对应项的上传状态为 true
                this.showImage = true;
                // 审核中
                this.uploaded = 3;
                setTimeout(() => {
                    // 设置对应项的上传状态为 true
                    // 上传成功
                    this.uploaded = 1;
                    ElMessage({
                        message: '打卡成功！',
                        type: 'success',
                    })
                }, 5000);
            }, 5000);

        },
        async openCameraModal() {
            this.dialogVisibleVideo = true
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                this.$refs.video.srcObject = stream;
                this.showVideo = true;
                this.mediaRecorder = new MediaRecorder(stream);

                this.mediaRecorder.ondataavailable = (e) => {
                    this.chunks.push(e.data);
                };

                this.mediaRecorder.onstop = async () => {
                    const blob = new Blob(this.chunks, { type: "video/mp4" });
                    const file = new File([blob], this.fileName, { type: "video/mp4" });

                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("filenames", this.fileName);

                    try {
                        // const response = await axios.post("http://localhost:8090/upload-video/", formData, {
                        //     headers: {
                        //         "Content-Type": "multipart/form-data"
                        //     }
                        // });
                        // console.log(response.data);
                    } catch (error) {
                        console.error("Error uploading video:", error);
                    }

                    this.chunks = [];
                };

                // 开始录制
                this.mediaRecorder.start();

                // 设置录制时长，这里设置为5秒
                setTimeout(() => {
                    this.closeCamera();
                    ElMessage({
                        message: '录制完成',
                        type: 'success',
                    })
                    // this.dialogVisibleVideo = false
                    // console.log(this.dialogVisibleVideo);
                }, 5000);

            } catch (error) {
                console.error("Error accessing camera:", error);
            }
        },
        async closeCamera() {
            this.finish_record = true; // 设置完成录制标志
            this.showVideo = false;
            this.sure_btn = true;
            const tracks = this.$refs.video.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        },
        async save_img() {
            //可以加保存的代码
            this.showImage = false;
            this.sure_btn = false;
            this.upload_img = true;
        },
        async handleFileUpload(event) {
            this.fileToUpload = event.target.files[0];
        },
        async toggleRecognition() {
            if (!this.fileToUpload) {
                alert("Please select a file and enter a file name.");
                return;
            }
            const formData = new FormData();
            formData.append("file", this.fileToUpload);
            formData.append("filenames", this.fileName);
            try {
                const response = await axios.post("http://localhost:8090/face-recognition/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                console.log(response);
                if (response.data) {
                    window.alert("打卡成功，积分+1");
                } else {
                    window.alert("打卡失败，请重新上传");
                }
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
    }
}
</script>


<style scoped>
.center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
}

.custom-btn {
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0 rgba(255, 255, 255, .5),
        7px 7px 20px 0 rgba(0, 0, 0, .1),
        4px 4px 5px 0 rgba(0, 0, 0, .1);
    outline: none;
}

/* 4 */
.btn-4 {
    background-color: #4dccc6;
    background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
    line-height: 42px;
    padding: 0;
    border: none;
}

.btn-4:hover {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
}

.btn-4 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}

.btn-4:before,
.btn-4:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .9),
        -4px -4px 6px 0 rgba(116, 125, 136, .2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, .9),
        inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
    transition: all 0.3s ease;
}

.btn-4:before {
    height: 0%;
    width: .1px;
}

.btn-4:after {
    width: 0%;
    height: .1px;
}

.btn-4:hover:before {
    height: 100%;
}

.btn-4:hover:after {
    width: 100%;
}

.btn-4 span:before,
.btn-4 span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .9),
        -4px -4px 6px 0 rgba(116, 125, 136, .2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, .9),
        inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
    transition: all 0.3s ease;
}

.btn-4 span:before {
    width: .1px;
    height: 0%;
}

.btn-4 span:after {
    width: 0%;
    height: .1px;
}

.btn-4 span:hover:before {
    height: 100%;
}

.btn-4 span:hover:after {
    width: 100%;
}

.btn-6 {
    background: rgb(247, 150, 192);
    background: radial-gradient(circle, rgba(247, 150, 192, 1) 0%, rgba(118, 174, 241, 1) 100%);
    line-height: 42px;
    padding: 0;
    border: none;
}

.btn-6 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}

.btn-6:before,
.btn-6:after {
    position: absolute;
    content: "";
    height: 0%;
    width: 1px;
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
        -4px -4px 5px 0px rgba(255, 255, 255, 1),
        7px 7px 20px 0px rgba(0, 0, 0, .4),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
}

.btn-6:before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
}

.btn-6:after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
}

.btn-6:hover {
    background: transparent;
    color: #76aef1;
    box-shadow: none;
}

.btn-6:hover:before {
    transition: all 500ms ease;
    height: 100%;
}

.btn-6:hover:after {
    transition: all 500ms ease;
    height: 100%;
}

.btn-6 span:before,
.btn-6 span:after {
    position: absolute;
    content: "";
    box-shadow: -1px -1px 20px 0 rgba(255, 255, 255, 1),
        -4px -4px 5px 0 rgba(255, 255, 255, 1),
        7px 7px 20px 0 rgba(0, 0, 0, .4),
        4px 4px 5px 0 rgba(0, 0, 0, .3);
}

.btn-6 span:before {
    left: 0;
    top: 0;
    width: 0;
    height: .5px;
    transition: all 500ms ease;
}

.btn-6 span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: .5px;
    transition: all 500ms ease;
}

.btn-6 span:hover:before {
    width: 100%;
}

.btn-6 span:hover:after {
    width: 100%;
}

video {
    transform: scaleX(-1);
    width: 400px;
    /* 视频窗口宽度 */
    height: 300px;
    /* 视频窗口高度 */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    /* 添加阴影效果 */
}

.finished-image {
    top: 50%;
    left: 50%
}
</style>
