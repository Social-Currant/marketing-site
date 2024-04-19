<template>
  <section class="container mx-auto px-6 md:px-8 mt-[83px]">
    <div class="flex flex-wrap xl:flex-nowrap items-center justify-center gap-y-4 gap-x-12">
      <div class="columns-1">
        <h3 class="mb-3 font-semibold text-xl lg:text-3xl leading-tight">
          {{ pageData.fields.title }}
        </h3>
        <div
          class="SC-text"
          v-html="renderedParagraph"
        />
      </div>
      <img
        class="sc-image"
        :src="pageData.fields.image.fields.file.url"
      >
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntry('3SUIXg3dDUjqlzm7PNdpvV').then((pageData) => {
  pendingPage.value = false
  return pageData;
}).catch(console.error); 

const renderedParagraph = computed(() => {
  return pageData.fields.paragraph.replace(/\n/g, '<br>');
});
</script>

<style>
.sc-image{
width: 536px;
height: 301px; 
}
.SC-text{
color: #30104C;
font-family: Inter;
font-size: 16px;
font-style: normal;
line-height: normal; 
max-width: 494px;
}
</style>