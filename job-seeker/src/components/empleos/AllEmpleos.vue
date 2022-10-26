<template>
  <section class="empleos">
    <BuscarEmpleo :filterResults="filterResults" />
    <div class="buscador">
      <p v-show="noSeEncuentra">{{ noResultado }}</p>
      <div class="allEmpleos" v-show="aparece">
        <SingleEmpleo
          v-for="empleo in filter"
          :key="empleo.id"
          :empleo="empleo"
          @laKey="MostrarEmpleo(filter.indexOf(empleo))"
          :class="{ active: empleo.isActive }"
        />
      </div>
      <div class="descripcion">
        <div>
          <EmpleoDescripcion
            v-show="empleo.mostrar"
            v-for="empleo in filter"
            :key="empleo.id"
            :empleo="empleo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleEmpleo from "./SingleEmpleo.vue";
import BuscarEmpleo from "./BuscarEmpleo.vue";
import EmpleoDescripcion from "./EmpleoDescripcion.vue";

export default {
  name: "AllEmpleos",
  components: { SingleEmpleo, BuscarEmpleo, EmpleoDescripcion },
  data() {
    return {
      empleos: [],
      isActive: false,
      mostrar: false,
      filter: [],
      value: "",
      aparece: true,
      noSeEncuentra: false,
      noResultado: "No se encontraron resultados",
    };
  },

  created() {
    fetch("https://6341b5f720f1f9d79978868e.mockapi.io/empleo")
      .then((response) => response.json())
      .then((jobs) => {
        jobs.sort((a, b) => {
          return b.id - a.id;
        });
        this.empleos = jobs;
        this.filter = this.empleos;
        this.filter[0].isActive = true;
        this.filter[0].mostrar = true;
      });
  },
  methods: {
    MostrarEmpleo(indexComparacion) {
      this.filter.forEach((empleo) => {
        let indice = this.filter.indexOf(empleo);
        if (indice === indexComparacion) {
          this.filter[indice].isActive = true;
          this.filter[indice].mostrar = true;
        } else {
          this.filter[indice].isActive = false;
          this.filter[indice].mostrar = false;
        }
      });
    },

    filterResults(value) {
      this.filter = this.empleos.filter((empleo) =>
        empleo.rubro.toLowerCase().startsWith(value.toLowerCase())
      );
      this.MostrarEmpleo(0);
      if (this.filter.length == 0) {
        this.aparece = false;
        this.noSeEncuentra = true;
      } else {
        this.aparece = true;
        this.noSeEncuentra = false;
      }
    },
  },
};
</script>

<style scoped>
.buscador {
  display: flex;
  flex-direction: row;

  align-self: center;
  margin-top: 30px;
}
.active {
  border: 3px solid #2b96ba;
}
.empleos {
  display: flex;
  flex-direction: column;
}
.allEmpleos {
  width: 40vw !important;
  height: 70vh;
  overflow-y: scroll;
}
@media screen and (max-width: 768px) {
  .allEmpleos {
    display: flex;
    width: 80vw !important;
    margin: 1.5rem;
    overflow-x: scroll;
    height: 30vh;
  }
  .buscador {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .empleos {
    height: 120vh;
  }
}
</style>
