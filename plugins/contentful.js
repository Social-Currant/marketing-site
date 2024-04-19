import { createClient } from "contentful"
import contentful from "contentful"

console.log("this is netlify", process.env.NETLIFY)
console.log("this is context", process.env.CONTEXT)
/* eslint-disable */
export default defineNuxtPlugin((_) => {
  let contentfulClient
  const config = useRuntimeConfig();
  
  const createClientFunc = process.env.NETLIFY === 'true' ? contentful.createClient : createClient
  
  // https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
  if (process.env.CONTEXT === "production") {
    contentfulClient = createClientFunc({
      space: config.public.ctfSpace,
      accessToken: config.public.ctfAccessToken
    })
  }
  else {
    contentfulClient = createClientFunc({
      space: config.public.ctfSpace,
      accessToken: config.public.ctfPreviewToken,
      host: 'preview.contentful.com',
    })
  }

  return {
    provide: {
      contentfulClient,
    },
  }
});
