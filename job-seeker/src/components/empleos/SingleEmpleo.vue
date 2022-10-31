<template>
  <div class="empleo" @click="clickOnCard(id)">
    <div class="tittle">
      <img v-bind:src="empleo.img" alt="asdsa" />
      <div class="titulo">
        <h2 class="rubro">{{ empleo.rubro }}</h2>
        <p class="somos">{{ empleo.somos }}</p>
      </div>
    </div>
    <div class="footer">
      <div class="jyr">
        <p class="jornada">{{ empleo.jornada }}</p>
        -
        <p class="remoto">{{ empleo.remoto }}</p>
      </div>
      <p class="sueldo">{{ empleo.sueldo }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleEmpleo",
  props: ["empleo"],
  methods: {
    clickOnCard(array, id) {
      this.$emit("laKey", array, id);
    },
  },
};
</script>

<style scoped>
.rubro {
  text-align: center;
  padding-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: calc(18px + 0.390625vw);
}
.somos {
  text-align: center;
  margin-top: 0px;
  padding-top: 0px;
  color: grey;
  font-size: 1rem;
}
.jornada,
.sueldo,
.remoto,
img,
.jyr {
  display: inline;
}
.tittle {
  display: flex;
}
img {
  border-radius: 10px;
  width: 80px;
  height: 80px;
  background-color: #ececec;
}
.empleo {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 36vw;
  height: 15 vh;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 1rem;
  margin: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tarjeta {
  display: flex;
  flex-direction: row;
}
.footer {
  display: flex;
  justify-content: space-between;
}
.sueldo {
  margin: 0px;
}
.titulo {
  margin-left: calc(40px + 0.390625vw);
}
p {
  font-size: calc(10px + 0.390625vw);
}
@media screen and (max-width: 768px) {
  .empleo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85% !important;
    flex: none !important;
    margin: 3px;
    height: 28vh;
    padding: 0px;
  }
  .tittle {
    flex-direction: column;
    align-items: center;
  }
  .titulo {
    margin-left: 0px;
  }
  .sueldo {
    margin: 0px;
    padding-bottom: 0px;
  }
  .footer {
    margin: 0px 10px 10px 10px;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
