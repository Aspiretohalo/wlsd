<template>
    <div>
        <input type="file" ref="fileInput" accept="video/*" @change="handleFileUpload">
        <button @click="extractText">提取文字</button>
        <input type="text" v-model="inputValue">
        <button @click="m3u8_to_mp4">提取文字</button>
        <div class="typer">
            <div class="typer-content">
                <p class="typer-dynamic">
                    <span class="cut">
                        <span class="word" v-for="(letter, index) in words" :key="index">{{ letter }}</span>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            words: [],
            str: "",
            letters: [],
            inputValue: "",
        };
    },
    methods: {
        handleFileUpload(event) {
            console.log(event.target.files[0]);
            this.selectedFile = event.target.files[0];
        },
        extractText() {
            const formData = new FormData();
            formData.append('file', this.$refs.fileInput.files[0]);

            fetch('http://localhost:8000/Video2Text', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    this.str = data.result;
                    this.begin();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        m3u8_to_mp4() {
            const formData = new FormData();
            formData.append('url', this.inputValue);
            fetch('http://localhost:8000/convert_m3u8_to_mp4', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    this.str = data.result;
                    this.begin();
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        begin() {
            this.letters = this.str.match(/content='([^']+)'/)[1].replace(/\\n/g, '').split("");
            console.log(this.letters)
            for (var i = 0; i < this.letters.length; i++) {
                setTimeout(this.write(i), i * 100);
            }
        },
        write(i) {
            return () => {
                let L = this.letters.length;
                this.words.push(this.letters[i]);
            };
        },
    }
};
</script>

<style scoped lang="less">
@thePink: #000000;

.typer {
    margin-top: 2%;
    box-sizing: border-box;
}

.typer .typer-content {
    font-weight: bold;
    font-size: 24px;
    text-indent: 2em;
    display: flex;
    flex-direction: row;
    letter-spacing: 2px;
}

.typer-dynamic {
    position: relative;
}

.cut {
    color: @thePink;
}

.typer-cursor {
    position: absolute;
    height: 100%;
    width: 3px;
    top: 0;
    right: -10px;
    background-color: @thePink;
    animation: flash 1.5s linear infinite;
}
</style>