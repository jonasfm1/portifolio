<template>
  <div class="content-img rounded pt-3 pb-2">
    <img :src="photo" class="rounded">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    photo: String
  }
})
</script>

<style scoped>
  .content-img img{
    height: 4rem;
    width: 4rem;
  }
</style>