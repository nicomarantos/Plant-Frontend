<template>
  <div class="p-5 mb-2 bg-success bg-gradient text-white">
    <h1>Wateringlist</h1>
  <div class="list-group-item list-group-item-success">
    <sort-buttons :plants="this.plants"></sort-buttons>
    <ListingElement :plants="this.plants"></ListingElement>
  </div>
    </div>
</template>

<script>
/*eslint-disable*/
import ListingElement from '@/components/ListingElement'
import sortButtons from '@/components/sortButtons'
export default {
  name: 'PlantCalender',
  components: {
    ListingElement,
    sortButtons
  },
  methods :  {
     updateWateringperiodCurrent(plant)
    {
      //if schleife mit saved==true noch rein
      console.log('geht durch')
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/' + plant.id
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          "commonName": plant.commonName,
          "botanicalName": plant.botanicalName,
          "description": plant.description,
          "wateringperiod": plant.wateringperiod,
          "wateringperiodCurrent": plant.wateringperiod,
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
          .then(async response => await response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

  },
  data () {
    return {
      plants: []
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
        this.plants.push(plant)
      }))
      .catch(error => console.log('error', error))
  }

}

</script>

<style scoped>

</style>
