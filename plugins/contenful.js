import { createClient } from "contentful";
import contentful from 'contentful'

/* eslint-disable */
export default defineNuxtPlugin((_) => {
  const config = useRuntimeConfig();

  const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient
  const previewCreateClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient

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
