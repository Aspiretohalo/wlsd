<template>
    <div>
        <div class="typer">
            <div class="typer-content">
                <div class="typer-dynamic" v-html="dynamicContent"></div>
            </div>
        </div>
        <!-- <button @click="getMessage" class="custom-btn btn-6">视频总结</button> -->
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
    computed: {
        dynamicContent() {
            return this.words.join('');
        }
    },
    mounted() {
        this.getMessage(); // 在组件挂载后立即调用 getMessage 方法
    },
    methods: {
        getMessage() {
            // fetch('http://localhost:8000/getmessage', {
            //     method: 'POST'
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         this.str = data;
            //         this.begin();
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //     });
            this.str = '以下是对今天论坛内容的总结：\n1、人工智能是否会替代人类工作：各位老师普遍认为，虽然AI在一些确定性场景下表现出色，但在创造性和需要深层次人类情感与想象力的工作中，AI暂时难以替代人类。同时，我们也探讨了如何将AI作为工具来辅助人类的创作和工作，而不是简单地替代人类。\n2、AI技术是否接近技术起点：大家一致认为，尽管AI技术取得了显著进步，但距离真正的技术起点还有一段距离。我们需要继续研究和探索，特别是在AI的可解释性和端侧部署等方面。\n3、人类的意义与未来：在讨论中，我们认识到，人类的价值不仅仅在于智力竞争，还包括精神层面和其他方面。即使AI在某些方面超越了人类，人类仍然有其独特的存在意义，关键在于如何合理利用AI技术为人类带来福祉。\n4、AI犯罪与网络安全：安老师提醒我们，AI技术的发展也带来了新型的网络安全挑战，例如降低网络犯罪门槛、精准识别易受攻击目标等。同时，我们也讨论了在使用AI时应注意的版权和伦理问题。\n5、计算的未来与大语言模型：梁老师和钟老师都提到了计算技术的未来发展，特别是在微电子器件和大语言模型方面。钟老师还强调了中国在大语言模型领域追赶国际水平的重要性和可能性。\n6、AI在教育中的应用：我们讨论了AI在教育中的应用，包括学生使用AI写作业和制作PPT的情况。老师们普遍认为，AI可以作为学习和训练的工具，但在涉及原创性和个人能力培养的场合，应谨慎使用。\n今天的圆桌论坛让我们对人工智能的未来发展有了更深入的理解。我们期待AI技术能够继续为人类社会带来积极的变化，并希望每个人都能在这个过程中找到自己的价值和意义。再次感谢各位老师的分享和观众的参与，让我们共同期待未来更多的精彩讨论。',
                this.begin();
        },
        begin() {
            this.letters = this.str.split("");
            let i = 0;
            const writeNext = () => {
                if (i < this.str.length) {
                    setTimeout(() => {
                        this.write(i)();
                        i++;
                        writeNext(); // 递归调用以处理下一个字符
                    }, 50);
                }
            };
            writeNext();
        },
        write(i) {
            return () => {
                let letter = this.letters[i];
                if (letter === '\n') {
                    // 如果当前字符是换行符，则进行换行
                    this.words.push('<br>');
                } else {
                    this.words.push(letter);
                }
            };
        },
    }
};
</script>

<style scoped lang="less">
.typer {
    margin-top: 2%;
    box-sizing: border-box;
    height: 560px;
    margin-bottom: 30px;
}

.typer .typer-content {
    font-size: 16px;
    display: flex;
    flex-direction: row;
    letter-spacing: 2px;
    font-weight: bold;
}

.typer-dynamic {
    position: relative;
    display: block;
    text-align: justify;
    color: #1b1b1b;
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
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
}

/* 6 */
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
    box-shadow:
        -1px -1px 20px 0px rgba(255, 255, 255, 1),
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
    box-shadow:
        -1px -1px 20px 0px rgba(255, 255, 255, 1),
        -4px -4px 5px 0px rgba(255, 255, 255, 1),
        7px 7px 20px 0px rgba(0, 0, 0, .4),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
}

.btn-6 span:before {
    left: 0;
    top: 0;
    width: 0%;
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
</style>
