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
  props: {},
  data() {
    return {
      value: "",
    };
  },
  methods: {
    filterResults(value) {
      this.$emit("soyKey", value);
    },
  },
};
</script>
<style scoped>
input {
  width: 300px;
  padding: 10px;
  margin-top: 1.5rem;
  border-radius: 50px;
  border: none;
  text-align: center;
  align-self: center;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
}
</style>
