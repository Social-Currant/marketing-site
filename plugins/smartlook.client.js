/* eslint-disable */
export default defineNuxtPlugin(() => {
  // Initialize Smartlook function and load recorder script
  useHead({
    script: [
      {
        children: `
          window.smartlook||(function(d) {
            var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
            var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
            c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
          })(document);
          smartlook('init', 'ceca7bf10e74829513fde19c47ecd1528a907819', { region: 'eu' });
        `,
        type: 'text/javascript',
      }
    ],
  });
});

