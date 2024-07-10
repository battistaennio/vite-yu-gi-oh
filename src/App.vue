<script>
//import axios
import axios from "axios";

//import components
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';
import FilterCards from "./components/FilterCards.vue";


//import store
import { store } from './store';

export default{
  name: "app",
  components: {
    AppHeader,
    CardList,
    FilterCards,

  },

  data(){
    return{
      store,
    }
  },

  methods: {
    //chiamata API
    getCard(){
      let endPoint = store.apiURLnormal
      axios.get(endPoint)
      .then(response => {
        store.cardsList = response.data.data;
        // console.log(store.cardsList);
        for(let i = 0; i < store.cardsList.length; i++){
          if(store.cardsList[i].archetype !== undefined && !store.archetypeList.includes(store.cardsList[i].archetype)){
            store.archetypeList.push(store.cardsList[i].archetype)
          }
        }
        console.log(store.archetypeList);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },

  created(){
    this.getCard();
  }
}
</script>

<template>

  <AppHeader />

  <main>
    <FilterCards @filter="getCard" />
    <CardList />

  </main>

</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables" as *;

main{
  margin: 30px 100px;
  min-height: 200px;
}
</style>
