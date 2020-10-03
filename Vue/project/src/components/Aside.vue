<template>
  <div id="aside">
    <div class="search">
      <form action method name="sear">
        <div class="input_group">
          <input type="text" placeholder="向前探索，向内觉知" name="sear_box" class="input" />
          <input value="sear" name="sear" type="button" class="sear_btn" />
          <input value="all" name="sear" type="button" class="btn" />
        </div>
      </form>
    </div>
    <div class="hot">
      <p class="p_title">
        <i class="p_font"></i>
        <strong>群贤毕至</strong>
      </p>
      <ul class="hot_item">
        <li class="item">
          <i class="item_num top1">1</i>
          <a class="item_link" href="#">别他妈聊前端了</a>
        </li>
        <li class="item">
          <i class="item_num top2">2</i>
          <a class="item_link" href="#">实现基于Nuxt.js的SSR应用</a>
        </li>
        <li class="item">
          <i class="item_num top3">3</i>
          <a class="item_link" href="#">2019 年第一个月，我完成了这些事</a>
        </li>
        <li class="item">
          <i class="item_num">4</i>
          <a class="item_link" href="#">这一次，我为自己招人</a>
        </li>
        <li class="item">
          <i class="item_num">5</i>
          <a class="item_link" href="#">在javascript 中学习数据结构与算法</a>
        </li>
        <li class="item">
          <i class="item_num">6</i>
          <a class="item_link" href="#">一道有趣的JavaScript 面试题</a>
        </li>
        <li class="item">
          <i class="item_num">7</i>
          <a class="item_link" href="#">何以为家</a>
        </li>
        <li class="item">
          <i class="item_num">8</i>
          <a class="item_link" href="#">我就是意义</a>
        </li>
        <li class="item">
          <i class="item_num">9</i>
          <a class="item_link" href="#">我怎么长的这么帅！</a>
        </li>
        <li class="item">
          <i class="item_num">10</i>
          <a class="item_link" href="#">双喜勇猛，向死而生</a>
        </li>
      </ul>
    </div>
    <div class="calendar"></div>
    <div class="keyword">
      <ul class="kw">
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>数学()</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>计算机</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>诗与远方</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>网络</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>世界</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>算法</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>学习</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>web开发</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>机器学习</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>生活</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>工作</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>互联网</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>markdown</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>网络安全</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>思考</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>git</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>github</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>linux</a>
        </li>
        <li class="kw_item">
          <i class="kw_font"></i>
          <a class="kw_link" href>chrome</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "RightSide",
};
</script>
<style scoped>
/* search */
.search {
  height: 32px;
  padding: 5px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
}
.input_group {
  text-align: center;
}
.input_group .input {
  float: left;
  width: 169px;
  height: 22px;
  padding: 3px 0 3px 3px;
  background-color: #dfdfdf;
}
.input_group .input:hover {
  background-color: #c5c5c5;
}
.input_group .input:focus {
  color: #f0967a;
}
.input_group .sear_btn {
  float: left;
  height: 28px;
  background-color: #c5c5c5;
  cursor: pointer;
}
.input_group .btn {
  width: 42px;
  height: 28px;
  margin-left: 5px;
  background-color: #dfdfdf;
}
/* end */
/* hot */
.hot {
  background-color: #f9f9f9;
}
.hot_item {
  padding: 10px 0;
}
.p_title {
  height: 42px;
  line-height: 42px;
  padding: 0 10px;
  border-bottom: 1px dashed #efefef;
}
.hot_item .item {
  height: 26px;
  line-height: 26px;
  padding: 0 10px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot_item .item .item_num {
  font-size: 12px;
  display: inline-block;
  text-align: center;
  height: 18px;
  width: 18px;
  line-height: 18px;
  background-color: #dfdfdf;
}
.hot_item .item .top1 {
  color: #e5e1f7;
  background-color: #7cc0f7;
}
.hot_item .item .top2 {
  color: #e5e1f7;
  background-color: #91cc93;
}
.hot_item .item .top3 {
  color: #e5e1f7;
  background-color: #fc9777;
}
.hot_item .item .item_link {
  color: #555555;
}
.hot_item .item .item_link::after {
  display: inline;
  content: "";
  font-size: 12px;
}
.hot_item .item .item_link:hover {
  color: #222222;
  text-decoration: underline;
}
/* end */
/* calendar */
/* end */
/* keyword */
.keyword {
  height: 400px;
  margin-top: 15px;
  padding: 10px 0 10px 10px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f9f9f9;
}
.kw {
  width: 235px;
}
.kw_item {
  float: left;
  width: 95px;
  height: 26px;
  text-align: center;
  margin: 0 5px 20px 0;
  background-color: #dfdfdf;
}
.kw_link {
  width: 65px;
  height: 26px;
  line-height: 26px;
}
.kw_font {
}
/* end */
</style>