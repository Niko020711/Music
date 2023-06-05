<template>
  <div class="head">
    <div class="left">
        <span class="iconfont" @click="$router.push('/')">&#xe62c;</span>
        <div class="info">
            <span class="iconfont" @click="$router.go(-1)">&#xe601;</span>
            <span class="iconfont" @click="$router.go(1)">&#xe600;</span>
            <div class="search">
                <input type="text" placeholder="林俊杰">
                <span class="iconfont">&#xe63a;</span>
            </div>
            <span class="iconfont">&#xe67e;</span>
        </div>
    </div>
    <div class="right">
        <img src="../../assets/美女.jpg" alt="" height="40" width="40" @click="goNewTest">
        <span class="font">示爱者凭玫瑰表达深情</span>
        <span class="iconfont">&#xe666;</span>
        <span class="iconfont">&#xe68f;</span>
        <span class="iconfont">&#xe64d;</span>
        <span class="iconfont">&#xe6d3;</span>
        <span class="iconfont">&#xe729;</span>
        <span class="iconfont">&#xe62e;</span>
        <span class="iconfont">&#xeaf3;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goNewTest()
    {
        this.$router.push('home/test');
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 73px;
  background-color: #222225;
  border-bottom: 2px solid #901515;
  .left{
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
    .iconfont{
        margin-left: 20px;
        font-size: 140px;
        color: rgb(185, 21, 21);
    }
    .info{
        display: flex;
        margin-left: 80px;
        span{
            margin-top: 4px;
            font-size: 22px;
            color: #d4d4d4;
        }
        input{
            outline: none;
            text-indent: 26px;
            border: 0;
            margin-left: 20px;
            display: inline-block;
            border-radius: 10px;
            padding: 8px;
            background-color: #2b2b2e;
        }
    }
    .search{
        position: relative;
        .iconfont{
            position: absolute;
            left: 4px;
            top: 3px;
        }
    }
  }
  .right{
    height: 100%;
    display: flex;
    float: right;
    align-items: center;
    margin-right: 25px;
    img{
        border-radius: 50%;
    }
    span{
        display: inline-block;
        width: 44px;
        font-size: 22px;
        text-align: center;
        color: #d4d4d4;
    }
    span:nth-child(6)
    {
        border-right: 1px solid #2b2b2e;
    }
    .font{
        margin-left: 5px;
        font-size: 12px;
        width: 70px;
        margin-right: 20px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
  }
}
</style>