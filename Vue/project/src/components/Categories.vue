<template>
    <div id="cate">
        <nav class="nav clearfix">
            <li class="nav_list">
                <router-link class="linkto" to="/">明殿</router-link>
            </li>
            <li class="nav_list">
                <router-link class="linkto" to="/link">宁静寺</router-link>
            </li>
            <li class="nav_list">
                <router-link class="linkto" to="/think">无色庵</router-link>
            </li>
            <li class="nav_list">
                <router-link class="linkto" to="/music">粉巷</router-link>
            </li>
            <li class="nav_list">
                <router-link class="linkto" to="/vlog">天涯</router-link>
            </li>
            <li class="nav_list">
                <router-link class="linkto" to="/about">狂浪生</router-link>
            </li>
        </nav>
    </div>
</template>
<script>


export default {
  name: "Categories",
};
</script>
<style scoped>
.clearfix::after{
    width: 160px;
}
.nav_list{
    text-align: center;
    padding: 10px 0;
    margin-bottom: 10px;
    height: 20px;
    line-height: 20px;
}
.linkto{
    font-size: 15px;
    color: #6e6e85;
    
}
.nav_list exp{
    border-top: 1px dashed #dadada;
}

.router-link-exact-active{
    color: #008df6;
}
</style>