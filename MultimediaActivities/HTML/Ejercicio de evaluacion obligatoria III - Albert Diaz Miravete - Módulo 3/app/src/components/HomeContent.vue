<template>
  <div class="homecontent">
    <div class="content">
      <h1>{{title}}</h1>
      <p>{{text}}</p>
      <h2>{{subtitle}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    title: String,
    text: String,
    subtitle: String,
  }
}
</script>
