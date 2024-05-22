<template>
    <div class="homeContainer">
        <carouselComponent />
        <div class="homeContent">
            <h1 class="title">¡Bienvenido a Bar Restaurante Holy!</h1>
            <div class="homeServices">
                <h2 class="subtitle">Servicios</h2>
                <section class="homeSection">
                    <h3 class="boldText">Amplia variedad de bebidas alcohólicas y no alcohólicas</h3>
                    <p>En esta fiesta hay una amplia variedad de bebidas alcohólicas y no alcohólicas para que todos puedan disfrutar de su favorita.</p>
                </section>
                <div class="bars"></div>
                <section class="homeSection">
                    <h3 class="boldText">Ambiente acogedor y decorado con estilo</h3>
                    <p>El ambiente acogedor y decorado con estilo de este restaurante me hace sentir como en casa y disfrutar aún más de mi comida.</p>
                </section>
                <div class="bars"></div>
                <section class="homeSection">
                    <h3 class="boldText">Opciones de reservación para eventos y celebraciones especiales</h3>
                    <p>Las opciones de reservación para eventos y celebraciones especiales nos permiten planificar y organizar de manera eficiente y personalizada nuestros momentos más memorables.</p>
                </section>
            </div>
            <img class="homeMainImage" src="https://res.cloudinary.com/dzd68sxue/image/upload/v1715968749/Bar%20Holy/tapa_lgm5dt.webp"/>
            <NuxtLink class="button" title="Contacto" to="/contacto">Contáctanos</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    import  carouselComponent from '../assets/components/home/carouselComponent.vue';
</script>

<style scoped>
    @import "/assets/css/home/home.css";
</style>