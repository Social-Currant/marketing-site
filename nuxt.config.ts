// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config();

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
      title: "Social Currant",
      meta: [
        { name: "description", content: "Social Currant" }
     ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  runtimeConfig: {
    public: {
      ctfSpace: process.env.CONTENTFUL_SPACE_ID,
      ctfAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    }
  }
});
