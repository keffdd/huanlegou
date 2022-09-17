<template>
<div>
  <MyHeader></MyHeader>
  <router-view></router-view>
  <MyFooter v-show="$route.meta.show"></MyFooter>
</div>
</template>

<script>
import MyHeader from './components/Header/MyHeader.vue';
import MyFooter from   './components/Footer/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>
</style>
