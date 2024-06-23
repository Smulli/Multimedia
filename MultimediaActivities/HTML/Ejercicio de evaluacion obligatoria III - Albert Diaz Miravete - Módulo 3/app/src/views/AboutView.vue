<template>
  <div class="about">
    <AboutContent title="Sobre mí"
                  fileName="Albert.jpg"
                  text="Mi nombre es Albert de nacionalidad española, soy un apasionado del mundo de los videojuegos y de las nuevas tecnologías, dedico mi tiempo libre a aprender programación y modelado 3D generalizado, actualmente estudio un grado de FrontEnd en Multimedia Tarragona, por que mi objetivo es algún día poder trabajar como programador FrontEnd."
                  subtitle="Mis redes"
                  linkEdin="linkedin.png"
                  twitter="twitter.png"
                  youtube="youtube.png"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutContent from '@/components/AboutContent.vue'

export default {
  name: 'AboutView',
  components: {
    AboutContent
  }
}
</script>