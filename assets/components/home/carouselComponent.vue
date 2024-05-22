<template>
    <div class="carouselContainer">
        <Carousel :wrap-around="true">
            <Slide v-for="slide in images" :key="slide">
                <div class="carousel__item">
                    <img :title="slide.name" class="carouselImage" :src="slide.href" />
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
        { name: "Entrada", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1716397396/Bar%20Holy/h6rwx7icthnw6ztoouyw.png"},
        { name: "Barra", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1716397263/Bar%20Holy/spxfj6sgezjqazn1af7x.jpg"},
        { name: "Comedor", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1716397263/Bar%20Holy/txt3agff5clgibl7lcq8.jpg"},
        { name: "Vino y pincho", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1716397263/Bar%20Holy/xketskmtvpuns6e4xdbj.jpg"},
        { name: "Plato de codillo", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1716397263/Bar%20Holy/hoimq2fpuqsxp2gz2wrv.jpg"},
        { name: "Pincho Gamba", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1716397263/Bar%20Holy/rr1u8pfcykhzsj9z9t6m.jpg"},
        { name: "Pincho tomate y aceitunas", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1716397263/Bar%20Holy/ptqcbhlfjk5i0h0zcvbp.jpg"},
    ]
</script>

<style setup>
    @import "../../css/home/carousel.css";
</style>