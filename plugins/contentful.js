import { createClient } from "contentful";
import contentful from 'contentful'

/* eslint-disable */
export default defineNuxtPlugin((_) => {
  const config = useRuntimeConfig();

  const createClientFunc = process.env.NETLIFY !== 'true' ? createClient : contentful.createClient
  const previewCreateClientFunc = process.env.NETLIFY !== 'true' ? createClient : contentful.createClient

  const client = createClientFunc({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfAccessToken
  });
  const previewClient = previewCreateClientFunc({
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