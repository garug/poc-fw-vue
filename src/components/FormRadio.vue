<template>
  <label class="radio">
    <Field :name="name" v-slot="{ field }">
      <input v-bind="field" type="radio" :name="name" :value="value || label" />
      <span>{{ " " + label + " " }}</span>
    </Field>
  </label>
</template>

<script>
import { defineComponent } from "vue";
import { Field } from "vee-validate";

export default defineComponent({
  name: "FormRadio",

  components: {
    Field,
  },

  props: {
    label: {
      type: String,
      default: undefined,
    },
    value: {
      type: Object,
      default: undefined,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>