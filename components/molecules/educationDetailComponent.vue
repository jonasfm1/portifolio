<template>
  <div>
    <!-- Book Title -->
    <div class="d-flex mx-3 mt-3 mb-0">
      <educationComponent />
    </div>
    
    <!-- first vertical line -->
    <educationDescriptionComponente />

  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import educationComponent from '../atoms/educationComponent.vue';
  import educationDescriptionComponente from '../atoms/educationDescriptionComponente.vue';
  export default defineComponent({
    components:{
      educationComponent,
      educationDescriptionComponente
    },
    // CHAMADA API AQUI ENVIAR DADOS VIA PROP PARA COMPONENT
    // TITULO - ANO - DESCRICAO PARA educationDescriptionComponente
  })

</script>

<style scoped>

</style>