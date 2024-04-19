import contentful, { createClient } from "contentful";

// https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
const NETLIFY_CONTEXT = ["production", "deploy-preview", "branch-deploy"]

/* eslint-disable */
export default defineNuxtPlugin((_) => {
  const config = useRuntimeConfig();

  const createClientFunc = NETLIFY_CONTEXT.includes(process.env.CONTEXT) ? contentful.createClient : createClient

  let contentfulClient

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
