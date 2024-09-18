<template>
    <carteComponent :content="nuestrosPinchos" :title="'Nuestros pinchos'" />
</template>

<script setup>
    import carteComponent from './assets/components/carta-y-menu/carteComponent.vue';

    const nuestrosPinchos = [
        { type: "Pinchos", content: [
            { name: "TORTILLA DE PATATA", price: "2.20 €"},
            { name: "ANCHOAS REBOZADAS", price: "2.20 €"},
            { name: "TORREZNO", price: "3.00 €"},
            { name: "ANCHOAS RELLENAS", price: "2.50 €"},
            { name: "PINCHO DE JAMÓN", price: "2.20 €"},
            { name: "FRITO DE GAMBA", price: "2.50 €"},
            { name: "CALABACÍN RELLENO DE GAMBA", price: "2.20 €"},
            { name: "BOQUERÓN", price: "2.50 €"},
            { name: "SALPICÓN", price: "3.50 €"},
            { name: "VENTRESCA", price: "3.00 €"},
            { name: "PINCHO GAMBA Y HUEVO", price: "2.50 €"},
            { name: "GILDA", price: "1.50 €"}
        ]},
        { type: "Fritos Caseros", content: [
            { name: "PIRULETA DE HONGOS", price: "2.20 €"},
            { name: "JAMÓN Y QUESO ", price: "1.80 €"},
            { name: "FRITO DE PIMIENTO", price: "1.80 €"},
            { name: "CROQUETAS DE JAMÓN", price: "1.80 €"},
            { name: "GAMBA (2 UNIDADES)", price: "2.50 €"}
        ]},

    ]

    useHead({
        title: 'Nuestros Pinchos | Bar Restaurante Holy',
        meta: [
            { name: 'description', content: '¡Disfruta de una experiencia gastronómica única con nuestros deliciosos pinchos! En Bar Restaurante Holy encontrarás una gran variedad de pinchos elaborados con ingredientes frescos y de calidad. ¡No te los pierdas!'}
        ],
        link: [
            { rel: 'canonical', href: "https://www.barrestauranteholy.es/carta-y-menu/nuestros-pinchos"}
        ]
    });

    definePageMeta({
        middleware: [
            function (to, from) {
                const isMaintenance = process.env.MAINTENANCE_MODE;
    
                if (isMaintenance) {
                    return navigateTo('/maintenance');
                }
        }]
    });
</script>