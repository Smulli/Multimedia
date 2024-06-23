<template>
  <header>
    <div class="header">

      <router-link to="/"><h1>Welcome to my test page with VueCLI</h1></router-link>

      <nav>
        <router-link to="/home">
          <li>Inicio</li>
        </router-link>
        <router-link to="/about">
          <li>Sobre mí</li>
        </router-link>
        <router-link to="/jobs">
          <li>Proyectos</li>
        </router-link>
      </nav>

      <img src="@/assets/logo.png" alt="vue">
    </div>
  </header>
  
  <router-view/>
</template>

<script>
export default {
  name: 'Header',
}
</script>
