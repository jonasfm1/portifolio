<template>
  <div>

    <div class="d-flex mx-3 mt-3 mb-0">
      <EducationComponent />
      <h1 class="my-2">Education</h1>
    </div>
    
    <div class="vertical ms-5"></div>
    <div class="row">
      <div class="dot ms-5"></div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EducationComponent from '~/components/atoms/educationComponent.vue';

export default defineComponent({
  components:{
    EducationComponent,
  }
})
</script>

<style scoped>
  .vertical{
    border-left: 2px solid #2d2d2d;
    height: 50px;
  }
  .dot{
    background: #90ee90;
    border-radius: 50%;
    height: 14px;
    width: 20px;
  }
</style>