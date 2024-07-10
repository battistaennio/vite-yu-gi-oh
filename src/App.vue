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
      let endPoint = store.apiURL
      if(store.filterText !== ""){
        endPoint = store.apiURLarchetype
        endPoint += `${store.filterText}`
        // console.log(store.filterText);
      }
      axios.get(endPoint)
      .then(response => {
        store.cardsList = response.data.data;
      })
      .catch(error => {
        console.log(error);
      })
    },

    getArchetype(){
      axios.get(store.apiOptionURL)
      .then(risultato => {
        store.archetypeList = risultato.data;
      })
      .catch(err => {
        console.log(err);
      })
    }
    
  },

  created(){
    this.getCard();
    this.getArchetype();
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
