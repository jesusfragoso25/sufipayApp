<style>
    @import '../../assets/css/styleHeader.css';
</style>


<template>
    <div class="header">
        <div class="logoCenter"></div>
        <div class="logout">
            <router-link :to="ruta">Cerrar sesion</router-link>
            <div class="imageL"></div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      ruta: '/' 
    };
  }
};
</script>