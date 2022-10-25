<template>
    <div class="jobs">
        <h3 class="job-title">Últimos empleos</h3>
        <div class="job-list">
            <div class="job-card" v-for="job in jobs" :key="job">
                <img src="../assets/apple.png" alt="Marca de la empresa" class="brand-pic">
                <div class="job-info">
                    <h4 class="job-name">{{job.name}}</h4>
                    <p class="brand">{{job.brand}} - {{job.rol}}</p>
                
                </div>    
                <div class="job-info2">
                    <p class="job-time" v-if="job.fullTime">Full-Time</p>
                    <p class="job-time" v-else>Part-Time</p>
                    <p class="remote" v-if="job.remote">Remoto</p>
                    <p class="remote" v-else>Presencial</p>
                    <p class="amout"><b>{{job.amount}}</b>k/mes</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "LastJobs",
    data: ()=>{
        return{
            jobs: [
                {
                    name: "Diseñador UI",
                    brand: "Apple",
                    rol: "IT",
                    fullTime: false,
                    remote: true,
                    amount: 120
                },
                {
                    name: "Diseñador UX",
                    brand: "Apple",
                    rol: "IT",
                    fullTime: true,
                    remote: true,
                    amount: 130
                },
                {
                    name: "Gerente",
                    brand: "Apple",
                    rol: "IT",
                    fullTime: true,
                    remote: false,
                    amount: 400
                }
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

    .jobs{
        background-color: #FFFFFF;
        width: 380px;
        align-items: center;
        height: 710px;

        border-radius: 15px;
        margin: 30px;
    }
    .job-title{
        font-size: 2em;
        padding: 30px;
    }
    .job-list{
        border-radius: 15px;
        background-color: #bbbbbb;
        width: 350px;
        margin: auto;
        align-items: center;
        justify-content: space-around;
        display: flex;
        flex-direction: column-reverse;
        height: 600px;
        overflow: auto;
    }
    .job-card{
        background-color: #FFFFFF;
        border-radius: 15px;
        height: 150px;
        width: 320px;
        margin: 15px;
        padding: 20px;
    }
    .brand-pic{
        height: 60px;
        float: left;
    }
    .job-name{
        font-size: 1.3em;
        margin-bottom: 10px;
    }
    .job-info{
        margin-left: 65px;
        text-align: left;
        
    }
    .job-info2{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        color: #444444;
        align-items: center;
        justify-content: space-around;
    }
    
</style>