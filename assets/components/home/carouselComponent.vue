<template>
    <div class="carouselContainer">
        <!-- <Carousel :wrap-around="true" :items-to-show="2"> -->
        <Carousel :wrap-around="true" :autoplay="3000">
            <Slide v-for="slide in images" :key="slide">
                <div class="carousel__item">
                    <NuxtImg class="carouselImage" :title="slide.name" :alt="slide.name" :src="slide.href" />
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
        // { name: "Bar Holy | Entrada", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717770240/Bar%20Holy/entrada_vgsj9l.webp"},
        // { name: "Bar Holy | Comedor", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717770239/Bar%20Holy/txt3agff5clgibl7lcq8_gkst6u.webp"},
        { name: "Bar Holy | Vino y pincho", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717770240/Bar%20Holy/xketskmtvpuns6e4xdbj_fphr1o.webp"},
        { name: "Bar Holy | Plato de codillo", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717770241/Bar%20Holy/hoimq2fpuqsxp2gz2wrv_bi6stj.webp"},
        { name: "Bar Holy | Pincho Gamba", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717770239/Bar%20Holy/rr1u8pfcykhzsj9z9t6m_jorysf.webp"},
        { name: "Bar Holy | Pincho Pimiento", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717770242/Bar%20Holy/tapa_lgm5dt_w1hswh.webp"},
        { name: "Bar Holy | Pincho tomate y aceitunas", href: "https://res.cloudinary.com/dzd68sxue/image/upload/v1717770240/Bar%20Holy/ptqcbhlfjk5i0h0zcvbp_vsedup.webp"},
    ]
</script>

<style setup>
    @import "../../css/home/carousel.css";
</style>