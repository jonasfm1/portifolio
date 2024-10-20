<template>
  <!-- INTRODUCING MYSELF -->
  <div class="m-3">
    <p>
      Graduated in information technology management from Anhembi Morumbi University,
      in the capital city of Sao Paulo, Brazil, and currently completing a new academic training
      in computer sciences at Borough of Manhattan college
      with more than 5 years of professional experience in diverse sectors, I have strong knowledge
      in development and improvement.
    </p>

    <!-- CURRENTS ACTIVITIES -->
    <div class="mx-0 my-3 pb-3 pt-3">
      <h4>What I'm Doing</h4>
      <backendInfo />
    </div>
  </div>

  <!-- CARD TESTEMONIAL COMPONENTE -->
  <TestimonialComponent />

  <!-- CUSTUMERS -->
  <ClientsComponent />

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import backendInfo from '../molecules/backendInfo.vue';
  import TestimonialComponent from './TestimonialComponent.vue';
  import ClientsComponent from './ClientsComponent.vue';

  export default defineComponent({
    components: { 
      backendInfo,
      TestimonialComponent,
      ClientsComponent
    }
  })
  
</script>

<style scoped>

</style>