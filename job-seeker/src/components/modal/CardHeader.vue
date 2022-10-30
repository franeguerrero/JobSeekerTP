<template>

    <div class="CardHeader">
        <img v-bind:src="avatar"/>
        <div class="info">
            <p class="name">{{name}}</p>
            <p class="lname">{{lname}}</p>
        </div>

    </div>
    
</template>

<script>
    export default {
        name: 'CardHeader',
        props: {
            avatar: String,
            name: String,
            lname: String
        }
    }


</script>

<style  scoped>
    div.CardHeader{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 15px;

    }
    div.CardHeader img{
        width: 120px;
        border-radius: 100%;
    }
    .info{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        align-items: baseline;
    }
    .name{
        font-weight: bold;
        font-size: 2em;
    }
    .lname{
        font-weight: bold;
        font-size: 2.4em;
        color: #2b96ba;
    }
</style>