<template>
<div class="modal fade" :id="description.Company" tabindex="-1" role="dialog" :aria-labelledby="description.Company" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h5 class="modal-title" id="exampleModalLongTitle">{{ description.Name }}</h5>
      </div>
      <div class="modal-body">
        {{ description.Testimonial }}
      </div>
      <div class="modal-footer border-0 d-flex justify-content-between">
        <a :href="description.Site" class="btn btn-default" target="_blank">Company Site</a>
        <button type="button" class="btn close" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
// Definimos a interface baseada nos campos que o seu template utiliza
interface TestimonialDescription {
  Company: string;
  Name: string;
  Testimonial: string;
  Site: string;
}

// Definindo a prop seguindo o padrão do projeto
defineProps<{
  description: TestimonialDescription;
}>();
</script>

<style scoped>
  .modal{
    cursor: auto;
  }
  .modal-header {
    background-color: #222222;
    color: white;
  }
  .modal-content{
    background-color: #222222;
    color: lightgreen;
  }
  .close {
    color: white;
  }
  .modal-dialog-scrollable, .modal-body::-webkit-scrollbar {
    background-color: #00000000;
  }
  .modal-body::-webkit-scrollbar-thumb {
    background: #90ee90;
    border-radius: 10px;
    border: none;
  }
  .btn-default{
    color: white;
  }
</style>