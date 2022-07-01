<template>
  <div class="home">
    <img alt="plantasticLogo" src="../assets/plantasticLogo.png">
    <h2>Plantastic</h2>
    <HelloWorld>
    </HelloWorld>
  </div>
</template>
<script>
/*eslint-disable*/
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted: async function() {
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
      .then(plants=> {
        return this.plants.forEach(plant=>{
          if(plant.saved=true) {
            const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
            const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/' + plant.id
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
              "commonName": plant.commonName,
              "botanicalName": plant.botanicalName,
              "description": plant.description,
              "wateringperiod": plant.wateringperiod,
              //"wateringperiodCurrent":dayOfYear(new Date(Date.now())),
              "wateringperiodCurrent":plant.day-dayOfYear(new Date(Date.now())),
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
              .then(async response => await response.json())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
          }
        })
      })
      .catch(error => console.log('error', error))
  }
}
</script>
