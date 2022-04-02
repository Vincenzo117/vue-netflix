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
          <button @mouseenter="showSearchbar = true">
            <input type="text" :class="[showSearchbar ? 'w-40 border-[1px]' : 'w-0', 'searchbar__input']" @mouseleave="showSearchbar = false">
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
        <li
          @mouseenter="displayProfiles = true"
          class="navbar__profile-selection"
        >
          <figure class="navbar__profile-avatar">
            <img :src="profile ? profile.avatar : ''" alt="" />
          </figure>
          <div :class="[displayProfiles ? 'rotate-180' : '', 'transition-all']">
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </div>
          <div
            :class="[
              'navbar__profiles-menu-wrapper',
              displayProfiles ? 'right-0' : '-right-[700px]',
            ]"
            @mouseleave="displayProfiles = false"
          >
            <ul class="profiles-menu__profile-list">
              <router-link
                class="contents"
                v-for="profile in profiles"
                :key="profile.id"
                :to="{
                  name: 'BrowseHome',
                  params: { id: profile.id, name: profile.name },
                }"
              >
                <li class="profiles-menu__profile">
                  <figure class="profile__avatar">
                    <img :src="profile.avatar" alt="" />
                  </figure>
                  <span class="profile__name">
                    {{ profile.name }}
                  </span>
                </li>
              </router-link>
              <router-link
                class="contents"
                :to="{
                  name: 'SelectProfileToManage',
                }"
              >
                <li class="profiles-menu__manage-profiles">
                  <font-awesome-icon
                    class="manage-profiles__icon"
                    icon="fa-solid fa-pencil"
                  />
                  <span class="manage-profiles__name">Gestisci i profili</span>
                </li>
              </router-link>
            </ul>

            <div class="profiles-menu__exit">
              <router-link :to="{ name: 'ChooseProfile' }">
                Esci da Netflix
              </router-link>
            </div>
          </div>
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
    return {
      displayProfiles: false,
      showSearchbar: false
    };
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
  @apply fixed top-0 left-0 z-50 right-0 py-6 px-5 md:px-11 bg-gradient-to-b from-[#060606] flex items-center gap-10;

  .main-header__logo {
    @apply shrink-0 w-10 md:w-24;
  }

  &.main-header--simple {
    .main-header__navbar {
      @apply hidden;
    }
  }

  .main-header__navbar {
    @apply grow flex justify-end md:justify-between items-center gap-5;

    .navbar__categories {
      @apply hidden md:flex text-[14px] gap-5;

      .navbar__category {
        @apply hover:text-white/70 whitespace-nowrap transition-all  cursor-pointer;

        &.active {
          @apply font-semibold hover:text-white;
        }
      }
    }

    .navbar__actions {
      @apply flex items-center gap-5;

      .navbar__searchbar-wrapper {
        .searchbar__input{
          @apply  bg-black transition-all;
        }
      }

      .navbar__profile-selection {
        @apply relative flex items-center gap-2 cursor-pointer;

        .navbar__profile-avatar {
          @apply w-8 rounded overflow-hidden;
        }

        .navbar__profiles-menu-wrapper {
          @apply absolute top-[45px] border-[1px] border-gray-500/30 bg-black/70 transition-all;

          .profiles-menu__profile-list {
            @apply p-4 border-b-[1px] border-gray-400/30 flex flex-col gap-3;

            .profiles-menu__profile {
              @apply flex items-center gap-2;

              .profile__avatar {
                @apply w-8 rounded overflow-hidden;
              }

              .profile__name {
                @apply text-[13px];
              }

              &:hover {
                .profile__name {
                  @apply underline transition-all;
                }
              }
            }

            .profiles-menu__manage-profiles {
              @apply text-[13px] flex items-center gap-2;

              .manage-profiles__icon {
                @apply w-8 text-[#808080];
              }

              .manage-profiles__name {
                @apply whitespace-nowrap;
              }

              &:hover {
                .manage-profiles__name {
                  @apply underline;
                }
              }
            }
          }

          .profiles-menu__exit {
            @apply ml-8 p-4 text-[13px] hover:underline;
          }
        }
      }

      .navbar__kids-category {
        @apply hidden lg:block;
      }
    }
  }
}
</style>