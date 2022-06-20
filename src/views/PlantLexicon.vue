<template>
 <h1>Wilkommen zum großen Pflanzenlexikon</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="plant in plantLexicon" :key="plant.id">
          <div class="card h-100">
            <img :src="getAvatar(plant)" class="card-img-top" :alt="plant.commonName + ' ' + plant.botanicalName">
            <div class="card-body">
              <h5 class="card-title">{{plant.commonName}} oder auch {{plant.botanicalName}}</h5>
              <p class="card-text">Das ist die {{plant.botanicalName}} oder zu Deutsch {{plant.commonName}}. Diese Pflanze wurde {{plant.isSaved ? 'gespeichert': 'noch nicht gespeichert'}}</p>
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
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://localhost:8080/api/v1/plant', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
