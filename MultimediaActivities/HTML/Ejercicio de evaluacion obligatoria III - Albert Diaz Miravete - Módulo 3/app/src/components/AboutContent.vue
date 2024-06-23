<template>
  <div class="aboutcontent">
    <div class="content">
      <h1>{{title}}</h1>
      <figure @mouseover="show = true" @mouseout="show = false">
        <img :src="require(`@/assets/${fileName}`)" alt="Albert" width="450" height="400"/>
      </figure>
      <p v-if="show === true">{{text}}</p>
    </div>
  </div>
  <section class="social">
    <h2>{{subtitle}}</h2>
    <section>
      <a href="https://www.linkedin.com/in/albert-diaz-miravete-351180216" target="_blank"><img :src="require(`@/assets/${linkEdin}`)" width="30" height="30"/></a>
      <a href="https://twitter.com/TheSecretTK" target="_blank"><img :src="require(`@/assets/${twitter}`)" width="32" height="30"/></a>
      <a href="https://www.youtube.com/channel/UC6cQ4oqYn1jLRgst6q50mgA/featured" target="_blank"><img :src="require(`@/assets/${youtube}`)" width="32" height="30"/></a> 
    </section>
  </section>
</template>

<script>
export default {
  name: 'AboutContent',
  props: {
    title: String,
    fileName: String,
    text: String,
    subtitle: String,
    linkEdin: String,
    twitter: String,
    youtube: String
  },

  data(){
    return{show: false}
  }
}
</script>
