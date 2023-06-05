<template>
  <div>
    <div class="playListInfo">
      <div class="topInfo">
        <div class="img">
          <img :src="needApplyPlayList.coverImgUrl" width="200" height="200">
        </div>
        <div class="info">
          <div class="title">
            <span>歌单</span>
            <h2>{{needApplyPlayList.name}}</h2>
          </div>
          <div class="auInfo">
            <img :src="needApplyPlayList.creator.avatarUrl" width="40" height="40">
            <span class="au">{{needApplyPlayList.creator.nickname}}</span>
            <span>2002-07-11 创建</span>
          </div>
          <div class="handle">
            <div class="playAll">
              <span ref="icon1" class="icon4" ><span class="iconfont icon2">&#xea6d;</span>播放全部</span>
              <span ref="icon2" class="iconfont icon3" >&#xeaf3;</span>
            </div>
            <span class="icon1"><span class="iconfont">&#xea71;</span>收藏({{needApplyPlayList.trackCount}})</span>
            <span class="icon1"><span class="iconfont">&#xe605;</span>分享({{needApplyPlayList.shareCount}})</span>
            <span class="icon1"><span class="iconfont">&#xe60e;</span>下载全部</span>
          </div>
          <div class="tag">
            <p class="p">标签：<a @click="tagHandle(item)" class="sa" v-for="(item,index) in needApplyPlayList.tags" :key="index">{{item}}  </a></p>
            <span class="span1">歌曲：{{songs.length}}</span>
            <span>播放：{{getNewNum(needApplyPlayList.playCount)}}</span>
            <p class="descr">简介：{{needApplyPlayList.description}}</p>
          </div>
        </div>
      </div>
      <div class="InfoNav">
        <div class="select">
          <span :class="(playInfoNavIndex === 1?'newNav':'')" @click="clickChange(1)">歌曲列表</span>
          <span :class="(playInfoNavIndex === 2?'newNav':'')" @click="clickChange(2)">评论({{needApplyPlayList.commentCount}})</span>
          <span :class="(playInfoNavIndex === 3?'newNav':'')" @click="clickChange(3)">收藏者</span>
        </div>
        <div class="search" v-show="playListInsert === 1">
          <input type="text" placeholder="请输入你想听的歌曲">
          <span class="iconfont icon">&#xe602;</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import playListTail from '../../views/PlayListTail/index.vue'
import { mapState,mapMutations, mapActions } from 'vuex'
export default {
    name: 'playListInfo',
    mounted()
    {
      this.updateIsNavShow(false);
      this.getPlayListInfoAllMusic(this.$route.query.id);
    },
    computed: {
      ...mapState(['playListInsert','isNavShow','needApplyPlayList','playInfoNavIndex','songs','nowPlayListTag'])
    },
    methods: {
      ...mapMutations(['updatePlayListInsert','updateIsNavShow','updatePlayInfoNavIndex','updateNowPlayListTag']),
      ...mapActions(['getPlayListInfoAllMusic']),
      getNewNum(num)
      {
            if(num >= 10000)
            {
                return (num/10000).toFixed(0) + '万';
            }
            else if(num >= 100000000)
            {
                return (num/100000000).toFixed(0) + '亿';
            }
      },
      // 点击变换导航栏
      clickChange(index)
      {
        this.updatePlayInfoNavIndex(index);
        // 二级路由跳转时，路径需要与路由注册时一致，且必须开头加/
        // 如果不加/   系统会识别为新路径，会拼接上现有的路径，造成路径的混乱
        if(index === 1)
        {
          this.$router.push("/home/playListInfo");
          // 控制搜索框的显示
          this.updatePlayListInsert(1);
        }
        else if(index === 2)
        {
          this.$router.push("/home/playListInfo/playListComment");
          this.updatePlayListInsert(0);
        }
        else if(index === 3)
        {
          this.$router.push("/home/playListInfo/playListCollent");
          this.updatePlayListInsert(0);
        }
      },
      // 点击标签，前往标签歌单栏
      tagHandle(tag)
      {
        this.updateNowPlayListTag(tag);
        this.$store.dispatch('getHotPlayList',this.nowPlayListTag);
        this.$router.push('/home/playList');
      }
    },
    beforeDestroy()
    {
      this.updateIsNavShow(true);
    },
    components: {
      playListTail
    }
}
</script>

<style lang="less" scoped>
  .playListInfo{
    width: 1200px;
    margin: 30px auto;
    color: aliceblue;
    .topInfo{
      display: flex;
      .img{

        img{
          border-radius: 10px;
        }
      }
      .info{
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20px;
        .title{
          display: flex;
          align-items: center;
          height: 30px;
          span{
            padding: 4px;
            font-size: 12px;
            border: 1px solid rgb(124, 34, 34);
            border-radius: 10px;
            color: rgb(124, 34, 34);
          }
          h2{
            display: inline-block;
            margin-left: 10px;
            font-size: 30px;
          }
        }  
        .auInfo{
          display: flex;
          align-items: center;
          img{
            border-radius: 50%;
          }
          span{
            margin-left: 15px;
          }
          .au{
            color: rgb(37, 73, 194);
            &:hover{
              color: rgb(57, 88, 191);
              cursor: pointer;
            }
          }
        }
        .handle{
          display: flex;
          align-items: center;
          font-size: 16px;
          .playAll{
            background-color: brown;
            padding: 0px 10px 0px 10px;
            height: 34px;
            border: 1px solid red;
            margin-right: 15px;
            border-radius: 16px;
            &:hover{
              background-color: rgb(124, 30, 30);
            }
            .icon2{
              margin-right: 6px;
              font-size: 16px;
            }
            .icon3{
              display: inline-block;
              height: 34px;
              margin-left: 8px;
              text-align: center;
              width: 20px;
              font-size: 16px;
              line-height: 34px;
              border-left: 1px solid red;

            }
            .icon4{
              display: inline-block;
              height: 34px;
              line-height: 34px;
            }
          }
          .icon1{
            font-size: 16px;
            margin-right: 20px;
            padding: 7px 15px 7px 15px;
            border: 1px solid red;
            border-radius: 16px;
            &:hover{
              background-color: rgb(94, 100, 104);
            }
            .iconfont{
              margin-right: 3px;
            }
          }
        }
        .tag{
          font-size: 14px;
          .span1{
            margin-right: 12px;
          }
          .p{
            a{
              margin-right: 4px;
            }
            .sa{
              color: rgb(37, 73, 194);
              &:hover{
                color: rgb(57, 88, 191);
                cursor: pointer;
              }
            }
          }
          .descr{
            width: 700px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .InfoNav{
      margin-top: 20px;
      .select{
        float: left;
        span{
          margin-right: 24px;
          &:hover{
            color: rgb(203, 204, 206);
          }
        }
      }
      .search{
        height: 21px;
        position: relative;
        float: right;
        margin-right: 10px;
        input{
          border: 0;
          background-color: rgba(0, 0, 0, 0.2);
          height: 24px;
          width: 240px;
          border-radius: 20px;
          text-indent: 10px;
          font-size: 13px;
          outline: none;
          caret-color: rgb(228, 210, 210);
        }
        .icon{
          color: rgb(147, 154, 161);
          position: absolute;
          right: 8px;
          top: 3px;
          z-index: 999;
          font-size: 20px;
        }
      }
      .newNav{
        font-weight: 700;
        font-size: 20px;
        border-bottom: 4px solid rgb(124, 30, 30);
      }
    }
  }
</style>