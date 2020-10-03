<template>
  <div class="vlog">
    <div class="vlog_img">
      <img :src="imgUrl" alt />
      <span class="lenght">01:27</span>
    </div>
    <div class="title">
      <h5>{{ title }}</h5>
      <span>{{ time }}</span>
    </div>
    <div class="vlog_meta clearfix">
      <div class="meta-icon">
        <icon class="icon" icon-class="like1"></icon>
        <span>0</span>
      </div>
      <div class="meta-icon">
        <icon class="icon" icon-class="yanjing-tianchong"></icon>
        <span>24</span>
      </div>
      <div class="meta-icon">
        <icon class="icon" icon-class="xinxi"></icon>
        <span>0</span>
      </div>
      <div class="meta-icon">
        <icon class="icon" icon-class="time"></icon>
        <span>一天前</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Vlog",
  data() {
    return {
      imgUrl: require("@/assets/binary-code-ip.jpg"),
      title: "Shanghai 陆家嘴航拍",
      time: "-",
    };
  },
};
</script>
<style scoped>
.vlog {
  float: left;
  margin-right:7px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
}
.vlog_img {
  position: relative;
}
.vlog_img img {
  width: 280px;
  height: 156px;
}
.vlog_img .lenght {
  position: absolute;
  bottom: 4px;
  right: 0;
  font-size: 12px;
  color: #d8d2b1;
  padding: 2px 5px;
  background-color: #37393d;
}

.title h5,
.title span {
  padding-left: 10px;
  
  color: #55556c;
  font-size: 14px;
}
.title h5 {
  font-weight: bold;
  margin-bottom: 15px;
}
.title span{
    display: inline-block;
    margin-bottom: 15px;
}
.vlog_meta {
  padding: 0 10px;
}
.meta-icon {
  float: left;
  padding-right: 20px;
}
.meta-icon span {
  color: #727272;
  font-size: 12px;
  line-height: 14px;
}
.icon {
  width: 12px;
  height: 14px;
  fill: #727272;
}
</style>
