<template>
  <div class="p-1">
    <h3 class="text-center text-lg-center">{{ testimonialName }}</h3>

    <article class="px-4 py-1">
      {{ testimonial }}
    </article>
  </div>
</template>

<script>
  export default {
    setup() {
      return {
      }
    },
    props:{
      testimonialName: String,
      testimonial: String
    }
  }
</script>

<style lang="scss" scoped>
  article {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
</style>