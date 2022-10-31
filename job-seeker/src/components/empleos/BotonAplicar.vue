<template>
  <button class="aplicar" @click="showForm($event)">Aplicar</button>
</template>

<script>
export default {
  name: "BotonAplicar",
  data() {
    return { mostrarForm: false };
  },
  methods: {
    showForm(event) {
      this.$emit("form", event);
    },
  },
};
</script>
<style scoped>
.aplicar {
  color: white;
  text-align: center;
  width: 80px;
  font-weight: 600;
  background-color: #2b96ba;
  padding: 5px 10px 5px 10px;
  display: inline-block;
  border: none;
  font-size: 13px;
  border-radius: 50px;
  cursor: pointer;
  display: block;
  margin: auto;
  margin-top: 10px;
}
.aplicar:hover {
  background: rgba(43, 150, 186, 0.2);
  color: #2b96ba;
  border: 1px solid #2b96ba;
}
</style>
