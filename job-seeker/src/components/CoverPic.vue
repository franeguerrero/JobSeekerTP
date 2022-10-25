<template>
    <div class="body">
        <img class="cover" src="../assets/cover.jpg" alt="Cover photo">

    </div>
</template>

<script>
export default {
    name: "CoverPic",
}
</script>

<style scoped>
    .body{
        display: flex;
        justify-content: center;
    }
    .cover{
        
        margin-top: 100px;
        width: 80vw;
        border-radius: 20px;
    }
</style>