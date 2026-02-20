<template>
  <div class="name">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
  }>();
</script>

<style scoped>

</style>