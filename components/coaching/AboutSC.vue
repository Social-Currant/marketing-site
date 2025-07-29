<template>
  <section class="container mx-auto px-6 md:px-8 py-8 mt-[83px]">
    <div class="flex flex-wrap xl:flex-nowrap justify-center gap-y-6 gap-x-12">
      <img
        class="sc-image"
        :src="pageData.fields.image.fields.file.url"
      >
      <div class="flex-col">
        <h3 class="mb-3 font-semibold text-xl lg:text-3xl leading-tight text-[#30104C]">
          {{ pageData.fields.title }}
        </h3>
        <div
          class="SC-text"
          v-html="renderedParagraph"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntry('7oCO3dzkaXL7twOi6BKDEe').then((pageData) => {
  pendingPage.value = false
  return pageData;
}).catch(console.error);  

const renderedParagraph = computed(() => {
  return pageData.fields.paragraph.replace(/\n/g, '<br>');
});
</script>

<style scoped>
.sc-image{
width: 536px;
height: 301px;
}
.SC-text{
color:#343538;
font-family: Inter;
font-size: 16px;
font-style: normal;
line-height: normal; 
}
</style>