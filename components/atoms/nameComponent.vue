<template>
  <div class="name">
    {{ name }}
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props:{
      name: String
    },
  })
</script>

<style scoped>

</style>