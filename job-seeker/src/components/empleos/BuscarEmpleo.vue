<template>
  <input
    type="text"
    v-model="value"
    placeholder="Buscar empleo"
    @input="filterResults(value)"
  />
</template>

<script>
export default {
  name: "BuscarEmpleo",
  props: {
    filterResults: Function,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style scoped>
input {
  width: 300px;
  height: 30px;
  margin-top: 1.5rem;
  border-radius: 10px;
  border: none;
  text-align: center;
  align-self: center;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
}
</style>
