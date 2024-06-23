<template>
  <div class="projects">
    <ProjectsContent title="Mis Proyectos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectsContent from '@/components/ProjectsContent.vue'

export default {
  name: 'ProjectsView',
  components: {
    ProjectsContent
  }
}
</script>
