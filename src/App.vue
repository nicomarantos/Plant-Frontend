<template>

  <navbar></navbar>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
#app {
body {
  background-color: #DBF9FC;
}
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c5f2d;
}

nav a.router-link-exact-active {
  color: #2c5f2d;
}
</style>
