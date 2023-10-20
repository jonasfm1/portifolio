<template>
  <div class="d-flex justify-content-center pt-4">
    <ImagePerfil class="img-perfil"/>
  </div>
  
  <div class="d-flex justify-content-center text-white fs-2 my-3">
    <NameComponent />
  </div>

  <div class="row d-flex justify-content-center g-0">
    <div class="col-7 p-2 text-center text-white role">
      <RoleComponent />
    </div>
  </div>

  <hr class="text-white ">

  <div class="d-sm-flex d-md-flex d-lg-block justify-content-between px-md-3">
    <EmailComponent class="text-white my-4"/>
    <PhoneComponent class="text-white my-3"/>
  </div>
  
  <div class="d-sm-flex d-md-flex d-lg-block justify-content-between px-md-3">
    <BirthdayComponent class="text-white my-4"/>
    <LocationComponent class="d-flex text-white my-4 me-4"/>
  </div>

  <div>
    <SocialMidiaComponent class="text-white my-4"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ImagePerfil from '../atoms/imagePerfil.vue';
  import NameComponent from '../atoms/nameComponent.vue';
  import RoleComponent from '../atoms/roleComponent.vue';
  import EmailComponent from '../molecules/emailComponent.vue';
  import PhoneComponent from '../molecules/phoneComponent.vue';
  import BirthdayComponent from '../molecules/birthdayComponent.vue';
  import LocationComponent from '../molecules/locationComponent.vue';
  import SocialMidiaComponent from '../molecules/socialMidiaComponent.vue';

  export default defineComponent({
    components: { 
      ImagePerfil, 
      NameComponent, 
      RoleComponent, 
      EmailComponent, 
      PhoneComponent, 
      BirthdayComponent, 
      LocationComponent, 
      SocialMidiaComponent
    }
  })
</script>

<style scoped>
  .img-perfil{
    height: 200px;
    widows: 200px;
    border-radius: 20px;
  }
  .role{
    border-radius: 8px;
    background-color: #2d2d2d;
  }
</style>