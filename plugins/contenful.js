import { createClient } from "contentful";
import contentful from 'contentful'

/* eslint-disable */
export default defineNuxtPlugin((_) => {
  const config = useRuntimeConfig();

  let createClientFunc, previewCreateClientFunc

  if (config.public.netlify === 'true' || process.env.NETLIFY === 'true') {
    createClientFunc = contentful.createClient
    previewCreateClientFunc = contentful.createClient
  } else {
    createClientFunc = createClient
    previewCreateClientFunc = createClient
  }

  const client = createClientFunc({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfAccessToken
  });
  const previewClient = previewCreateClientFunc({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfPreviewToken,
    host: 'preview.contentful.com',
  });

  return {
    provide: {
      contentfulClient: client,
      previewClient: previewClient
    },
  };
});
