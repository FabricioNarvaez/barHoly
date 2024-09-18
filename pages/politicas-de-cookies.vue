<template>
    <div class="legalTermsContainer">
        <h1>Políticas de cookies</h1>

        <h2>1. Objeto</h2>
        <p>La presente Política de Cookies (en adelante, la Política) regula el uso de cookies en el sitio web <strong>https://barrestauranteholy.es</strong> (en adelante, el Sitio Web)</p>
    
        <h2>2. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se generan cuando un usuario visita un sitio web y que se almacenan en el dispositivo del usuario. Las cookies permiten al sitio web recordar información sobre la visita del usuario, como su idioma preferido, las páginas que ha visitado o la información que ha introducido en formularios.</p>

        <h2>3. ¿Qué tipo de cookies utiliza el Sitio Web?</h2>
        <p>El Sitio Web únicamente utiliza cookies de análisis web de Google Analytics, un servicio de análisis web proporcionado por Google, Inc. ("Google"). Google Analytics utiliza cookies para rastrear el comportamiento de los usuarios en el Sitio Web y para generar informes sobre la actividad del Sitio Web. Estos informes se utilizan para mejorar el Sitio Web y los servicios del Propietario.</p>

        <h2>4. ¿Es necesario aceptar las cookies para utilizar el Sitio Web?</h2>
        <p>No es necesario aceptar las cookies para utilizar el Sitio Web. Sin embargo, si el usuario bloquea las cookies, es posible que no pueda utilizar todas las funciones del Sitio Web.</p>

        <h2>5. ¿Cómo puedo configurar las cookies?</h2>
        <p>El usuario puede configurar su navegador web para bloquear o permitir el uso de cookies. La configuración de las cookies suele encontrarse en el menú de "Opciones" o "Preferencias" del navegador web.</p>
        <p>A continuación, se indican los enlaces a las instrucciones para configurar las cookies en los navegadores web más populares:</p>
        <ul>
            <li>Google Chrome: <a target="_blank" href="https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop">https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop</a></li>
            <li>Mozilla Firefox: <a target="_blank" href="https://support.mozilla.org/es/kb/Borrar%20cookies">https://support.mozilla.org/es/kb/Borrar%20cookies</a></li>
            <li>Safari: <a target="_blank" href="https://support.apple.com/es-es/105082">https://support.apple.com/es-es/105082</a></li>
            <li>Microsoft Edge: <a target="_blank" href="https://support.microsoft.com/en-au/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d">https://support.microsoft.com/en-au/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d</a></li>
        </ul>

        <h2>6. ¿Cómo puedo obtener más información sobre las cookies?</h2>
        <p>Para obtener más información sobre las cookies, el usuario puede consultar los siguientes recursos:</p>
        <ul>
            <li>Agencia Española de Protección de Datos (AEPD): <a target="_blank" href="https://www.aepd.es/en/cookies-policy">https://www.aepd.es/en/cookies-policy</a></li>
            <li>Google Analytics: <a target="_blank" href="https://support.google.com/analytics/answer/11397207?hl=en">https://support.google.com/analytics/answer/11397207?hl=en</a></li>
        </ul>

        <h2>7. Aceptación de la Política de Cookies</h2>
        <p>El usuario declara haber leído, entendido y aceptado todas las condiciones de la presente Política de Cookies. El usuario manifiesta su conformidad con el uso de cookies por parte del Propietario, de conformidad con lo establecido en la presente Política.</p>

    </div>
</template>

<script setup>
    useHead({
        title: 'Políticas de cookies | Bar Restaurante Holy',
        meta: [
            { name: 'robots', content: 'noindex, nofollow'}
        ],
        link: [
            { rel: 'canonical', href: "https://www.barrestauranteholy.es/politicas-de-cookies"}
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

<style scoped>
    @import "../assets/css/legalTerms/legalTerms.css";
</style>

