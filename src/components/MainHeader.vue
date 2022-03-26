<template>
  <header id="main-header" :class="isProfileView ? 'main-header--simple' : ''">
    <router-link :to="{ name: 'ChooseProfile' }" class="contents">
      <figure class="main-header__logo">
        <img class="hidden md:block" src="@/assets/img/logo.svg" alt="" />
        <img class="md:hidden" src="@/assets/img/logo-small.svg" alt="" />
      </figure>
    </router-link>

    <nav class="main-header__navbar">Not in ProfilesView anymore</nav>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  computed: {
    isProfileView() {
      if (
        this.$route.name === "ChooseProfile" ||
        this.$route.name === "AddProfile" ||
        this.$route.name === "ManageProfile" ||
        this.$route.name === "SelectProfileToManage"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#main-header {
  @apply shrink-0 py-6 px-5 md:px-11 bg-gradient-to-b from-[#060606] flex justify-between;

  .main-header__logo {
    @apply w-10 md:w-24;
  }

  &.main-header--simple {
    .main-header__navbar {
      @apply hidden;
    }
  }
}
</style>