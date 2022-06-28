<template>

</template>

<script>
export default {
  name: "plantcards",
  props: {
    plants: {
      type: Array,
      required: true

    }
  },
  methods: {
    getAvatar (plant) {
      console.log(plant.commonName)
      if (plant.botanicalName === 'Monstera Deliciosa') {
        return require('../assets/Monstera.jpg')
      }
      if (plant.botanicalName === 'Alocasia Zebrina') {
        return require('../assets/alocasia_zebrina.webp')
      }
      if (plant.botanicalName === 'Sanseviera') {
        return require('../assets/Sanseviera.jpg')
      }
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
