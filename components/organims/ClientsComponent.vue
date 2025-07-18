<template>
  <div class="d-flex g-0 mt-3 p-4 logos gap-5">
    <companyComponent v-for="company in companies" :companyName="company.Name" :image="company.Image" />
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import companyComponent from "../atoms/companyComponent.vue";

  export default defineComponent({
    components: {
      companyComponent,
    },
    props:{
      companies: Object
    }
  })
</script>

<style scoped>
  .logos{
    overflow-x: auto;
  }
  .logos{
    overflow-x: auto;
    overflow-y: hidden;
  }
  .logos::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #00000000;
    cursor: pointer;
  }
  .logos::-webkit-scrollbar-thumb {
    background: #90ee90;
    border-radius: 10px;
    cursor: pointer;
  }
</style>