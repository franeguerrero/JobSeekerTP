<template>
  <div class="descripcionEmpleo">
    <div class="tittle">
      <img v-bind:src="empleo.img" alt="empleo imagen" />
      <div class="titulo">
        <h2 class="rubro">{{ empleo.rubro }}</h2>
        <p class="somos">{{ empleo.somos }}</p>
      </div>
    </div>
    <div class="descripcion">
      <h2 class="desc">{{ descripcionTitulo }}</h2>
      <p class="desc">{{ empleo.descripcion }}</p>
      <h2 class="requisitos">{{ requisitosTitulo }}</h2>
      <p class="requisitos">{{ empleo.requisitos }}</p>
    </div>
    <BotonAplicar />
  </div>
</template>

<script>
import BotonAplicar from "./BotonAplicar.vue";
export default {
  name: "EmpleoDescripcion",
  components: { BotonAplicar },
  props: ["empleo"],
  data() {
    return {
      descripcionTitulo: "Descripción:",
      requisitosTitulo: "Requisitos:",
    };
  },
};
</script>

<style scoped>
.descripcion {
  margin-top: 10px;
}
.descripcionEmpleo {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 40vw;
  overflow-y: scroll;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1.5rem;
}
.rubro {
  text-align: center;
  padding-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
}
.somos {
  text-align: center;
  margin-top: 0px;
  padding-top: 0px;

  color: grey;
}
.tittle {
  display: flex;
}
.titulo {
  align-self: center;
}
.desc,
.requisitos {
  font-size: calc(10px + 0.390625vw);
  margin-top: 10px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: #ececec;
}
h2 {
  font-size: calc(30px + 0.390625vw);
}
.titulo {
  margin-left: calc(40px + 0.390625vw);
}
@media screen and (max-width: 768px) {
  .descripcionEmpleo {
    width: 80vw !important;
    height: 50vh;
  }
  .tittle {
    flex-direction: column;
    align-items: center;
  }
  .titulo {
    margin-left: 0px;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
