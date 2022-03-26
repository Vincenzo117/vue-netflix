<template>
  <div id="app">
    <MainHeader />

    <router-view />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";

export default {
  components: {
    MainHeader,
  },
};
</script>


<style lang="scss">
// @apply positioning dimension-properties(grow/shrink/...) height/width margin/padding/border backgorund text kids-layout(flex/grid/...) other
#app {
  @apply min-h-screen w-screen  bg-[#141414] text-white flex flex-col;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  img {
    @apply w-full;
  }
}
</style>

