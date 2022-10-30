<template>
    <div class="card-expanded" v-bind:class="{ active: isActive }" >

            <div class="content" @click.stop="" >

                <div class="information">
                    <CardHeader 
                        :avatar="modalData.avatar" 
                        :name="modalData.nombre"
                        :lname="modalData.apellido"
                    />

                    <CardInformation 
                        :age="modalData.edad" 
                        :fulltime="modalData.fulltime" 
                        :movility="modalData.movilidad" 
                    />
                </div>
                <div class="skills">
                    <CardSkills 
                        :skills="modalData.skill" 
                    />
                </div>

        </div>
    </div>
</template>

<script>
import CardHeader from './CardHeader.vue';
import CardInformation from './CardCompetency.vue';
import CardSkills from './CardSkills.vue';
export default {
    name: "SecCard",
    components: { CardHeader, CardInformation, CardSkills },
    props: {
        modalData: {},
        isActive: Boolean,
    },

};

</script>

<style scoped>
    div.card-expanded {
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
    }

    div.card-expanded.active {
        visibility:visible;
        opacity: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 100%;
        width: 100%;
        transition: 0.3s;
        position: fixed;
        background-color: #0005
    }

    div.card-expanded.active div.content {
        transform:translate( 0em, -10em);
        transition: 0.3s;
    }
    div.content {
        transition: 0.1s;
        top: 0em;
        left: 0em;
        bottom: -20em;
        right: 0;
        margin: auto;
        height: 300px;
        width: 600px;
        position: absolute;
        border-radius: 15px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
    }

    .information{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }




</style>