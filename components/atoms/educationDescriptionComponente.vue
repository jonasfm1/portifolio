<template>
  <div>
    <!-- vertical line -->
    <div class="vertical ms-5"></div>

    <!-- Dot & Title (title from API) -->
    <div class="row title">
      <div class="dot col-2 ms-5 mt-1"></div>
      <div class="col-10 justify-content-center">
        <!-- Title FROM API -->
        <h4 class="m-0">Rocketseat Aprendizado contínuo em programação</h4>
      </div>
    </div>

    <!-- block with description -->
    <div class="d-flex description">
      <!-- vertical line -->
      <div class="vertical ms-5"></div>
      
      <!-- block with content -->
      <div class="ms-4 pt-3">
        <!-- Year From API -->
        <span>2025 - actual</span> 
        <!-- FROM API -->
        <article>
          A coding school para aprender e aprimorar fundamentos da programação web
          HTML, CSS, Git, banco de dados, back-end e front-end.
          se especializa React, React Native, Node.js Python e muito mais com ferramentas e
          tecnologias alinhadas com o mercado.
        </article>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>
  .vertical{
    border-left: 2px solid #2d2d2d;
    min-height: 50px;
  }
  .dot{
    background: #90ee90;
    border-radius: 50%;
    height: 14px;
    width: 20px;
  }
  span{
    color: #90ee90;
    font-size: 1.25rem;
  }
</style>