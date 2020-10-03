<template>
  <div>
    <Aside class="aside"></Aside>
    <div class="body">
      <ArticlesHeader></ArticlesHeader>
      <Content v-for="num in 10" :key="num"></Content>
    </div>
  </div>
</template>
<script>
import ArticlesHeader from "@/components/ArticlesHeader";
import Content from "@/components/Content";
import Aside from "@/components/Aside";
export default {
  name: "Code",
  components: { ArticlesHeader, Content, Aside },
};
</script>