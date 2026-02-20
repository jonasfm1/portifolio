<template>
  <div class="card-testimonial col-12 col-md-6 col-lg-12 col-xl-6 mb-4" data-bs-toggle="modal" :data-bs-target="'#'+allTestimonials.Company">

    <div class="d-flex ps-0 ps-md-1 ps-lg-0 justify-content-center justify-content-md-start justify-content-lg-center picture">
      <!-- ENVIAR FOTO RECEBIDA DA PROPS DO COMPONENTE PAI -->
      <testimonialPhoto :photo="allTestimonials.Imagen"/>
    </div>

    <testimonialText :testimonialName="allTestimonials.Name" :testimonial="allTestimonials.Testimonial"/>
    <modalTestimonialComponent :description="allTestimonials" />

  </div>
</template>

<script setup lang="ts">
import testimonialPhoto from '../atoms/testimonialPhoto.vue';
import testimonialText from '../molecules/testimonialText.vue';
import modalTestimonialComponent from '../molecules/modalTestimonialComponent.vue';
import type { Testimony } from '~/types/index';


// Mantendo o nome das propriedades exatamente como solicitado
defineProps<{
  allTestimonials: Testimony;
  image?: string; 
}>();
</script>

<style scoped>
  .card-testimonial{
    border-radius: 5px;
    background-color: #222222;
    cursor: pointer;
  }

</style>