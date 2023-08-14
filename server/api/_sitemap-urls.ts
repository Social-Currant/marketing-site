/*
 * This cachedEventHandler generates the dynamic sitemap blog page links and last modified dates
 *
 */
import contentful from 'contentful'

export default cachedEventHandler(
  async () => {
    const config = useRuntimeConfig();

    const createClientFunc = contentful.createClient;

    const client = createClientFunc({
      space: config.public.ctfSpace,
      accessToken: config.public.ctfAccessToken,
    });
    const posts = await client.getEntries({
      order: "-fields.date",
      content_type: "blogPosts",
    }).then((postsData: any) => {
      return postsData;
    }).catch(console.error);

    return posts.items.map((p: any) => {
      return {
        loc: `/blog/${p.fields.slug}`,
        lastmod: `${p.sys.updatedAt}`,
      };
    });
  },
  {
    name: "sitemap-dynamic-url",
    maxAge: 60 * 10, // cache URLs for 10 minutes
  },
);
