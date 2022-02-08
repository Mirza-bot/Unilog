<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-info sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">UNILOG</a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Country"
            aria-label="Country"
            v-model="country"
            style="width: 150px"
          />
          <button
            class="btn btn-outline-success"
            @click.prevent="fetchData(country)"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
    <div v-if="isLoading" class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else>
      <strong v-if="universities"> {{ count }} found </strong>
      <ContentTile
        v-for="uni in universities"
        :key="uni.domains"
        :name="uni.name"
        :location="uni.country"
        :website="uni.web_pages"
      ></ContentTile>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import ContentTile from "../components/ContentTile.vue";
export default {
  components: { ContentTile },
  setup() {
    const country = ref("");
    const universities = ref(null);
    const count = ref(null);
    let isLoading = ref(false);

    const fetchData = async (country) => {
      isLoading.value = true;
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch Data!"
        );
        throw error;
      }

      const responseData = await response.json();
      universities.value = responseData;
      count.value = Object.keys(responseData).length;
      isLoading.value = false;
    };

    return {
      country,
      fetchData,
      universities,
      count,
      isLoading,
    };
  },
};
</script>

<style scoped>
strong {
  display: block;
  max-width: 15vw;
  text-align: center;
  margin: 10px auto;
}

div.spinner-border {
  position: absolute;
  top: 20vh;
  left: calc(50vw - 17px);
}
</style>
