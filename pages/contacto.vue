<template>
    <div class="contactContainer">
        <h1>Contacto</h1>
        <section class="contactDescription">
            <p>Si estás buscando un lugar donde disfrutar de deliciosos platillos, buena música y un ambiente divertido, estás en el lugar indicado.</p>
            <p>En Bar Restaurant Holy nos esforzamos por ofrecer a nuestros clientes una experiencia única y satisfactoria.</p>
            <p>Puedes ubicarnos en <a class="contactLinks" target="_blank" href="https://maps.app.goo.gl/egi5U4xvLD2kTnEf7" title="Dirección | Bar Restaurante Holy">Calle del Monasterio de Urdax, 27</a>, en pleno centro de la ciudad. Si prefieres contactarnos por teléfono, nuestro número es <a class="contactLinks" href="tel:+34948002773" target="_blank" rel="noopener" title="Número de teléfono | Bar restaurante Holy">+34 948 00 27 73</a>.</p>
        </section>
    </div>
    <a class="contactLinks" href="mailto:info@restaurantekabo.com" target="_blank" rel="noopener" title="Email | Bar Restaurante Holy">info@restaurantekabo.com</a>
</template>

<script setup>
    useHead({
        title: 'Contacto y Horario | Bar Restaurante Holy',
        meta: [
            { name: 'description', content: 'En Bar Restaurante Holy, creemos en el poder de los ingredientes frescos y de origen local para crear obras maestras culinarias. Experimente nuestra dedicación a la calidad en cada plato y bebida.'},
            { rel: 'canonical', href: "https://www.holybarrestaurante.com/sobre-nosotros"},
        ]
    })
</script>

<style scoped>
    @import "/assets/css/contact/contact.css";
</style>