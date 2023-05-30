<template>
  <main class="row justify-content-around min-vh-100">

    <!-- SESSAO DE PERFIL -->
    <section class="align-self-start col-2 mt-5 pt-3 px-4 introduction">
      <PerfilCardComponent />
    </section>
    
    <!-- SESSAO DE DADOS DETALHADOS -->
    <section class="col-9 my-5 profissional-info">
      <slot />
    </section>

  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PerfilCardComponent from '~/components/organims/perfilCardComponent.vue';

  export default defineComponent({
    components: { PerfilCardComponent }
})
</script>

<style scoped>
  main {
    background-color: #121212;
  }
  .introduction{
    border-radius: 15px;
    background-color: #1e1e1e;
  }
  .profissional-info{
    border-radius: 15px;
    background-color: #1e1e1e;
  }
</style>