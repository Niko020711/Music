<template>
  <div id="app" class="scroll">
    <Header></Header>
    <Sideber></Sideber>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/index.vue'
import Header from './components/Header/index.vue'
import Sideber from './components/Sidebar/index.vue'
export default {
  name: 'App',
  components: {Header,Sideber,Footer}
}
</script>

<style>
  ::-webkit-scrollbar{/*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
			width:10px;
			height:10px;
	}
	::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
			/* // background:#74D334; */
            display: none;
	}
	::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
			/* // background:#FF66D5; */
            display: none;
	}
	::-webkit-scrollbar-track-piece{/*内层轨道，滚动条中间部分（位置4）*/
			/* // background:#FF66D5; */
            display: none;
	}
	::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/
		background:#8e8c8a;
		border-radius:4px;
	}
	::-webkit-scrollbar-corner {/*边角（位置6）*/
		/* // background:#82AFFF;  */
        display: none;
	}
	::-webkit-scrollbar-resizer  {/*定义右下角拖动块的样式（位置7）*/
		/* // background:#FF0BEE; */
        display: none;
	}
	#scroll{
		scrollbar-arrow-color: #f4ae21; /**//*三角箭头的颜色*/ 
		scrollbar-face-color: #333; /**//*立体滚动条的颜色*/ 
		scrollbar-3dlight-color: #666; /**//*立体滚动条亮边的颜色*/ 
		scrollbar-highlight-color: #666; /**//*滚动条空白部分的颜色*/ 
		scrollbar-shadow-color: #999; /**//*立体滚动条阴影的颜色*/ 
		scrollbar-darkshadow-color: #666; /**//*立体滚动条强阴影的颜色*/ 
		scrollbar-track-color: #666; /**//*立体滚动条背景颜色*/ 
		scrollbar-base-color:#f8f8f8; /**//*滚动条的基本颜色*/ 
	}
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  @font-face {
  font-family: 'iconfont';  /* Project id 3794739 */
  src: url('//at.alicdn.com/t/c/font_3794739_tabrems374.woff2?t=1672824566418') format('woff2'),
       url('//at.alicdn.com/t/c/font_3794739_tabrems374.woff?t=1672824566418') format('woff'),
       url('//at.alicdn.com/t/c/font_3794739_tabrems374.ttf?t=1672824566418') format('truetype');
}
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>
