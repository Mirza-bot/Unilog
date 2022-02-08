<template>
  <div class="container d-flex flex-row bd-highlight mb-3">
    <div class="bd-highlight" style="width: 50%; word">
      <strong> {{ name }} </strong>
    </div>
    <div class="bd-highlight">
      <a :href="site" target="_blank" v-for="site in website" :key="site">
        <button type="button" class="btn btn-info">Website</button>
      </a>
    </div>
    <div class="bd-highlight">{{ location }}</div>
  </div>
</template>

<script>
export default {
  props: ["name", "website", "location"],
  setup() {},
};
</script>

<style scoped>
.container {
  background-color: lightblue;
  border: 2px outset lightgray;
  border-radius: 5px;
  padding: 2px;
}

@media only screen and (max-width: 700px) {
  .container {
    font-size: 0.7rem;
  }
  button {
    font-size: 0.7rem;
  }
}

.container > div {
  width: 25%;
  text-align: center;
  margin: auto 0;
}

button {
  display: block;
  margin: auto auto;
}

a {
  text-decoration: none;
}
</style>
