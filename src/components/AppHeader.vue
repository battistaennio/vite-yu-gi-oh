<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg" alt="Yu-Gi-Oh logo">
        <h1>Yu-Gi-Oh API</h1>
    </header>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

    header{
        text-align: center;
        background-color: $secondary-color;
        padding: 20px 0;
    }

    h1{
        font-weight: 500;
        display: inline-block;
    }

    img{
        width: 5%;
    }
</style>
