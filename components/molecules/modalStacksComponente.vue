<template>
  <div class="modal fade" :id="details.id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content p-4">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="exampleModalLabel">{{ details.role }}</h5>
        </div>

        <div class="modal-body">
          <p v-for="content in roleContent" :key="content">
            {{ content }}
          </p>
          <span>Learn about:</span>
        </div>

        <div class="row d-flex justify-content-between p-3">
          <div v-for="stack in details.dev_role" :key="stack.name" class="col-4 col-md-3 mb-3 justify-content-center stacks">
            <div>
              <a :href="stack.source" target="_blank">
                <img class="stack-logo" :src="stack.img" :alt="stack.name">
              </a>
              <div class="cursor-pointer text-center">{{ stack.name }}</div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center g-0 modal-footer border-0">
          <div class="col-6 d-flex justify-content-center">
            <button type="button" data-bs-dismiss="modal">
              <Icon name="line-md:close-circle-filled" size="38" class="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// Importação correta do arquivo central de tipos
import type { RoleDetail } from '~/types'; 

// 1. Definição das Props usando a interface original
const props = defineProps<{
  details: RoleDetail;
}>();

// 2. Lógica para transformar o texto em array (mantendo sua lógica original)
const roleContent = computed(() => {
  return props.details.content.split(".");
});
</script>


<style scoped>
  .modal-header {
    background-color: #222222;
    color: white;

  }
  .modal-content{
    background-color: #222222;
    color: lightgreen;

  }
  .stacks{
    transition: all 0.5s ease;
    filter: grayscale(1);
  }
  .stacks:hover{
    filter: grayscale(0);
  }
  .stack-logo{
    width: 50px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .icon {
    color: lightgreen;
  }
  .cursor-pointer{
    cursor: pointer;
  }
  button{
    border:none;
    background-color: transparent;
  }

</style>