<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <prueba-semi/>
  <hello-world msg='Hola'/>

</template>

<script>
import PruebaSemi from './components/PruebaSemi.vue';
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    PruebaSemi
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
