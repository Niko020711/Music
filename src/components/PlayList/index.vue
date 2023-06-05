<template>
  <div class="playlist">
    <div class="bigShow">
      <img class="bigImg" :src="hotPlayList[0].coverImgUrl" alt="">
      <div class="img">
        <img :src="hotPlayList[0].coverImgUrl" width="150" height="150">
      </div>
      <div class="info">
        <p><span><span class="iconfont">&#xe60b;</span>精品歌单</span></p>
        <h3>{{hotPlayList[0].name}}</h3>
      </div>
    </div>
    <Tag></Tag>
    <HotPlayList></HotPlayList>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HotPlayList from '../../views/HotPlayList/index.vue'
import Tag from '../../views/Tag/index.vue'
export default {
    name: 'playList',
    components: {
      Tag,
      HotPlayList
    },
    data() {
      return {
        
      }
    },
    mounted()
    {
      // 获取热门歌单标签
      this.getHotPlayListTag();
      // 获取热门歌单
      this.getHotPlayList();
      console.log(this.hotPlayList)
    },
    methods: {
      getHotPlayListTag()
      {
        this.$store.dispatch('getHotPlayListSort');
      },
      getHotPlayList()
      {
        this.$store.dispatch('getHotPlayList',this.$store.state.playListTag);
      }
    },
    computed: {
      ...mapState(['hotPlayList'])
    }
}
</script>

<style lang="less" scoped>
  .playlist{
    width: 1100px;
    margin: 30px auto;
    .bigShow{
      padding: 6px;
      position: relative;
      width: 100%;
      overflow: hidden;
      border-radius: 15px;
      display: flex;
      align-items: center;
      .bigImg{
        position: absolute;
        left: 0;
        top: -550px;
        filter: blur(13px);
        z-index: 0;
      }
      .img{
        position: relative;
        z-index: 1;
        img{
          border-radius: 12px;
        }
      }
      .info{
        position: relative;
        z-index: 1;
        margin-left: 20px;
        p{
          padding: 8px;
          border: 1.5px solid rosybrown;
          text-align: center;
          border-radius: 20px;
          margin-bottom: 20px;
          .iconfont{
            font-size: 20px;
            margin-right: 20px;
            color: orangered;
          }
        }
        h3{
            color: aliceblue;
          }
      }
    }
  }
</style>