<template>
  <div id="manage-profile">
    <div class="manage-profile__content-wrapper">
      <div class="manage-profile__header">
        <h1 class="header__title">Modifica il profilo</h1>
      </div>

      <div class="manage-profile__body">
        <figure class="body__thumb">
          <img :src="modifiedProfile.avatar" alt="#" />
          <div class="body__thumb-icon" @click="showAvatars = true">
            <font-awesome-icon icon="fa-solid fa-pencil" />
          </div>
        </figure>

        <input
          :class="['body__input-name', wrongName ? 'body__input--wrong' : '']"
          type="text"
          placeholder="Nome"
          v-model="modifiedProfile.name"
        />

        <div class="body__input-wrapper">
          <div class="body__input-language">
            <label for="language">Lingua:</label>
            <select
              name="language"
              id="language"
              v-model="modifiedProfile.language"
            >
              <option value="it">Italiano</option>
              <option value="en">Inglese</option>
            </select>
          </div>

          <div class="body__input-kids">
            <input
              type="checkbox"
              name="adult"
              value="adult"
              v-model="modifiedProfile.kids"
            />
            <label for="adult">Bambino/a?</label>
          </div>
        </div>
      </div>

      <div class="manage-profile__footer">
        <div @click="saveProfile()">
          <ActionButton text="Salva" color="white" />
        </div>
        <router-link :to="{ name: 'ChooseProfile' }">
          <ActionButton text="Annulla" color="gray" />
        </router-link>
        <div @click="cancelProfile()">
          <ActionButton text="Elimina Profilo" color="gray" />
        </div>
      </div>
    </div>

    <ul class="manage-profile__avatars-list" v-if="showAvatars">
      <li
        class="avatar-list__avatar-item"
        v-for="(avatar, i) in profileAvatars"
        :key="i"
        @click="updateAvatar(avatar)"
      >
        <figure>
          <img :src="avatar" alt="" />
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ManageProfile",
  components: {
    ActionButton,
  },
  data() {
    return {
      wrongName: false,
      showAvatars: false,
      modifiedProfile: {
        id: null,
        name: "",
        avatar: "",
        language: "",
        kids: false,
      },
    };
  },
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapGetters(["profiles", "profileAvatars"]),
    profile() {
      return this.profiles[this.id - 1];
    },
  },
  methods: {
    ...mapActions(["deleteProfile", "updateProfile"]),
    updateAvatar(avatar) {
      this.modifiedProfile.avatar = avatar;
      this.showAvatars = false;
    },
    cancelProfile() {
      this.deleteProfile(this.id);
      this.$router.push({ name: "ChooseProfile" });
    },
    saveProfile() {
      if (
        this.modifiedProfile.name !== "" &&
        this.modifiedProfile.name !== " " &&
        this.modifiedProfile.name.length < 16
      ) {
        this.updateProfile(this.modifiedProfile);
        this.$router.push({ name: "ChooseProfile" });
      } else {
        this.wrongName = true;
      }
    },
  },
  created() {
    this.modifiedProfile = {
      id: this.id,
      name: this.profile.name,
      avatar: this.profile.avatar,
      language: this.profile.language,
      kids: this.profile.kids,
    };
  },
};
</script>

<style lang="scss" scoped>
#manage-profile {
  @apply grow py-5 px-14 flex justify-center items-center transition-all;

  .manage-profile__content-wrapper {
    @apply relative bottom-[50px] flex flex-col justify-center items-center;

    .manage-profile__header {
      @apply w-full pb-5 border-b-[1px] border-[#333333] text-center sm:text-left;

      .header__title {
        @apply text-white text-[calc(2.5vw+15px)] whitespace-nowrap;
      }
    }

    .manage-profile__body {
      @apply w-full py-7 border-b-[1px] border-[#333333] flex flex-col items-center gap-4 md:grid grid-rows-3 md:grid-rows-2 md:grid-cols-4 gap-x-6 gap-y-3;

      .body__thumb {
        @apply relative w-[140px] rounded-md overflow-hidden md:row-span-2;

        .body__thumb-icon {
          @apply absolute bottom-2 left-3 w-8 bg-black/50 text-[12px] rounded-full aspect-square flex justify-center items-center cursor-pointer;
        }
      }

      .body__input-name {
        @apply sm:grow h-[36px] sm:h-[48px] px-5 bg-[#666666] text-white text-[14px] md:text-[18px] lg:text-[20px] md:col-span-3;

        &.body__input--wrong {
          @apply outline outline-4 outline-red-700 animate-pulse;
        }
      }

      .body__input-wrapper {
        @apply flex flex-col items-center gap-4 md:flex-row md:gap-24 md:col-span-3;

        .body__input-language {
          @apply text-[14px] md:text-[18px] lg:text-[20px] flex items-center gap-2;

          #language {
            @apply py-3 px-2 border-[1px] border-white/20 bg-black;
          }
        }

        .body__input-kids {
          @apply w-[calc((100%-94px)/5)] text-[14px] md:text-[18px] lg:text-[20px] flex justify-center items-center gap-3;

          input {
            @apply shrink-0 w-[30px] m-0 border-[1px] border-[#333333] bg-[#141414] text-[#808080] grid place-content-center cursor-pointer appearance-none aspect-square;
            -webkit-appearance: none;
            font: inherit;
            &::before {
              @apply content-[''] h-[0.65em] w-[0.65em] bg-[#666666];
              transform: scale(0);
              transition: 120ms transform ease-in-out;
              box-shadow: inset 1em 1em var(--form-control-color);
            }
            &:checked::before {
              transform: scale(1);
            }
          }
        }
      }
    }

    .manage-profile__footer {
      @apply w-full mt-11 flex justify-center sm:justify-start flex-wrap gap-5;

      #action-button {
        @apply px-0 w-40 sm:px-11 sm:w-auto;
      }
    }
  }

  .manage-profile__avatars-list {
    @apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] p-12 rounded-lg bg-black/80 flex flex-wrap justify-center items-center gap-3 overflow-auto;

    .avatar-list__avatar-item {
      @apply min-w-[30px] max-w-[150px] rounded-md overflow-hidden cursor-pointer;
    }
  }
}
</style>