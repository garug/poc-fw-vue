<template>
  <section :class="`hero ${color}`">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle" v-if="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero",

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: "is-primary",
    },
  },
});
</script>
