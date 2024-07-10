<script>
export default {
    name: "SingleCard",
    props: {info : Object},
}
</script>

<template>
    <div class="card-box">
        <img :src="info.card_images[0].image_url" :alt="info.name">
        <h3>{{info.name}}</h3>
        <span>{{info.archetype}}</span>
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
        width: 100%;
    }

    h3{
        margin: 10px 0;
        color: $secondary-color;
        text-transform: uppercase;
        padding: 0 3px;
    }

    span{
        display: inline-block;
        margin: 5px 0;
    }
}

</style>
