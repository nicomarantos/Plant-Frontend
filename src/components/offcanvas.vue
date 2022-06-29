<template>
  <div class="mt-1 d-flex w-100 justify-content-end">
  <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">+ Add custom Plant </button>
</div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">add custom Plant</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start">
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Botancial Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput" v-model="botanicalName">
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Common Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" v-model="commonName">
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Description</label>
        <input type="text" class="form-control" id="formGroupExampleInput" v-model="description">
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Wateringperiod</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" v-model="wateringperiod">
      </div>
      <br>
      <div class="mt-1 d-flex w-100 justify-content-between">
        <button class="btn btn-success" type="submit" @click="saveCustomPlant">save plant</button>
        <button class="btn btn-danger" type="reset" @click="saveCustomPlant">reset</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "offcanvas",
  data() {
    return {
      botanicalName: '',
      commonName: '',
      description: '',
      wateringperiod: null
    }
  },
  methods :{
    resetValues() {
      this.botanicalName= '',
      this.commonName= '',
      this.description= '',
      this.wateringperiod= null
    },
    saveCustomPlant(){

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/'

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "commonName": this.commonName,
        "botanicalName": this.botanicalName,
        "description": this.description,
        "wateringperiod": this.wateringperiod,
        "wateringperiodCurrent": this.wateringperiod,
        "saved": false
      });

      const requestOptions = {
        method: 'POST',
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
