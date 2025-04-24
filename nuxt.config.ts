// https://nuxt.com/docs/api/configuration/nuxt-config
require("dotenv").config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    '@vueuse/motion/nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
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
      gtagId: process.env.GOOGLE_ANALYTICS_TAG,
      motion: {
        directives: {
          'fade-in-up': {
            initial: { opacity: 0, y: 20 },
            // use `visible` (or `visible-once`) to trigger on scroll into view
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          },
          'fade-in-panel': {
            initial: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
          },
          'fade-in-image': {
            initial: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
          },
          accordion: {
            initial: { height: 0, opacity: 0 },
            visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
            leave:   { height: 0, opacity: 0, transition: { duration: 0.2 } },
          },
          'fade-in-step': {
            initial: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          },
        },
      },
    },
  },
});
