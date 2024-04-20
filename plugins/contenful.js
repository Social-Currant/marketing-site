/* eslint-disable no-undef */
import { createClient } from "contentful";
import contentful from 'contentful'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const isNetlify = process.env.NETLIFY === 'true'

  const createClientFunc = isNetlify ? contentful.createClient : createClient

  const client = createClientFunc({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfAccessToken,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});