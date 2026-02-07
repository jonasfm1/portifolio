<template>
  <div class="mb-3">
    <!-- MAP GOOGLE -->
    <mapComponente />
  </div>
  <!-- FORM CONTACT -->
  <form class="row mx-3 g-3 needs-validation">
    <div class="mt-5 d-flex justify-content-between">

      <div class="col-md-5">
        <div class="form-group">
          <label for="floatingInputGrid">Full Name</label>
          <input type="name" class="form-control p-3" id="floatingInputGrid" placeholder="FullName">

        </div>
      </div>

      <div class="col-md-5">
        <div class="form-group">
          <label for="floatingInputGrid">Email address</label>
          <input type="email" class="form-control p-3" id="floatingInputGrid" placeholder="name@example.com">
        </div>
      </div>
    </div>

    <div class="form-group mt-5">
      <label for="floatingTextarea2Disabled">Your Message</label>
      <textarea class="form-control p-3" placeholder="Leave your message here" id="floatingTextarea2Disabled" style="height: 100px"></textarea>
    </div>

    <div class="mt-4 d-grid d-flex justify-content-end">
      <div class="col-md-4 col-lg-6 d-flex justify-content-end">
        <button disabled>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
              </svg>
            </div>
          </div>
          <span>Send Message</span>
        </button>
      </div>
    </div>

  </form>
</template>

<script lang="ts">
  import mapComponente from '../atoms/mapComponente.vue';

  export default defineComponent({
    components:{
      mapComponente,
    }
  })

</script>

<style scoped>
  .form-control {
    box-shadow: none;
    border-color: #656565;
    background-color: #1e1e1e;
    color: white;
  }
  ::placeholder{
    color: white;
  }

  button {
    font-family: inherit;
    font-size: 16px;
    background: lightgreen;
    color: black;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(8.5em);
  }

  button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }

</style>