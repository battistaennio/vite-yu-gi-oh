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
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
