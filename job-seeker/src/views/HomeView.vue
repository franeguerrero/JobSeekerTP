<template>
  <div>
    <NavBar />
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

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
  margin-top: 60px;
  background-color: #bbbbbb;
}
.last{
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
