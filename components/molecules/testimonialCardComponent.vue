<template>

    <div v-for="personalTestimony in allTestimonials" class="card-testimonial col-12 col-md-6 col-lg-12 col-xl-6 mb-4" data-bs-toggle="modal" :data-bs-target="'#'+personalTestimony.Company">
      <div class="d-flex ps-0 ps-md-1 ps-lg-0 justify-content-center justify-content-md-start justify-content-lg-center picture">
        <!-- ENVIAR FOTO RECEBIDA DA PROPS DO COMPONENTE PAI -->
        <testimonialPhoto :photo="personalTestimony.Imagen"/>
      </div>

      <!-- ENVIAR NOME E TEXTO RECEBIDO DO COMPONENTE API -->
      <testimonialText :testimonialName="personalTestimony.Name" :testimonial="personalTestimony.Testimonial"/>
      <modalTestimonialComponent :description="personalTestimony"/>
    </div>


</template>

<script lang="ts">
  import { defineComponent, toRef } from 'vue'

  import testimonialPhoto from '../atoms/testimonialPhoto.vue'
  import testimonialText from '../molecules/testimonialText.vue'
  import modalTestimonialComponent from './modalTestimonialComponent.vue'
  import TestimonialPhoto from '../atoms/testimonialPhoto.vue'

  export default defineComponent({
    components:{
      testimonialPhoto,
      testimonialText,
      modalTestimonialComponent,
    },
    props:{
      allTestimonials:{
        type: Object
      },
      Image: String,
    }
  })
</script>

<style scoped>
  .card-testimonial{
    border-radius: 5px;
    background-color: #222222;
    cursor: pointer;
  }

</style>