<template>
  <div class="about">
    <div class="text-card">
      <h2 class="about-title">Empleos y Candidatos</h2>
      <p class="about-text">
        Son varias las empresas que recurren a la Bolsa de Empleo para obtener
        datos acerca de vecinos que tengan un perfil para cubrir sus vacantes
        disponibles. Encontra aca cuáles son las alternativas disponibles.
        Tambien podes dejarnos tu cv para que puedan encontrarte!
      </p>
    </div>
    <div class="about-cover">
      <router-link class="link-img" to="/empleos"><img src="../assets/empleos.png" alt="Empleos" class="about-img" /></router-link>
      <router-link class="link-img" to="/candidatos"><img  src="../assets/candidatos.png" alt="Candidatos" class="about-img" /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutDiv",
};
</script>

<style>

    .about{
        display: flex;
        flex-direction: column;
        width: 60vw;
        margin: auto;
        margin-top: 100px
    }
    .text-card{
        background-color: #FFFFFF;
        border-radius: 15px;
    }
    .about-title{
        font-size: 2.5em;
        margin: 20px;
    }
    .about-text{
        font-size: 1.5em;
        margin: 35px;
        text-align: left;
    }
    .about-cover{
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .about-img{
        width: 100%;
    }
    .link-img{
      width: 380px;
    }

</style>