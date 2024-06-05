<template>
    <div class="menuBackground">
        <h1 class="title">{{ title }}</h1>
        <div class="buttonLinks">
            <button v-for="link in props.content" class="button" @click="navigateToSection(link.type)">{{ link.type }}</button>
        </div>
        <div class="menuContainer">
            <section style="margin-top: 40px;" v-for="section in props.content">
                <h2 :id="section.type" class="subtitle">{{ section.type }}</h2>
                <div class="dishSection">
                    <div class="dishContainer" v-for="(dish, index) in section.content">
                        <div class="dish">
                            <p class="dishName">{{ dish.name }}</p>
                            <p class="dishPrice">{{ dish.price }}</p>
                        </div>
                        <div class="dishDescriptionContainer" v-if="dish.description">
                            <p class="dishDescription">{{ dish.description }}</p>
                            <p v-if="dish.descriptionPrice" class="dishDescriptionPrice">{{ dish.descriptionPrice }}</p>
                        </div>
                        <p v-if="dish.description2" class="dishDescription">{{ dish.description2 }}</p>
                        <hr style="width: 100%;">
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        content: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    });

    const navigateToSection = (id) => {
        window.location.hash = `#${id}`;
    };
</script>

<style scoped>
    @import "../../css/carta-y-menu/carta-y-menu.css";
</style>