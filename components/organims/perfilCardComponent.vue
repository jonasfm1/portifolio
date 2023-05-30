<template>
  <div class="d-flex justify-content-center pt-4">
    <ImagePerfil class="img-perfil"/>
  </div>
  
  <div class="d-flex justify-content-center text-white fs-2 my-3">
    <NameComponent />
  </div>

  <div class="row d-flex justify-content-center g-0">
    <div class=" col-7 text-white p-2 role">
      <RoleComponent />
    </div>
  </div>

  <hr class="text-white ">

  <EmailComponent class="text-white my-4"/>
  <PhoneComponent class="text-white my-3"/>
  <BirthdayComponent class="text-white my-4"/>
  <LocationComponent class="text-white my-4"/>
  <SocialMidiaComponent class="text-white my-4"/>
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
    components: { ImagePerfil, NameComponent, RoleComponent, EmailComponent, PhoneComponent, BirthdayComponent, LocationComponent, SocialMidiaComponent }
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