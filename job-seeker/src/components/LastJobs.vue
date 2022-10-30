<template>
    <div class="jobs">
        <h3 class="job-title">Últimos empleos</h3>
        <div class="job-list">
            <div class="job-card" v-for="job in jobs" :key="job">
                <img v-bind:src="job.img" alt="Marca de la empresa" class="brand-pic">
                <div class="job-info">
                    <h4 class="job-name">{{job.rubro}}</h4>
                    <p class="brand">{{job.somos}}</p>
                
                </div>    
                <div class="job-info2">
                    <p class="job-time">{{job.jornada}}</p>
                    <p class="remote" >{{job.remoto}}</p>
                    <p class="amout"><b>{{job.sueldo}}</b></p>
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
            jobs: []
        }
    },
    mounted(){
        fetch("https://6341b5f720f1f9d79978868e.mockapi.io/empleo")
            .then((response) => response.json())
            .then((response) => (this.jobs = response.slice(-3)))
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
        border-radius: 50%;
    }
    .job-name{
        font-size: 1.3em;
        margin-bottom: 10px;
    }
    .job-info{
        margin-left: 75px;
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