import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
import {reqHotPlayListSort,reqHotPlayList,reqPlayListAllMusic,reqPlayListComment,reqPlayListCollect} from '../api/home'
const state = {
    // 热门歌单分类,
    hotPlayListTag: [],
    // 热门歌单
    hotPlayList: [],
    // 导航栏变化
    currentIndex: 0,
    // 歌单标签
    playListTag: {
        cat: '电子'
    },
    // 控制导航栏是否显示
    isNavShow: true,
    // 歌单全部歌曲详情
    songs: [],
    // 点击后需要渲染出的歌单详情
    needApplyPlayList: {},
    // 歌单信息导航栏变化
    playInfoNavIndex: 1,
    // 当前选中的歌单标签
    nowPlayListTag: {
        cat: '电子'
    },
    // 底部组件需要渲染的数据
    footerInfo: {
        name: 'Cobalt',
        ar: [
            {
                name: 'Enzalla'
            }
        ],
        al: {
            picUrl: "https://p2.music.126.net/RzBLombFQRr0Is8FBjrJ_w==/3433774820853305.jpg"
        },
        id: 0
    },
    // 记录当前底部模块需要渲染歌单中的哪一个歌曲序号    默认为第一首歌
    footerInSongsIndex: 0,
    // 控制底部模块播放和暂停按钮  默认为暂停
    footerButton: 0,
    // 控制歌曲循环方式  默认列表循环
    playCycleMode: 0,
    // 控制歌曲列表右侧的搜索框显示
    playListInsert: 1,
    // 歌单评论
    comments: [],
    // 歌单热门评论
    hotComments: [],
    // 歌单收藏者
    subscribers: []
}
const mutations = {
    updatePlayListInsert(state,value)
    {
        state.playListInsert = value;
    },
    updateFooterInSongsIndex(state,value)
    {
        state.footerInSongsIndex = value;
    },
    updatePlayCycleMode(state,value)
    {
        state.playCycleMode = value;
    },
    updateFooterButton(state,value)
    {
        state.footerButton = value;
    },
    updateFooterInfo(state,value)
    {
        state.footerInfo = value;
    },
    updateNowPlayListTag(state,value)
    {
        state.nowPlayListTag.cat = value;
    },
    updatePlayInfoNavIndex(state,value)
    {
        state.playInfoNavIndex = value;
    },
    updateNeedApplyPlayList(state,value)
    {
        state.needApplyPlayList = value;
    },
    updateIsNavShow(state,value)
    {
        state.isNavShow = value;
    },
    updateHotPlayListTag(state,value)
    {
        state.hotPlayListTag = value;
    },
    updateHotPlayList(state,value)
    {
        state.hotPlayList = value;
    },
    updateCurrentIndex(state,value)
    {
        state.currentIndex = value;
    },
    updateSongs(state,value)
    {
        state.songs = value;
    },
    updateComments(state,value)
    {
        state.comments = value;
    },
    updateHotComments(state,value)
    {
        state.hotComments = value;
    },
    updateSubscribers(state,value)
    {
        state.subscribers = value;
    }

}
const actions = {
    // 获取热门歌单分类的面包屑
    async getHotPlayListSort({commit})
    {
      let result = await reqHotPlayListSort();
      console.log(result,11);
      if(result.data.code === 200)
      {
        commit('updateHotPlayListTag',result.data.tags)
      }
    },

    // 获取热门歌单
    async getHotPlayList({commit},value)
    {
        let result = await reqHotPlayList(value.cat);
        console.log(result);
        if(result.data.code === 200)
        {
            commit('updateHotPlayList',result.data.playlists);
        }
    },

    // 获取歌单中歌曲
    async getPlayListInfoAllMusic({commit},value)
    {
        let result = await reqPlayListAllMusic(value);
        console.log(result);
        if(result.data.code === 200)
        {
            commit('updateSongs',result.data.songs);
        }
    },

    // 获取歌单中的评论
    async getPlayListComment({commit},value)
    {
        let result = await reqPlayListComment(value);
        console.log(result);
        if(result.data.code === 200)
        {
            commit('updateComments',result.data.comments);
            commit('updateHotComments',result.data.hotComments);
        }
    },
    // 获取歌单收藏者
    async getPlayListCollent({commit},value)
    {
        let result = await reqPlayListCollect(value);
        console.log(result);
        if(result.data.code === 200)
        {
            commit('updateSubscribers',result.data.subscribers);
        }
    }
}
const getters = {}

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters
})