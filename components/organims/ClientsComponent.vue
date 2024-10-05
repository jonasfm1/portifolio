<template>
  <div class="row g-0np mt-3 p-4">
    <companyComponent />
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import companyComponent from "../atoms/companyComponent.vue";

  export default defineComponent({
    components: {
      companyComponent,
    }
  })
</script>

<style scoped>

</style>