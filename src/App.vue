<template>
  <Hero title="Poc Form" subtitle="Made with Vue.js" />
  <div class="section">
    <div class="container">
      <Form
        ref="form"
        :validation-schema="schema"
        v-show="!isSubmitting"
        v-slot="{ errors, handleSubmit, values, isSubmitting }"
      >
        <div v-show="!isSubmitting">
          <FormInput
            rules="required|min:3|max:50"
            name="name"
            label="Name"
            placeholder="Text input"
          />
          <FormInput
            rules="required|email"
            name="email"
            label="Email"
            placeholder="Email input"
            type="email"
          />
          <div class="field">
            <div class="control">
              <label class="label">Do you like this content?</label>
              <FormRadio label="Yes" name="liked" />
              <FormRadio label="No" name="liked" />
              <p class="help is-danger">{{ errors.liked }}</p>
            </div>
          </div>
          <pre class="content">{{ saved || "Nothing to show" }}</pre>
          <div class="control">
            <Button @click.prevent="handleSubmit(() => sendInfo(values))">
              Submit
            </Button>
          </div>
        </div>
        <progress
          v-show="isSubmitting"
          class="progress is-small is-primary"
          max="100"
        />
      </Form>
    </div>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import FormInput from "./components/FormInput";
import FormRadio from "./components/FormRadio";
import Button from "./components/Button";
import { Form } from "vee-validate";
import { ref, reactive } from "vue";

export default {
  name: "App",

  components: {
    Hero,
    FormInput,
    FormRadio,
    Button,
    Form,
  },

  setup() {
    const form = ref(null);
    const saved = ref(undefined);

    // Specific rules applied to form
    const schema = {
      liked: (value) => validatorLiked(value),
    };

    // Validate liked
    function validatorLiked(value) {
      if (!value) {
        return "You need tell us if you liked this content";
      }
      return true;
    }

    // Function to sendInfo
    async function sendInfo(formValues) {
      const obj = {
        ...formValues,
        liked: formValues.liked === "Yes",
      };

      try {
        await checkEmail(obj.email);
        saved.value = obj;
      } catch {
        form.value.setFieldError("email", "This email already registered.");
      }
    }

    // Function to check email
    async function checkEmail(email) {
      return new Promise((resolve, reject) => {
        setTimeout(
          () => (email === "john@mail.com" ? reject() : resolve()),
          2000
        );
      });
    }

    return {
      form,
      schema,
      sendInfo,
      saved,
    };
  },
};
</script>
