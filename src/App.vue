<script>
import AppHeader from './components/AppHeader.vue';

export default{
  name: "app",
  components: {
    AppHeader,

  }
}
</script>

<template>

  <AppHeader />

  <main>

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
