<template>
  <div class="mx-3">
    <div class="row d-flex">

      <!-- NAME OF CURRENT PAGE -->
      <div class="col-12 col-sm-12 col-md-4 col-xl-4 order-2 order-sm-2 order-md-1 text-white d-flex align-items-end align-items-sm-start mt-sm-3 pe-lg-0">
        <h2>{{currentView}}</h2>
      </div>
  
      <!-- NAVEBAR WITH CHOOSE -->
      <div class="col-12 col-sm-12 col-md-8 col-xl-8 order-1 order-sm-1 order-md-2 mb-4 my-md-2 mb-lg-2 navbar-detail pe-lg-0">

        <nav class="py-2 d-flex justify-content-between">
  
          <div class="navbar-collapse navbar-collapse" id="navbarNav">
  
            <ul class="navbar-nav">

              <div class="row g-0">

                <!-- ABOUT ME -->
                <div class="col-4 col-xl-4 col- pe-0 ps-xl-2">
                  <li class="mx-0 active">
                    <a @click.prevent="currentView = 'About-Me'" class="nav-link px-0 fs-6 fw-bolder nav-menu" href="#">
                      About Me
                    </a>
                  </li>
                </div>

                <!-- RESUME -->
                <div class="col-3 col-xl-3">
                  <li class="me-1">
                    <a @click.prevent="currentView = 'Resume'" class="nav-link fs-6 fw-bolder pe-lg-0 nav-menu" href="#">
                      Resume
                    </a>
                  </li>
                </div>

                <!-- PORTFOLIO -->
                <div class="col-3 col-xl-3">
                  <li class="me-1">
                    <a @click.prevent="currentView = 'Portifolio'" class="nav-link fs-6 fw-bolder nav-menu" href="#">
                      Portifolio
                    </a>
                  </li>
                </div>

                <!-- CONTACT -->
                <div class="col-3 col-xl-2">
                  <li class="me-1">
                    <a @click.prevent="currentView = 'Contact'" class="nav-link fs-6 fw-bolder nav-menu" href="#">
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
  .--bs-navbar-color{
    color:white;
  }
  .nav-menu:hover, .nav-menu:focus{
    color:lightgreen;
  }
  h2{
    color: lightgreen;
  }
</style>