<template>
  <div class="perfil-card-container">
    <div class="d-flex justify-content-center pt-4">
      <ImagePerfil class="img-perfil" />
    </div>

    <div class="d-flex justify-content-center text-white fs-2 my-3">
      <NuxtLoadingIndicator />
      <NameComponent :name="myInfo.name" />
    </div>

    <div class="row d-flex justify-content-center g-0">
      <div class="col-7 p-2 text-center text-white role">
        <RoleComponent :role="myInfo.role" />
      </div>
    </div>

    <hr class="text-white">

    <div class="d-sm-flex d-md-flex d-lg-block justify-content-between px-md-3">
      <EmailComponent class="text-white my-4" :email="myInfo.email" />
      <PhoneComponent class="text-white my-4 me-4" :phone="myInfo.phone" />
    </div>

    <div class="d-sm-flex d-md-flex d-lg-block justify-content-between px-md-3">
      <BirthdayComponent class="text-white my-4" :birthday="myInfo.birthday" />
      <LocationComponent class="d-flex text-white my-4 me-4" :location="myInfo.location" />
    </div>

    <div>
      <SocialMidiaComponent class="text-white my-4" :socialMedia="myInfo.social_Networks" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import type { PersonalInformation } from '~/types';

// Importação automática de componentes no script setup
import ImagePerfil from '../atoms/imagePerfil.vue';
import NameComponent from '../atoms/nameComponent.vue';
import RoleComponent from '../atoms/roleComponent.vue';
import EmailComponent from '../molecules/emailComponent.vue';
import PhoneComponent from '../molecules/phoneComponent.vue';
import BirthdayComponent from '../molecules/birthdayComponent.vue';
import LocationComponent from '../molecules/locationComponent.vue';
import SocialMidiaComponent from '../molecules/socialMidiaComponent.vue';

// Estado reativo usando o nome de variável original: myInfo
const myInfo = ref<PersonalInformation>({
  name: '',
  role: '',
  email: '',
  phone: '',
  birthday: '',
  location: '',
  social_Networks: []
});

// Substituição do beforeCreate pelo ciclo de vida onBeforeMount
onBeforeMount(async () => {
  try {
    const response: any = await $fetch('https://portifolio-api-asaa.onrender.com/');
    
    // Mantendo a lógica de atribuição baseada na resposta da API
    if (response?.Personal_information) {
      myInfo.value = response.Personal_information;
    }
  } catch (error) {
    console.error('Server Error:', error);
  }
});
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