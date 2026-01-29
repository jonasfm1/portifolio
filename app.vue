<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <Analytics />
  </NuxtLayout>
</template>

<style>
  @font-face {
    font-family: JetBrainsMono;
    src: url('assets/JetBrainsMono-2.304/fonts/ttf/JetBrainsMono-BoldItalic.ttf');
  }
  body{
    background-color: #121212;
    font-family: JetBrainsMono;
  }

</style>