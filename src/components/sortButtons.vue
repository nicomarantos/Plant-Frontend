<template>
  <div class="mt-1 d-flex w-100 justify-content-sm-start">
    <!-- der erste button ist implementiert -->
    <button
      class="btn btn-sm btn-success" type="submit"
      @click="sortPlants('wateringperiodCurrent')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
      </svg> sort by Days
    </button>
    <button
      class="margin:20px btn btn-sm btn-success" type="submit"
      @click="sortPlants('commonName')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
      </svg> sort by Name
    </button>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "sortButtons",
  props: {
    plants: {
      type: Array,
      required: true

    }
  },
  methods: {
    testDate(){
      const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
      console.log( dayOfYear(new Date(Date.now())))
    },
    sortPlants(name) {
      if (name === "wateringperiodCurrent") {
        this.plants = this.plants.sort((a, b) => {
          return a.wateringperiodCurrent-b.wateringperiodCurrent
        });
      }
      if (name === "commonName") {
        this.plants = this.plants.sort((a, b) => {
          let plantA = a.commonName.toLowerCase(),
            plantB = b.commonName.toLowerCase();
          if (plantA < plantB) {
            return -1;
          }
          if (plantA > plantB) {
            return 1;
          }
          return 0;
        });
      }
      else {
        this.ListingElement = this.Listing - element;
      }
    },
  }
}
</script>

<style scoped>
.btn{margin: 5px}
</style>
