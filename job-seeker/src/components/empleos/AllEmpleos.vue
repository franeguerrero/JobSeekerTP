<template>
  <div v-if="loading" class="loading"></div>
  <section v-else class="empleos">
    <h2 class="titulo">{{ titulo }}</h2>
    <BuscarEmpleo @soyKey="filterResults1" />
    <div class="botonesFiltrar">
      <BotonFiltrar @laKey="buscarPorJornada" />
    </div>
    <p v-show="noSeEncuentra" class="noSeEncuentra">{{ noResultado }}</p>
    <div class="buscador">
      <div class="allEmpleos" v-show="aparece">
        <SingleEmpleo
          v-for="empleo in filterJornada"
          :key="empleo.id"
          :empleo="empleo"
          @laKey="MostrarEmpleo(this.filterJornada.indexOf(empleo))"
          :class="{ active: empleo.isActive }"
        />
      </div>
      <div class="descripcion">
        <div>
          <EmpleoDescripcion
            v-show="empleo.mostrar"
            v-for="empleo in filterJornada"
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
import BotonFiltrar from "./BotonFiltrar.vue";
export default {
  name: "AllEmpleos",
  components: { SingleEmpleo, BuscarEmpleo, EmpleoDescripcion, BotonFiltrar },
  data() {
    return {
      loading: true,
      empleos: [],
      isActive: false,
      mostrar: false,
      filter: [],
      filterJornada: [],
      aparece: true,
      noSeEncuentra: false,
      noResultado: "No se encontraron resultados",
      titulo: "Empleos disponibles",
      tipoDeJornada: "",
      value1: "",
    };
  },
  mounted() {
    fetch("https://6341b5f720f1f9d79978868e.mockapi.io/empleo")
      .then((response) => response.json())
      .then((jobs) => {
        this.loading = false;
        jobs.sort((a, b) => {
          return b.id - a.id;
        });
        this.empleos = jobs;
        this.filter = this.empleos;
        this.filterJornada = this.empleos;
        this.filterJornada[0].isActive = true;
        this.filterJornada[0].mostrar = true;
        this.tipoDeJornada = "todos";
      })
      .catch((err) => console.error(err));
  },
  methods: {
    MostrarEmpleo(indexComparacion) {
      this.filterJornada.forEach((empleo) => {
        let indice = this.filterJornada.indexOf(empleo);
        if (indice == indexComparacion) {
          this.filterJornada[indice].isActive = true;
          this.filterJornada[indice].mostrar = true;
        } else {
          this.filterJornada[indice].isActive = false;
          this.filterJornada[indice].mostrar = false;
        }
      });
    },
    buscarTodo() {
      if (this.tipoDeJornada == "fulltime") {
        this.filterJornada = this.empleos.filter(
          (empleo) =>
            empleo.rubro.toLowerCase().startsWith(this.value1.toLowerCase()) &&
            empleo.jornada == "Full time"
        );
      } else if (this.tipoDeJornada == "parttime") {
        this.filterJornada = this.empleos.filter(
          (empleo) =>
            empleo.rubro.toLowerCase().startsWith(this.value1.toLowerCase()) &&
            empleo.jornada == "Part time"
        );
      } else if (this.tipoDeJornada == "todos") {
        this.filterJornada = this.empleos.filter(
          (empleo) =>
            empleo.rubro.toLowerCase().startsWith(this.value1.toLowerCase()) &&
            (empleo.jornada == "Full time" || empleo.jornada == "Part time")
        );
      }
      this.MostrarEmpleo(0);
      if (this.filterJornada.length == 0) {
        this.aparece = false;
        this.noSeEncuentra = true;
      } else {
        this.aparece = true;
        this.noSeEncuentra = false;
      }
    },
    buscarPorJornada(event) {
      this.tipoDeJornada = event.target.value;
      this.buscarTodo();
    },
    filterResults1(value) {
      this.value1 = value;
      this.buscarTodo();
    },
  },
};
</script>

<style scoped>
.loading {
  margin: 300px auto auto auto;
  border: 5px solid #eaf0f6;
  border-radius: 50%;
  border-top: 5px solid #2b96ba;
  width: 70px;
  height: 70px;
  animation: spinner 4s linear infinite;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.noSeEncuentra {
  align-self: center;
  margin-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.buscador {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
}
.active {
  border: 3px solid #2b96ba;
}
.empleos {
  display: flex;
  flex-direction: column;
  height: 110vh;
}
.allEmpleos {
  width: 40vw !important;
  height: 70vh;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 5px;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.botonesFiltrar {
  display: flex;
  justify-content: center;
}
.titulo {
  font-size: calc(40px + 0.390625vw);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 10px;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .allEmpleos {
    display: flex;
    width: 80vw !important;
    margin: 1.5rem;
    overflow-x: scroll;
    height: 33vh;
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
