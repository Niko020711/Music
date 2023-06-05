<template>
  <div class="footer">
    <div class="left">
        <img :src="footerInfo.al.picUrl" alt="" width="70" height="70">
        <div class="musicInfo">
            <div class="musicTitle">
                <p>{{footerInfo.name}}</p>
                <span class="iconfont">&#xe61a;</span>
            </div>
            <p v-for="item,index in footerInfo.ar" :key="index">{{item.name}}</p>
        </div>
    </div>
    <div class="contain">
        <div class="top">
            <!-- 列表循环 -->
            <span class="iconfont" @click="changePlayCycleMode(1)" v-show="playCycleMode===0">&#xe68d;</span>
            <!-- 随机循环 -->
            <span class="iconfont" @click="changePlayCycleMode(2)" v-show="playCycleMode===1">&#xe611;</span>
            <!-- 单曲循环 -->
            <span class="iconfont" @click="changePlayCycleMode(0)" v-show="playCycleMode===2">&#xea75;</span>
            <!-- 上一首 -->
            <span class="iconfont" @click="previouSong">&#xe63b;</span>
            <!-- 播放 -->
            <span class="iconfont icon1" @click="changePlayState(1)" v-show="footerButton===0">&#xe624;</span>
            <!-- 暂停 -->
            <span class="iconfont icon1" @click="changePlayState(0)" v-show="footerButton===1">&#xe629;</span>
            <!-- 下一首 -->
            <span class="iconfont" @click="nextSong">&#xe639;</span>
            <span class="iconfont">&#xe671;</span>
        </div>
        <Audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${footerInfo.id}.mp3`"
        ></Audio>
        <div class="bottom">
            <div class="progress"></div>
        </div>
    </div>
    <div class="right">3</div>
  </div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'footer',
    computed: {
        ...mapState(['footerInfo','footerButton','playCycleMode','songs','footerInSongsIndex']),
    },
    mounted()
    {
        console.log(footerInfo.id);
    },
    methods: {
        ...mapMutations(['updateFooterButton','updatePlayCycleMode','updateFooterInfo','updateFooterInSongsIndex']),
        // 改变播放暂停按钮
        changePlayState(num)
        {
            // 如果该音频现在暂停状态下
            if(this.$refs.audio.paused)
            {
                this.$refs.audio.play();
                this.updateFooterButton(num);
            }
            else
            {
                this.$refs.audio.pause();
                this.updateFooterButton(num);
            }
            
        },
        // 改变歌曲循环方式
        changePlayCycleMode(num)
        {
            this.updatePlayCycleMode(num);
        },
        // 上一首歌
        previouSong()
        {
            // 如果当前处于第一首歌  那么点击上一首后将其置于最后一首
            if(this.footerInSongsIndex === 0)
            {
                this.updateFooterInSongsIndex(this.songs.length - 1);
                this.updateFooterInfo(this.songs[this.footerInSongsIndex]);
            }
            // 如果不是第一首  那么按照正常逻辑来找前一首
            else
            {
                let num = this.footerInSongsIndex - 1;
                this.updateFooterInSongsIndex(num);
                this.updateFooterInfo(this.songs[this.footerInSongsIndex]);
            }       
        },
        // 下一首歌
        nextSong()
        {
            // 如果当前歌曲是最后一首
            if(this.footerInSongsIndex === this.songs.length - 1)
            {
                this.updateFooterInSongsIndex(0);
                this.updateFooterInfo(this.songs[this.footerInSongsIndex]);
            }
            else
            {
                let num = this.footerInSongsIndex + 1;
                this.updateFooterInSongsIndex(num);
                this.updateFooterInfo(this.songs[this.footerInSongsIndex]);
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .footer{
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #282828;
        height: 90px;
        border-top: 1px solid #3d3d3d;
        .left{
            margin-left: 10px;
            flex: 20%;
            display: flex;
            align-items: center;
            overflow: hidden;
            img{
                border-radius: 8px;
            }
            .musicInfo{
                color: aliceblue;
                margin-left: 15px;
                p:nth-child(1)
                {
                    margin-bottom: 12px;
                    font-size: 14px;
                }
                p:nth-child(2)
                {
                    font-size: 12px;
                }
                .musicTitle{
                    display: flex;
                    span{
                        margin-left: 10px;
                        font-size: 20px;
                    }
                }
            }
        }
        .contain{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 60%;
            color: aliceblue;
            .top{
                margin-top: 14px;
                display: flex;
                align-items: center;
                .iconfont{
                    font-size: 24px;
                    margin: 0 20px 0 20px;
                    &:hover{
                        color: brown;
                        cursor: pointer;
                    }
                }
                .icon1{
                    font-size: 34px;
                    background-color: rgba(0, 0, 0, 0.3);
                    border-radius: 50%;
                    &:hover{
                        background-color: rgba(50, 47, 47, 0.3);
                    }
                }
            }
            .bottom{
                position: relative;
                z-index: 1;
                margin-top: 15px;
                width: 400px;
                height: 6px;
                border-radius: 2px;
                background-color: rgb(100, 107, 107);
                .progress{
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 2;
                    width: 100px;
                    height: 6px;
                    background-color: rgb(103, 40, 40);
                }
            }
        }
        .right{
            flex: 20%;
        }
    }
</style>