const app = Vue.createApp({
    data(){
        return{
            title: "Hola",
            subtitle: "Esta es una prueba con el framework de Vue.js",
            text: "Te quiero saludar, dime tu nombre para empezar.",
            name: "María",
            image: "./media/albert-sRGB-300pp-8bit-web-recortada.jpg",
            hidden: true,
        }
    },
})

const mountedApp = app.mount("#content");