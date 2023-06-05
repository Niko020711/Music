import request from './request'

// 获取轮播图数据
export const reqBannerList = function()
{
    return request({
        url:'/banner?type=0',
        method: 'get'
    })
}

// 获取推荐歌单数据
export const reqRecommonPlayList = function()
{
    return request({
        url: `/personalized?limit=10`,
        method: 'get'
    })
}

// 获取热门歌单分类
export const reqHotPlayListSort = function()
{
    return request({
        url: `/playlist/hot`,
        method: 'get'
    })
}


// 获取精品歌单
export const reqHotPlayList = function(cat,before)
{
    return request({
        url: `/top/playlist/highquality?limit=50&cat=${cat}`,
        method: 'get'
    })
}

// 获取歌单所有歌曲
export const reqPlayListAllMusic = function(id)
{
    return request({
        url: `/playlist/track/all?id=${id}&limit=50&offset=0`,
        method: 'get'
    })
}

// 获取歌单评论
export const reqPlayListComment = function(id)
{
    return request({
        url:  `/comment/playlist?id=${id}&limit=100`,
        method: 'get'
    })
}

// 获取歌单收藏者
export const reqPlayListCollect = function(id)
{
    return request({
        url: `/playlist/subscribers?id=${id}&limit=50`,
        method: 'get'
    })
}


