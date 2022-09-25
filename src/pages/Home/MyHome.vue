<template>
  <div>
   <TypNav></TypNav>
   <ListContainer></ListContainer>
   <TodayRecommend></TodayRecommend>
    <MyLike></MyLike>
    <MyFloor></MyFloor>
    <MyBrand></MyBrand>
  </div>
</template>

<script>
// import TypNav from '@/pages/Home/TypNav/TypNav.vue'
import ListContainer from '@/pages/Home/ListContainer/ListContainer.vue'
import TodayRecommend from '@/pages/Home/TodayRecommend/TodayRecommend.vue'
import MyLike from '@/pages/Home/MyLike/MyLike.vue'
import MyFloor from '@/pages/Home/MyFloor/MyFloor.vue'
import MyBrand from '@/pages/Home/MyBrand/MyBrand.vue'
import { mapState } from 'vuex'

export default {
    name:'MyHome',
    components:{ListContainer,TodayRecommend,MyLike,MyFloor,MyBrand},
    mounted() {
      this.$store.dispatch('getFloorList')
      // 获取用户信息
      // this.$store.dispatch('userInfo')
    },
    computed: {
      ...mapState({
        floorList:state=>state.home.floorList
      })
    },
}
</script>

<style>

</style>