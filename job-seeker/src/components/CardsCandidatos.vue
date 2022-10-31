<template>
  <div class="componente">
    <h1>Candidatos</h1>
    <div class="container-botones">
      <button v-on:click="abrirModal()">Subi tu CV</button>
      <div class="modal-background" @:click="abrirModal()"></div>
      <div class="modal">
        <h1>Arrastre aqui su CV</h1> <img src="@/assets/iconoCv.png" alt="">
      </div>

      <div class="buscadoryfiltros">

        <BuscadorCandidatos class="buscador" @soyKey="buscarCandidato" />


        <div class="boton-filtros">
          <input type="radio" name="full-time" @change="filtrofulltimea($event)" value="full-time" id="full-time" />
          <label for="full-time"><span>full-time</span></label>
          <input type="radio" name="full-time" @change="filtrofulltimea($event)" value="part-time" id="part-time" />
          <label for="part-time"><span>part</span></label>
          <input type="radio" name="full-time" @change="filtrofulltimea($event)" checked value="todo-time"
            id="todo-time" />
          <label for="todo-time"><span>todos</span></label>
          <input type="radio" name="movilidad" @change="filtromovilidad1($event)" value="movilidad" id="movilidad" />
          <label for="movilidad"><span>movilidad</span></label>
          <input type="radio" name="movilidad" @change="filtromovilidad1($event)" value="sinmovilidad"
            id="sinmovilidad" />
          <label for="sinmovilidad"><span>sin movilidad</span></label>
          <input type="radio" name="movilidad" @change="filtromovilidad1($event)" checked value="todos" id="todos" />
          <label for="todos"><span>todos</span></label>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="candidates-list">
        <div class="candidate-cards" v-for="candidato in candidatosFiltrados" :key="candidato">
          <div class="profile-card">
            <div class="image">
              <img v-bind:src="candidato.avatar" alt="" class="profile-img" />
            </div>

            <div class="text-data">
              <p class="name">
                {{ candidato.nombre }} {{ candidato.apellido }}
              </p>
              <p class="edad">Edad: {{ candidato.edad }}</p>
              <div class="container-skills">
                <div class="lista-habilidades">
                  <p class="tituloS">Skills</p>
                  <ul>
                    <li v-for="skill in candidato.skill" v-bind:key="skill">
                      <p>
                        <img class="estrella" src="@/assets/estrella.png" alt="" />{{ skill }} <br />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="social">
            <button class="cv">
              <a href="https://www.linkedin.com">
                <img src="@/assets/cv.png" alt="" /></a>
            </button>
            <button class="git">
              <a href="https://www.github.com"><img src="@/assets/github.png" alt="" /></a>
            </button>
          </div>

          <div class="condicionales">
            <p class="fulltime" v-if="candidato.fulltime">Full-Time</p>
            <p class="fulltime" v-else>Part-Time</p>
            <p class="movilidad" v-if="candidato.movilidad">Movilidad: Si</p>
            <p class="movilidad" v-else>Movilidad: No</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuscadorCandidatos from "./BuscadorCandidatos.vue"
export default {
  name: "CardsCandidatos",
  components: { BuscadorCandidatos },
  data: () => {
    return {
      candidatos: [],
      candidatosFiltrados: [],
      value1: "",
      filtrofulltime: "todo-time",
      filtromovilidad: "todos",

    };
  },

  methods: {

    buscarCandidato(value) {
      this.value1 = value;
      console.log(this.value1);
      this.filtros()
    },

    filtros() {
      if (this.filtrofulltime == "full-time" && this.filtromovilidad == "movilidad") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())) && candidato.fulltime == true && candidato.movilidad == true)
      } else if (this.filtromovilidad == "sinmovilidad" && this.filtrofulltime == "full-time") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())) && candidato.fulltime == true && candidato.movilidad == false)
      } else if (this.filtrofulltime == "part-time" && this.filtromovilidad == "movilidad") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())) && candidato.fulltime == false && candidato.movilidad == true)
      } else if (this.filtromovilidad == "sinmovilidad" && this.filtrofulltime == "part-time") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())) && candidato.fulltime == false && candidato.movilidad == false)
      } else if (this.filtrofulltime == "full-time" && this.filtromovilidad == "todos") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())) && candidato.fulltime == true)
      } else if (this.filtrofulltime == "part-time" && this.filtromovilidad == "todos") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())) && candidato.fulltime == false)
      } else if (this.filtrofulltime == "todo-time" && this.filtromovilidad == "movilidad") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())) && candidato.movilidad == true)
      } else if (this.filtrofulltime == "todo-time" && this.filtromovilidad == "sinmovilidad") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())) && candidato.movilidad == false)
      } else if (this.filtrofulltime == "todo-time" && this.filtromovilidad == "todos") {
        this.candidatosFiltrados = this.candidatos.filter((candidato) => (candidato.nombre.toLowerCase().startsWith(this.value1.toLowerCase()) ||
          candidato.apellido.toLowerCase().startsWith(this.value1.toLowerCase())))
      }
    },

    filtromovilidad1(event) {
      this.filtromovilidad = event.target.value;
      this.filtros();
      console.log(this.filtromovilidad)
    },


    filtrofulltimea(event) {
      this.filtrofulltime = event.target.value;
      this.filtros();
      console.log(this.filtrofulltime)
    },

    filtrarCandidatosMovilidad() {
      this.candidatosFiltrados = this.candidatos.filter(
        (candidato) => {
          candidato.movilidad === true;
        }
      )

    },

    filtrarCandidatosSinMovilidad() {
      this.candidatosFiltrados = this.candidatos.filter(
        candidato => {
          return candidato.movilidad === false;
        }
      )

    },

    filtrarCandidatosFullTime() {
      this.candidatosFiltrados = this.candidatos.filter(
        candidato => {
          return candidato.fulltime === true;
        }
      )

    },

    filtrarCandidatosPartTime() {
      this.candidatosFiltrados = this.candidatos.filter(
        candidato => {
          return candidato.fulltime === false;
        }
      )

    },


    abrirModal() {
      const { classList } = document.body;
      if (classList.contains("open")) {
        classList.remove("open");
        classList.add("closed");
      } else {
        classList.remove("closed");
        classList.add("open");
      }
      console.log("se esta inciando el modal");
    },
  },
  mounted() {
    fetch("https://635b06b3aa7c3f113db4c169.mockapi.io/candidatos")
      .then((response) => response.json())
      .then((candidato) => {
        this.candidatos = candidato
        this.candidatosFiltrados = this.candidatos
      })
  }
}


</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Helvetica", sans-serif;
}

h1 {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

button {
  display: flex;
  float: inline-end;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: 24px;
  margin: 10px;
  padding: 8px 24px;
  background-color: #4070f4;
  cursor: pointer;
  transition: all 0.3s ease;
}

.buscadoryfiltros {
  display: flex;
  flex-direction: row;
  justify-content: start;
}

.buscador {
  padding: 10px;
}

.boton-filtros {
  height: 50px;
  margin-top: 10px;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 5px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Helvetica', sans-serif;
  border-radius: 50px;
}


.boton-filtros label {
  border: 7px solid rgb(197, 195, 195);
  border-radius: 50px;
  font-size: smaller;
  padding: 5px;

}

.boton-filtros input[type="radio"] {
  display: none;

}

.boton-filtros input:checked+label:before {
  display: none
}

.boton-filtros input:checked+label {
  padding: 5px;
  border-radius: 50px;
  border: 7px solid rgb(255, 252, 252);
  color: rgb(11, 126, 225);
}


@keyframes background-in {
  0% {
    scale: 0 0.005;
  }

  33% {
    scale: 1 0.005;
  }

  66%,
  100% {
    scale: 1 1;
  }
}

@keyframes modal-in {

  0%,
  66% {
    opacity: 0;
    visibility: hidden;
    translate: -50% -30%;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

.boton-filtros {
  display: flex;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1, 1);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  z-index: 1000;
}

body.open .modal-background {
  opacity: 1;
  visibility: visible;
  animation: background-in 1s both;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 300px;
  padding: 48px 40px;
  border-radius: 12px;
  background: #37353b;
  color: #f9f9f9;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

body.open .modal {
  opacity: 1;
  visibility: visible;
  animation: modal-in 1s;
}

body.closed .modal {
  opacity: 0;
  visibility: hidden;
  translate: -50% -50%;
}

.container-skills {
  overflow: hidden;
  margin-top: 20px;
  height: 220px;
  width: 220px;
  border-radius: 24px;
  border: 4px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  color: rgb(12, 12, 12);
}

.container-skills::-webkit-scrollbar {
  display: none;
}

.condicionales {
  font-size: small;
  position: relative;
  bottom: 190px;
  left: 10px;
  display: flex;
  justify-content: space-around;
}

.candidate-cards {
  margin: 20px;
  height: 500px;
  width: 250px;
}


.candidate-cards:hover {
  transform: translateY(-30px);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}

.container::-webkit-scrollbar {
  display: none;
}

.estrella {
  height: 10px;
  width: 10px;
  margin-right: 5px;
}

.tituloS {
  font-weight: bold;
  margin: 10px;
}

.lista-habilidades ul {
  list-style: none;
  display: flex;
  text-align: left;
  margin: 10px;
  flex-direction: column;
}

.lista-habilidades ul li {
  margin: 5px;
}

.social {
  position: relative;
  bottom: 510px;
  left: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  height: 500px;
  overflow-y: scroll;
}

.candidates-list {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 24px;
  border: 4px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  color: rgb(12, 12, 12);
}

.profile-card {
  margin: 10px;
  height: 500px;
  width: 250px;
  padding: 20px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #4070f4;
  padding: 3px;
  margin-bottom: 10px;
}

.image .profile-img {
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
}

.profile-card .text-data {
  display: flex;
  flex-direction: column;

  color: #333;
}

.text-data {
  display: flex;
  justify-content: center;

  text-align: justify;
}

.text-data .name {
  align-items: center;
  font-size: 22px;
  font-weight: 500;
  margin: 10px;
}

.text-data .edad {
  margin-left: 10px;
  align-items: initial;
  font-size: 15px;
  font-weight: 400;
}

.profile-card .buttons {
  display: flex;
  align-items: center;
  margin-top: 25px;
}

.buttons .button {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: 24px;
  margin: 0 10px;
  padding: 8px 24px;
  background-color: #4070f4;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #0e4bf1;
}

.h3 {
  display: block;
}
</style>
