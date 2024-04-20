/* eslint-disable no-undef */
import { createClient } from "contentful";
import contentful from 'contentful'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  console.log("this is CONTEXT", process.env.CONTEXT)
  console.log("this is NETLIFY", process.env.NETLIFY)

  const isNetlify = process.env.NETLIFY === 'true'

  const createClientFunc = isNetlify === 'development' ? contentful.createClient : createClient

  const client = createClientFunc({
    space: config.public.ctfSpace,
    accessToken: config.public.ctfPreviewToken,
  });

  return {
    provide: {
      contentfulClient: client,
    },
  };
});