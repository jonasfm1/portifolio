<template>
<!-- Modal -->
<div class="modal fade" :id="'Modal'+details.id" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content p-4">
      <div class="modal-header border-0">
        <h5 class="modal-title" id="exampleModalLabel">{{ details.role }}</h5>
      </div>

      <div class="modal-body">
        {{ details.content }}
      </div>

      <div class="d-flex d-flex justify-content-between p-3">
        <div class="justify-content-center stacks" v-for="stack in details.frontend">

          <div>
            <a :href="stack.source" target="_blank">
              <img class="stack-logo" :src="stack.img">
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


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  props: {
    details: {
      type: Object,
      required: true
    },
  },
})

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