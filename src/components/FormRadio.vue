<template>
  <label class="radio">
    <input type="radio" name="question" />
    <span>{{ " " + label + " " }}</span>
  </label>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormRadio",

  props: {
    label: {
      type: String,
      default: undefined,
    },
  },
});
</script>