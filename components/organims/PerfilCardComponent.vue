<template>
  <div class="d-flex justify-content-center pt-4">
    <ImagePerfil class="img-perfil"/>
  </div>
  
  <div class="d-flex justify-content-center text-white fs-2 my-3">
    <NuxtLoadingIndicator />
    <NameComponent :name='myName' />
  </div>

  <div class="row d-flex justify-content-center g-0">
    <div class="col-7 p-2 text-center text-white role">
      <RoleComponent :role='myRole'/>
    </div>
  </div>

  <hr class="text-white ">

  <div class="d-sm-flex d-md-flex d-lg-block justify-content-between px-md-3">
    <EmailComponent class="text-white my-4" :email='myEmail'/>
    <PhoneComponent class="text-white my-3" :phone='myPhone'/>
  </div>
  
  <div class="d-sm-flex d-md-flex d-lg-block justify-content-between px-md-3">
    <BirthdayComponent class="text-white my-4" :birthday='myBirthday'/>
    <LocationComponent class="d-flex text-white my-4 me-4" :location='myLocation'/>
  </div>

  <div>
    <SocialMidiaComponent class="text-white my-4" :socialMedia='mySocialMedia'/>
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
        myName: String,
        myRole: String,
        myEmail: String,
        myPhone: String,
        myBirthday: String,
        myLocation: String,
        mySocialMedia: Array
      }
    },
    beforeCreate: async function () {
      try {
        const { Personal_information }: any = await $fetch('http://127.0.0.1:5000');
        this.myName = Personal_information.name;
        this.myRole = Personal_information.role;
        this.myEmail = Personal_information.email;
        this.myPhone = Personal_information.phone;
        this.myBirthday = Personal_information.birthday;
        this.myLocation = Personal_information.location;
        this.mySocialMedia = Personal_information.social_Networks;

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