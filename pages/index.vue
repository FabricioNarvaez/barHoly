<template>
    <div class="homeContainer">
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
        <div><h1>¡Bienvenido a Bar Restaurante Holy!</h1></div>
        <p>En un mundo lleno de prisas y estrés, es necesario tener un lugar donde podamos relajarnos y disfrutar de una buena comida en un ambiente acogedor y divertido. Y ese lugar es sin duda el Bar Restaurant Holy.</p>
        <!-- <img src="https://res.cloudinary.com/dzd68sxue/image/upload/v1715968749/Bar%20Holy/tapa_lgm5dt.webp"/> -->
    </div>
</template>

<script setup>
    const images = [
        { name: "Peñarol", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1697729971/WEBP/Default_soccer_field_noon_rural_1_cf3ppi.jpg"},
        { name: "Cancheritos", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1697729971/WEBP/Default_soccer_field_noon_rural_1_cf3ppi.jpg"},
        { name: "Amistad", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1697729971/WEBP/Default_soccer_field_noon_rural_1_cf3ppi.jpg"},
        { name: "Estella", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1697729971/WEBP/Default_soccer_field_noon_rural_1_cf3ppi.jpg"},
    ]
</script>

<style scoped>
    @import "/assets/css/home/home.css";
</style>