<script>
import SingleCard from "./SingleCard.vue";

export default {
    name: "CardList",
    components: {
        SingleCard
    }
}
</script>

<template>
    <section>
        
        <SingleCard />

    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

section{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
