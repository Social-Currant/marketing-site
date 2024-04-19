import contentful from "contentful";

/* eslint-disable */
export default defineNuxtPlugin((_) => {
  const config = useRuntimeConfig();

  let contentfulClient

  // https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
  if (process.env.CONTEXT === "production") {
    console.log("let's quickly check the context", process.env.CONTEXT)
    contentfulClient = contentful.createClient({
      space: config.public.ctfSpace,
      accessToken: config.public.ctfAccessToken
    })
  }
  else {
    contentfulClient = contentful.createClient({
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
