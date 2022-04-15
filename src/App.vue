<template>
  <div id="app">
    <MainHeader />

    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
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
  @apply min-h-screen w-screen pt-36 md:pt-20 bg-[#141414] text-white flex flex-col;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  img {
    @apply w-full;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, scale 1s, transform 1s;
}

.slide-enter,
.slide-leave {
  opacity: 0;
  scale: 0.1;
}
</style>

