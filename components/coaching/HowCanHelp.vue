<template>
  <section class="container mx-auto px-6 md:px-8 mt-[83px] text-[#30104C]">
    <div class="flex flex-wrap flex-col xl:flex-nowrap items-center justify-center">
      <div class="font-semibold text-3xl lg:text-5xl leading-tight text-center mb-6 uppercase">
        {{ pageData.fields.header }}
      </div>
      <div class="text-center font-semibold text-xl leading-tight mb-11 lg:mb-24">
        {{ pageData.fields.subheader }}
      </div>
      <div class="flex">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="expect in expectations"
            :key="expect.image"
            class="flex flex-col items-center"
          >
            <img :src="expect.image">
            <div class="mt-2 text-center font-semibold text-xl lg:text-3xl leading-tight">
              {{ expect.title }}
            </div>
            <div class="text-center font-['Inter']  leading-[29.405px] mt-2 text-[#475467]">
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

const pageData = await $contentfulClient.getEntry('7tGM202FRABvBZDMp8RmSv').then((pageData) => {
  pendingPage.value = false
  console.log("fivueb", pageData)
  return pageData;
}).catch(console.error); 

const expectations= [
        {
          image: pageData.fields.icons[0].fields.file.url,
          title:pageData.fields.titles[0],
          description: pageData.fields.text[0],
        },
        {
          image: pageData.fields.icons[1].fields.file.url,
          title:pageData.fields.titles[1],
          description: pageData.fields.text[1],
        },
        {
          image: pageData.fields.icons[2].fields.file.url,
          title:pageData.fields.titles[2],
          description: pageData.fields.text[2],
        },
      ]
</script>