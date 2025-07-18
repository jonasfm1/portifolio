<template>
  <div>
    <!-- Book Title -->
    <div class="d-flex mx-3 mt-3 mb-0">
      <educationComponent />
    </div>
    
    <!-- first vertical line -->
     <!-- REPETIR ESTE COMPONENTE COM LOOP 
      E COM API -->
    <li v-for="school in schoolList" >
      <educationDescriptionComponente :schoolDetail="school"/>
    </li>

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
    data(){
      return{
        schoolList: Array
      }
    },
    // CHAMADA API AQUI ENVIAR DADOS VIA PROP PARA COMPONENT
    // TITULO - ANO - DESCRICAO PARA educationDescriptionComponente
    beforeMount: async function () {
      try {
        const { Education: General_education }: any = await $fetch('https://portifolio-api-asaa.onrender.com/education');
        this.schoolList = General_education
        
      } catch (error) {
        console.log('Server error', error)
      }
    },
    computed:{
      parseInArray(){

      }
    }
  })

</script>

<style scoped>
  li{
    list-style-type: none;
  }
</style>