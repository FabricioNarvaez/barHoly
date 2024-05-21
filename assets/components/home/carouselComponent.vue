<template>
    <Carousel>
        <Slide v-for="slide in images" :key="slide">
            <div class="carousel__item">
                <img class="carouselImage" :src="slide.href" />
            </div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script setup>
    const images = [
        { name: "Peñarol", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1697729971/WEBP/Default_soccer_field_noon_rural_1_cf3ppi.jpg"},
        { name: "Cancheritos", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1697729971/WEBP/Default_soccer_field_noon_rural_1_cf3ppi.jpg"},
        { name: "Amistad", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1697729971/WEBP/Default_soccer_field_noon_rural_1_cf3ppi.jpg"},
        { name: "Estella", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1697729971/WEBP/Default_soccer_field_noon_rural_1_cf3ppi.jpg"},
    ]
</script>

<style setup>
    @import "../../css/home/carousel.css";
</style>