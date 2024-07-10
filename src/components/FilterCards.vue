<script>
//import store
import { store } from '../store';

export default {
    name: "FilterCards",
    // components: {
    //     SingleCard,
    // },
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <section>
        <select v-model="store.filterText" @change="$emit('filter')">
            <option v-for="(archetype, i) in store.archetypeList" :key="i" :value="archetype.archetype_name">{{archetype.archetype_name}}</option>
        </select>
    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

select{
    padding: 10px 20px;
    margin: 0 15px 25px;
    border-radius: 5px;
    border: none;
    background-color: $secondary-color;
}
</style>
