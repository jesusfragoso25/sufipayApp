<script setup>
import headerDesktop from './home/headerDesktop.vue'; 
import desembolsos from './home/desembolsos.vue'
import filters from './home/filters.vue'
import headerTable from './home/headerTable.vue';
import contenidoTable from './home/contenidoTable.vue'
import navegador from './home/navegador.vue'


</script>

<template>
    <headerDesktop/>
        <desembolsos/>
            <filters/>
                <headerTable/>
                    <contenidoTable/> 
                       <navegador/> 
    <router-view />
</template>