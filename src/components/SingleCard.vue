<script>
export default {
    name: "SingleCard",
}
</script>

<template>
    <div class="card-box">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-98732885e1731509a4ce78d853dd0173-pjlq" alt="">
        <h3>Nome carta</h3>
        <span>Tipo</span>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.card-box{
    width: calc(100% / 5 - 15px);
    text-align: center;
    background-color: $primary-color;
    border-radius: 10px;
    margin: 10px 0;

    img{
        //debug
        width: 100%;
    }

    h3{
        margin: 10px 0;
        color: $secondary-color;
        text-transform: uppercase;
    }

    span{
        display: inline-block;
        margin: 5px 0;
    }
}

</style>
