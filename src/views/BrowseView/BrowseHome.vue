<template>
  <div id="browse-home">
  
     <h1 class="browse-home__title">Trending today:</h1>
      <ul class="contents" v-if="trending.length > 0">
        <li class="search-result" v-for="result in trending" :key="result.id">
          <figure class="result__thumb">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`"
              alt=""
            />
          </figure>
        </li>
      </ul>
 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BrowseHome",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["trending", "profiles"]),
    profile() {
      return this.profiles[this.id - 1];
    },
  },
  methods: {
    ...mapActions(["fetchTrending"]),
  },
  mounted() {
    this.fetchTrending();
  },
};
</script>

<style lang="scss" scoped>
#browse-home {
  @apply grow p-12 flex flex-wrap gap-x-2 gap-y-10 justify-center items-center;

  .browse-home__title {
    @apply w-full text-2xl;
  }

  .search-result {
    .result__thumb {
      @apply min-w-[150px] max-w-[280px] aspect-video rounded-md overflow-hidden;
    }
  }
}
</style>