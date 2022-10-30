<template>
    <div class="skills">
        <h3 class="information-title"> Habilidades </h3>
        <div class="skill">
            <p v-for="skill in skills" :key="skill" > {{skill}} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardSkills',
        props:{
            skills: Array,
        }
    }
</script>

<style  scoped>

    .skills{
        display:flex;
        flex-direction:column;
        margin-top: 20px;
    }
    .information-title{
        font-size: 1.4em;
        margin-bottom: 10px;
    }
    .skill{  
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .skill p{
        margin: 5px;

    }
</style>