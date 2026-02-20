<template>
  <div class="d-flex g-0 mt-3 p-4 logos gap-5">
    <CompanyComponent
      v-for="(company, index) in companies"
      :key="index"
      :company-name="company.Name"
      :image="company.Image"
    />
  </div>
</template>

<script setup lang="ts">
import type { Company } from '../../types/index'; // Importando o tipo global
import CompanyComponent from "../atoms/companyComponent.vue";

interface Props {
  companies: Company[];
}

defineProps<Props>();
</script>

<style scoped>
  .logos{
    overflow-x: auto;
  }
  .logos{
    overflow-x: auto;
    overflow-y: hidden;
  }
  .logos::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #00000000;
    cursor: pointer;
  }
  .logos::-webkit-scrollbar-thumb {
    background: #90ee90;
    border-radius: 10px;
    cursor: pointer;
  }
</style>