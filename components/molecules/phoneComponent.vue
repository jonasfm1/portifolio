<template>
  
  <section class="d-flex">
    
    <div class="d-flex align-items-center me-3">
      <Icon name="simple-line-icons:screen-smartphone" size="38" class="icon" />
    </div>
    
    <div class="pt-1">
      <h6 class="my-0">Phone</h6>
      <strong>{{ phone }}</strong>
    </div>

  </section>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props:{
      phone: String
    },
  })
</script>

<style scoped>
  .icon {
    color: lightgreen;
  }
</style>