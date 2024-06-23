<template>
  <div class="home">
    <HomeContent title="Bienvenido a mi página" 
                  text="Esta es mi primera prueba con Vue CLI, esta es la página principal. Arriba encontrará el menú de opciones, si desea conocer más cosas sobre mi pulse en el botón about del menú de navegación, si desea saber en que proyectos estoy trabajando pulse en el botón projects."
                  subtitle="Disfrute navegando por mi página y no dude en usar el inspector."
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue'

export default {
  name: 'HomeView',
  components: {
    HomeContent
  }
}
</script>
