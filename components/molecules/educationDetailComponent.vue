<template>
  <!-- KNOLEDGE BAR -->
  <div class="bar rounded-3 mt-3 mb-5 mx-3 pb-3">

    <div class="col-12 px-4 py-2">
      <div class="d-flex p-1">
        <Icon name="catppuccin:folder-javascript" size="30" class="icon" />
        <span class="d-flex align-items-center ps-2">JavaScript</span>
      </div>
      <div class="javascript">
        <div class="javascript-value"></div>
      </div>
    </div>
    
    <div class="col-12 px-4 py-2">
      <div class="d-flex p-1">
        <Icon name="catppuccin:python" size="30" class="icon" />
        <span class="d-flex align-items-center ps-2">Python</span>
      </div>
      <div class="python">
        <div class="python-value"></div>
      </div>
    </div>


    <div class="col-12 px-4 py-2">
      <div class="d-flex p-1">
        <Icon name="catppuccin:php" size="30" class="icon" />
        <span class="d-flex align-items-center ps-2">PHP</span>
      </div>
      <div class="php">
        <div class="php-value"></div>
      </div>
    </div>

  </div>
  <!-- EXPERIENCES -->
  <div>
    <div class="d-flex mx-3 mt-3 mb-0">
      <jobComponent/>
    </div>
    
    <!-- LI COM COMPANIES.ACTIVYTIES -->
    <li v-for="experience in experiences" >
      <jobDescriptionComponente :jobDetail="experience"/>
    </li>
  </div>

  <!-- EDUCATION -->
  <div>
    <div class="d-flex mx-3 mt-5 mb-0">
      <educationComponent />
    </div>
    
    <li v-for="school in schoolList" >
      <educationDescriptionComponente :schoolDetail="school"/>
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
    }
  })

</script>

<style scoped>
  li{
    list-style-type: none;
  }
  .bar{
    background-color: #2d2d2d;
  }
  .python {
    background: rgba(255, 255, 255, 0.071);
    justify-content: flex-start;
    border-radius: 100px;
    align-items: center;
    position: relative;
    padding: 0 1.5px;
    display: flex;
    height: 20px;
  }
  .python-value {
    animation: load-python 3s normal forwards;
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: #1000f5;
    /* background: linear-gradient(90deg, rgba(16, 0, 245, 1) 0%, rgba(255, 241, 115, 1) 97%); */
    background: #90ee90;
    height: 17px;
  }

  .javascript {
    background: rgba(255, 255, 255, 0.071);
    justify-content: flex-start;
    border-radius: 100px;
    align-items: center;
    position: relative;
    padding: 0 1.5px;
    display: flex;
    height: 20px;
  }
  .javascript-value {
    animation: load-js 3s normal forwards;
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: #000000;
    /* background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(255, 234, 48, 1) 100%); */
    background: #90ee90;
    height: 17px;
  }
  .php {
    background: rgba(255, 255, 255, 0.071);
    justify-content: flex-start;
    border-radius: 100px;
    align-items: center;
    position: relative;
    padding: 0 1.5px;
    display: flex;
    height: 20px;
  }
  .php-value {
    animation: load-php 3s normal forwards;
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: #000000;
    /* background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(132, 107, 255, 1) 100%); */
    background: #90ee90;
    height: 17px;
  }

  @keyframes load-python {
    0% { width: 0; }
    100% { width: 85%; }
  }

  @keyframes load-js {
    0% { width: 0; }
    100% { width: 100%; }
  }

  @keyframes load-php {
    0% { width: 0; }
    100% { width: 80%; }
  }
</style>