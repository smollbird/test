<template>
<div>
  <div id="header">
    <div class="container">
      <div class="title">
        <span class="tag">
          <router-link to="/">&lt;/&gt;SURMON</router-link>
        </span>
        <span class="slogan">
          <router-link to="/">來苏之望，念狂梦猖</router-link>
        </span>
      </div>
      <div class="radio">
        <div class="radio_top">
          <button>
            
          </button>
          <button>
            
          </button>
          <button>
            
          </button>
          <button>
            
          </button>
        </div>
        <div class="radio_buttom">
          <a class="link" href="#">
            <!-- 此处有路由需要写 -->
            <span class="radio_song_name">合欢 By 关大洲 / 国家宝藏 第二季原声音乐关大洲作品</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 999;
}
.clearfix::after{
    height: 60px;
}
.title {
  float: left;
  line-height: 60px;
}
.title .tag a {
  margin-right: 50px;
  font-size: 24px;
  color: #2d9cf6;
}
.title .slogan a {
  font-size: 14px;
  color: #2d9cf6;
}
.radio {
  float: right;
  width: 168px;
  height: 40px;
  padding: 10px 0;
}
.radio_top {
  width: 168px;
}
.radio_top button {
  color: #e5e5e5;
  margin-right: 10px;
  border: 1px solid transparent; /* //自定义边框 */
  outline: none; /* //消除默认点击蓝色边框效果 */
  background-color: #f9f9f9;
}

.radio_song_name {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #e5e5e5;
  height: 15px;
}
.radio:hover .radio_song_name {
  color: #b8b8b8;
}
.link:hover .radio_song_name {
  color: #222222;
}
.radio_song_name::after {
  display: inline;
  content: "...";
  font-size: 12px;
}
</style>