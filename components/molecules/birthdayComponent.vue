<template>
  
  <section class="d-flex">
    
    <div class="d-flex align-items-start me-3">
      <Icon name="icon-park-solid:birthday-cake" size="38" color="lightgreen" />
    </div>
  
    <div>
      <h6>Birthday</h6>
      <strong>{{ birthday }}</strong>
    </div>
  
  </section>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props:{
      birthday: String
    },
  })
</script>

<style scoped>

</style>