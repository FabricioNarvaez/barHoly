<template>
  <div class="aboutUsContainer">
    <h1>Sobre Nosotros</h1>
    <section class="aboutUsDescription">
      <p>En <strong>Bar Restaurant Holy</strong>  nos esforzamos por ofrecer a nuestros clientes una <strong>experiencia única </strong> y <strong>llena de sabor</strong>. Nuestro menú está compuesto por una deliciosa fusión de sabores, con platos que van desde lo tradicional hasta lo más innovador.</p>
      <p>Además, nuestro ambiente es <strong>divertido</strong> y <strong>acogedor</strong>, perfecto para disfrutar de una cena con amigos o para una noche de celebración.</p>
      <p>Ven a conocernos y descubre por qué somos el lugar ideal para disfrutar de buena comida, buenos tragos y buenos momentos.</p>
      <p class="aboutUsSeeYouSoon">¡Te esperamos en Bar Restaurant Holy!</p>
    </section>
  </div>
</template>

<script setup>
    useHead({
      title: 'Sobre Nosotros | Bar Restaurante Holy',
      meta: [
        { name: 'description', content: 'En Bar Restaurante Holy, creemos en el poder de los ingredientes frescos y de origen local para crear obras maestras culinarias. Experimente nuestra dedicación a la calidad en cada plato y bebida.'},
        { rel: 'canonical', href: "https://www.holybarrestaurante.com/sobre-nosotros"},
      ]
    })
</script>

<style scoped>
  @import "../assets/css/about-us/about-us.css"
</style>