import * as contentful from 'contentful'; // Import the entire module as 'contentful'

export default function useContentful() {
  /* eslint-disable */
  const config = useRuntimeConfig();
  const contentfulConfig = {
    space: config.public.ctfSpace,
    accessToken: config.public.ctfAccessToken
  }
  return contentful.createClient(contentfulConfig); // Access the 'createClient' method from 'contentful'
}
