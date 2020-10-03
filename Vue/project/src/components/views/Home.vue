<template>
  <div>
    <Aside class="aside"></Aside>
    <div class="body">
      <!-- <Banner></Banner> -->
      <Content v-for="num in 10" :key="num"></Content>
    </div>
  </div>
</template>
<script>
// import Banner from "@/components/Banner";
import Content from "@/components/Content";
import Aside from "@/components/Aside";
export default {
  name: "Home",
  components: {
    Content,
    Aside,
  },
};
</script>
<style scoped>
</style>