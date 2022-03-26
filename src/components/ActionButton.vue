<template>
  <button id="action-button" :class="`action-button--${color}`">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "gray",
    },
  },
};
</script>

<style lang="scss" scoped>
#action-button {
  @apply py-2 px-11 border-[1px] text-[16px] md:text-[20px] lg:text-[24px] transition-all;

  &.action-button--gray {
      @apply border-[#808080] hover:border-white text-[#808080] hover:text-white;
  }

  &.action-button--white {
    @apply border-0 bg-white hover:bg-[#cc0000] text-black hover:text-white;
  }
}
</style>