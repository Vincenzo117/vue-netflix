<template>
  <div id="manage-profile">
    <div class="manage-profile__content-wrapper">
      <div class="manage-profile__header">
        <h1 class="header__title">Modifica il profilo</h1>
      </div>

      <div class="manage-profile__body">
        <figure class="body__thumb">
          <img :src="profile.avatar" alt="#" />
        </figure>

        <input
          :class="['body__input-name', wrongName ? 'body__input--wrong' : '']"
          type="text"
          placeholder="Nome"
          v-model="profileNameInput"
        />

        <div class="body__input-wrapper">
          <div class="body__input-language">
            <label for="language">Lingua:</label>
            <select name="language" id="language">
              <option value="it">Italiano</option>
              <option value="en">Inglese</option>
            </select>
          </div>

          <div class="body__input-kids">
            <input type="checkbox" name="adult" value="adult" />
            <label for="adult">Bambino/a?</label>
          </div>
        </div>
      </div>

      <div class="manage-profile__footer">
        <div>
          <ActionButton text="Salva" color="white" />
        </div>
        <router-link :to="{ name: 'ChooseProfile' }">
          <ActionButton text="Annulla" color="gray" />
        </router-link>
        <div>
          <ActionButton text="Elimina Profilo" color="gray" />
        </div>
      </div>
    </div>
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
      profileNameInput: "",
    };
  },
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapGetters(["profiles"]),
    profile() {
      return this.profiles[this.id - 1];
    },
  },
  methods: {
    ...mapActions([]),
  },
  created() {
    this.profileNameInput = this.profile.name;
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
        @apply w-[140px] rounded-md overflow-hidden md:row-span-2;
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
}
</style>