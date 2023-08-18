// https://nuxt.com/docs/api/configuration/nuxt-config
require("dotenv").config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  site: {
    url: "https://socialcurrant.co",
  },
  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml
    "/success/**": { index: false },
  },
  runtimeConfig: {
    public: {
      ctfSpace: process.env.CONTENTFUL_SPACE_ID,
      ctfAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      ctfPreviewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    },
  },
});
