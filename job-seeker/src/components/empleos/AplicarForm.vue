<template>
  <div class="formulario" >
    <p v-show="enviada" v-if="enviada" class="enviada">{{ enviadaCorrectamente }}</p>
    <form v-else>
      <h3>Ingrese sus datos para aplicar: </h3>
      <div class="inputs">
      <input type="text" class="nombre" id="nombre" v-model="nombre" autocomplete="off" placeholder="Nombre" />
      <p v-show="nombreIncorrecto">{{ errorNombre }}</p>
      <input type="text" class="apellido" id="apellido" v-model="apellido" autocomplete="off" placeholder="Apellido" />
      <p v-show="apellidoIncorrecto">{{ errorApellido }}</p>
      <input type="email" class="mail" id="mail" v-model="mail" autocomplete="off" placeholder="Mail"/>
      <p v-show="mailIncorrecto">{{ errorMail }}</p>
      <label for="cv"><span>Cargar cv</span></label>
      <input type="file" name="cv" id="cv" >
     </div>
      <div class="botones">
      <button @click="this.cerrarForm"
        id="submit"
        class="enviar"
      > Cancelar</button>
      <button @click="checkForm($event)"
        id="submit"
        class="enviar"
      > Enviar</button>
    </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AplicarForm",
 data() {
    return {
      nombre: "",
      nombreIncorrecto: false,
      errorNombre: "*Debe ingresar un nombre",
      apellido: "",
      apellidoIncorrecto: false,
      errorApellido: "*Debe ingresar un apellido",
      mail: "",
      errorMail: "*Mail incorrecto",
      mailIncorrecto: false,
      enviadaCorrectamente: "Enviado correctamente",
      enviando: false,
      enviada: false,
    };
  },
  props:{cerrarForm:Function},
  methods: {
    checkForm(event) {
      event.preventDefault(event)
  if (this.nombre == "") {
        this.nombreIncorrecto = true;
      } else {
        this.nombreIncorrecto = false;
          }
      if (this.apellido == "") {
        this.apellidoIncorrecto = true;
      } else {
        this.apellidoIncorrecto = false;
          }
      let expr =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!expr.test(this.mail)) {
        this.mailIncorrecto = true;
      } else {
        this.mailIncorrecto = false;
       }
      if (this.nombre !== "" && expr.test(this.mail) && this.apellido !== "") {
        this.enviada = true;
         setTimeout(this.cerrarForm, 2000);
   } else {
        this.enviada = false;
      }
    }
  }
};
</script>

<style scoped>
input[type="file"]{
  display:none;
}
label{
  color:white;
  background-color: #2b96ba;
}
button{
  color: #2b96ba;
  background-color: white;
}
 label ,button {
 text-align: center;
  width: 80px;
  font-weight: 600;
  padding: 5px 10px;
  margin:10px  auto;
 display: inline-block;
 font-size: 13px;
  border-radius: 50px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border:1px solid #2b96ba;
}
 label:hover, button:hover {
  background: rgba(43, 150, 186, 0.2);
}
label:hover{
  color:#2b96ba;
}
p{
  color:rgb(255, 0, 0);
  font-size: 13px;
}
.botones{
  display: flex;
  justify-content: space-between;
}
.inputs{
  display: flex;
  flex-direction: column;
}
input{
  border: 0;
  border-bottom: #2b96ba 2px solid;
  outline: none;
  margin-top: 20px;
}
input:focus{
  border: 0;
  border-bottom: #2b96ba 3px solid;
 
  font-size: 16px;
}
form{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin:auto;
  margin-top: 30px;
  }
.enviada{
  color:black;
  font-size: 20px;
  text-align: center;
  margin-top:100px;
}
</style>
