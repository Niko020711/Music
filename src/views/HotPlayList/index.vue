<template>
  <div class="hotPlayList">
    <div>
        <ul>
            <li v-for="item,index in hotPlayList" :key="item.id" @click="goPlayListInfo(item)">
                <img :src="item.coverImgUrl" width="200" height="200">
                <h3>{{item.name}}</h3>
                <span class="iconfont icon1">&#xe60c;</span>
                <div class="play">
                    <span class="iconfont">&#xea6d;</span>
                    <span>{{getNewNum(item.playCount)}}</span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>


<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'hotPlayList',
    computed: {
        ...mapState(['hotPlayList']),
    },
    methods: {
        ...mapMutations(['updateNeedApplyPlayList']),
        // 处理播放量  尾部以万结尾
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
        // 点击歌单去往歌单详情页
        goPlayListInfo(item)
        {
            this.$router.push({
                path: '/home/PlayListInfo',
                query: {
                    id: item.id
                }
            });
            this.updateNeedApplyPlayList(item);
        }
    }
}
</script>

<style lang="less" scoped>
    .hotPlayList{
        width: 1200px;
        margin: 70px auto;
        ul{
            width: 100%;
            margin-top: 15px;
            margin-left: 6px;
            li{
                position: relative;
                overflow: hidden;
                float: left;
                width: 200px;
                height: 260px;
                margin-right: 26px;
                margin-top: 5px;
                h3{
                    margin-top: 5px;
                    font-size: 14px;
                    white-space: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 400;
                    color: aliceblue;
                    &:hover{
                        color: rgb(243, 236, 230);
                    }
                }
                img{
                    border-radius: 10px;
                }
                .icon1{
                    display: none;
                    font-size: 26px;
                    position: absolute;
                    right: 20px;
                    bottom: 70px;
                    color: red;
                }
                &:hover .icon1{
                    display: block;
                    // 原本效果应该用动画来实现延迟效果，但是我在less中并不会写animation
                    // -webkit-animation: stop  linear 0.1s ;
                }
                .play{
                    position: absolute;
                    right: 10px;
                    top: 5px;
                    color:aliceblue;
                    font-size: 14px;
                }
            }
        }
    }
</style>