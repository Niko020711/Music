<template>
  <div class="comment">
    <input type="textarea">
    <div class="textarea">
        <div class="left">
            <span class="iconfont">&#xe6da;</span>
            <span class="iconfont">&#xe62e;</span>
            <span class="iconfont">&#xe666;</span>
        </div>
        <div class="right">
            评论
        </div>
    </div>
    <div class="content">
        <div class="total">热门评论({{hotComments.length}})</div>
        <ul class="hot">
            <li v-for="item,index in hotComments" :key="index">
                <img :src="item.user.avatarUrl" width="40" height="40">
                <div class="info">
                    <p>{{item.user.nickname}} : <span>{{item.content}}</span></p>
                    <span class="time">{{item.timeStr}}</span>
                </div>
                <div class="carry">
                    <span class="icon" ref="jb">举报</span>
                    <span class="iconfont">&#xe64d;</span>
                    <span class="iconfont">&#xe8c9;</span>
                    <span class="iconfont">&#xe605;</span>
                </div>
            </li>
        </ul>
        <div class="total">最新评论({{needApplyPlayList.commentCount}})</div>
        <ul class="new">
            <li v-for="item,index in comments" :key="index">
                <img :src="item.user.avatarUrl" width="40" height="40">
                <div class="info">
                    <p>{{item.user.nickname}} : <span>{{item.content}}</span></p>
                    <span class="time">{{item.timeStr}}</span>
                </div>
                <div class="carry">
                    <span class="icon" ref="jb">举报</span>
                    <span class="iconfont">&#xe64d;</span>
                    <span class="iconfont">&#xe8c9;</span>
                    <span class="iconfont">&#xe605;</span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'playListComment',
    computed:{
        ...mapState(['needApplyPlayList','hotComments','comments'])
    },
    methods: {
        ...mapActions(['getPlayListComment'])
    },
    mounted()
    {
        this.getPlayListComment(this.needApplyPlayList.id);
    }
}
</script>

<style scoped lang="less">
    .comment{
        width: 1200px;
        margin-top: 80px;
        margin-left: 40px;
        input{
            background-color: rgb(67, 69, 68);
            border: 0;
            border-radius: 4px;
            outline: none;
            caret-color: aliceblue;
            text-indent: 6px;
            width: 1200px;
            height: 80px;
        }
        .textarea{
            width: 100%;
            height: 26px;
            margin-top: 6px;
            .left{
                float: left;
                color: rgb(125, 126, 128);
                span{
                    font-size: 20px;
                    margin-right: 8px;
                }
            }
            .right{
                color: aliceblue;
                float: right;
                padding: 2px 18px 3px 18px;
                border: 1px solid rgb(125, 126, 128);
                border-radius: 16px;
                &:hover{
                    background-color: rgb(123, 125, 128);
                }
            }
        }
        .content{
            width: 100%;
            .total{
                margin-top: 4px;
                color: aliceblue;
                font-size: 17px;
                font-weight: 700;
            }
            .hot{
                width: 100%;
                margin-top: 8px;
                li{
                    padding: 8px 0 8px 0;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    img{
                        border-radius: 50%;
                        margin-right: 8px;
                    }
                    .info{
                        flex: 70%;
                        p{
                            color: rgb(39, 42, 223);
                            font-size: 11px;
                            span{
                                color:aliceblue;
                                font-size: 13px;
                            }
                        }
                        .time{
                            color: rgb(86, 89, 88);
                            font-size: 13px;
                        }
                    }
                    .carry{
                        .icon{
                            font-size: 13px;
                        }
                        span{
                            font-size: 16px;
                            color: rgb(117, 122, 127);
                            padding: 0 16px 0 16px;
                            border-right: 1px solid rgb(120, 124, 127);
                        }
                        span:nth-child(4)
                        {
                            padding: 0 0 0 16px;
                            border-right: 0px solid rgb(126, 131, 135);
                        }
                    }
                }
            }
            .new{
                width: 100%;
                margin-top: 8px;
                li{
                    padding: 8px 0 8px 0;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    img{
                        border-radius: 50%;
                        margin-right: 8px;
                    }
                    .info{
                        flex: 70%;
                        p{
                            color: rgb(39, 42, 223);
                            font-size: 11px;
                            span{
                                color:aliceblue;
                                font-size: 13px;
                            }
                        }
                        .time{
                            color: rgb(86, 89, 88);
                            font-size: 13px;
                        }
                    }
                    .carry{
                        .icon{
                            font-size: 13px;
                        }
                        span{
                            font-size: 16px;
                            color: rgb(117, 122, 127);
                            padding: 0 16px 0 16px;
                            border-right: 1px solid rgb(120, 124, 127);
                        }
                        span:nth-child(4)
                        {
                            padding: 0 0 0 16px;
                            border-right: 0px solid rgb(126, 131, 135);
                        }
                    }
                }
            }
        }
    }
</style>