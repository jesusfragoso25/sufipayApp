<style>
@import '../assets/login.css';
</style>

<script>
import {authUser} from '../assets/js/auth.js';
import Grafismos from './grafismos.vue';

export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        sendForm() {
            const autenticacion = authUser(this.username, this.password);
            if (autenticacion) {
                this.$router.push({ name: "home" });
            }
            else {
                return autenticacion;
            }
        }
    },
    components: { Grafismos }
}
</script>

<template>
    <Grafismos />
    <div class="container">
        <section>
            <div class="logoHeader"></div>
                <h3>Sufipay</h3>
                 <p>Administrador comercial</p>
        </section>
        <section>
            <form id="formUser" @submit.prevent="sendForm"> 
                <div class="inputUser">
                        <div class="input-container">
                            <input type="text" id="username" v-model="username" placeholder="Nombre" required> 
                        </div>
                        <div class="input-container">
                            <input type="password" id="password" v-model="password" placeholder="Contraseña" required>
                        </div>
                </div>
                <input type="submit" value="INGRESAR">
            </form>
        </section>
        <a href="">No recuerdo mi contraseña</a>
    </div>
    <router-view />
</template>
