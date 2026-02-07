<template>
  <div>
    <educationDetailComponent/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import educationDetailComponent from '../molecules/educationDetailComponent.vue';
  import educationComponent from '../atoms/educationComponent.vue';

  export default defineComponent({
    components:{
      educationDetailComponent,
      educationComponent,
    }
  })
</script>

<style scoped>

</style>