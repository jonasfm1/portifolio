<template>
  <div class="row g-0 mx-3">

    <h3 class=" mt-4">Testimonials</h3>

    <div class="d-flex gap-5 testimonials-frame">

      <!-- 1 testimonial -->
      <div class="col-12 col-md-6 col-lg-12 col-xl-6 mb-4">
        <div class="d-flex ps-0 ps-md-1 ps-lg-0 justify-content-center justify-content-md-start justify-content-lg-center picture">
          <testimonialPhoto />
        </div>

        <testimonialText />
      </div>

      <!-- 2 testimonial -->
      <div class="col-12 col-md-6 col-lg-12 col-xl-6 mb-4">
        <div class="d-flex ps-0 ps-md-1 ps-lg-0 justify-content-center justify-content-md-start justify-content-lg-center picture">
          <testimonialPhoto />
        </div>

        <testimonialText />
      </div>

      <!-- 3 testimonial -->
      <div class="col-12 col-md-6 col-lg-12 col-xl-6 mb-4">
        <div class="d-flex ps-0 ps-md-1 ps-lg-0 justify-content-center justify-content-md-start justify-content-lg-center picture">
          <testimonialPhoto />
        </div>

        <testimonialText />
      </div>
    </div>
  </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import testimonialPhoto from '../atoms/testimonialPhoto.vue'
  import testimonialText from '../molecules/testimonialText.vue'


  export default defineComponent({
    components:{
      testimonialPhoto,
      testimonialText
    }
  })
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