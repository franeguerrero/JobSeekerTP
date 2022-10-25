<template>
  <div class="componente">
    <h1>Candidatos</h1>
    <button v-on:click="abrirModal()">Subi tu CV</button>
    <div class="modal-background" @:click="abrirModal()"></div>
    <div class="modal">
      <h1>Cargue aqui su CV</h1>
    </div>
    <div class="container">
      <div class="candidates-list">
        <div
          class="candidate-cards"
          v-for="candidato in candidatos"
          :key="candidato"
        >
          <div class="profile-card">
            <div class="image">
              <img
                src="https://www.mendozapost.com/files/image/7/7142/54b6f4c45797b_360_480!.jpg?s=bf284228883a747d8dc7886e606a181f&d=1638231922"
                alt=""
                class="profile-img"
              />
            </div>

            <div class="text-data">
              <p class="name">
                {{ candidato.nombre }} {{ candidato.apellido }}
              </p>
              <p class="edad">Edad: {{ candidato.edad }}</p>
              <div class="container-skills">
                <div
                  class="lista-habilidades"
                >
                  <p class="tituloS">Skills</p>
                  <ul>
                    <li v-for="skill in candidato.skill" v-bind:key="skill">
                      
                        
                        <p><img
                          class="estrella"
                          src="@/assets/estrella.png"
                          alt=""
                        />{{ skill }} <br></p>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="social">
            <button class="cv">
              <img src="@/assets/cv.png" alt="" />
              <a href=""></a>
            </button>
            <button class="git">
              <a href="https://www.github.com"
                ><img src="@/assets/github.png" alt=""
              /></a>
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
export default {
  name: "UltimosCandidatos",
  data: () => {
    return {
      event: "click",
      candidatos: [
        {
          nombre: "Enzo",
          apellido: "Sives",
          edad: "26",

          movilidad: false,
          fulltime: true,
          skill: ["Trabajo en equipo"]
        },
        {
          nombre: "Francisco",
          apellido: "Guerrero",
          edad: "26",

          movilidad: true,
          fulltime: false,
          skill: ["Adaptación o flexibilidad", "Romper código (prog)"]
        },

        {
          nombre: "Enzo",
          apellido: "Guerrero",
          edad: "26",

          movilidad: false,
          fulltime: false,
          skill: ["Identificación de oportunidades y resolución de problemas","Cebar mates"]
        },
        {
          nombre: "Enzo",
          apellido: "Milei",
          edad: "26",

          movilidad: false,
          fulltime: false,
          skill: ["Desarrollo de ideas y capacidad para innovar", "Dolarizar el planeta", "Volar Banco Central","Desarrollo de ideas y capacidad para innovar", "Dolarizar el planeta", "Volar Banco Central","Desarrollo de ideas y capacidad para innovar", "Dolarizar el planeta", "Volar Banco Central","Desarrollo de ideas y capacidad para innovar", "Dolarizar el planeta", "Volar Banco Central"]
        },
        {
          nombre: "Enza",
          apellido: "Capelli",
          edad: "26",
          movilidad: false,
          fulltime: false,
          skill: ["Capacidad de comunicación", "Doctora sin título" ]
        },
        {
          nombre: "Enzo",
          apellido: "Hoffer",
          edad: "26",
          movilidad: false,
          fulltime: false,
          skill: ["Carecer de capacidad de comunicación", "Poner corcheas" ]
        }
      ],
      paginate: ["candidatos"],
      methods: {
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
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Helvetica", sans-serif;
}
h1 {
  display: flex;
  margin: 20px;
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

.modal-background {
  position: fixed;
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
}

body.open .modal-background {
  opacity: 1;
  visibility: visible;
  animation: background-in 1s both;
}

.modal {
  position: fixed;
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
  overflow: auto;
  margin-top: 20px;
  height: 220px;
  width: 220px;
  border-radius: 24px;
  border: 4px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  color: rgb(12, 12, 12);
}
.condicionales {
  font-size: small;
  position: relative;
  bottom: 190px;
  left: 10px;
  display: flex;
  justify-content: space-around;
}
.candidates-cards {
  height: 100px;
  width: 250px;
}

.estrella {
  height: 10px;
  width: 10px;
  margin-right: 5px ;
}
.tituloS {
  font-weight: bold;
  margin: 10px
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
  bottom: 500px;
  left: 70px;
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
.buttons .button:hover {
  background-color: #0e4bf1;
}

.h3 {
  display: block;
}
</style>
