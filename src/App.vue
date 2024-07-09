<script>
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';


export default{
  name: "app",
  components: {
    AppHeader,
    CardList,

  }
}
</script>

<template>

  <AppHeader />

  <main>

    <CardList />
    
  </main>

</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables" as *;

main{
  background-color: $secondary-color;
  padding: 40px;
  margin: 30px 100px;
  min-height: 200px;
}
</style>
