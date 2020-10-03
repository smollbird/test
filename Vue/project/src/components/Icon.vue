<template>
 <svg :class="svgClass" aria-hidden="true">
  <use :xlink:href="iconName" rel="external nofollow" ></use>
 </svg>
</template>
<script>
/**使用 iconfont 字体库 
 * 1、创建一个js文件，
 *    将 iconfont 提供的链接在网站中打开，
 *    并将内容全部复制到刚才创建的js文件中。
 * 2、在 main.js 中，使用 import 引入文件 
 *    //示例：import '@/assets/iconfont/iconfont.js'
 * 3、在mian.js 中注册为全局组件
 *    //实例：Vue.component('componentName',cpmponent)
 * 4、在components下创建icon.vue模板文件，在这里进行注册信息 详细可查看Icon.vue 文件
 * 5、应用组件， <icon class="icon" icon-class="like"></icon> 在icon-class中输入的样式
 *    是在 icon font网站中复制下来的样式名，不过这里封装的时候，把前缀也一起封装进去了
 *    所以在使用的时候，需要把前缀去掉。
 */
export default {
 name: 'icon',
 props: {
  iconClass: {
   type: String,
   required: true
  },
  className: {
   type: String
  }
 },
 computed: {
  iconName() {
   return `#icon-${this.iconClass}` // 注意：因为此处绑定的svgClass名已经包含#icon，所以复制symbol名字事不需要名字的前缀了
  },
  svgClass() {
   if (this.className) {
    return 'svg-icon ' + this.className
   } else {
    return 'svg-icon'
   }
  }
 }
}
</script>
<style scoped>
/* .svg-icon {
 width: 1em;
 height: 1em;
 vertical-align: -0.15em;
 fill: currentColor;
 overflow: hidden;
} */
</style>