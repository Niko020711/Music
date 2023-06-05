import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/Home/index.vue'
import personRecommon from '../components/PersonRecommon/index.vue'
import playList from '../components/PlayList/index.vue'
import playListInfo from '../components/PlayListInfo/index.vue'
import playListTail from '../views/PlayListTail/index.vue'
import playListComment from '../views/PlayListComment/index.vue'
import playListCollent from '../views/PlayListCollent/index.vue'
import test from '../components/Test/index.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // 总页面
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    // 个性推荐模块
                    path:'/',
                    name: 'personRecommon',
                    component: personRecommon,
                },
                // 热门歌单页面
                {
                    path: 'home/playList',
                    name: 'playList',
                    component: playList
                },
                // 联系栅格布局模块
                {
                    path: 'home/test',
                    name: 'test',
                    component: test
                },
                // 歌单详情模块
                {
                    path: 'home/playListInfo',
                    name: 'playListInfo',
                    component: playListInfo,

                    children: [
                        // 歌单歌曲部分
                        {
                            // 在路由中，如果想要让其中一个小组件在大组件渲染时就出现，比如说导航栏中的第一个内容
                            // 那么可以将该小组件在路由中注册的路径弄成语父组件相同的路径，如果是二级路由需要在开头加/
                            path: '/home/playListInfo',
                            name: 'playListTail',
                            component: playListTail,
                        },
                        // 歌单评论部分
                        {
                            path: '/home/playListInfo/playListComment',
                            name: 'playListComment',
                            component: playListComment
                        },
                        // 歌单收藏者部分
                        {
                            path: '/home/playListInfo/playListCollent',
                            name: 'playListCollent',
                            component: playListCollent
                        }
                    ]
                }
            ]
        },
        
    ]
})

export default router;