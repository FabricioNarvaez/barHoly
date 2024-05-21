<template>
    <div class="homeContainer">
        <carouselComponent />
        <div><h1>¡Bienvenido a Bar Restaurante Holy!</h1></div>
        <p>En un mundo lleno de prisas y estrés, es necesario tener un lugar donde podamos relajarnos y disfrutar de una buena comida en un ambiente acogedor y divertido. Y ese lugar es sin duda el Bar Restaurant Holy.</p>
        <!-- <img src="https://res.cloudinary.com/dzd68sxue/image/upload/v1715968749/Bar%20Holy/tapa_lgm5dt.webp"/> -->
    </div>
</template>

<script setup>
    import  carouselComponent from '../assets/components/home/carouselComponent.vue';
</script>

<style scoped>
    @import "/assets/css/home/home.css";
</style>