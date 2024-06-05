<template>
    <carteComponent :content="menu" :title="'Nuestra carta'" />
</template>

<script setup>
    import carteComponent from './assets/components/carta-y-menu/carteComponent.vue';

    const menu = [
        { type: "Ensaladas", content: [
            { name: "Rusa", price: "10.00€", description: "Patata, atún, zanahoria, guisantes, huevo, gamba y mahonesa"},
            { name: "MIXTA", price: "9.00 €", description: "Mézclum de lechuga, cebolla, atún, tomate, aceitunas y espárragos"},
            { name: "MIXTA ESPECIAL", price: "14.00 €", description: "Mézclum de lechuga , aguacate, ventresca, tomate feo ,cebolla , aceitunas verdes"},
            { name: "SALPICÓN", price: "12.00 €", description: "Con mézclum de lechuga, pimiento rojo, pimiento verde, cebolla, langostino y pulpo"},
            { name: "ENSALADA TEMPLADA DE CHIPIRONES", price: "12.00 €", description: "Con mézclum de lechuga, pimientos rojos asados, Cherry confitados y cebolla roja"},
            { name: "TOMATE HOLY", price: "10.00€", description: "Tomate feo, ventresca, cebolla y aceitunas negras de Aragón"},
            { name: "ENSALADA TEMPLADA", price: "12.00 €", description: "Con mézclum de lechuga, gulas, langostinos y piquillos"}
        ]},
        { type: "Picoteo", content: [
            { name: "PULPO A LA GALLEGA", price: "17.00 €", description:""},
            { name: "REVUELTO DE HONGOS BELTZA", price: "13.00 €", description:""},
            { name: "SALPICÓN DE MARISCOS", price: "15.00 €", description:"1/2 Salpicón de Mariscos", descriptionPrice: "7.50 €"},
            { name: "RABAS DE CHIPIRÓN", price: "11.90 €", description:"1/2 Rabas de Chipirón", descriptionPrice: "6.00 €"},
            { name: "PATATAS BRAVAS", price: "7.00 €", description:"1/2 Patatas Bravas", descriptionPrice: "4.00 €"},
            { name: "TEMPURA DE VERDURAS", price: "7.00 €", description:"1/2 Tempura de Verduras", descriptionPrice: "3.90 €"},
            { name: "PIMIENTOS DEL PADRÓN", price: "7.00 €", description:""},
            { name: "ANCHOAS REBOZADAS", price: "10.00 €", description:""},
            { name: "ANCHOAS AL AJILLO", price: "10.00 €", description:""},
            { name: "TEMPURA DE CIGALAS", price: "15.00 €", description:""},
            { name: "JAMÓN IBÉRICO", price: "18.00 €", description:"Con Pan Tostado y Tomate Natural"},
            { name: "1/2 JAMON IBERICO", price: "9.00 €", description:"Con Pan Tostado y Tomate Natural"},
            { name: "TORTILLA DE BACALAO", price: "10.00 €", description:""},
        ]},
        { type: "Especialidades", content: [
            { name: "RISOTTO", price: "11.00 €", description:"Risotto Con queso parmesano, espárragos trigueros y hongos beltza"},
            { name: "MENESTRA DE LA HUERTA", price: "10.00 €", description:"Acelga, boraja, guisantes, zanahorias, alcachofas, ajo y jamón"},
            { name: "ENTRECOT ", price: "14.00 €", description:"Entrecot con Patatas y Pimientos"},
            { name: "SEPIA", price: "14.00 €", description:"Sepia con Ensalada Grande y Pimientos el Padrón"},
        ]},
        { type: "Huevos Rotos", content: [
            { name: "CHISTORRA, BACON, PATATAS, HUEVO FRITO Y TOMATE FRITO", price: "12.00 €", description:""},
            { name: "JAMÓN IBÉRICO, PATATAS, HUEVO FRITO Y TOMATE FRITO", price: "12.00 €", description:""},
        ]},
        { type: "Platos Combinados", content: [
            { name: "PECHUGA DE POLLO", price: "12.00 €", description:"Pechuga de pollo con patatas o ensalada y huevo frito"},
            { name: "LOMO DE CERDO", price: "12.00 €", description:"Lomo con patatas o ensalada, piquillos y huevo frito"},
            { name: "SECRETO DE CERDO", price: "15.00€", description:"Secreto de cerdo con patatas o ensalada y piquillo"},
            { name: "FILETE DE TERNERA", price: "12.00 €", description:"Ternera con patatas o ensalada con huevo frito y piquillos"},
            { name: "ESCALOPE DE TERNERA", price: "12.00 €", description:"Escalope con patatas, piquillos y salsa roquefort"},
            { name: "COSTILLA DE CERDO", price: "15.00 €", description:"Costilla con patatas, piquillos y salsa barbacoa"},
        ]},
        { type: "Bocatas", content: [
            { name: "LOMO CON QUESO Y PIQUILLOS", price: "7.00 €", description:""},
            { name: "BOCADILLO DE AJOARRIERO", price: "8.00 €", description:""},
            { name: "POLLO CON BACON , QUESO Y CEBOLLA CARAMELIZADA", price: "8.90 €", description:""},
            { name: "BOCADILLO DE JAMÓN IBÉRICO, PIMIENTO VERDE QUESO IDIAZABAL Y TOMACA", price: "10.90 €", description:""},
            { name: "BOCADILLO DE TORTILLA DE JAMON, CHISTORRA, ATUN O GAMBAS", price: "7.50 €", description:""},
            { name: "BOCADILLO DE TORTILLA DE PATATAS", price: "6.00 €", description:""},
            { name: "VEGETALES", price: "7.90 €", description:"Pollo, lechuga, tomate y cebolla", description2: "Atún, lechuga, tomate, y mahonesa"},
            { name: "BACON CON QUESO Y PIMIENTO", price: "6.80 €", description:""},
        ]},
        { type: "Cazuelas", content: [
            { name: "CALLOS", price: "12.00 €", description:"Callos con morros y chorizo bañados en una salsa de tomate"},
            { name: "AJOARRIERO", price: "12.00 €", description:"Guiso de Bacalao, condimentado con ajo y bañado en salsa con gambas"},
            { name: "CARRILLERAS IBÉRICAS", price: "15.00 €", description:"Corte de carne de cerdo Ibérico bañado con con salsa de Vino"},
            { name: "RABO DE TORO", price: "18.00 €", description:""},
        ]},
        { type: "Hamburguesas de Ternera", content: [
            { name: "HAMBURGUESA HOLY CON MEZCLUM DE LECHUGA, BACON, QUESO, CEBOLLA NATURAL, HUEVO FRITO Y SALSA DE MOSTAZA", price: "12.00 €", description:""},
            { name: "HAMBURGUES DE QUESO DE CABRA, MEZCLUM DE LECHUGA, TOMATE Y CEBOLLA CARAMELIZADA", price: "10.00 €", description:""},
            { name: "HAMBURGUESA VIUDA CON QUESO", price: "7.00 €", description:""},
        ]},
        { type: "Postres", content: [
            { name: "HELADOS", price: "4.50 €", description:"Vainilla, chocolate, fresa, cheesecake y limón"},
            { name: "PANTXINETA", price: "5.00 €", description:"Elaborado con masa de hojaldre con almendras y relleno de crema pastelera"},
            { name: "TARTA DE QUESO", price: "5.40 €", description:"Tarta de queso bañada en sirope de fresa"},
            { name: "SORBETE DE MOJITO", price: "4.50 €", description:"Helado de limón, menta y Alcohol"},
            { name: "TIRAMISU", price: "4.90 €", description:"Tiramisú con mascarpone y nata"},
            { name: "COULAN", price: "4.90 €", description:"Bomba de chocolate con Helado de Vainilla"},
            { name: "TORRIJAS", price: "5.50 €", description:"Pan de brioche con crema de arroz de leche y helado de vainilla"},
            { name: "CAFE IRLANDES", price: "6.00 €", description:""},
            { name: "CAFE VALENCIANO", price: "6.00 €", description:""},
            { name: "CAFE ESCOCES", price: "6.00 €", description:""},
            { name: "CUAJADA ", price: "4.00 €", description:""},
        ]},
    ]
</script>