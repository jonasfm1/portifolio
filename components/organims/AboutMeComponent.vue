<template>
  <main>
    <section class="m-3">
      <article>
        <p v-for="(sentence, index) in aboutMe" :key="index">
          {{ sentence.trim() }}.
        </p>
      </article>

      <div class="mx-0 my-3 pb-3 pt-3">
        <h4>What I'm Doing</h4>
        <DeveloperInfoComponent :dev-information="devInformation" />
      </div>
    </section>

    <TestimonialComponent :testimonial="witnessTestimony" />
    
    <ClientsComponent :companies="companies" />
  </main>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, computed } from 'vue';
import { API_ENDPOINTS, fetchData } from '../../services/api';
import type { RoleDetail, Testimony, Company } from '../../types/index';
// Componentes
import DeveloperInfoComponent from '../molecules/DeveloperInfoComponent.vue';
import TestimonialComponent from './TestimonialComponent.vue';
import ClientsComponent from './ClientsComponent.vue';
// Estado Reativo
const aboutMe = ref<string[]>([]);
const myDevInformation = ref<Record<string, RoleDetail>>({});
const witnessTestimony = ref<Testimony[]>([]);
const companies = ref<Company[]>([]); // Tipagem corrigida de any para Company
// Computed para transformar o objeto de skills em um array
const devInformation = computed<RoleDetail[]>(() => {
  return Object.values(myDevInformation.value);
});
// Lógica de Inicialização
onBeforeMount(async () => {
  try {
    const [generalData, companiesData] = await Promise.all([
      fetchData<any>(API_ENDPOINTS.GENERAL),
      fetchData<any>(API_ENDPOINTS.COMPANIES)
    ]);
    // Processamento de Informações Gerais
    if (generalData?.Personal_information) {
      const info = generalData.Personal_information;
      
      // Sanitização básica do About Me (remove strings vazias após o split)
      if (info.About_me) {
        aboutMe.value = info.About_me.split('.').filter((sentence: string) => sentence.trim());
      }
    
      myDevInformation.value = info.Web_Skill || {};
      witnessTestimony.value = info.Testimonial || [];
    }
    
    // Processamento de Empresas
    if (companiesData?.companies) {
      companies.value = companiesData.companies;
    }
  } catch (error) {
    console.error('Erro ao processar dados da API:', error);
  }
});
</script>