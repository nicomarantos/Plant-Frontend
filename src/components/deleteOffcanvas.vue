<template>
  <div class="mt-1 d-flex w-100 justify-content-end">

    <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Delete a Plant</button>

    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
      <div class="offcanvas-header">
        <h5 id="offcanvasTopLabel">Offcanvas top</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
            <button class="btn btn-danger" type="button" @click="deletePlant">delete plant</button>
            <button class="btn btn-secondary" type="reset" @click="resetValues">reset</button>
          </div>
        </form>

      </div>
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
      deleteID:0,
    }
  },
  methods :{
    resetValues() {
      this.commonName= ''
    },
    findPlantByName(plant) {
      console.log(plant.commonName)
      console.log(this.commonName)
      if(plant.commonName === this.commonName)
      {this.deleteID = plant.id
      console.log('plant found')
      }
      else {
        console.log('plant not found')

      }

    },
    deletePlant(){
      console.log(this.commonName)
      this.plants.forEach(plant => this.findPlantByName(plant));
      const raw = "";
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/plant/' + this.deleteID
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
