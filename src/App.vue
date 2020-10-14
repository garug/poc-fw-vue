<template>
  <Hero title="Poc Form" subtitle="Made with Vue.js" />
  <div class="section">
    <div class="container">
      <article class="template">
        <FormInput label="Name" placeholder="Text input" />
        <FormInput label="Email" placeholder="Email input" type="email" />

        <div class="field">
          <div class="control">
            <label class="label">Do you like this content?</label>
            <FormRadio label="Yes" />
            <FormRadio label="No" />
          </div>
        </div>

        <div class="control">
          <Button>Submit</Button>
        </div>
      </article>
      <!-- <progress class="progress is-small is-primary" max="100">15%</progress> -->
    </div>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import FormInput from "./components/FormInput";
import FormRadio from "./components/FormRadio";
import Button from "./components/Button";

export default {
  name: "App",

  components: {
    Hero,
    FormInput,
    FormRadio,
    Button,
  },
};
</script>
