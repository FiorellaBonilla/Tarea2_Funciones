<template>
  <div id="app" class="container">
    <div class="header">
      <h1>Bienvenido a la tarea 2 de sistemas de distribución</h1>
      <p>Selecciona una opción para explorar:</p>
    </div>

    <div class="button-container">
      <router-link class="button" to="/book">📚 Books</router-link> 
      <router-link class="button" to="/author">✍️ Authors</router-link>
      <router-link class="button" to="/publisher">🏢 Publishers</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped src="./css/App.css"></style>
