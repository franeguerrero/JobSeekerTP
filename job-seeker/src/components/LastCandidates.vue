<template>
    <div class="candidates">
        <h3 class="candidates-title">Últimos candidatos</h3>
        <div class="candidates-list">
            <div class="candidate-card" v-for="candidate in candidates" :key="candidate">
                <img src="../assets/person.png" alt="Candidato" class="candidate-pic">
                <div class="candidate-info">
                    <h4 class="candidate-name">{{candidate.name}}</h4>
                    <p class="candidate-age">Edad: {{candidate.age}}</p>
                
                </div>    
                <div class="candidate-info2">
                    <p class="candidate-time" v-if="candidate.fullTime">Full-Time</p>
                    <p class="candidate-time" v-else>Part-Time</p>
                    <p class="candidate-car" v-if="candidate.car">Movilidad: Si</p>
                    <p class="candidate-car" v-else>Movilidad: No</p>
                    <button href="#" class="cv"> Ver CV</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "LastCandidates",
    data: ()=>{
        return{
            candidates: [
                {name: "Enzo Sives",
                age: 26,
                fullTime: false,
                car: false},
                {name: "Carla Capelli",
                age: 15,
                fullTime: true,
                car: true},
                {name: "Francisco Guerrero",
                age: 24,
                fullTime: false,
                car: false}
            ]
        }
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
    }
    .candidate-name{
        font-size: 1.3em;
        margin-bottom: 10px;
    }
    .candidate-info{
        margin-left: 65px;
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