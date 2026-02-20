<template>
  <div class="d-flex row">
    <devRoleComponent 
      v-for="skill in devInformation" 
      :key="skill.id"
      :role="skill" 
    />
  </div>
</template>

<script setup lang="ts">
import devRoleComponent from './devRoleComponent.vue';
// Importamos a interface para garantir que a lista siga o mesmo contrato
import type { RoleDetail } from '~/types';

defineProps<{
  devInformation: RoleDetail[];
}>();
</script>

<style scoped>

</style>