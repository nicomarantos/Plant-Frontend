<template>
  <div class="p-5 mb-2 bg-success bg-gradient text-white">
    <h1>Plant lexicon</h1>
  <div class="list-group-item list-group-item-success">
    <offcanvas></offcanvas>
    <delete-offcanvas :plants="this.plants"></delete-offcanvas>
    <br>
    <plantcards :plants="this.plants"></plantcards>
  </div>
  </div>
</template>

<script>
/*eslint-disable*/
import Plantcards from '@/components/Plantcards'
import Offcanvas from '@/components/Offcanvas'
import DeleteOffcanvas from '@/components/DeleteOffcanvas'
export default {
  name: 'PlantLexicon',
  components: {
    Plantcards,
    Offcanvas,
    DeleteOffcanvas

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
