<template>
  <!-- PRIME ROW -->
  <div class="d-flex row">
    <!-- STACKS CARD IN LOOP-->
    <devRoleComponent v-for="skill in devInformation" :role="skill" />
  </div>


</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import devRoleComponent from './devRoleComponent.vue';

  export default defineComponent({

    components: {
      devRoleComponent,
    },
    props: {
      devInformation: {
        type: Array,
        required: true
      },
      role: Array,
    },

  })
</script>

<style scoped>

</style>