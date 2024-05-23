<template>
    <headerComponent />
    <div class="errorContainer">
        <p class="erroCode">{{ error.statusCode }}</p>
        <p v-if="error.statusCode === 404">Parece que la página que buscas no existe.</p>
        <p class="errorMessage">{{ error.message }}</p>
        <NuxtLink class="button" title="Bar restaurante Holy" to="/">Volver a Inicio</NuxtLink>
    </div>
</template>

<script setup>
    import headerComponent from './assets/components/headerComponent.vue';
    defineProps(['error']);
</script>

<style>
    .errorContainer {
        height: 92vh;
        background-color: var(--cream);
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .erroCode {
        margin: 0;
        padding-top: 20%;
        font-size: 50px;
        font-weight: bold;
    }

    .errorMessage {
        margin-bottom: 50px;
    }
</style>