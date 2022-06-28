<template>
  <div class="mt-1 d-flex w-100 justify-content-sm-start">
    <!-- der erste button ist implementiert -->
    <button
      class="btn btn-sm btn-success margin:20px;"
      @click="sortPlants('wateringperiod')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
      </svg> sort by Days
    </button>
    <button
      class="margin:20px btn btn-sm btn-success"
      @click="sortPlants('commonName')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
      </svg> sort by Name
    </button>
  </div>

  <div v-for="plant in ListingElement" :key="plant.id">
    <div v-if="plant.saved === true">
      <!-- <div class="col" v-for="plant in ListingElement" :key="plant.id"> -->
<br>
      <a
        href="#"
        class="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div class="d-flex w-100 justify-content-sm-between">
          <div>
            <h2 class="mt-0">{{ plant.commonName }}</h2>
            <i>({{ plant.botanicalName }})</i>
          </div>

          <div>
            <h4>
              Days until Plant need to be watered again:
              <span
                class="badge bg-success rounded-pill justify-content-flex end"
              >{{ plant.wateringperiod }}</span
              >
            </h4>
            <div class="d-grid gap-2 col-14">
              <button type="button" class="btn-sm btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                  />
                  <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                  />
                </svg>
                watered
              </button>
            </div>
          </div>

          <div>
            <button
              class="btn btn-danger btn-sm justify-content-flex end" @click="deletePlant(plant)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                />
              </svg>
           </button>
          </div>
        </div>
      </a>
      <br />
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Listing-element",
  data() {
    return {
      ListingElement: [],
    };
  },
  methods: {

    sortPlants(name) {
      if (name === "wateringperiod") {
        this.ListingElement = this.ListingElement.sort((a, b) => {
          return a.wateringperiod-b.wateringperiod
        });
      }
      if (name === "commonName") {
        this.ListingElement = this.ListingElement.sort((a, b) => {
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
    deletePlant (plant) {
      console.log("test")
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/' + plant.id

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "commonName": plant.commonName,
        "botanicalName": plant.botanicalName,
        "description": plant.description,
        "wateringperiod": plant.wateringperiod,
        "saved": false
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
  },
  mounted() {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + "/api/v1/plant";
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        result.forEach((plant) => {
          this.ListingElement.push(plant);
        })
      )
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped>
.btn{margin: 5px}
</style>
