<template>
  <header>
    <div ><img class="brand" src="../assets/logo.png" alt="Brand Logo" /></div>
    <nav>
      <ul class="nav-list">
        <li class="nav-item"><router-link class="nav-link" to="/">INICIO</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/empleos">EMPLEOS</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/candidatos">CANDIDATOS</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>

header {
  position: fixed;
  background-color: #2b96ba;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 130px;
}
.brand {
  height: 60px;
}
.nav-list {
  list-style-type: none;
}

.nav-item {
  float: left;
}

.nav-link {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}


.nav-link:hover {
  border-bottom: 2px solid #FFFFFF;
  margin-bottom: -2px;
}
</style>