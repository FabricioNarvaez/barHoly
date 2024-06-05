<template>
    <carteComponent :content="bebidas" :title="'Bebidas'" />
</template>

<script setup>
    import carteComponent from './assets/components/carta-y-menu/carteComponent.vue';

    const bebidas = [
        { type: "Cervezas", content: [
            { name: "ZURITO AMBAR", price: "1.30 €"},
            { name: "ZURITO AMBAR EXPORT", price: "1.50 €"},
            { name: "CAÑA AMBAR", price: "2.30 €"},
            { name: "CAÑA AMBAR EXPORT", price: "2.50€"},
            { name: "CAÑÓN AMBAR", price: "3.00 €"},
            { name: "CAÑÓN AMBAR EXPORT", price: "3.50 €"},
            { name: "AMSTEL ORO TOSTADA 1/4", price: "2.30 €"},
            { name: "ESTRELLA GALICIA", price: "2.30 €"},
            { name: "AMBAR ESPECIAL", price: "3.00 €"},
            { name: "AMBAR MORENA", price: "3.00 €"},
            { name: "AMBAR TOSTADA TRIPLE CERO", price: "2.50 €"},
            { name: "AMBAR TOSTADA TRIPLE CERO 1/4", price: "2.20€"}
        ]},
        { type: "Vermut", content: [
            { name: "BITTER CINZANO", price: "3.00 €"},
            { name: "MARIANITO", price: "1.80 €"},
            { name: "MARTINI ROSSO", price: "2.80 €"},
            { name: "MARTINI BLANCO", price: "2.80 €"},
            { name: "GOYA", price: "2.70 €"},
            { name: "MOSCATEL", price: "3.50 €"}
        ]}
    ]
</script>

