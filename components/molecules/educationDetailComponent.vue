<template>
  <!-- EDUCATION -->
  <div>
    <div class="d-flex mx-3 mt-3 mb-0">
      <educationComponent />
    </div>
    
    <li v-for="school in schoolList" >
      <educationDescriptionComponente :schoolDetail="school"/>
    </li>

  </div>

  <!-- EXPERIENCES -->
  <div>
    <div class="d-flex mx-3 mt-5 mb-0">
      <jobComponent/>
    </div>
    
    <!-- LI COM COMPANIES.ACTIVYTIES -->
    <li v-for="experience in experiences" >
      <jobDescriptionComponente :jobDetail="experience"/>
    </li>
  </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import educationComponent from '../atoms/educationComponent.vue';
  import educationDescriptionComponente from '../atoms/educationDescriptionComponente.vue';
  import jobComponent from '../atoms/jobComponent.vue';
  import jobDescriptionComponente from '../atoms/jobDescriptionComponente.vue';


  export default defineComponent({
    components:{
      educationComponent,
      educationDescriptionComponente,
      jobComponent,
      jobDescriptionComponente


    },
    data(){
      return{
        schoolList: Array,
        experiences: Array
      }
    },
    // CHAMADA API AQUI ENVIAR DADOS VIA PROP PARA COMPONENT
    // TITULO - ANO - DESCRICAO PARA educationDescriptionComponente
    beforeMount: async function () {
      try {
        const { Education: General_education }: any = await $fetch('https://portifolio-api-asaa.onrender.com/education');
        this.schoolList = General_education

        const { companies: all_experiences }: any = await $fetch('https://portifolio-api-asaa.onrender.com/companies');
        this.experiences = all_experiences
        
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