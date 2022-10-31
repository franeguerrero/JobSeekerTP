<template>
  <div class="wrap">
    <form class="formulario">
      <input
        type="radio"
        name="inputJornada"
        @change="onChange($event)"
        checked
        value="todos"
        id="todos"
      />
      <label for="todos"><span>All</span></label>
      <input
        type="radio"
        name="inputJornada"
        @change="onChange($event)"
        value="fulltime"
        id="fulltime"
      />
      <label for="fulltime"><span>Full time</span></label>
      <input
        type="radio"
        name="inputJornada"
        @change="onChange($event)"
        value="parttime"
        id="parttime"
      />
      <label for="parttime"><span>Part time</span></label>
    </form>
  </div>
</template>
<script>
export default {
  name: "BotonFiltrar",
  data() {
    return {
      jornada: "",
    };
  },
  methods: {
    onChange(event) {
      this.$emit("laKey", event);
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
body {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
input {
  margin: 10px;
}
span {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.formulario input[type="radio"] {
  display: none;
}
.formulario label {
  color: #2b96ba;
  text-align: center;
  width: 80px;
  font-weight: 600;
  background-color: white;
  padding: 5px 10px 5px 10px;
  margin: 10px;
  display: inline-block;
  font-size: 13px;
  border-radius: 50px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 1px #2b96ba solid;
}
.formulario label:hover {
  background: rgba(43, 150, 186, 0.2);
}
.formulario input[type="radio"]:checked + label {
  background: #2b96ba;
  color: white;
}
</style>
