const contentful = require('contentful');

console.log("this is context", process.env.CONTEXT)
console.log("this is netlify", process.env.NETLIFY)


/* eslint-disable */
export default defineNuxtPlugin((_) => {
  const config = useRuntimeConfig();

  const client = contentful.createClient({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfAccessToken
  });
  const previewClient = contentful.createClient({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfPreviewToken,
    host: 'preview.contentful.com',
  });

  if (process.env.CONTEXT === "production") {
    return {
      provide: {
        contentfulClient: client,
        previewClient: previewClient
      },
    }
  }
  else {
    return {
      provide: {
        contentfulClient: previewClient,
        previewClient: previewClient
      },
    }
  }
});