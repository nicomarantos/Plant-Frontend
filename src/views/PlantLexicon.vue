<template>
 <h1>Willkommen zum großen Pflanzenlexikon</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="plant in plantLexicon" :key="plant.id">
          <div class="card h-100">
            <img :src="getAvatar(plant)" class="card-img-top" :alt="plant.commonName + ' ' + plant.botanicalName">
            <div class="card-body">
              <h5 class="card-title">{{plant.commonName}} oder auch {{plant.botanicalName}}</h5>
              <p class="card-text">Das ist die {{plant.botanicalName}} oder zu Deutsch {{plant.commonName}}. Diese Pflanze wurde {{plant.isSaved ? 'gespeichert': 'noch nicht gespeichert'}}</p>
              <button type="button" class="btn btn-success">Erfahre Mehr</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PlantLexicon',
  data () {
    return {
      plantLexicon: []
    }
  },
  methods: {
    getAvatar (plant) {
      if (plant.botanicalName === 'Monstera deliciosa') {
        return require('../assets/Monstera.jpg')
      } else if (plant.botanicalName === 'Alocasia Zebrina') {
        return require('../assets/alocasia_zebrina.webp')
      } else if (plant.botanicalName === 'Sanseviera') {
        return require('../assets/Sanseviera.jpg')
      }
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
        this.plantLexicon.push(plant)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
</style>
