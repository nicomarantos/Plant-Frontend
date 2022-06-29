<template>
  <div class="home">
    <img alt="plantasticLogo" src="../assets/plantasticLogo.png">
    <h2>Plantastic</h2>
    <HelloWorld>
    </HelloWorld>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
