<template>
  <div id="app">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
#app {
  font-family: 'Arial';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  text-decoration: none;
}

a {
  text-decoration: none;
  color: black;
}
</style>
