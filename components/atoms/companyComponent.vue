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
        type: Array,
        required: true
      },
      companyName: String
    }
  })
</script>

<style scoped>

</style>