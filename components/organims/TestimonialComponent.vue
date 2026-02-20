<template>
  <div class="row g-0 mx-3">
    <h3 class="mt-4">Testimonials</h3>
    <div class="d-flex gap-5 testimonials-frame">
      <testimonialCardComponent 
        v-for="(item, index) in testimonial" 
        :key="index"
        :allTestimonials="item" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import testimonialCardComponent from '../molecules/testimonialCardComponent.vue';
import type { Testimony } from '~/types/index';

interface Props {
  testimonial: Testimony[];
}

defineProps<Props>();
</script>

<style scoped>
  @media only screen and (min-width: 768px){
    .picture{
      height: auto;
      position: relative;
      top: 2rem;
      left: 1.5rem;
    }
  }
  @media only screen and (min-width: 1023px){
    .picture{
      top: 0rem;
      left: 0rem;
    }
  }
  .testimonials-frame{
    overflow-x: auto;
    overflow-y: hidden;
    max-height: fit-content;
  }
  .testimonials-frame::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #00000000;
    cursor: pointer;
  }
  .testimonials-frame::-webkit-scrollbar-thumb {
    background: #90ee90;
    border-radius: 10px;
    cursor: pointer;
  }
</style>