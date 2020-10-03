<template>
  <div id="app">
    <Header></Header>
    <div id="main">
      <div class="container clearfix">
        <router-view name="Categories" class="cate"></router-view>
        <router-view name="Home"></router-view>
        <router-view name="Code"></router-view>
        <router-view name="Music"></router-view>
        <router-view name="Video"></router-view>
        <router-view name="About"></router-view>
        <router-view name="Service"></router-view>
        <router-view name="GuestBook"></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Categories from "@/components/Categories";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    // Categories
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #efefef;
}
.container {
  margin: 0 12%;
}
.clearfix::after {
  display: block;
  content: ".";
  clear: both;
  width: 100%;
  overflow: hidden;
  visibility: hidden;
}
.clearfix {
  zoom: 1;
}

#main {
  margin-top: 10px;
}
.clearfix::after {
  height: 0;
}
.cate {
  float: left;
  width: 160px;
  margin-right: 15px;
}
.body {
  margin-left: 167px;
}
.aside {
  float: right;
  width: 260px;
  margin-left: 15px;
}

/* reset style */
html,
body,
div,
span,
applet,
object,
button,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
  font: inherit;
  font-weight: normal;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul,
li {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  vertical-align: middle;
}

/* custom */

a {
  font-size: 14px;
  outline: none;
  color: #555555;
  text-decoration: none;
}
a:hover {
  color: #222222;
}
a:focus {
  outline: none;
}
/* //消除button的默认样式 */
button,
input {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  outline: none; /* //消除默认点击蓝色边框效果 */
}
input:focus,
select:focus,
textarea:focus {
  border: none;
  outline: -webkit-focus-ring-color auto 0;
}
/* end */
</style>
