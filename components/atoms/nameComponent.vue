<template>
  <div class="name">
    {{ name }}
  </div>
</template>

<script lang="ts">
  import { defineComponent, defineProps } from 'vue'

  export default defineComponent({
    props:{
      name: String
    },
  })
</script>

<style scoped>

</style>