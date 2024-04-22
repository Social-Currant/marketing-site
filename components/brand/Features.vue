<template>
  <section class="container mx-auto px-6 md:px-8 mt-[83px]">
    <h3
      class="uppercase text-primary text-[32px] md:text-5xl text-center font-semibold leading-tight mb-16"
    >
      PRODUCT FEATURES
    </h3>
    <div class="flex flex-wrap-reverse xl:flex-nowrap items-center justify-center mb-12 lg:mb-24 xl:justify-between">
      <div class="flex flex-col items-center lg:items-start">
        <p class=" mt-6 mb-8 lg:mb-6 lg:mt-0 text-3xl font-bold text-primary text-center lg:text-left">
          {{ feature1.fields.title }}
        </p>
        <p class="feature-text text-center lg:text-left">
          {{ feature1.fields.paragraph }}
        </p>
        <button
          class="bg-secondary text-white my-4 py-1.5 px-3 rounded-lg text-xl hover-button-blue"
          @click="navigateTo('/plans')"
        >
          {{ feature1.fields.buttonText }}
        </button>
      </div>
      <img
        class="w-[342px] lg:w-[625px]"
        :src="feature1.fields.image.fields.file.url"
      >
    </div>
    <div class="flex flex-wrap xl:flex-nowrap items-center justify-center mb-12 lg:mb-24 xl:justify-between">
      <img
        class="w-[342px] lg:w-[625px]"
        :src="feature2.fields.image.fields.file.url"
      >
      <div class="flex flex-col items-center lg:items-start">
        <p class="mt-6 mb-8 lg:mb-6 lg:mt-0 text-3xl font-bold text-primary text-center lg:text-left">
          {{ feature2.fields.title }}
        </p>
        <p class="feature-text text-center lg:text-left">
          {{ feature2.fields.paragraph }}
        </p>
        <button
          class="bg-secondary text-white my-4 py-1.5 px-3 rounded-lg text-xl hover-button-blue"
          @click="navigateTo('/plans')"
        >
          {{ feature2.fields.buttonText }}
        </button>
      </div>
    </div>
    <div class="flex flex-wrap-reverse xl:flex-nowrap items-center justify-center mb-12 lg:mb-24 xl:justify-between">
      <div class="flex flex-col items-center lg:items-start">
        <p class="mt-6 mb-8 lg:mb-6 lg:mt-0 text-3xl font-bold text-primary text-center lg:text-left">
          {{ feature3.fields.title }}
        </p>
        <p class="feature-text text-center lg:text-left">
          {{ feature3.fields.paragraph }}
        </p>
        <button
          class="bg-secondary text-white my-4 py-1.5 px-3 rounded-lg text-xl hover-button-blue"
          @click="navigateTo('/plans')"
        >
          {{ feature3.fields.buttonText }}
        </button>
      </div>
      <img
        class="w-[342px] lg:w-[625px]"
        :src="feature3.fields.image.fields.file.url"
      >
    </div>
    <div class="flex flex-wrap xl:flex-nowrap items-center justify-center mb-12 lg:mb-24 xl:justify-between">
      <img
        class="w-[290px] lg:w-[417px]"
        :src="feature4.fields.image.fields.file.url"
      >
      <div class="flex flex-col items-center lg:items-start">
        <p class="mt-6 mb-8 lg:mb-6 lg:mt-0 text-3xl font-bold text-primary text-center lg:text-left">
          {{ feature4.fields.title }}
        </p>
        <p class="feature-text text-center lg:text-left">
          {{ feature4.fields.paragraph }}
        </p>
        <button
          class="bg-secondary text-white my-4 py-1.5 px-3 rounded-lg text-xl hover-button-blue"
          @click="navigateTo('/plans')"
        >
          {{ feature4.fields.buttonText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()

const pendingfeature1 = ref(true)
const feature1 = await $contentfulClient.getEntry('3Mkm1MbW0RzI1EGY5fzC9A').then((feature1) => {
  pendingfeature1.value = false
  return feature1;
}).catch(console.error);  

const pendingfeature2 = ref(true)
const feature2 = await $contentfulClient.getEntry('7k7LoM8544rpEI24nz6L8').then((feature2) => {
  pendingfeature2.value = false
  return feature2;
}).catch(console.error);

const pendingfeature3 = ref(true)
const feature3 = await $contentfulClient.getEntry('7MMlBRSSh46QvanU8LAZu8').then((feature3) => {
  pendingfeature3.value = false
  return feature3;
}).catch(console.error); 

const pendingfeature4 = ref(true)
const feature4 = await $contentfulClient.getEntry('2Us7NBeuPRdjz0GenrkpDt').then((feature4) => {
  pendingfeature4.value = false
  return feature4;
}).catch(console.error); 


</script>

<style scoped>
.feature-text{
color:  #343538;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 150% */
max-width: 557.333px;
}
</style>