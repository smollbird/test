<template>
  <div id="footer">
    <div class="container">
      <a class="beian" href="#">陕ICP备13004859号-2</a>
      <span class="fg">|</span>
      <a href="#">旷日积晷</a>
      <span class="fg">|</span>
      <span>由</span>
      <a href="#">NodePress</a>
      <span>、</span>
      <a href="#">Nuxt.js</a>
      <span> 和 日月星辰 强力驱动 | </span>
      <a href="#">吾之臂躯</a>
      <span>行针步线</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
#footer {
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  height: 62px;
  text-align: center;
}
span{
  color: #555555;
  font-size: 12px;
}
.fg{
  padding: 0 9px;
}
</style>