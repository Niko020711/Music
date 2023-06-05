<template>
  <div class="banner">
    <ul class="img_list">
      <li v-for="item,index in bannerList" :key="index" :id="'last' + (index + 1)">
        <img :src="item.imageUrl" alt="">
      </li>
    </ul>
    <div class="dot">
      <span v-for="item,index in bannerList" :key="index" @mouseover="mouse(index)" @mouseleave="leave()"></span>
    </div>
  </div>
</template>

<script>
import { reqBannerList } from "../../api/home";
let li = [];
let time;
let index = 0;
export default {
  name: "Banner",
  data() {
    return {
      bannerList: [],
      li1: [],
      element: []
    };
  },
  mounted() {
    this.getBannerList();
  },
  methods: {
    async getBannerList() {
      // 获取轮播图数据
      let result = await reqBannerList();
      console.log(result);
      if (result.data.code === 200) {
        this.bannerList = result.data.banners;
      }

      for(let i=0;i<this.bannerList.length;i++)
      {
        li[i] = "last" + (i+1);
      }

      let arr = [];

      for(let i=0;i<this.bannerList.length;i++)
      {
        this.li1.push(JSON.parse(JSON.stringify(li)));
        li.unshift(li.pop);
      }

      time = setInterval(this.right1,3000);
    },
    right1()
    {
      let img_list = document.getElementsByClassName("img_list")[0].children;
      let dots = document.getElementsByClassName("dot")[0].children;
      li.unshift(li.pop());
      for(let i=0;i<dots.length;i++)
      {
        dots[i].style = background = '#e6e6e6'
      }
      index++;
      if(index > dots.index - 1)
      {
        index = 0;
      }
      dots[index].style.background = '#ec4141';
      for(let i=0;i<li.length;i++)
      {
        img_list[i].id = li[i];
      }
    },
    right() {
      let img_list = document.getElementsByClassName("img_list")[0].children;
      let dots = document.getElementsByClassName("dot")[0].children;
      //删除最后一张图片放到第一张
      //li.unshift(li.pop());
      //console.log(li);
      //console.log(index,'zxc')
      for (let i = 0; i < dots.length; i++) {
        dots[i].style.background = "#e6e6e6";
      }
      if (index > dots.length - 1) {
        index = 0;
      }
      dots[index].style.background = "#ec4141";
      //index++;
      for (let i = 0; i < li.length; i++) {
        img_list[i].id = li[i];
      }
    },
    left() {
      let img_list = document.getElementsByClassName("img_list")[0].children;
      let dots = document.getElementsByClassName("dot")[0].children;
      //删除最后一张图片放到第一张
      //li.push(li.shift());
      //console.log(li);
      //console.log(index,'zxc')
      for (let i = 0; i < dots.length; i++) {
        dots[i].style.background = "#e6e6e6";
      }
      if (index < 0) {
        index = 0;
      }
      dots[index].style.background = "#ec4141";
      //index--
    },
    mouse(e) {
      let img_list = document.getElementsByClassName("img_list")[0].children;
      clearInterval(time);
      li = JSON.parse(JSON.stringify(this.li1[e]));
      //console.log(li,789)
      if (e > index) {
        index = e;
        for (let i = 0; i < li.length; i++) {
          img_list[i].id = li[i];
        }
        this.right();
        num = e;
      }
 
      if (e < index) {
        index = e;
        for (let i = 0; i < li.length; i++) {
          img_list[i].id = li[i];
        }
        this.left();
        num = e;
      }
 
      //console.log(this.li1[e], index);
    },
    leave() {
      clearInterval(time);
      //index = num
      time = setInterval(this.right1, 3000);
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  width: 1200px;
  margin: 40px auto;
  margin-left: 130px;
  .img_list{
    position: relative;
    display: block;
    width: 100%;
    height: 150px;
    li{
      float: left;
      position: absolute;
      left: 0;
      border-radius: 10px;
      transition: all 0.5s;
      img{
        width: 400px;
        height: 150px;
        border-radius: 10px;
      }
    }
    #last1 {
      left: 0;
      z-index: 1;
    }
    #last2 {
      left: 290px;
      transform: scale(1.25);
      z-index: 99;
    }
    #last3 {
      left: 645px;
      z-index: 1;
    }
    #but {
      position: absolute;
      z-index: 999;
      bottom: 200px;
    }

  }
  .dot{
    width: auto;
    height: 20px;
    position: absolute;
    bottom: 335px;
    z-index: 99;
    left: 49%;
    transform: translateX(-50%);
    span{
      width: 30px;
      height: 5px;
      text-align: center;
      display: inline-block;
      background-color: #e6e6e6;
      margin-left: 20px;
      border-radius: 3px;
      &:nth-child(1) {
        margin-left: 0px;
        background-color: #ec4141;
      }
    }
  }
}
</style>