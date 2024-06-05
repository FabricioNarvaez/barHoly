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
</script>