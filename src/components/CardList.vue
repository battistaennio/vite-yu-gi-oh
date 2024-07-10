<script>
import SingleCard from "./SingleCard.vue";

//import store
import { store } from '../store';


export default {
    name: "CardList",
    components: {
        SingleCard,
    },
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <section>

        <SingleCard v-for="carta in store.cardsList" :key="carta.id" :info="carta" />

    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

section{
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
    background-color: $secondary-color;
}
</style>
