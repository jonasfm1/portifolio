<template>
  <div class="mx-3">
    <div class="row d-flex">

      <!-- NAME OF CURRENT PAGE -->
      <div class="col-12 col-sm-12 col-md-12 col-xl-3 order-2 order-sm-2 order-md-2 text-white d-flex align-items-end align-items-sm-start mt-sm-3">
        <h2>{{currentView}}</h2>
      </div>
  
      <!-- NAVEBAR WITH CHOOSE -->
      <div class="col-12 col-sm-12 col-md-12 col-xl-9 order-1 order-sm-1 order-md-1 mb-4 my-md-2 mb-lg-2 bg-secondary navbar-detail">

        <nav class="navbar navbar-expand-md">
  
          <div class="navbar-collapse navbar-collapse flex-row-reverse" id="navbarNav">
  
            <ul class="navbar-nav">

              <div class="row">

                <div class="col-3 col- pe-0">
                  <li class="mx-0 active">
                    <a @click="currentView = 'About-Me'" class="nav-link text-white fs-6 fw-bolder" href="#">
                      About Me
                    </a>
                  </li>
                </div>

                <div class="col-3 col-">
                  <li class="me-1">
                    <a @click="currentView = 'Resume'" class="nav-link text-white fs-6 fw-bolder" href="#">
                      Resume
                    </a>
                  </li>
                </div>

                <div class="col-3 col-">
                  <li class="me-1">
                    <a @click="currentView = 'Portifolio'" class="nav-link text-white fs-6 fw-bolder" href="#">
                      Portifolio
                    </a>
                  </li>
                </div>

                <div class="col-2 col-">
                  <li class="me-1">
                    <a @click="currentView = 'Contact'" class="nav-link text-white fs-6 fw-bolder" href="#">
                      Contact
                    </a>
                  </li>
                </div>

              </div>

            </ul>
          </div>
        </nav>
      </div>

    </div>
  </div>

  <!-- CURRENT PAGE   -->
  <div class="row g-0">
    <div class="col-12">
      <component :is="currentView"/>
    </div>
  </div>
  
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import AboutMe from '~/components/organims/AboutMeComponent.vue';
  import Resume from '~/components/organims/ResumeComponent.vue';

  export default defineComponent({
    components: {
      AboutMe,
      Resume
    },
    data(){
      return{
        currentView: 'About-Me'
      }
    },
  })
</script>

<style scoped>
  .navbar-detail{
    border-radius: 10px; 
  }
  .nav-item{
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
</style>