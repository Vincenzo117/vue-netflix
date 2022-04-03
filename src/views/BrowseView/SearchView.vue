<template>
  <div id="search-view">
      {{ profile.name + ' ' + profile.id + ' ' + filter }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        id: {
            type: Number,
            required: true
        },
    },
    computed: {
        ...mapGetters(["filter","profiles"]),
        profile() {
            return this.profiles[this.id - 1];
        }
    }
}
</script>

<style>

</style>