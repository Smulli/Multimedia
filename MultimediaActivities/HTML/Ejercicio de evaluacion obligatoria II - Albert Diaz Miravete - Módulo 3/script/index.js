const app = Vue.createApp({
});

app.component("person", {
    template:`
    <div class="inputData">
        <form>
            <label for="name">Nombre:</label>
            <input v-model.lazy="name" placeholder="indica tu nombre"></input>

            <label for="middleName">Segundo Apellido:</label>
            <input v-model.lazy="middleName" placeholder="indica tu primer apellido"></input>

            <label for="lastName">Tercer Apellido:</label>
            <input v-model.lazy="lastName" placeholder="indica tu segundo apellido"></input>
            
            <label for="age">Edad:</label>
            <input v-model.number.lazy="age" type="number" step="1" placeholder="indica tu edad"></input>

            <label for="sex">Sexo: </label>
            <select v-model="sex">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Undefinied">Prefiero no decirlo</option>
            </select> 
        </form>
        <br>
        <form>
            <label for="email">Dirección de correo electrónico:</label>
            <input v-model.lazy="email" placeholder="mail@mail.com"></input>

            <label for="message">Mensaje:</label>
            <textarea v-model.lazy="msg" placeholder="Introduce un mensaje y pulsa enter."></textarea>
        </form>
    </div>

    <div class="data">
        <h1>Nombre y apellidos</h1>
        <hr>
        <div class="name">
            <h2>{{name}}</h2>
            <h2>{{middleName}}</h2>
            <h2>{{lastName}}</h2>
        </div>

        <br>

        <h1>Edad</h1>
        <hr>
        <div class="age">
            <h2>{{age}}</h2>
        </div>

        <br>

        <h1>Sexo</h1>
        <hr>
        <div class="sex">
            <h2>{{sex}}</h2>
        </div>

        <br>

        <h1>Contacto y mensaje</h1>
        <hr>
        <div class="contact">
            <h2>{{email}}</h2>
            <p>{{msg}}</p>
        </div>
    </div>
    `,

    data(){
        return{
            name: "",
            middleName: "",
            lastName: "",
            age: "",
            sex: "",
            email: "",
            msg: "",
        }
    },
})