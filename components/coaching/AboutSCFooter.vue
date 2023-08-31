<template>
  <section class="container mx-auto px-6 md:px-8 mt-[83px]">
    <div class="flex flex-wrap xl:flex-nowrap items-center justify-center gap-y-4">
      <div class="SC-text">
        {{ pageData.fields.paragraph }}
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
</script>

<style>
.sc-image{
width: 536px;
height: 301px; 
}
.SC-text{
  color: #000;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal; 
max-width: 494px;
margin-right: 56px;
}
</style>