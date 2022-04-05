<template>
  <div id="search-view">
    <ul class="contents" v-if="results.length > 0">
      <li class="search-result" v-for="result in results" :key="result.id">
        <figure class="result__thumb">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`"
            alt=""
          />
        </figure>
      </li>
    </ul>
    <div class="loading" v-if="results.length == 0">
      <img src="@/assets/img/loading.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["filter", "profiles", "results"]),
    profile() {
      return this.profiles[this.id - 1];
    },
  },
};
</script>

<style lang="scss" scoped>
#search-view {
  @apply grow p-12 flex flex-wrap gap-x-2 gap-y-10 justify-center items-center;

  .search-result {
    .result__thumb {
      @apply min-w-[150px] max-w-[280px] aspect-video rounded-md overflow-hidden;
    }
  }

  .loading {
    @apply w-14 animate-spin;
    filter: invert(12%) sepia(100%) saturate(5335%) hue-rotate(352deg)
      brightness(89%) contrast(102%);
  }
}
</style>