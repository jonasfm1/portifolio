<template>

  <!-- PRIME ROW -->
  <div class="d-flex row">  

    <!-- FRONTEND CARD -->
    <div class="col-sm-6 mb-5">
      <div class="card frontend-card">
        <div class="card-body d-flex">
          <!-- IMAGE DIV -->
          <div>
            <frontendDeveloper />
          </div>
          <!-- CONTENT DIV -->
          <div class="ps-3">
             <h6 class="fw-bolder">Frontend Developer</h6>
             <p class="content-frontend">
              High-quality development of interactive interfaces at the professional level.
             </p>
          </div>
        </div>
      </div>
    </div>

    <!-- BACKEND CARD -->
    <div class="col-sm-6 mb-5">
      <div class="card backend-card">
        <div class="card-body d-flex">
          <!-- IMAGE DIV -->
          <div>
            <backendDeveloper />
          </div>
          <!-- CONTENT DIV -->
          <div class="ps-3">
            <h6 class="fw-bolder">Backend Developer</h6>
            <p class="content-frontend">
              Development of professional-level business rules with good programming practices
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- SECOND ROW -->
  <div class="d-flex row">  
    <!-- FULLSTACK CARD -->
    <div class="col-sm-6">
      <div class="card frontend-card">
        <div class="card-body d-flex">
          <!-- IMAGE DIV -->
          <div>
            <fullstackDeveloper />
          </div>
          <!-- CONTENT DIV -->
          <div class="ps-3">
             <h6 class="fw-bolder">Web Developer</h6>
             <p class="content-frontend">
              Professional development of interfaces, business rules and relational databases
             </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import frontendDeveloper from '../atoms/frontendDeveloper.vue';
  import backendDeveloper from '../atoms/backendDeveloper.vue';
  import fullstackDeveloper from '../atoms/fullstackDeveloper.vue';


  export default defineComponent({
    components: { 
      frontendDeveloper,
      backendDeveloper,
      fullstackDeveloper
    },
    async beforeCreate() {
      const {title} = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
      console.log(title)
    },

  })

</script>

<style scoped>
  .frontend-card{
    background-color: #222222;
    box-shadow: rgba(46, 240, 78, 0.4) -5px 5px, rgba(46, 240, 78, 0.3) -10px 10px, rgba(49, 240, 46, 0.2) -15px 15px, rgba(46, 240, 53, 0.1) -20px 20px, rgba(46, 240, 62, 0.05) -25px 25px;
  }

  .backend-card{
    background-color: #222222;
    box-shadow: rgba(46, 240, 78, 0.4) -5px 5px, rgba(46, 240, 78, 0.3) -10px 10px, rgba(49, 240, 46, 0.2) -15px 15px, rgba(46, 240, 53, 0.1) -20px 20px, rgba(46, 240, 62, 0.05) -25px 25px;
  }

  .frontendImg, .backendImg{
    height: 50px;
    width: 50px;
  }

  .content-frontend{
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