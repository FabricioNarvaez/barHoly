<template>
    <div class="homeContainer">
        <h1 class="title">¡Bienvenido a Bar Restaurante Holy!</h1>
        <carouselComponent />
        <div class="homeContent">
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
            <NuxtImg title="Pincho pimiento" alt="Bar Holy | Pincho pimiento" class="homeMainImage" src="https://res.cloudinary.com/dzd68sxue/image/upload/v1717770242/Bar%20Holy/tapa_lgm5dt_w1hswh.webp"/>
            <div class="spaceBetween"></div>
            <NuxtImg title="Pincho Gamba" alt="Bar Holy | Pincho Gamba" class="homeMainImage homeSecondImage" src="https://res.cloudinary.com/dzd68sxue/image/upload/v1717770239/Bar%20Holy/rr1u8pfcykhzsj9z9t6m_jorysf.webp" />
            <div class="homeServices">
                <h2 class="subtitle">Sobre Nosotros</h2>
                <section class="homeSection">
                    <p>En <strong>Bar Restaurant Holy</strong>  nos esforzamos por ofrecer a nuestros clientes una <strong>experiencia única </strong> y <strong>llena de sabor</strong>. Nuestro menú está compuesto por una deliciosa fusión de sabores, con platos que van desde lo tradicional hasta lo más innovador.</p>
                    <p>Además, nuestro ambiente es <strong>divertido</strong> y <strong>acogedor</strong>, perfecto para disfrutar de una cena con amigos o para una noche de celebración.</p>
                    <p>Ven a conocernos y descubre por qué somos el lugar ideal para disfrutar de buena comida, buenos tragos y buenos momentos.</p>
                    <p class="aboutUsSeeYouSoon">¡Te esperamos en Bar Restaurant Holy!</p>
                </section>
            </div>
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