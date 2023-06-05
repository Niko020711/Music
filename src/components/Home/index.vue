<template>
  <div class="home" id="scroll">
    <div class="nav" v-if="isNavShow">
      <ul>
        <li
          :class="index === currentIndex ? 'newli' : ''"
          @click="changeClass(index)"
          v-for="(item, index) in arr"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      arr: ["个性推荐", "专属定制", "歌单", "排行榜", "歌手", "最新音乐"],
    };
  },

  methods: {
    ...mapMutations(["updateCurrentIndex"]),
    changeClass(index) {
      this.$store.commit("updateCurrentIndex", index);
      if (index === 2) {
        if (this.$route.path !== "/home/playList") {
          this.$router.push("home/playList");
        } else {
          return;
        }
      }
      if (index === 0) {
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapState(["currentIndex",'isNavShow']),
  },
};
</script>

<style lang="less" scoped>
.home {
  // 去除x轴滚动条
  overflow: hidden auto;
  // 使y轴滚动条出现
  overflow-y: scroll;
  position: relative;
  display: inline-block;
  width: 83.72%;
  height: 646px;
  background-color: #2b2b2b;
  .nav {
    margin-top: 25px;
    margin-left: 28px;
    ul {
      height: 50px;
      display: flex;
      align-items: center;
      li {
        height: 50px;
        line-height: 50px;
        margin-left: 24px;
        color: #afafa8;
        &:hover {
          color: #e0e0d0;
        }
      }
    }
  }
}
.newli {
  font-weight: 700;
  font-size: 20px;
  color: #d0d0d0;
  border-bottom: 2px solid #ec4141;
}
</style>