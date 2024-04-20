/* eslint-disable no-undef */
import { createClient } from "contentful";
import contentful from 'contentful'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  console.log("this is CONTEXT", process.env.CONTEXT)
  console.log("this is NETLIFY", process.env.NETLIFY)
  console.log("this is CONTEXT CONFIG", config.public.netlifyContext)
  console.log("this is NETLIFY CONFIG", config.public.netlify)

  const isNetlify = process.env.NETLIFY === 'true' || config.public.netlify === 'true'

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