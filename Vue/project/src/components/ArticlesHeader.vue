<template>
<div class="articles_list_header hidden">
      <div class="logo_box">
        <p class="logo">
          <icon class="icon_code" icon-class="{{iconUrl}}"></icon>
        </p>
      </div>
      <div class="title_box">
        <h5 class="title">
          <span>说法者，无法可说，是名说法</span>
        </h5>
      </div>
    </div>
</template>
<script>
export default {
    name:"ArticlesHeader",
    data(){
      return{
        iconUrl:'LC_icon_light_line',
        flag:true
      }
    },
    methods:{

    }
};
</script>
<style scoped>
.articles_list_header {
  width: 590px;
  height: 210px;
  background: url(../assets/binary-code-ip.jpg) no-repeat #ffffff;
  background-size: 590px 210px;
}
.logo{
  text-align: center;
}
.icon_code {
  display: inline-block;
  height: auto;
  width:100px;
  fill: #ffffff;
}
.logo_box {
  background-color:rgba(255,255,255,0.3);
  height: 150px;
}
.title_box {
  height: 60px;
  background-color:rgba(255,255,255,0.3);
}
.title{
  text-align: center;
}
.title span{
  color: #ffffff;
  font-size: 14px;
}

/* .hidden{
  visibility: hidden;
} */
</style>