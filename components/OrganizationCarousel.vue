<template>
  <section class="container mx-auto px-6 md:px-8 mt-[83px]">
    <hr class="hidden lg:block">
    <div class="flex flex-wrap xl:flex-nowrap items-center justify-center">
      <div
        v-for="(image, index) in heroCarouselImages.images"
        :key="`carouselimage-` + index"
        class="my-4"
      >
        <img
          :src="image"
          class="w-200 mx-4"
        >
      </div>
    </div>
    <hr class="hidden lg:block">
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'imageCarousel',
  'metadata.tags.sys.id[in]': 'homePage'
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);

const heroCarouselImages = {
  images: pageData.fields.images.map((image) => image.fields.file.url),
};
</script>
<style scoped>
hr{
height: 1px;
color: #D5C2E7;
}
</style>

