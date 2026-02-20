<template>

  <section class="d-flex">

    <div class="d-flex align-items-start me-3">
      <Icon name="line-md:email-twotone" size="38" class="icon" />
    </div>
    
    <div class="pt-1">
      <a href="mailto:jonas.ferutcci@gmail.com" target="_blank">
        <h6 class="my-0">E-mail</h6>
        <strong>{{ email }}</strong>
      </a>
    </div>

  </section>
  
</template>

<script setup lang="ts">
    defineProps<{
      email: String,
    }>();
</script>

<style scoped>
  a{
    text-decoration: none;
    color: white;
  }
  .icon {
    color: lightgreen;
  }
</style>