import { createClient } from "contentful";
import contentful from 'contentful'

/* eslint-disable */
export default defineNuxtPlugin((_) => {
  const config = useRuntimeConfig();

  const createClientFunc = config.public.netlify === 'true' ? contentful.createClient : createClient
  const previewCreateClientFunc = config.public.netlify === 'true' ? contentful.createClient : createClient

  const client = createClientFunc({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfAccessToken
  });
  const previewClient = previewCreateClientFunc({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfPreviewToken,
    host: 'preview.contentful.com',
  });

  if (config.public.netlifyContext === "production") {
    return {
      provide: {
        contentfulClient: client,
        previewClient: previewClient
      },
    };
  }

  return {
    provide: {
      contentfulClient: previewClient,
      previewClient: previewClient
    },
  };

});
