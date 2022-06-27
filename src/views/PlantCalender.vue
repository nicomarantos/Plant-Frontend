<template>

  <div class="p-5 mb-2 bg-success bg-gradient text-white">
  <div class="list-group-item list-group-item-success">
    <ListingElement></ListingElement>
  </div>
    </div>
</template>

<script>
import ListingElement from '@/components/ListingElement'
export default {
  name: 'PlantCalender',
  components: { ListingElement },
  data () {
    return {
      plantCalender: []
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
        this.plantCalender.push(plant)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
