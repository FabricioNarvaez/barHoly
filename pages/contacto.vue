<template>
    <div class="contactContainer">
        <h1>Contacto</h1>
        <section class="contactDescription">
            <p>Si estás buscando un lugar donde disfrutar de deliciosos platillos, buena música y un ambiente divertido, estás en el lugar indicado.</p>
            <!-- <p>En Bar Restaurante Holy nos esforzamos por ofrecer a nuestros clientes una experiencia única y satisfactoria.</p> -->
            <p>Puedes ubicarnos en <a class="contactLinks" target="_blank" href="https://maps.app.goo.gl/egi5U4xvLD2kTnEf7" title="Dirección | Bar Restaurante Holy">Calle del Monasterio de Urdax, 27</a>, en pleno centro de la ciudad. Si prefieres contactarnos por teléfono, nuestro número es <a class="contactLinks" href="tel:+34603678187" target="_blank" rel="noopener" title="Número de teléfono | Bar restaurante Holy">+34 603 678 187</a>.</p>
        </section>
        <div class="timetableContainer">
            <h2 class="subtitle">Nuestro Horario</h2>
            <div class="timetable">
                <div class="left">
                    <p>Lunes</p> 
                    <p>Martes</p> 
                    <p>Miércoles</p> 
                    <p>Jueves</p>
                    <p>Viernes</p>
                    <p>Sábado</p>
                    <p>Domingo</p>
                </div>
                <div class="right">
                    <p>9:00 - 1:00</p>
                    <p class="bold">Cerrado</p>
                    <p>9:00 - 1:00</p>
                    <p>9:00 - 1:00</p>
                    <p>9:00 - 1:00</p>
                    <p>9:00 - 1:00</p>
                    <p>9:00 - 1:00</p>
                </div>
            </div>
        </div>
        <div class="mapAndInfo">
            <a title="Map | Bar Restaurante Holy" target="_blank" href="https://maps.app.goo.gl/egi5U4xvLD2kTnEf7">
                <NuxtImg class="mapImage" src="https://res.cloudinary.com/dzd68sxue/image/upload/v1717770239/Bar%20Holy/Captura_de_pantalla_2024-05-23_194751_mmesr9_mgca4k.webp" />
            </a>
            <div class="barContactTimetable">
                <h3>Dirección</h3>
                <a class="contactLinks" target="_blank" href="https://maps.app.goo.gl/egi5U4xvLD2kTnEf7" title="Dirección | Bar Restaurante Holy">Calle del Monasterio de Urdax, 27</a>

                <h3>Teléfono</h3>
                <a class="contactLinks" href="tel:+34603678187" target="_blank" rel="noopener" title="Número de teléfono | Bar restaurante Holy">+34 603 678 187</a>
                
                <h3>Email</h3>
                <a class="contactLinks" href="mailto:barholypamplona006@gmail.com" target="_blank" rel="noopener" title="Email | Bar Restaurante Holy">barholypamplona006@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: [
            function (to, from) {
                const isMaintenance = process.env.MAINTENANCE_MODE;
    
                if (isMaintenance) {
                    return navigateTo('/maintenance');
                }
        }]
    });

    useHead({
        title: 'Contacto y Horario | Bar Restaurante Holy',
        meta: [
            { name: 'description', content: 'Descubre el ambiente único y la deliciosa cocina del Bar Restaurante Holy. Consulta nuestro horario, ubicación e información de contacto. ¡Te esperamos!'}
        ],
        link: [
            { rel: 'canonical', href: "https://www.barrestauranteholy.es/contacto"}
        ]
    });
</script>

<style scoped>
    @import "/assets/css/contact/contact.css";
</style>