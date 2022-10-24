<template>


<div class="componente">

  <div class="titulo"><h1>Buscar</h1></div>
<div class= "formulario">
  <h3>Nombre</h3>
<input v-model="nombre">
<h3>Apellido</h3>
<input v-model="apellido">
<h3>Edad</h3>
<input v-model="edad">
<h3>Movilidad</h3>
<div class="mov">
<input type="radio" id="one" value="true" v-model="movilidad">
  <label for="true">Si</label>
  <br>
  <input type="radio" id="two" value="false" v-model="movilidad">
  <label for="false">No</label>
  <br>
</div>
<h3>Full-Time</h3>
<div class="full">
<input type="radio" id="one" value="true" v-model="fulltime">
  <label for="true">Si</label>
  <br>
  <input type="radio" id="two" value="false" v-model="fulltime">
  <label for="false">No</label>
  <br>
</div>

  <button v-on:click="buscarResultados()">Buscar</button>
  
</div>
</div>
</template>

<script>
export default{
    name: "FormularioEmpleos",
    data() {
        return {
        nombre: '',
        apellido: '',
        edad: '',
        movilidad: false,
        fulltime: false,

    }
},
    methods: {
      buscarResultados(){
        alert('Buscando resultados');
      }

    }}
</script>


<style scoped>
* {
 
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

h1{
  display: flex;
  margin: 20px;
}

.formulario{
  background-color: #ffffffe1;
  border-color: rgb(16, 16, 7);
  top: 10px;
  padding: 10px;
  margin: 10px;
  width:300px;
  border-radius: 20px;
  display: flex;
  flex-direction:column;
  justify-content:left;
  align-items:center;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  color: rgb(12, 12, 12);
  font-family: Helvetica, sans-serif;
}
.formulario input {
  border-radius: 20px;
  margin:2px;
  padding: 8px;
}

button {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: 44px;
  margin:10px;
  padding: 8px 24px;
  background-color: #4070f4;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  background-color: #0e4bf1;
}
.mov{
  display: flex;
  justify-content: center;
}
.full{
  display: flex;
  justify-content: center;
}

</style>