<template>
  <div id="content">
    <div class="item_thumb">
      <span class="item_oirigin_self">原创</span>
      <img class="item_thumb_img" src="../assets/hacker.png" alt />
    </div>
    <div class="item_body">
      <h5 class="item_title">
        <a href="#">快感</a>
      </h5>
      <p class="item_desciption">社工</p>
      <div class="item_meta">
        <span class="date_icon">
          <icon class="icon icon_time" icon-class="time"></icon>
          <span class="date">2020/5/25 上午</span>
        </span>
        <span class="views_icon">
          <icon class="icon icon_eye" icon-class="yanjing-tianchong"></icon>
          <span class="views">1637</span>
        </span>
        <span class="comments_icon">
          <icon class="icon icon_msg" icon-class="xinxi"></icon>
          <span class="comments">7</span>
        </span>
        <span class="likes">
          <icon class="icon icon_like" icon-class="like1"></icon>
          <span class="likes_num">36</span>
        </span>
        <span class="categories">
          <icon class="icon icon_cate" icon-class="mulu"></icon>
          <a href="#" class="categories_link">宁静寺</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Content",
};
</script>
<style scoped>
#content {
  position: relative;
  margin-top: 15px;
  padding: 10px;
  height: 135px;
  width: 570px;
  font-size: 14px;
  background-color: #f9f9f9;
}
.item_thumb {
  float: left;
  margin-right: 15px;
}
.item_thumb_img {
  margin: 0;
  padding: 0;
  width: 170px;
  height: 120px;
}
.item_oirigin_self {
  position: absolute;
  text-align: center;
  color: #8c8c8c;
  line-height: 24px;
  padding: 0 5px 1px 5px;
  background-color: #3d513e;
}
.item_title {
  padding: 3px 0 10px 0;
}
.item_title a {
  color: #555555;
  font-weight: bold;
  transition: margin .25s;
}
.item_desciption {
  height: 60px;
}
.item_meta {
  margin-top: 5px;
  height: 24px;
  font-size: 12px;
}
.item_meta > span {
  padding-right: 20px;
  font-size: 12px;
  color: #5b6064;
}
.item_meta > span > span {
  margin-left: 5px;
  color: #5b6064;
}
.icon {
  width: 10px;
  height: 10px;
  font-size: 10px;
  fill: #555555;
}
.date_icon {
  float: left;
  width: 100px;
}
.views_icon {
  font-size: 12px;
}
.icon_eye {
  width: 12px;
  height: 12px;
}
.icon_like {
  width: 12px;
  height: 12px;
}
.categories {
  padding-right: 0;
}
.icon_cate {
  width: 14px;
  height: 14px;
  line-height: 14px;
  font-weight: 1000;
}

#content:hover {
  background-color: #dadada;
}
#content:hover .item_oirigin_self {
  color: #ffffff;
  background-color: #467848;
}
.item_title a:hover {
  text-decoration: underline;
  color: #000000;
  margin-left: 5px;
  transition: margin .25s;
}
</style>