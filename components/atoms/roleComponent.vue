<template>
  <div>{{ role }}</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props:{
      role: String
    },
  })
</script>

<style scoped>

</style>