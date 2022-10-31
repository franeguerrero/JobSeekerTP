<template>
  <div class="algo">
    <CardsCandidatos/>
  </div>
</template>

<script>
  import CardsCandidatos from "../components/CardsCandidatos.vue";
  export default {
    name: "CandidatosView",
    components: {
      CardsCandidatos,
    },
  };
</script>
<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-flow: row nowrap;

  background-color: #fefefe;
}
.algo {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  color: #2c3e50;
}
</style>
