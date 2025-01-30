<template>
  <!-- INTRODUCING MYSELF -->
  <div class="m-3">
    <p>{{ aboutMe }}</p>

    <!-- CURRENTS ACTIVITIES -->
    <div class="mx-0 my-3 pb-3 pt-3">
      <h4>What I'm Doing</h4>
      <DeveloperInfoComponent :devInformation="devInformation" />
    </div>
  </div>

  <!-- CARD TESTEMONIAL COMPONENTE -->
  <TestimonialComponent :testimonial="witnessTestimony"/>

  <!-- CUSTUMERS -->
  <ClientsComponent />

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import DeveloperInfoComponent from '../molecules/DeveloperInfoComponent.vue';
  import TestimonialComponent from './TestimonialComponent.vue';
  import ClientsComponent from './ClientsComponent.vue';

  export default defineComponent({
    components: {
      DeveloperInfoComponent,
      TestimonialComponent,
      ClientsComponent
    },
    data() {
      return {
        aboutMe: String,
        myDevInformation: Array,
        witnessTestimony: Array,
      }
    },
    beforeMount: async function () {
      try {
        const { Personal_information: general_information }: any = await $fetch('http://127.0.0.1:5000');
        this.aboutMe = general_information.About_me
        this.myDevInformation = general_information.Work_on

      } catch (error) {
        console.log('Server Error', error);
      }
    },
    computed:{
      devInformation(){
        return Object.values(this.myDevInformation)
      }
    }
  })
  
</script>

<style scoped>

</style>