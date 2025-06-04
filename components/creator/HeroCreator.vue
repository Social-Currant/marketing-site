<template>
  <!-- HERO SECTION -->
  <section
    class="container mx-auto px-6 md:px-8 mt-16"
  >
    <div class="grid lg:grid-cols-2 m-auto">
      <div class="lg:order-last">
        <div>
          <img
            :src="pageData.fields.heroImage.fields.file.url"
            class="lg:float-right mx-auto mb-8 lg:mb-0 lg:mr-0 lg:max-w-lg"
          >
        </div>
      </div>
      <div class="text-center lg:text-left lg:order-first lg:w-10/12 xl:w-full">
        <h2
          class="font-bold text-[24px] lg:text-5xl text-primary"
          style="line-height: 130%;"
        >
          {{ pageData.fields.title }}
        </h2>
        <p class="font-semibold text-xl mt-[24px]">
          {{ pageData.fields.subtitle }}
        </p>
        <div class="justify-center lg:justify-start flex items-center mt-[32px]">
          <a 
            href="https://app.currant.social/creator/signup" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button class="bg-secondary text-white py-2 px-3 rounded-lg text-xl hover-button-blue">
              {{ pageData.fields.buttonText1 }}
            </button>
          </a>
          <NuxtLink @click="navigateTo('/get-in-touch')">
            <div
              class="mx-2 border-2 border-primary text-primary py-1.5 px-3 rounded-lg text-xl hover:bg-primary hover:text-white cursor-pointer"
            >
              {{ pageData.fields.buttonText2 }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntry('32spGG0c1g1LTeb5tyyfRH').then((pageData) => {
  pendingPage.value = false
  return pageData;
}).catch(console.error);
</script>