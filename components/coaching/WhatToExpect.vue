<template>
  <section class=" w-full px-6 md:px-8 mt-[83px] background py-8 text-[#30104C]">
    <div class="container flex flex-wrap flex-col xl:flex-nowrap items-center justify-center m-auto">
      <div class="font-semibold text-4xl leading-[60px] mb-6">
        {{ pageData.fields.header }}
      </div>
      <div class="text-center font-semibold text-2xl leading-[30px] mb-24">
        {{ pageData.fields.subheader }}
      </div>
      <div class="flex">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="expect in expectations"
            :key="expect.image"
            class="flex flex-col items-center text-center font-['Inter', 'Poppins'] text-xl leading-[29.405px]"
          >
            <img :src="expect.image">
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