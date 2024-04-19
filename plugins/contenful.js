import { createClient } from "contentful";
import contentful from 'contentful'

console.log("this is context", process.env.CONTEXT)
console.log("this is netlify", process.env.NETLIFY)


/* eslint-disable */
export default defineNuxtPlugin((_) => {
  const config = useRuntimeConfig();

  const createClientFunc = process.env.NETLIFY !== 'true' ? createClient : contentful.createClient

  const client = createClientFunc({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfAccessToken
  });
  const previewClient = createClientFunc({
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