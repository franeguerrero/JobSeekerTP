<template>
  <div class="body">
  <AllEmpleos/>

</div>
</template>
<script>
import AllEmpleos from "../components/empleos/AllEmpleos.vue";

export default {
  name: "EmpleosView",
  components: {
  AllEmpleos}}
</script>

<style scoped>

*{
  height: calc(100vh - 70px);
  margin-top: 70px;
  background-color: #ccc;
}
</style>