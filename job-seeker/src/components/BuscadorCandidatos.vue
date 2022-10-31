<template>
  <div class="componente">
    <div class="titulo">
      <input v-model = "value"  @input= "filterResults(value)" placeholder="Buscar por nombre o apellido.." type = "text" input>
  </div>
    </div>
</template>

<script>
export default {
  name: "BuscadorCandidatos",
  
  data() {
    return {
      value: "",
    };
  },
  methods: {
    
    filterResults(value) {
      var value1 = value;
      console.log(value1);
      this.$emit("soyKey", value);
    },
  },
};
</script>


<style scoped>
* {
  font-family: "Helvetica", sans-serif;
}

h1 {
  display: flex;
  margin: 20px;
}
input {
    width: 300px;
    height: 50px;
    color: rgb(0, 0, 0);
    font-family: 'Helvetica', sans-serif;
    border: 5px solid #c9cacb;;
    border-radius: 50px 100px 100px 50px;
    transition: .7s;
    transition-timing-function:cubic-bezier(1,-0.5,0,1.5);
    text-align: left;
    box-sizing: border-box;
    padding-left: 15px;
    outline: none;
    font-size: 20px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

</style>