<template>

    <div class="competency">
        <span><p> Edad: {{age}}</p></span>
        <span><p> Jornada: {{fulltime ? "Full-Time":"Part-Time"}}  </p></span>
        <span><p> Movilidad: {{movilidad ? "Si":"No"}}   </p></span>
    </div>

</template>

<script>
    export default {
        name: 'CardCompetencty',
        props: {
            age: Number,
            fulltime: Boolean,
            movility: Boolean,
        },
    }
</script>

<style scoped>

    .competency{  
        display:flex;
        flex-direction:column;
        align-items:baseline;
        justify-content: center;
    }
    .competency span {
        margin: 5px;
    }


</style>