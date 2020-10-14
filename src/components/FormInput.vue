<template>
  <div class="field">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="control">
      <input class="input" :type="type" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormInput",

  props: {
    label: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      placeholder: String,
      default: undefined,
    },
  },
});
</script>