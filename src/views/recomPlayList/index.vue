<template>
  <div class="recomplay">
    <h2 @click="clickRecommon">推荐歌单 ></h2>
    <div>
        <ul>
            <li v-for="item,index in recommonPlayList" :key="item.id" @click="goPlayListInfo(item)">
                <img :src="item.picUrl" width="200" height="200" :class="index===0?'mask':''">
                <h3>{{item.name}}</h3>
                <span class="iconfont icon1">&#xe60c;</span>
                <span class="iconfont icon2" v-if="index===0">&#xe8c9;</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapState ,mapMutations} from 'vuex';
import {reqRecommonPlayList} from '../../api/home'
export default {
    data() {
        return {
            // 每日推荐歌单
            recommonPlayList: []
        }
    },
    mounted()
    {
        this.getRecommonPlayList();
    },
    methods: {
        goPlayListInfo(item)
        {
            this.$router.push({
                path: '/home/playListInfo',
                query: {
                    id: item.id
                }
            });
            this.updateNeedApplyPlayList(item);
        },
        ...mapMutations(['updateCurrentIndex','updateNeedApplyPlayList']),
        // 获取推荐歌单数据
        async getRecommonPlayList()
        {
            let result = await reqRecommonPlayList();
            console.log(result);
            if(result.data.code === 200)
            {
                this.recommonPlayList = result.data.result;
            }
        },
        // 如果只是路由变换的话，不会引起导航栏的变化，所以将currentIndex存入vuex，方便每个组件使用
        // 导航变换的同时，同步导航栏
        clickRecommon()
        {
            this.$router.push('home/playList');
            this.$store.commit('updateCurrentIndex',2);
        }
    },
    computed: {
        ...mapState(['currentIndex'])
    }
}
</script>

<style lang="less" scoped>
    // 在less中，动画的写法和普通css不同
    .keyframes (@prefix,@name,@content) when (@prefix=def) {
    @keyframes @name {
        @content();
    }
    }
    .keyframes (@prefix,@name,@content) when (@prefix=moz) {
    @-moz-keyframes @name {
        @content();
    }
    }
    .keyframes (@prefix,@name,@content) when (@prefix=o) {
    @-o-keyframes @name {
        @content();
    }
    }
    .keyframes (@prefix,@name,@content) when (@prefix=webkit) {
    @-webkit-keyframes  @name{
        @content();
    }
    }
    .keyframes (@prefix,@name,@content) when (@prefix=all) {
    .keyframes(moz,@name,@content);
    .keyframes(o,@name,@content);
    .keyframes(webkit,@name,@content);
    .keyframes(def,@name,@content);
    }
    .keyframes(all,stop,{
        from{opacity: 0;}
        to{opacity: 1;}
    });
    
    .recomplay{
        width: 1200px;
        margin: 70px auto;
        margin-left: 100px;
        color: #d0d0ca;
        h2{
            &:hover{
                color: rgb(243, 236, 230);
            }
        }
        ul{
            width: 100%;
            margin-top: 15px;
            li{
                position: relative;
                overflow: hidden;
                float: left;
                width: 210px;
                height: 260px;
                margin-right: 15px;
                margin-top: 5px;
                h3{
                    margin-top: 5px;
                    font-size: 14px;
                    white-space: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 400;
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
                .icon2{
                    position: absolute;
                    left: 38%;
                    top: 30%;
                    font-size: 60px;
                }
            }
            .mask{
                    filter: blur(10px);
                    overflow: hidden;
            }
        }
    }
</style>