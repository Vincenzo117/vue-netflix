<template>
  <div id="choose-profile">
    <div class="choose-profile__content-wrapper">
      <h1 class="choose-profile__title">Gestisci i profili:</h1>

      <ul class="choose-profile__profile-list">
        <router-link
          class="contents"
          v-for="profile in profiles"
          :key="profile.id"
          :to="{ name: 'ManageProfile', params: { id: profile.id, name: profile.name } }"
        >
          <li
            :class="[
              'profile-card',
              profile.id == 1 ? 'profile-card--kids' : '',
            ]"
          >
            <figure class="profile-card__avatar">
              <img :src="profile.avatar" alt="" />
              <div class="profile-card__overlay">
                <font-awesome-icon icon="fa-solid fa-pencil" />
              </div>
            </figure>
            <h3 class="profile-card__title">
              {{ profile.name }}
            </h3>
          </li>
        </router-link>
        <router-link :to="{ name: 'AddProfile' }" class="contents">
          <li class="profile-card profile-card--add-profile">
            <figure class="profile-card__avatar">
              <font-awesome-icon icon="fa-solid fa-circle-plus" />
            </figure>
            <h3 class="profile-card__title">Aggiungi un profilo</h3>
          </li>
        </router-link>
      </ul>
      <router-link
        :to="{ name: 'ChooseProfile' }"
        class="choose-profile__button"
      >
        <ActionButton text="Fine" color="white" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "SelectProfileToManage",
  components: {
    ActionButton,
  },
  computed: {
    ...mapGetters(["profiles"]),
  },
};
</script>

<style lang="scss" scoped>
#choose-profile {
  @apply grow py-5 px-14 flex justify-center items-center transition-all;

  .choose-profile__content-wrapper {
    @apply flex flex-col justify-center items-center;

    .choose-profile__title {
      @apply mb-12 text-[22px] sm:text-[30px] md:text-[calc(2.5vw+20px)] whitespace-nowrap;
    }

    .choose-profile__profile-list {
      @apply shrink-0 flex justify-center flex-wrap;

      .profile-card {
        @apply min-w-[180px] w-1/4 max-w-[200px] mb-6 px-3 lg:px-5 text-center text-[#808080] hover:text-white cursor-pointer;

        &:hover .profile-card__avatar {
          @apply outline outline-4 outline-white;
        }

        .profile-card__avatar {
          @apply relative rounded-md overflow-hidden;

          .profile-card__overlay {
            @apply absolute top-0 right-0 bottom-0 left-0 bg-black/70 text-[30px] flex justify-center items-center;
          }
        }

        .profile-card__title {
          @apply mt-5 text-[16px] md:text-[20px] lg:text-[24px];
        }

        &.profile-card--add-profile {
          @apply order-[100];

          .profile-card__avatar {
            @apply aspect-square text-[80px] flex justify-center items-center;
          }
        }

        &.profile-card--kids {
          @apply order-[99];
        }
      }
    }

    .choose-profile__button {
      @apply mt-10 lg:mt-16;
    }
  }
}
</style>