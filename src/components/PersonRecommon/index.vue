<template>
  <div class="personRecommon">
    <Banner></Banner>
    <RecomPlayList></RecomPlayList>
  </div>
</template>

<script>
import Banner from '../../views/Banner/index.vue'
import RecomPlayList from '../../views/recomPlayList/index.vue'
export default {
    name: 'personRecommon',
    components: {
        Banner,
        RecomPlayList,
    },
    
}
</script>

<style>

</style>