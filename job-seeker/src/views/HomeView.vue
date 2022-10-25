<template>
  <div class="body">
    <CoverPic />
    <AboutDiv />
    <div class="last">
      <LastJobs />
      <LastCandidates />
    </div>
  </div>
</template>

<script>
// import NavBar from "../components/NavBar.vue";
import CoverPic from "../components/CoverPic.vue";
import AboutDiv from '../components/AboutDiv.vue';
import LastCandidates from '../components/LastCandidates.vue';
import LastJobs from '../components/LastJobs.vue'

export default {
  name: "HomeView",
  components: {
    // NavBar,
    CoverPic,
    AboutDiv,
    LastCandidates,
    LastJobs
  },
};
</script>

<style scoped>

.body{
  background-color: #ccc;
  color: #2c3e50;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}
.last{
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
