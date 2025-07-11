<template>
  
  <section class="d-flex justify-content-center">
    
    <div class="mx-2 mt-2">
      <a :href="socialMedia[0]" target="_blank">
        <Icon name="bi:linkedin" size="30" class="icon" />
      </a>
    </div>
    
    <div class="mx-2 mt-2">
      <a :href="socialMedia[1]" target="_blank">
        <Icon name="brandico:github-text" size="30" class="icon" />
      </a>
    </div>

  </section>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props:{
      socialMedia: {
        type: Array,
        required: true
      }
    },
  })

</script>

<style scoped>
  .icon{
    color: lightgreen;
  }
</style>