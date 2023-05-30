<template>

  <section class="d-flex">

    <div class="d-flex align-items-start me-3">
      <Icon name="line-md:email-twotone" size="38" color="lightgreen" />
    </div>
    
    <div class="pt-1">
      <a href="mailto:jonas.ferutcci@gmail.com" target="_blank">
        <h6>E-mail</h6>
        <strong>jonas.ferutcci@gmail.com</strong>
      </a>
    </div>

  </section>
  
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({

  })
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
}
</style>