<template>
  <div class="bar rounded-3 mt-3 mb-5 mx-3 pb-3">
    <!-- LOOP COM SKILL -->
    <div v-for="skill in skills" :key="skill.name" class="col-12 px-4 py-2">
      <div class="d-flex p-1">
        <Icon :name="skill.icon" size="30" class="icon" />
        <span class="d-flex align-items-center ps-2">{{ skill.name }}</span>
      </div>
      <div :class="skill.class">
        <div :class="`${skill.class}-value`"></div>
      </div>
    </div>

  </div>

  <div>
    <div class="d-flex mx-3 mt-3 mb-0">
      <jobComponent />
    </div>
    
    <ul class="list-unstyled">
      <li v-for="experience in experiences" :key="experience.Name">
        <jobDescriptionComponente :jobDetail="experience" />
      </li>
    </ul>
  </div>

  <div>
    <div class="d-flex mx-3 mt-5 mb-0">
      <educationComponent />
    </div>
    
    <ul class="list-unstyled">
      <li v-for="school in schoolList" :key="school.School">
        <educationDescriptionComponente :schoolDetail="school" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import educationComponent from '../atoms/educationComponent.vue';
import educationDescriptionComponente from '../atoms/educationDescriptionComponente.vue';
import jobComponent from '../atoms/jobComponent.vue';
import jobDescriptionComponente from '../atoms/jobDescriptionComponente.vue';

// Interfaces para tipagem (conforme os contratos que criamos anteriormente)
interface School {
  School: string;
  Year: string;
  description: string;
}

interface Experience {
  Name: string;
  Year: string;
  Activities: string;
}

// Estado reativo
const schoolList = ref<School[]>([]);
const experiences = ref<Experience[]>([]);

// Dados estáticos das barras de progresso para limpar o template
const skills = [
  { name: 'JavaScript', icon: 'catppuccin:folder-javascript', class: 'javascript' },
  { name: 'Python', icon: 'catppuccin:python', class: 'python' },
  { name: 'PHP', icon: 'catppuccin:php', class: 'php' }
];

onBeforeMount(async () => {
  try {
    const [eduData, expData]: any = await Promise.all([
      $fetch('https://portifolio-api-asaa.onrender.com/education'),
      $fetch('https://portifolio-api-asaa.onrender.com/companies')
    ]);

    schoolList.value = eduData.Education;
    experiences.value = expData.companies;
  } catch (error) {
    console.error('Server error', error);
  }
});
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