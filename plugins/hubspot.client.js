/* eslint-disable */
export default defineNuxtPlugin((nuxtApp) => {
    
    function hubspot() {
      window.dataLayer.push(arguments);
    }
    
    window.dataLayer = window.dataLayer || [];
    
    hubspot("js", new Date());
    
    useHead({
      script: [
        {
          src: `//js.hs-scripts.com/45910870.js`,
          async: true,
          defer: true,
          id: "hs-script-loader"
        },
      ],
    });
  });