<template>
  <div>
    <HeaderNav :display-banner="false" />
    <section class="view-container mx-auto">
      <div
        class=" mb-3 md:mb-8 md:mt-6 cursor-pointer flex back"
        @click="router.go(-1)"
      >
        <img src="~/assets/images/icon-arrow-left.svg">
        <p>
          Back
        </p>
      </div>
      <div class="mb-3 md:mb-8">
        <div
          v-for="(tag, index) in blogEntry?.fields.tags"
          :key="index"
          class="blog-tag inline-block"
        >
          {{ tag }}
        </div>
      </div>

      <h1 class="blog-title text-2xl mb-3 md:mb-9 md:text-4xl">
        {{ blogEntry?.fields.title }}
      </h1>
      <!-- date -->
      <div class="blog-date mb-3">
        {{ formatDate(blogEntry?.fields.date) }}
      </div>

      <!-- author and social media  -->
      <div class="flex flex-col md:flex-row md:items-center mb-4 md:space-y-0 md:space-x-8 items-start justify-between">
        <div class="flex items-center mb-7 md:mb-0">
          <img
            :src="blogEntry?.fields.authorImage.fields.file.url"
            height="100"
            class="author-image"
          >
          <div class="author ml-4 ">
            <p>{{ blogEntry?.fields.author[0] }}</p>
            <p
              v-if="blogEntry?.fields.jobTitle"
              class="position"
            >
              {{ blogEntry?.fields.jobTitle }}
            </p>
          </div>
        </div>
        <SocialMediaIcons
          class="mb-4 md:mb-0"
          :title="blogEntry?.fields.title"
        />
      </div>

      <!-- image -->
      <img
        :src="blogEntry?.fields.image.fields.file.url"
        height="100"
        class="blog-image-cover"
      >
      <!-- body -->
      <RichText :content="blogEntry?.fields.content" />


      <!-- related blogEntries -->
      <h1 class="related-text my-14 ml-6">
        Related Articles
      </h1>
      <BlogCardList
        class="md:ml-6"
        :posts="posts.items"
      />
    </section>
    <Footer />
  </div>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const blogEntry = ref();
const route = useRoute();
const router = useRouter();
const {id} = route.params;

async function fetchBlogEntry(id) {
  const result = await $contentfulClient.getEntry(id)
  blogEntry.value = result
}

await fetchBlogEntry(id)
const posts = shallowRef([]);
const postTitle = blogEntry.value.fields?.title



async function fetchBlogEntries() {
  posts.value = await $contentfulClient.getEntries({
    order: '-sys.createdAt',
    content_type: 'blogPosts',
    'sys.id[nin]': id,
    limit: 3,
  }).then((postsData) => {
    return postsData;
  }).catch(console.error);
}
fetchBlogEntries();

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
}

useSeoMeta({
  title: blogEntry.value.fields?.title,
  description: blogEntry.value.fields?.excerpt,
  image: `https:` + blogEntry.value.fields.image.fields.file.url,

  // open graph / facebook
  ogTitle: blogEntry.value.fields?.title,
  ogDescription: blogEntry.value.fields?.excerpt,
  ogType: 'website',
  ogUrl: `https://socialcurrant.co${route.path}`,
  ogImage: `https:` + blogEntry.value.fields.image.fields.file.url,
  ogType: 'article',

  // twitter
  twitterCard: 'summary_large_image',
  twitterTitle: blogEntry.value.fields?.title,
  twitterDescription: blogEntry.value.fields?.excerpt,
  twitterImage: `https:` + blogEntry.value.fields?.image.fields.file.url,
})

</script>

<style lang="scss">
.back {
  color: #30104c;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 147.023%; /* 23.524px */
}
.blog-tag {
  border-radius: 4px;
  background: #ede8f2;
  padding: 5px;
  align-items: center;
  margin: 4px;
  color: #343538;

  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.author {
  color: #343538;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 147.023%; /* 23.524px */
}
.author-image{
  border-radius: 50%;
  height: 38px;
  width: 38px;
  object-fit: cover;
  @media (min-width: 768px) {
          height: 71px;
          width: 71px;
        }
}
.position {
  font-weight: 500;
  opacity: 0.6;
}

.blog-image-cover {
  border-radius: 8px;
  max-height: 564px;
  width: 100%;
  object-fit: cover;
}

.blog-title{
  color: #30104C;
font-family: Poppins;
font-style: normal;
font-weight: 600;
line-height: 147.023%; /* 58.809px */
}

.back {
  &:hover{
    filter: brightness(0) saturate(100%) invert(21%) sepia(17%) saturate(1688%) hue-rotate(229deg) brightness(100%) contrast(93%);
  }
}
.view-container{
max-width: 1180px;
padding: 24px;
}
.related-text{
  color: #30104C;
font-family: Poppins;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 147.023%; /* 47.047px */
}


</style>
