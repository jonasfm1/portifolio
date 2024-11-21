<template>
  
  <section class="d-flex">
    
    <div class="d-flex align-items-center me-3">
      <Icon name="subway:location-3" size="38" color="lightgreen" />
    </div>
    
    <div class="pt-1">
      <h6>Location</h6>
      <strong>{{ location }}</strong>
    </div>

  </section>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props:{
      location: String
    },
  })
</script>

<style scoped>

</style>