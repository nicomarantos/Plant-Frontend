<template>
  <div v-for="plant in ListingElement" :key="plant.id" >
    <div v-if="plant.saved===true">
<!-- <div class="col" v-for="plant in ListingElement" :key="plant.id"> -->

  <a href="#" class="list-group-item list-group-item-action " aria-current="true">
    <div class="d-flex w-100 justify-content-sm-between">

      <div>
        <h2 class="mt-0">{{plant.commonName}}</h2>
        <i>({{plant.botanicalName}})</i>
      </div>

      <div>
        <h4> Days until Plant need to be watered again: <span class="badge bg-success rounded-pill justify-content-flex end">{{plant.wateringperiod}}</span></h4>
        <div class="d-grid gap-2 col-14">
          <button type="button" class="btn-sm btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg> watered </button>
        </div>

      </div>

      <div>
        <button type="button" class="btn btn-danger btn-sm justify-content-flex end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></button>
      </div>
    </div>
  </a>
  <br>
 </div>
  </div>
</template>

<script>
export default {
  name: 'Listing-element',
  data () {
    return {
      ListingElement: []
    }
  },

  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(plant => {
        this.ListingElement.push(plant)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
