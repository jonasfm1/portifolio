<template>
  <div class="content-img rounded pt-3 pb-2">
    <img :src="photo" class="rounded" alt="testimonial-photo">
  </div>
</template>

<script setup lang="ts">
// No padrão script setup, usamos defineProps para tipagem clara
defineProps<{
  photo: string;
}>();
</script>

<style scoped>
.content-img img {
  height: 4rem;
  width: 4rem;
}
</style>