<template>
  <div class="p-5 mb-2 bg-success bg-gradient text-white">
    <h1>Plantlexcion</h1>
  <div class="list-group-item list-group-item-success">
    <delete-button :plants="this.plants"></delete-button>
    <offcanvas></offcanvas>
    <delete-offcanvas :plants="this.plants"></delete-offcanvas>
    <br>
    <plantcards :plants="this.plants"></plantcards>
  </div>
  </div>
</template>

<script>
/*eslint-disable*/
import plantcards from '@/components/plantcards'
import offcanvas from '@/components/offcanvas'
import deleteOffcanvas from '@/components/deleteOffcanvas'
export default {
  name: 'PlantLexicon',
  components: {
    plantcards,
    offcanvas,
    deleteOffcanvas

  },
  data () {
    return {
      plants: []
    }
  },
  methods: {
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
        this.plants.push(plant)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
