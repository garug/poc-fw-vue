<template>
  <div class="field">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="control">
      <Field
        :name="name"
        :rules="rules"
        v-slot="{ errorMessage, field, meta }"
      >
        <input
          :name="name"
          v-bind="field"
          :placeholder="placeholder"
          :type="type"
          :class="{
            input: true,
            'is-danger': errorMessage,
            'is-success': !errorMessage && meta.touched,
          }"
        />
        <p class="help is-danger">{{ errorMessage }}</p>
      </Field>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "FormInput",

  components: {
    Field,
    ErrorMessage,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
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
    rules: {
      type: String,
      default: '',
    },
  },
});
</script>