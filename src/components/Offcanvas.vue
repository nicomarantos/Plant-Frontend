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
      <form class="text-start needs-validation" novalidate>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label needs-validation">Botancial Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput" v-model="botanicalName" required>
        <div class="invalid-feedback">
          Please provide a Botancialname.
        </div>
      </div>

      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label needs-validation">Common Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" v-model="commonName" required>
        <div class="invalid-feedback">
          Please provide a Commonname.
        </div>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label needs-validation">Description</label>
        <input type="text" class="form-control" id="formGroupExampleInput" v-model="description" required>
        <div class="invalid-feedback">
          Please provide a Description.
        </div>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label needs-validation" >Wateringperiod</label>
        <input type="number" class="form-control" id="formGroupExampleInput2" v-model="wateringperiod" required>
        <div class="invalid-feedback">
          It need to be a number.
        </div>
      </div>

        <br>
      <div class="mt-1 d-flex w-100 justify-content-between">
        <button class="btn btn-success" type="submit" @click="saveCustomPlant">save plant</button>
        <button class="btn btn-secondary" type="reset" @click="resetValues">reset</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Offcanvas",
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
      const valid = this.validate()
      if(valid===true) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/'
        const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
          "commonName": this.commonName,
          "botanicalName": this.botanicalName,
          "description": this.description,
          "wateringperiod": this.wateringperiod,
          "wateringperiodCurrent": this.wateringperiod,
          "day": dayOfYear(new Date(Date.now())) + this.wateringperiod,
          "saved": false
        })
        ;

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
    },
    validate(){
      let valid = true
      var forms = document.querySelectorAll('.needs-validation')
      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }
          form.classList.add('was-validated')
        }, false)
      })
      return valid
    },

  }
}

</script>

<style scoped>

</style>
