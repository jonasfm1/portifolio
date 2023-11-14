<template>
  <div class="m-3">
    <p>
      Graduated in information technology management from Anhembi Morumbi University,
      in the capital city of Sao Paulo, Brazil, and currently completing a new academic training
      in computer sciences at Borough of Manhattan college
      with more than 5 years of professional experience in diverse sectors, I have strong knowledge
      in development and improvement.
    </p>

    <div class="m-3 pb-3 pt-3">
      <h4>What I'm Doing</h4>
      <backendInfo />
    </div>
  </div>

  <div class="m-3 testimonials">
    <!-- CARD TESTEMONIAL -->
    <div></div>
  </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue' 
  import backendInfo from '../molecules/backendInfo.vue';

  export default defineComponent({
    components: { 
      backendInfo
    }
  })
  
</script>

<style scoped>

</style>