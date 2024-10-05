<template>
  <div class="mx-3 profissional-info">

    <h3 class=" mt-5">Testimonials</h3>

    <div class="d-flex gap-5 testimonials-frame">

      <!-- 1 testimonial -->
      <div class="col-6 mb-4">
        <div class="picture">
          <testimonialPhoto />
        </div>

        <testimonialText />
      </div>

      <!-- 2 testimonial -->
      <div class="col-6 mb-4">
        <div class="picture">
          <testimonialPhoto />
        </div>

        <div class="article">
          <testimonialText />
        </div>
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
  .picture{
    height: auto;
    position: relative;
    top: 2rem;
    left: 1.5rem;
  }

  .testimonials-frame{
    overflow-x: auto;
    overflow-y: hidden;
  }

  .testimonials-frame::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #00000000;
  }

  .testimonials-frame::-webkit-scrollbar-thumb {
    background: #90ee90;
    border-radius: 10px;
  }
</style>