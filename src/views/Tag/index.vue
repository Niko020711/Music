<template>
  <div class="tag">
    <div class="oneTag"><span ref="tag">华语</span> ></div>
    <div class="tags">
        <span :class="(currentIndex === index?'newspan':'')"  @click="clickTag(item,index)" v-for="item,index in hotPlayListTag" :key="item.id">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    name: 'tag',
    data() {
        return {
            currentIndex: 0,
        }
    },
    mounted()
    {
        this.$store.dispatch('getHotPlayList',this.nowPlayListTag);
    },
    methods: {
        ...mapMutations(['updateCat','updateNowPlayListTag']),
        ...mapActions(['getHotPlayList']),
        // 点击标签，实现背景变红，以及下面歌单列表的更新
        clickTag(item,index)
        {
            this.currentIndex = index;
            this.updateNowPlayListTag(item.name);
            this.$refs.tag.innerHTML = this.nowPlayListTag.cat;
            this.$store.dispatch('getHotPlayList',this.nowPlayListTag);
        }
    },
    watch: {
        nowPlayListTag:
        {
            handler()
            {
                this.$refs.tag.innerHTML = this.nowPlayListTag.cat;
            },
            deep:true,
            immediate:true
        }

    },
    computed: {
        ...mapState(['hotPlayListTag','playListTag','nowPlayListTag']),
    }
}
</script>

<style lang="less" scoped>
    .tag{
        width: 1100px;
        margin: 20px auto;
        margin-left: 10px;
        .oneTag{
            float: left;
            color: aliceblue;
            padding: 3px 20px 3px 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
        .tags{
            float: right;
            span{
                padding: 4px 10px 4px 10px;
                margin-left: 8px;
                font-size: 12px;
                color: #ccc;
                text-align: center;
            }
            .newspan{
                background-color: rgba(239, 94, 94,0.4);
                border-radius: 10px;
                color: rgb(121, 104, 104);
            }
        }
    }
</style>