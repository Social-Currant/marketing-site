<template>
  <section class=" w-full px-6 md:px-8 mt-[83px] background py-8">
    <div class="container flex flex-wrap flex-col xl:flex-nowrap items-center justify-center m-auto">
      <h2 class="font-semibold text-3xl lg:text-5xl leading-tight mb-6 uppercase text-[#30104C]">
        {{ pageData.fields.header }}
      </h2>
      <h3 class="text-center font-semibold text-2xl leading-tight mb-11 lg:mb-24 text-[#30104C]">
        {{ pageData.fields.subheader }}
      </h3>
      <div class="flex">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="expect in expectations"
            :key="expect.image"
            class="flex flex-col items-center text-center font-['Inter']  leading-[29.405px]"
          >
            <img
              :src="expect.image"
              height="108"
              width="108"
            >
            <div class="mt-2 text-center">
              {{ expect.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntry('1nxWALB8KM7mqGnpea3Zvm').then((pageData) => {
  pendingPage.value = false
  return pageData;
}).catch(console.error); 

const expectations= [
        {
          image: pageData.fields.icons[0].fields.file.url,
          description: pageData.fields.text[0],
        },
        {
          image: pageData.fields.icons[1].fields.file.url,
          description: pageData.fields.text[1],
        },
        {
          image: pageData.fields.icons[2].fields.file.url,
          description: pageData.fields.text[2],
        },
        {
          image: pageData.fields.icons[3].fields.file.url,
          description: pageData.fields.text[3],
        },
      ]
</script>

<style>
.background{
    background: #F4EFF9;
}
</style>