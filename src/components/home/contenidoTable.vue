<style>
@import url('../../assets/css/contenidoTable.css');
</style>


<script>
import{ obtenerDatos } from '../../assets/js/contentTable.js';

export default {
  data() {
    return {
      datos: [] // Define la propiedad datos como un arreglo vacío por defecto
    };
  },
  async mounted() {
    try {
      const datos = await obtenerDatos();
      this.datos = datos
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }
};
</script>


<template>
<div class="contendTab">
<table class="table table-striped">
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dato in datos" :key="dato.numero_desembolso">
          <td class="datoH">{{ dato.fechaHora }}</td>
          <td class="numDem">{{ dato.numero_desembolso }}</td>
          <td class="tipoDoc">{{ dato.tipo_documento }}</td>
          <td class="numDoc">{{ dato.numero_documento }}</td>
          <td class="monto">{{ dato.monto }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>