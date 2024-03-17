<template>
	<div class=back>
	<h1 class="big-title">flag{congratulation find first flag}</h1>
  <!-- <div class="card-container"> -->
  <!--   <div class="card card1"> -->
  <!--    Game 1 -->
  <!--   </div> -->
  <!--   <div class="card card2"> -->
  <!--     Game 2 -->
  <!--   </div> -->
  <!--   <div class="card card3"> -->
  <!--     Game 3 -->
  <!--   </div> -->
  <!-- </div> -->
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
}

:root {
    --card-height: 65vh;
    --card-width: calc(var(--card-height) / 1.5);
}

.card-container {
    display: flex; /* 使用 Flexbox 布局 */
}

.back {
    min-height: 100vh;
		min-width: 100vw;
    background: #212534;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
}


.card {
background-size: cover; /* 使背景图片铺满整个卡片 */
background-repeat: no-repeat; /* 防止背景图片重复 */
background-position: center center; /* 将背景图片水平和垂直居中 */
    width: var(--card-width);
    height: var(--card-height);
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 3.5em;
    color: rgb(88 199 250 / 0%);
    cursor: pointer;
    font-family: cursive;
		margin-right: 4rem;
}
.card1 {
		background-image: url('https://cdn.pixabay.com/photo/2019/12/17/05/53/security-4700815_960_720.jpg'); /* 替换 'your-image-url.jpg' 为你的图片链接 */
}
.card2 {
		background-image: url('https://cdn.pixabay.com/photo/2013/11/20/09/35/background-213649_960_720.jpg'); /* 替换 'your-image-url.jpg' 为你的图片链接 */
}
.card3 {
		background-image: url('https://cdn.pixabay.com/photo/2016/04/13/19/20/binary-1327493_960_720.jpg'); /* 替换 'your-image-url.jpg' 为你的图片链接 */
}
.card-image {
    position: relative;
    width: 100%;
    height: 100%;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 图片自适应填充 */
}


.card-content-over-image {
    z-index: 1;
}

@media (max-width: 600px) {
    .card {
        width: 100%; /* 在小屏幕上，让卡片宽度填满屏幕 */
    }
}
.card-image {
	    position: relative;
			    width: 100%;
					    height: 100%;
}

.card-image img {
	    width: 100%;
			    height: 100%;
					    object-fit: cover; /* 图片自适应填充 */
}

.card-content {
	    position: absolute;
			    bottom: 0;
					    left: 0;
							    right: 0;
									    padding: 10px;
											    background: rgba(0, 0, 0, 0.5); /* 添加背景以提高文字可读性 */
													    color: white;
															    text-align: center;
}

.card-content-over-image {
	    z-index: 1;
}

@media (max-width: 600px) {
	    .card {
				        width: 100%; /* 在小屏幕上，让卡片宽度填满屏幕 */
								    }
}
.card:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
}

.card:hover:before,
.card:hover:after {
    animation: none;
    opacity: 0;
}


.card::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

.card::after {
    position: absolute;
    content: "";
    top: calc(var(--card-height) / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--card-height) / 6));
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
}

@keyframes spin {
    0% {
        --rotate: 0deg;
    }

    100% {
        --rotate: 360deg;
    }
}
a {
    color: #212534;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 2rem;
}

.big-title {
  font-size: 3em;
  color: white;
  margin-bottom: 2rem;
  font-family: 'Arial', sans-serif; /* Change the font family */
  font-weight: bold; /* Make the font bold */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add a text shadow for depth */
  letter-spacing: 2px; /* Adjust letter spacing for better readability */
  text-transform: uppercase; /* Transform text to uppercase */
}

</style>
