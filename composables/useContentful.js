import { createClient } from 'contentful';

export default function useContentful() {
  const config = useRuntimeConfig();
  const contentfulConfig = {
    space: config.public.ctfSpace,
    accessToken: config.public.ctfAccessToken
  }
  return createClient(contentfulConfig);
}
