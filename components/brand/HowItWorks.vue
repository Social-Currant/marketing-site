<template>
  <div id="howItWorks" />
  <section class="container mx-auto px-6 md:px-8 lg:mt-[140px]">
    <h3 class="uppercase text-center lg:mb-16 text-primary font-semibold leading-tight text-3xl sm:text-5xl">
      {{ pageData.fields.title }}
    </h3>
    <div class="grid lg:grid-cols-3 gap-x-16">
      <div>
        <img
          :src="pageData.fields.topImage.fields.file.url"
          class="block mt-[32px] mx-auto mb-6 w-[162px] lg:w-[240px]"
        >
        <h4 class="text-3xl text-center font-bold text-primary text-[24px] lg:text-left lg:text-[28px]">
          {{ pageData.fields.steps[0] }}
        </h4>
        <h5 class="font-semibold mt-[20px] text-center text-[16px] lg:text-left lg:text-[20px]">
          {{ pageData.fields.subtitle[0] }}
        </h5>
        <p class="mt-4 text-center lg:text-left">
          {{ pageData.fields.paragraphs[0] }}
        </p>
      </div>
      <div>
        <img
          :src="pageData.fields.middleImage.fields.file.url"
          class="block mt-[32px] mx-auto w-[130px] lg:w-[180px] mb-6"
        >
        <h4 class="text-3xl text-center font-bold text-primary text-[24px] lg:text-left lg:text-[28px]">
          {{ pageData.fields.steps[1] }}
        </h4>
        <h5 class="font-semibold mt-[20px] text-center text-[16px] lg:text-left lg:text-[20px]">
          {{ pageData.fields.subtitle[1] }}
        </h5>
        <p class="mt-4 text-center lg:text-left">
          {{ pageData.fields.paragraphs[1] }}
        </p>
      </div>
      <div>
        <img
          :src="pageData.fields.bottomImage.fields.file.url"
          class="block mt-[32px] mx-auto w-[145px] lg:w-[200px] mb-6"
        >
        <h4 class="text-3xl text-center font-bold text-primary text-[24px] lg:text-left lg:text-[28px]">
          {{ pageData.fields.steps[2] }}
        </h4>
        <h5 class="font-semibold mt-[20px] text-center text-[16px] lg:text-left lg:text-[20px]">
          {{ pageData.fields.subtitle[2] }}
        </h5>

        <p class="mt-4 text-center lg:text-left">
          {{ pageData.fields.paragraphs[2] }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'howItWorks',
  'metadata.tags.sys.id[in]': 'homePage'
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);


</script>

