<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Poc Form</h1>
        <h2 class="subtitle">Made with Vue.js</h2>
      </div>
    </div>
  </section>
  <div class="section">
    <div class="container">
      <article class="template">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="Email input"
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="label">Do you like this content?</label>
            <label class="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </article>
      <!-- <progress class="progress is-small is-primary" max="100">15%</progress> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>