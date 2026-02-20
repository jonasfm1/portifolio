// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  modules: ["usebootstrap"],
  compatibilityDate: "2025-03-23",
  runtimeConfig: {
    // Chaves aqui só ficam disponíveis no servidor (Server-side)
    formspreeId: process.env.FORMSPREE_ID,
    public: {
      // Chaves aqui ficam visíveis no navegador (Client-side)
    }
  }
})