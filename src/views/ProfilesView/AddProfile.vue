<template>
  <div id="add-profile">
    <div class="add-profile__content-wrapper">
      <div class="add-profile__header">
        <h1 class="header__title">Aggiungi un profilo</h1>
        <p class="header__subtitle">
          Aggiungi un profilo per un'altra persona che guarderà Netflix.
        </p>
      </div>

      <div class="add-profile__body">
        <figure class="body__thumb">
          <img :src="newProfile.avatar" alt="#" />
        </figure>
        <input
          :class="['body__input', wrongName ? 'body__input--wrong' : '']"
          type="text"
          placeholder="Nome"
          v-model="newProfile.name"
        />
        <div class="body__checkbox">
          <input
            type="checkbox"
            name="adult"
            value="adult"
            v-model="newProfile.kids"
          />
          <label for="adult">Bambino/a?</label>
        </div>
      </div>

      <div class="add-profile__footer">
        <div @click="createNewProfile()">
          <ActionButton text="Continua" color="white" />
        </div>
        <router-link :to="{ name: 'ChooseProfile' }">
          <ActionButton text="Annulla" color="gray" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddProfile",
  components: {
    ActionButton,
  },
  data() {
    return {
      newProfile: {
        id: null,
        name: "",
        avatar: "",
        language: 'it',
        kids: false,
      },
      wrongName: false,
    };
  },
  methods: {
    ...mapActions(["createProfile"]),
    createNewProfile() {
      if (this.newProfile.name !== "" && this.newProfile.name !== " ") {
        this.wrongName = false;
        this.newProfile.id = this.profiles.length + 1;
        this.createProfile(this.newProfile);

        this.$router.push({ name: "ChooseProfile" });
      } else {
        this.wrongName = true;
      }
    },
    getRandomAvatar() {
      return this.profileAvatars[
        Math.floor(Math.random() * this.profileAvatars.length)
      ];
    },
  },
  computed: {
    ...mapGetters(["profiles", "profileAvatars"]),
  },
  created() {
    this.newProfile.avatar = this.getRandomAvatar();
  },
};
</script>

<style lang="scss" scoped>
#add-profile {
  @apply grow py-5 px-14 flex justify-center items-center transition-all;

  .add-profile__content-wrapper {
    @apply relative bottom-[50px] flex flex-col justify-center items-center;

    .add-profile__header {
      @apply w-full pb-5 border-b-[1px] border-[#333333] text-center sm:text-left;

      .header__title {
        @apply text-white text-[calc(2.5vw+15px)] whitespace-nowrap;
      }
      .header__subtitle {
        @apply text-[#808080] text-[16px] md:text-[20px] lg:text-[24px];
      }
    }

    .add-profile__body {
      @apply w-full py-7 border-b-[1px] border-[#333333] flex flex-col sm:flex-row justify-center items-center gap-11;

      .body__thumb {
        @apply w-[140px] rounded-md overflow-hidden;
      }

      .body__input {
        @apply sm:grow h-[36px] sm:h-[48px] px-5 bg-[#666666] text-white text-[14px] md:text-[18px] lg:text-[20px];

        &.body__input--wrong {
          @apply outline outline-4 outline-red-700 animate-pulse;
        }
      }

      .body__checkbox {
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

    .add-profile__footer {
      @apply w-full mt-11 flex justify-center sm:justify-start gap-5;
    }
  }
}
</style>