<template>
  <div class="mt-1 d-flex w-100 justify-content-end">
  <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Delete Plant </button>
</div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">add custom Plant</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" novalidate>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label needs-validation">Common Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" v-model="commonName" required>
        <div class="invalid-feedback">
          Please provide a Commonname.
        </div>
      </div>
        <br>
      <div class="mt-1 d-flex w-100 justify-content-between">
        <button class="btn btn-danger" type="submit" @click="DeletePlant">Delete plant</button>
        <button class="btn btn-danger" type="reset" @click="saveCustomPlant">reset</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "deleteOffcanvas",
  props: {
    plants: {
      type: Array,
      required: true
    }
    },
  data() {
    return {
      commonName: '',
    }
  },
  methods :{
    resetValues() {
      this.botanicalName= '',
      this.commonName= '',
      this.description= '',
      this.wateringperiod= null
    },
    deletePlant(){
      const raw = "";
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/' + plant.id
      const requestOptions = {
        method: 'DELETE',
        body: raw,
        redirect: 'follow'
      };

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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
