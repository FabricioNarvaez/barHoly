<template>
    <div class="carouselContainer">
        <!-- <Carousel :wrap-around="true" :items-to-show="2"> -->
        <Carousel :wrap-around="true" :autoplay="3000">
            <Slide v-for="slide in images" :key="slide">
                <div class="carousel__item">
                    <img :title="slide.name" :alt="slide.name" class="carouselImage" :src="slide.href" />
                </div>
            </Slide>
    
            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup>
    const images = [
        { name: "Bar Holy | Entrada", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717767576/Bar%20Holy%20Webp/entrada_lbjfay.webp"},
        { name: "Bar Holy | Comedor", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717767575/Bar%20Holy%20Webp/comedor_cuo34z.webp"},
        { name: "Bar Holy | Vino y pincho", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717767575/Bar%20Holy%20Webp/Barra_fqi08s.webp"},
        { name: "Bar Holy | Plato de codillo", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717767575/Bar%20Holy%20Webp/codillo_mn6nvu.webp"},
        { name: "Bar Holy | Pincho Gamba", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717767575/Bar%20Holy%20Webp/gamba_zkhilw.webp"},
        { name: "Bar Holy | Pincho tomate y aceitunas", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717767575/Bar%20Holy%20Webp/tomate_zzyoo4.webp"},
    ]
</script>

<style setup>
    @import "../../css/home/carousel.css";
</style>