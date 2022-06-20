<template>
 <h1>Wilkommen zum Pflanzenlexikon</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="plant in plantLexicon" :key="plant.id">
          <div class="card">
            <img :src="getAvatar(plant)" class="card-img-top" :alt="plant.commonName + ' ' + plant.botanicalName">
            <div class="card-body">
              <h5 class="card-title">{{plant.commonName}} {{plant.botanicalName}}</h5>
              <p class="card-text">Das ist die {{plant.botanicalName}} oder zu Deutsch {{plant.commonName}}. Diese Pflanze ist {{plant.isSaved ? 'gespeichert': 'nicht gespeichert'}}</p>
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
      plantLexicon: [
        {
          id: 1,
          commonName: 'Fensterblatt',
          botanicalName: 'Monstera deliciosa',
          isSaved: true
        },
        {
          id: 2,
          commonName: 'Pfeilblatt',
          botanicalName: 'Alocasia Zebrina',
          isSaved: true
        }
      ]
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
  }
}
</script>

<style scoped>

</style>
