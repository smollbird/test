<template>
  <div>
    <div class="aside">
      <div class="self">
        <img src="@/assets/about-background-be-1.jpg" alt />
        
        <h5>Surmon</h5>
        <p>数字游民</p>
        <i></i>
      </div>
      <button class="btn">众里寻他</button>
    </div>
    <div class="body">
      <p class="title">
        <strong>浪</strong>蝶游蜂，迈步九云中
      </p>
      <p class="learn">
        <a href="#">Github Sponsor</a>|
        <a href="#">PayPal me</a>|
        <a href="#">more</a>
      </p>
      <p class="music">
        <a href="#">Jazz-Hiphop,Electronic,Disco,Rock,Popular</a>
      </p>
      <p>
        <button>Github</button>
        <button>QQ</button>
        <button>Weibo</button>
      </p>
      <p class="like-p">酒池肉林、日夜笙歌、依翠偎红、五音六律、目营心匠、桀骜不羁</p>
      <p class="my_map"><a href="#">路为纸，地成册，行作笔，心当墨；思无界，行有疆</a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style scoped>
.aside{
  width: auto;
  height: 430px;
  background-color: #f9f9f9;
}
.aside .self{
  position: relative;
}
.aside .self img{
  width: 230px;
  height: 110px;
}
.aside .self h5{
  margin-top: 60px;
  font-size: 18px;
  font-weight: bold;
  color: #555555;
  text-align: center;
}
.aside .self p{
  margin-top: 20px;
  font-size: 14px;
  color: #6c6c9a;
  text-align: center;
}
.aside .self i{
  display: block;
  position: absolute;
  top: 25%;
  left: 30%;
  width: 80px;
  height: 80px;
  background-color: #fff;
  background: url(../../assets/self.jpg) no-repeat center;
  border-radius: 50%;
  border: 5px solid #ffffff88 ;
  
}
.aside .btn{
  color: #2eb0f7;
  font-size: 14px;
  border: 1px solid #2eb0f7;
  text-align: center;
  margin-top: 30px;
  margin-left: 30%;
  padding: 5px 20px;
}

.body{
  width: 620px;
  height: 430px;
  background-color: #f9f9f9;
}
.body .title{
  padding-top: 30px;
  font-size: 16px;
  font-weight: bold;
  color: #555555;
}
.body .title strong{
 font-size: 20px;
}
.body p{
  padding-left: 60px;
  margin-bottom: 30px;
}
.like-p{
  font-size: 16px;
  font-weight: bold;
}
.body .my_map a{
  text-decoration: underline;
}
</style>