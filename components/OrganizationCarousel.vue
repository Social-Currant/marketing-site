<template>
  <hr class="hidden lg:block mt-[96px]">
  <section class="container mt-[96px] lg:mt-0 mx-auto px-6 md:px-8">
    <div class="flex-col xl:flex-nowrap items-center justify-center">
      <h3 class="font-poppins text-center font-bold text-4xl leading-tight text-[#30104C]">Recognized By</h3>
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
    </div>
  </section>
  <hr class="hidden lg:block">
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

