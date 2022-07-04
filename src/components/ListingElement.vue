<template>
  <div v-for="plant in plants" :key="plant.id">
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
              >{{ plant.wateringperiodCurrent }}</span
              >
            </h4>
            <div class="d-grid gap-2 col-14">
              <button class="btn-sm btn-primary" type="submit" @click="updateWateringperiodCurrent (plant)">
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
              class="btn btn-danger btn-sm justify-content-flex end" type="submit" @click="deletePlant(plant)">
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
  props: {
    plants: {
      type: Array,
      required: true

    }
  },
  methods: {
    updateWateringperiodCurrent (plant) {
      const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/' + plant.id
      console.log(plant.day);
      console.log(dayOfYear(new Date(Date.now())));
      const current = plant.day - dayOfYear(new Date(Date.now()))
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "commonName": plant.commonName,
        "botanicalName": plant.botanicalName,
        "description": plant.description,
        "wateringperiod": plant.wateringperiod,
        "wateringperiodCurrent": current,
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
    },
    deletePlant (plant) {

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
        "saved": false
      });
      console.log('Vor dem reload' + plant.commonName,+" = " +plant.saved)
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
      window.location.reload()
    },
  },
};
</script>

<style scoped>
</style>
