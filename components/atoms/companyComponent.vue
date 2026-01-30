<template>
  <!-- CUSTUMER NAME -->
  <div class="col-12 col-md-6 col-lg-12 col-xl-6 gap-5 mt-auto mb-auto">

    <div class="d-flex justify-content-center justify-content-md-start justify-content-lg-center py-3">
      <img :src="image" alt="company-logo">
    </div>
    <h2 class="text-center">{{ companyName }}</h2>
  </div>

</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  export default defineComponent({
    props:{
      image:{
        type: String,
        required: true
      },
      companyName: String
    }
  })
</script>

<style scoped>
  img{
    max-height: 70px;
    max-width: 300px;
    filter: grayscale(100%);
    transition: filter 0.5s ease;
    cursor: pointer;
  }
  img:hover{
    filter: grayscale(0%);
  }
</style>