<template>
  <div>
    <Aside class="aside"></Aside>
    <div class="body">
      <Vlog v-for="num in 18" :key="num"></Vlog>
    </div>
  </div>
</template>
<script>
import Aside from "@/components/Aside";
import Vlog from "@/components/Vlog";
export default {
  name: "Video",
  components: {
    Vlog,
    Aside
  },
};
</script>