<template>
  <button class="button" v-on="listeners">
    <slot />
  </button>
</template>

<script>
  export default {
    computed: {
      listeners() {
        return {
          ...this.$listeners,
        }
      },
    },
  }
</script>
