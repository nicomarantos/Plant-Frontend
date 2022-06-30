<template>
  <div class="mt-1 d-flex w-100 justify-content-start">
    <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Delete custom Plant </button>
  </div>

</template>

<script>
/*eslint-disable*/
export default {
  name: "deleteButton",
  props: {
    plants: {
      type: Array,
      required: true

    }
  },
  methods: {
    deletePlants(){
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/' + plant.id
      var raw = "";

      var requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
      };

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

  }
}
</script>

<style scoped>

</style>
