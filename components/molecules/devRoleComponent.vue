<template>
  <div class="col-sm-6 mb-5" data-bs-toggle="modal" :data-bs-target="'#Modal'+role.id">

    <!-- CRIAR UM FOR PARA CADA POSICAO DO ARRAY MOSTRAR UM CARD COM SEUS CONTEUDO E MODAL  -->
    <div class="card dev-role">

      <div class="card-body d-flex">
        <!-- IMAGE DIV -->
        <div>
          <img :src="role.imagen" class="dev-role-img">
        </div>

        <!-- CONTENT DIV -->
        <div class="ps-3">
            <h6 class="fw-bolder">{{ role.role }}</h6>
            <p class="content-dev-role">
              {{ role.content }}
            </p>
        </div>

      </div>
    </div>

    <modalStacksComponente :details="role"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import modalStacksComponente from './modalStacksComponente.vue';


export default defineComponent({
  components: {
    modalStacksComponente
  },
  props: {
    role:{
      type: Object,
      required: true
    },
  },
  
})
</script>

<style scoped>
  .dev-role-img{
    height: 50px;
    width: 50px;
  }
  .dev-role{
    background-color: #222222;
    box-shadow: none;
    transition: box-shadow 0.3s ease-in;
    color: white;
  }

  .dev-role:hover, .dev-role:hover, .dev-role:hover{
    animation: move-shadow 1.7s infinite;
  }

  @keyframes move-shadow {
    0% {
      box-shadow: rgba(46, 240, 78, 0.4) -5px 5px;
    }
    20% {
      box-shadow: rgba(46, 240, 78, 0.4) -5px 5px, rgba(46, 240, 78, 0.3) -10px 10px;
    }
    40% {
      box-shadow: rgba(46, 240, 78, 0.4) -5px 5px, rgba(46, 240, 78, 0.3) -10px 10px, rgba(49, 240, 46, 0.2) -15px 15px;
    }
    60% {
      box-shadow: rgba(46, 240, 78, 0.4) -5px 5px, rgba(46, 240, 78, 0.3) -10px 10px, rgba(49, 240, 46, 0.2) -15px 15px, rgba(46, 240, 53, 0.1) -20px 20px;
    }
    80% {
      box-shadow: rgba(46, 240, 78, 0.4) -5px 5px, rgba(46, 240, 78, 0.3) -10px 10px, rgba(49, 240, 46, 0.2) -15px 15px, rgba(46, 240, 53, 0.1) -20px 20px, rgba(46, 240, 62, 0.05) -25px 25px;
    }
    100% {
      box-shadow: none;
    }
  }

  .content-dev-role{
    font-size: 12px;
  }

  .card:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  .card {
    transition: transform 0.5s ease;
  }
</style>