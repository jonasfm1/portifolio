<template>
  <div class="d-flex justify-content-center pt-4">
    <ImagePerfil class="img-perfil"/>
  </div>
  
  <div class="d-flex justify-content-center text-white fs-2 my-3">
    <NuxtLoadingIndicator />
    <NameComponent :name='myInfo.name' />
  </div>

  <div class="row d-flex justify-content-center g-0">
    <div class="col-7 p-2 text-center text-white role">
      <RoleComponent :role='myInfo.role'/>
    </div>
  </div>

  <hr class="text-white ">

  <div class="d-sm-flex d-md-flex d-lg-block justify-content-between px-md-3">
    <EmailComponent class="text-white my-4" :email='myInfo.email'/>
    <PhoneComponent class="text-white my-4 me-4" :phone='myInfo.phone'/>
  </div>
  
  <div class="d-sm-flex d-md-flex d-lg-block justify-content-between px-md-3">
    <BirthdayComponent class="text-white my-4" :birthday='myInfo.birthday'/>
    <LocationComponent class="d-flex text-white my-4 me-4" :location='myInfo.location'/>
  </div>

  <div>
    <SocialMidiaComponent class="text-white my-4" :socialMedia='myInfo.social_Networks'/>
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
    },
    data() {
      return {
        myInfo: {
          name: '',
          role: '',
          email: '',
          phone: '',
          birthday: '',
          location: '',
          social_Networks:[]
        },
      }
    },
    beforeCreate: async function () {
      try {
        const { Personal_information }: any = await $fetch('https://portifolio-api-asaa.onrender.com/');
        this.myInfo = Personal_information

      } catch (error) {
        console.error('Server Error', error);
      }
    },
    
  })
</script>

<style scoped>
  .img-perfil{
    height: 200px;
    width: 200px;
    border-radius: 20px;
  }
  .role{
    border-radius: 8px;
    background-color: #2d2d2d;
  }
</style>