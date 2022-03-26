<template>
  <header id="main-header" :class="isProfileView ? 'main-header--simple' : ''">
    <figure class="main-header__logo">
      <img src="@/assets/img/logo.svg" alt="" />
    </figure>

    <nav class="main-header__navbar">
        Not in ProfilesView anymore
    </nav>
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
  @apply shrink-0 py-5 px-11 bg-gradient-to-b from-[#060606] flex justify-between;

  .main-header__logo {
    @apply w-24;
  }

  &.main-header--simple {
      .main-header__navbar {
          @apply hidden;
      }
  }
}
</style>