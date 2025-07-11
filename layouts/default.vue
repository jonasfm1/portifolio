<template>
  <main class="row g-0 justify-content-around min-vh-100">

    <!-- SESSAO DE PERFIL -->
    <section class="col-12 col-lg-4 align-self-start mt-0 mt-lg-5 pt-3 px-4 introduction">
      <PerfilCardComponent />
    </section>
    
    <!-- SESSAO DE DADOS DETALHADOS -->
    <section class="col-12 col-lg-6 mt-5 pt-3 pb-4 px-4 profissional-info">
      <slot :introduction="aboutMe"/>
    </section>

  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PerfilCardComponent from '~/components/organims/PerfilCardComponent.vue';

  export default defineComponent({
    components: {
      PerfilCardComponent
    },
    props:{
      aboutMe: String
    }
  })
</script>

<style scoped>
  main {
    background-color: #121212;
    color: #ffffff;
  }
  .introduction{
    border-radius: 15px;
    background-color: #1e1e1e;
    position: sticky;
    top: 2rem;
  }
  .profissional-info{
    border-radius: 15px;
    background-color: #1e1e1e;
  }
</style>