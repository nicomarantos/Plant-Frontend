<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="plant in plants" :key="plant.id">
        <div class="card h-100">
          <div class="card-body" >
            <h6>{{plant.botanicalName}}</h6>
            <h3 class="card-title">{{plant.commonName}}</h3>
            <img :src="getAvatar(plant)" class="card-img-top" :alt="plant.botanicalName">

            <p class="card-text">The {{plant.botanicalName}} or commonly known as {{plant.commonName}}.</p>
            <div class =" mb-1 card-text">
              <H6>{{plant.description}}</H6>
              <p></p>
              <br>(The plant is {{plant.saved ? 'already saved': 'not saved yet'}})
              <br>
              <button :disabled="plant.saved" type="submit" class="btn btn-primary btn-sm" @click="savePlant(plant)">add to Wateringchecklist <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
              </svg> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Plantcards",
  props: {
    plants: {
      type: Array,
      required: true

    }

  },
  methods: {
    getAvatar (plant) {
      console.log(plant.commonName)
      if (plant.botanicalName === 'Monstera deliciosa') {
        return require('../assets/Monstera.webp')
      }
      if (plant.botanicalName === 'Alocasia Zebrina') {
        return require('../assets/alocasia_zebrina.webp')
      }
      if (plant.botanicalName === 'Sanseviera') {
        return require('../assets/Sanseviera.webp')
      }
      if (plant.botanicalName === 'Chlorophytum comosum') {
        return require('../assets/spider_plant.webp')
      }
      if (plant.botanicalName === 'Maranta Leuconeura') {
        return require('../assets/maranta_leuconeura.webp')
      }
      if (plant.botanicalName === 'Ficus elastica') {
        return require('../assets/ficus_elastica.webp')
      }
      if (plant.botanicalName === 'Philodendron Florida Green') {
        return require('../assets/philodendron_florida_green.webp')
      }
      if (plant.botanicalName === 'Anthurium clarinervium') {
        return require('../assets/Anthurium_clarinervium.webp')
      }
      if (plant.botanicalName === 'Monstera adansonii') {
        return require('../assets/Monstera_adansonii.webp')
      }
      if (plant.botanicalName === 'Pachira aquatica') {
        return require('../assets/Pachira_aquatica.webp')
      }
      if (plant.botanicalName === 'Ficus lyrata') {
        return require('../assets/Ficus_lyrata.webp')
      }
      if (plant.botanicalName === 'Strelitzia nicolai') {
        return require('../assets/Strelitzia_nicolai.webp')
      }
      if (plant.botanicalName === 'Dracaena marginata') {
        return require('../assets/Dracaena_marginata.webp')
      }
      if (plant.botanicalName === 'Calathea lancifolia') {
        return require('../assets/Calathea_lancifolia.webp')
      }
      if (plant.botanicalName === 'Epipremnum aureum') {
        return require('../assets/Epipremnum_aureum.webp')
      }
      if (plant.botanicalName === 'Aloe barbadensis') {
        return require('../assets/Aloe_barbadensis.webp')
      }
      if (plant.botanicalName === 'Sansevieria cylindrica') {
        return require('../assets/Sansevieria_cylindrica.webp')
      }
      if (plant.botanicalName === 'Senecio rowleyanus') {
        return require('../assets/Senecio_rowleyanus.webp')
      }
      if (plant.botanicalName === 'Chamaedorea seifrizii') {
        return require('../assets/Chamaedorea_seifrizii.webp')
      }
      if (plant.botanicalName === 'Hypoestes phyllostachya') {
        return require('../assets/Hypoestes_phyllostachya.webp')
      }
      if (plant.botanicalName === 'Calathea ornata') {
        return require('../assets/Calathea_ornata.webp')
      }

      return require(('../assets/blank_plant.webp'))
    },
    test (plant) {
      console.log(plant.commonName)
    },
    savePlant (plant) {

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/' + plant.id

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "commonName": plant.commonName,
        "botanicalName": plant.botanicalName,
        "description": plant.description,
        "wateringperiod": plant.wateringperiod,
        "wateringperiodCurrent": plant.wateringperiodCurrent,
        "day": plant.day,
        "saved": true
      });

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
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
