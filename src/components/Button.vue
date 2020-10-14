<template>
  <button :class="`button ${color}`">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BButton",

  props: {
    color: {
      type: String,
      default: "is-primary",
    },
  },
});
</script>