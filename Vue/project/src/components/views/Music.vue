<template>
  <div class="music">
    <div class="music_btn">
      <icon class="icon icon-l" icon-class="shangyishou"></icon>
      <icon class="icon icon-r" icon-class="xiayishou"></icon>
      <div class="bf">
        <icon class="icon icon-bf" icon-class="icon_play"></icon>
      </div>
      <div class="img">
        <img src="@/assets/music_1.png" alt="合欢 By 关大洲 / 国家宝藏 第二季原声音乐关大洲作品" />
      </div>
      <div class="btn">
        <icon class="icon icon-v" v-if="!flag" @click="this.flag=!flag" icon-class="V"></icon>
        <icon class="icon icon-jy" v-if="!flag" @click="this.flag=!flag" icon-class="jingyin"></icon>
      </div>
    </div>
    <div class="music_title">
      <p>
        <span>{{ title }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Music",
  data: () => {
    return {
      icon: "V",
      alt: "",
      img: "",
      flag: false,
      title: "合欢 By 关大洲 / 国家宝藏 第二季原声音乐关大洲作品",
    };
  },
  methods: {
    alert() {
      alert("hello");
    },
  },
};
</script>
<style scoped>
.music_btn {
  position: relative;
  margin: 50px 0;
}
.icon {
  width: 46px;
  height: 452px;
  fill: #b1b1b1;
}
.icon-l {
  float: left;
  margin-left: 60px;
}
.icon-r {
  float: right;
  margin-right: 60px;
}
.icon-bf {
  position: absolute;
  left: 46%;
  top: 43%;
  fill: #d4d7d9;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 10px;
  background-color: #d3d6d8a8;
}
.img {
  margin: 0 285px;
  width: 432px;
  height: 432px;
  border: 10px solid #dcdcdc;
  border-radius: 50%;
}
.img img {
  width: 432px;
  height: 432px;
  border-radius: 50%;
}
.img:hover {
  background-color: rgba(170, 155, 155, 0.849);
}
.btn {
  position: absolute;
  top: -150px;
  left: 47%;
  height: 46px;
}
.icon-jy {
  position: relative;
  left: -47px;
}
.music_title {
  text-align: center;
  margin-bottom: 100px;
}
.music_title p span {
  color: #555555;
  font-weight: bold;
  font-style: 18px;
}
</style>