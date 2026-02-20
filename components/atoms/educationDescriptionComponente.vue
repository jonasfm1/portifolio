<template>
  <div>
    <!-- RECEBERAR TODAS INFORMACOES DA API -->
    <!-- vertical line -->
    <div class="vertical ms-5"></div>

    <!-- Dot & Title (title from API) -->
    <div class="row title">
      <div class="dot col-2 ms-5 mt-1"></div>
      <div class="col-9 col-sm-10 justify-content-center">
        <!-- Title FROM API -->
        <h4 class="m-0">{{ schoolDetail.School }}</h4>
      </div>
    </div>

    <!-- block with description -->
    <div class="d-flex description">
      <!-- vertical line -->
      <div class="vertical ms-5"></div>
      
      <!-- block with content -->
      <div class="ms-4 pt-3">
        <!-- Year From API -->
        <span> {{ schoolDetail.Year }} </span>
        <!-- FROM API -->
        <article> {{ schoolDetail.description }} </article>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Definimos a estrutura do objeto para o TypeScript te ajudar com o IntelliSense
interface SchoolDetail {
  School: string;
  Year: string;
  description: string;
}

// Usamos a macro defineProps para capturar a prop 'schoolDetail'
defineProps<{
  schoolDetail: SchoolDetail;
}>();
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