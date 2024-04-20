/* eslint-disable no-undef */
import { createClient } from "contentful";
import contentful from 'contentful'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient

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