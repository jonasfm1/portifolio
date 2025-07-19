<template>
<!-- Modal -->
<div class="modal fade" :id="'Modal'+details.id" tabindex="-1" :aria-labelledby="'ModalLabel'+details.id" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-md">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h5 class="modal-title" id="exampleModalLabel">{{ details.role }}</h5>
      </div>
      <div class="modal-body">
        {{ details.content }}
      </div>
      <div class="row g-0 modal-footer border-0">
        <button type="button" class="btn close" data-bs-dismiss="modal">Close</button>
      </div>
      <div class="d-flex"> {{ details.frontend }}</div>
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
  beforeMount() {

  }
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
  .close {
    color: white;
  }

</style>