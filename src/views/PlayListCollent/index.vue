<template>
  <div class="collent">
    <ul>
      <li v-for="item,index in subscribers" :key="index">
        <img :src="item.avatarUrl" alt="" width="100" height="100">
        <div class="info">
          <p class="name">{{item.nickname}}</p>
          <p class="content">{{item.signature}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
export default {
    name: 'playListCollent',
    methods: {
      ...mapActions(['getPlayListCollent'])
    },
    computed: {
      ...mapState(['needApplyPlayList','subscribers'])
    },
    mounted()
    {
      this.getPlayListCollent(this.needApplyPlayList.id);
    }
}
</script>

<style scoped lang="less">
  .collent{
    width: 1200px;
    margin-top: 70px;
    margin-left: 36px;
    ul{
      width: 1200px;
      li{
        margin-bottom: 20px;
        width: 400px;
        display: flex;
        float: left;
        align-items: center;
        img{
          border-radius: 50%;
        }
        .info{
          margin-left: 10px;
          .name{
            font-size: 16px;
            color: aliceblue;
          }
          .content{
            font-size: 13px;
            color: aliceblue;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-top: 9px;
            text-indent: 6px;
          }
        }
      }
    }
  }
</style>