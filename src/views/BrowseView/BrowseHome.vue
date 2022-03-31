<template>
  <div id="browse-home">
    {{ profile.name }}
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
</style>