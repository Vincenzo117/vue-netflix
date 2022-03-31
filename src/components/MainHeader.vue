<template>
  <header id="main-header" :class="isProfileView ? 'main-header--simple' : ''">
    <router-link :to="{ name: 'ChooseProfile' }" class="contents">
      <figure class="main-header__logo">
        <img class="hidden md:block" src="@/assets/img/logo.svg" alt="" />
        <img class="md:hidden" src="@/assets/img/logo-small.svg" alt="" />
      </figure>
    </router-link>

    <nav class="main-header__navbar">
      <ul class="navbar__categories">
        <li class="navbar__category active">Home</li>
        <li class="navbar__category">Serie TV</li>
        <li class="navbar__category">Film</li>
        <li class="navbar__category">Nuovi e popolari</li>
        <li class="navbar__category">La mia lista</li>
      </ul>
      <ul class="navbar__actions">
        <li class="navbar__searchbar-wrapper">
          <button>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </button>
        </li>
        <router-link
          :to="{
            name: 'BrowseHome',
            params: { name: 'Bambini', id: 1 },
          }"
        >
          <li class="navbar__kids-category">Bambini</li>
        </router-link>
        <li>
          <button>
            <font-awesome-icon icon="fa-solid fa-bell" />
          </button>
        </li>
        <li class="navbar__profile-selection">
          <figure class="navbar__profile-avatar">
            <img :src="profile ? profile.avatar : ''" alt="" />
          </figure>
          <button @click="showProfiles()">
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainHeader",
  data() {
    displayProfiles: false
  },
  computed: {
    ...mapGetters(["profiles"]),
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
    profile() {
      return this.profiles[this.$route.params.id - 1];
    },
  },
};
</script>

<style lang="scss" scoped>
#main-header {
  @apply fixed top-0 left-0 right-0 py-6 px-5 md:px-11 bg-gradient-to-b from-[#060606] flex items-center gap-10;

  .main-header__logo {
    @apply shrink-0 w-10 md:w-24;
  }

  &.main-header--simple {
    .main-header__navbar {
      @apply hidden;
    }
  }

  .main-header__navbar {
    @apply grow flex justify-between items-center;

    .navbar__categories {
      @apply text-[14px] flex gap-5;

      .navbar__category {
        @apply hover:text-white/70 whitespace-nowrap transition-all  cursor-pointer;

        &.active {
          @apply font-semibold hover:text-white;
        }
      }
    }
    .navbar__actions {
      @apply flex items-center gap-5;

      .navbar__profile-selection {
        @apply flex items-center gap-2;
        .navbar__profile-avatar {
          @apply w-8 rounded overflow-hidden;
        }
      }
    }
  }
}
</style>