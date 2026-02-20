<template>
  
  <section class="d-flex">
    
    <div class="d-flex align-items-center me-3">
      <Icon name="subway:location-3" size="38" class="icon" />
    </div>
    
    <div class="pt-1">
      <h6 class="my-0">Location</h6>
      <strong>{{ location }}</strong>
    </div>

  </section>

</template>

<script setup lang="ts">

    defineProps<{
      location: String,
    }>();
</script>

<style scoped>
  .icon {
    color: lightgreen;
  }
</style>