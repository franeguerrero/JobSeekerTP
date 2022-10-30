<template>
<div class="body">

    <div class="candidates">
        <h3 class="candidates-title">Últimos candidatos</h3>
        <div class="candidates-list">
            <div class="candidate-card" v-for="candidate in candidates" :key="candidate">
                <img v-bind:src="candidate.avatar" alt="Candidato" class="candidate-pic">
                <div class="candidate-info">
                    <h4 class="candidate-name">{{candidate.nombre}} {{candidate.apellido}}</h4>
                    <p class="candidate-age">Edad: {{candidate.edad}}</p>
                
                </div>    
                <div class="candidate-info2">
                    <p class="candidate-time" v-if="candidate.fulltime">Full-Time</p>
                    <p class="candidate-time" v-else>Part-Time</p>
                    <p class="candidate-car" v-if="candidate.movilidad">Movilidad: Si</p>
                    <p class="candidate-car" v-else>Movilidad: No</p>
                    <button class="cv" @click.stop="modalDataCharge(candidate)">Ver CV</button>
                </div>

            </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    name: "LastCandidates",
    props: {modalDataCharge: Function},
    data: ()=>{
        return{
            candidates: []
        }
    },
    mounted(){
        fetch("https://635b06b3aa7c3f113db4c169.mockapi.io/candidatos")
            .then((response) => response.json())
            .then((response) => (this.candidates = response.slice(-3)))
            .catch((err) => console.error(err));
    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .candidates{
        background-color: #FFFFFF;
        width: 380px;
        align-items: center;
        height: 710px;

        border-radius: 15px;
        margin: 30px;
    }
    .candidates-title{
        font-size: 2em;
        padding: 30px;
    }
    .candidates-list{
        border-radius: 15px;
        background-color: #bbbbbb;
        width: 350px;
        margin: auto;
        align-items: center;
        justify-content: space-around;
        display: flex;
        flex-direction: column-reverse;
        height: 600px;
    }
    
    .candidate-card{
        background-color: #FFFFFF;
        border-radius: 15px;
        width: 320px;
        margin: 15px;
        padding: 20px;
        height: 150px;
    }
    .candidate-pic{
        height: 60px;
        float: left;
        border-radius: 50%;
    }
    .candidate-name{
        font-size: 1.3em;
        margin-bottom: 10px;
    }
    .candidate-info{
        margin-left: 75px;
        text-align: left;
        
    }
    .candidate-info2{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        color: #444444;
        align-items: center;
        justify-content: space-around;
    }
    .cv{
        border: none;
        color: #FFFFFF;
        padding: 5px 20px;
        border-radius: 50px;
        background-color: #2b96ba;
        font-weight: 900;
        font-size: 1em;

    }
</style>