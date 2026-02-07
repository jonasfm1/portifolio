<template>
  <div class="map-container mx-3">
    <!-- GOOGLE MAPS LOCATION AREA -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12076.961909438862!2d-73.9578701!3d40.8226813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6615760cf73%3A0x764bebf6466683e!2sNew%20York%2C%20NY%2010031!5e0!3m2!1sen!2sus!4v1770408875857!5m2!1sen!2sus"  style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script lang="ts">
  export default defineComponent({

  })

</script>

<style scoped>
  .map-container {
    border-radius: 1%;
    position: relative;
    overflow: hidden;
    /* 16:9 aspect ratio */
    padding-top: 56.25%; /* (9 / 16) * 100% */
    /* for a 4:3 aspect ratio, use padding-top: 75%; (3 / 4) * 100% */
}

.map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: grayscale(1) invert(1);
}

</style>