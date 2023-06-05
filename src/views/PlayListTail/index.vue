<template>
  <div class="playListTail">
    <div class="top">
      <span class="s1">操作</span>
      <span class="s2">标题</span>
      <span class="s3">歌手</span>
      <span class="s4">专辑</span>
      <span class="s5">时间</span>
    </div>
    <div class="bottom">
      <ul>
        <li v-for="item,index in songs" :key="index" @click="PlayInfo(item,index)">
          <div class="operation">
            <span class="index">{{index}}</span>
            <div class="icon">
              <span class="iconfont">&#xe61a;</span>
              <span class="iconfont">&#xe60e;</span>
            </div>
          </div>
          <div class="title">
            <span class="t">{{item.name}}</span>
            <span class="vip" v-if="item.no">VIP</span>
            <span class="sq" v-if="item.sq">SQ</span>
            <span class="mv" v-if="item.mv">MV</span>
          </div>
          <div class="player">
            <span v-for="item in item.ar" :key="item.id">{{item.name}}  </span>
          </div>
          <div class="album">{{item.al.name}}</div>
          <div class="time">03:39</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'playListTail',
    computed: {
      ...mapState(['songs',''])
    },
    methods: {
      ...mapMutations(['updateFooterInfo','updateFooterButton','updateFooterInSongsIndex']),
      PlayInfo(item,index)
      {
        console.log(item)
        // 更改底部模块显示内容
        this.updateFooterInfo(item);
        // 使播放按钮变为暂停状态
        this.updateFooterButton(0);
        // 更改 记录歌单中哪一首歌曲的序号
        this.updateFooterInSongsIndex(index);
      }
    }
}
</script>

<style lang="less" scoped>
  .playListTail{
    width: 100%;
    margin-top: 70px;
    .top{
      width: 100%;
      display: flex;
      color: rgb(165, 171, 176);
      font-size: 14px;
      .s1{
        flex: 10.7%;
        text-align: center;
      }
      .s2{
        flex: 37%;
      }
      .s3{
        flex: 19%;
      }
      .s4{
        flex: 25%;
      }
      .s5{
        flex: 8.3%;
      }
    }
    .bottom{
      width: 100%;
      ul{
        li{
          display: flex;
          margin: 14px 0 14px 0;

          .operation{
            font-size: 14px;
            flex: 10.7%;
            display: flex;
            color: #545454;
            .index{
              flex: 40%;
              margin-left: 30px;
            }
            .icon{
              flex: 60%;
              margin-right: 30px;
              .iconfont:nth-child(1)
              {
                margin-right: 6px;
              }
            }
          }
          .title{
            flex: 37%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .t{
              font-size: 14px;
              color: #d5d5d5;
            }
            .vip{
              color: rgb(188, 125, 43);
              font-size: 4px;
              border: 1.5px solid rgb(188, 125, 43);
              border-radius: 4px;
              margin: 0 8px 0 8px;
            }
            .sq{
              color: rgb(129, 42, 42);
              font-size: 4px;
              border: 1.5px solid rgb(129, 42, 42);
              border-radius: 4px;
              margin: 0 8px 0 0;
            }
            .mv{
              color: rgb(129, 42, 42);
              font-size: 4px;
              border: 1.5px solid rgb(129, 42, 42);
              border-radius: 4px;
              margin: 0 0 0 8px;
            }
          }
          .player{
            font-size: 14px;
            color: #8a8a8a;
            flex: 19%;
            overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            span{
              
            }
          }
          .album{
            font-size: 14px;
            color: #8a8a8a;
            flex: 25%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .time{
            font-size: 14px;
            color: #8a8a8a;
            flex: 8.3%;
            overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
          }
        }
      }
    }
  }
</style>