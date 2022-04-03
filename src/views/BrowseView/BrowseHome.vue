<template>
  <div id="browse-home">
    <div class="browse-home-wrapper">
      <h1>{{ profile.name }}'s homepage</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BrowseHome",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["profiles"]),
    profile() {
      return this.profiles[this.id - 1];
    },
  },
};
</script>

<style lang="scss" scoped>
#browse-home{
  @apply grow flex;
  .browse-home-wrapper {
    @apply grow flex justify-center items-center;
  }
}

</style>