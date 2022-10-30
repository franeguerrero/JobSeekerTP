<template>
  <div class="body" @click="closeModal">
    <CoverPic />
    <AboutDiv />
    <div class="last">
      <LastJobs />
      <LastCandidates :modalDataCharge="modalDataCharge"/>
    </div>
    <CardExpanded :modalData="modalData" :isActive="isActive"/>
  </div>
</template>

<script>

import CoverPic from "../components/CoverPic.vue";
import AboutDiv from '../components/AboutDiv.vue';
import LastCandidates from '../components/LastCandidates.vue';
import LastJobs from '../components/LastJobs.vue'
import CardExpanded from "../components/modal/CardExpanded.vue"

export default {
  name: "HomeView",
  components: {
    CoverPic,
    AboutDiv,
    LastCandidates,
    LastJobs,
    CardExpanded
  },
  data:()=>{
    return {
     modalData: {},
     isActive: false
    }
  },
  methods: {
    modalDataCharge(userData){
      this.modalData = userData
      this.isActive = true
    },
    closeModal(){
      this.isActive = false
    }
  }
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
