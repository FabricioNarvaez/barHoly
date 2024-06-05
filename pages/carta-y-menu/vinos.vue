<template>
    <carteComponent :content="vinos" :title="'Vinos'" />
</template>

<script setup>
    import carteComponent from './assets/components/carta-y-menu/carteComponent.vue';

    const vinos = [
        { type: "Vino Tinto", content: [
            { name: "COPA DE VINO INURRIETA 400", price: "2.30 €"},
            { name: "INURRIETA 400 CRIANZA", price: "18.00 €"},
            { name: "COPA DE VINO PRINCIPE DE VIANA", price: "1.70 €"},
            { name: "PRINCIPE DE VIANA CRIANZA", price: "15.50 €"},
            { name: "COPA DE VINO PAGO DE CIRSUS", price: "2.60€"},
            { name: "PAGO DE CIRSUS CRIANZA", price: "17.00 €"},
            { name: "COPA DE VINO RAMÓN BILBAO", price: "2.60 €"},
            { name: "RAMÓN BILBAO RIOJA", price: "17.00 €"},
        ]},
        { type: "Rosados", content: [
            { name: "COPA DE VINO MEDIODÍA", price: "2.20 €"},
            { name: "INURRIETA MEDIODÍA", price: "13.00 €"},
            { name: "COPA DE VINO LAS CAMPANAS", price: "1.60 €"},
            { name: "LAS CAMPANAS", price: "11.00 €"},
            { name: "COPA DE VINO MEDIANI", price: "1.50€"},
            { name: "NUVIANA", price: "10.00 €"}
        ]},
        { type: "Blancos", content: [
            { name: "COPA DE VINO CHARDONNAY", price: "2.50 €"},
            { name: "PAGO DE CIRSUS CHARDONNAY", price: "16.50 €"},
            { name: "COPA DE VINO ORQUIDEAS", price: "2.20 €"},
            { name: "INURRIETA ORQUIDEAS", price: "15.50 €"}
        ]},
        { type: "Verdejos", content: [
            { name: "COPA DE VINO CANTO REAL", price: "2.00 €"},
            { name: "CANTO REAL, RUEDA", price: "12.00 €"}
        ]},
        { type: "Espumosos", content: [
            { name: "COPA DE FRIZZANTE", price: "2.50 €"},
            { name: "FRIZZANTE", price: "15.00 €"}
        ]}
    ]
</script>