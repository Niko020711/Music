<template>
  <div class="sidebar">
    <div class="bigModule">
        <ul>
            <li>发现音乐</li>
            <li>播客</li>
            <li>视频</li>
            <li>关注</li>
            <li>直播</li>
            <li>私人FM</li>
        </ul>
    </div>
    <div class="myMusic">
        <p>我的音乐</p>
        <ul>
            <li>
                <span class="iconfont">&#xe61a;</span>
                <span>我喜欢的音乐</span>
                <span class="iconfont icon1">&#xe60b;</span>
            </li>
            <li>
                <span class="iconfont">&#xe60e;</span>
                <span>本地与下载</span>
            </li>
            <li>
                <span class="iconfont">&#xe8c9;</span>
                <span>最近播放</span>
            </li>
        </ul>
    </div>
    <div class="createMusicList">
        <p>创建的歌单</p>
        <span class="iconfont">&#xeaf3;</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style lang="less" scoped>
    .sidebar{
        display: inline-block;
        color: #d4d4d4;
        float: left;
        height: 646px;
        width: 16.2%;
        background-color: #2b2b2b;
        border-right: 1px solid #444444;
        .bigModule{
            width: 100%;
            margin-left: 18px;
            margin-top: 18px;
            ul{
                width: 100%;
                li{
                    text-indent: 10px;
                    margin-top: 2px;
                    height: 45px;
                    width: 90%;
                    line-height: 45px;
                    &:hover{
                        background-color: #333333;
                        border-radius: 10px;
                    }
                }
            }
        }
        .myMusic{
            width: 100%;
            margin-top: 10px;
            p{
                font-size: 12px;
                color: #7c7c7c;
                margin-left: 18px;
            }
            ul{
                width: 100%;
                margin-top: 6px;
                li:nth-child(1)
                {
                    .icon1{
                        margin-left: 22px;
                        padding: 4px 14px 4px 14px;
                        border: 2px solid #373737;
                        border-radius: 14px;
                    }
                }
                li{
                    text-indent: 20px;
                    margin-top: 2px;
                    height: 45px;
                    width: 90%;
                    line-height: 45px;
                    &:hover{
                        background-color: #333333;
                        border-radius: 10px;
                    }
                    span{
                        margin-right: 6px;
                    }
                    .iconfont{
                        margin-right: 5px;
                    }
                }
            }
        }
        .createMusicList{
            margin-top: 10px;
            display: flex;
            align-items: center;
            width: 100%;
            p{
                font-size: 12px;
                color: #7c7c7c;
                margin-left: 18px;
            }
            span{
                margin-left: 100px;
            }
        }
    }
</style>