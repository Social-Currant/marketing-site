<template>
  <!-- Section First Impression -->
  <section
    :class="headerOverlay ? `blur-sm` : ``"
    class="container mx-auto px-6 md:px-8 mt-[71px]"
  >
    <div class="grid lg:grid-cols-2 max-w-screen-xl m-auto">
      <div class="lg:order-last">
        <div>
          <img
            :src="pageData.fields.heroImage.fields.file.url"
            class="lg:float-right mx-auto mb-8 lg:mb-0 lg:mr-0 lg:max-w-lg"
          >
        </div>
      </div>
      <div class="lg:order-first lg:w-10/12 xl:w-full">
        <h2 class="font-bold text-[24px] lg:text-[38px] text-primary">
          {{ pageData.fields.title }}
        </h2>
        <p class="font-semibold text-xl mt-[24px]">
          {{ pageData.fields.subtitle }}
        </p>
        <div class="flex items-center mt-[32px]">
          <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
            <div class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl hover-button-blue">
              {{ pageData.fields.buttonText1 }}
            </div>
          </a>
          <a @click="navigateTo('/get-in-touch')">
            <div
              class="mx-2 border-2 border-primary text-primary py-1.5 px-3 rounded-lg text-xl hover:bg-primary hover:text-white cursor-pointer"
            >
              {{ pageData.fields.buttonText2 }}
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        src="~/assets/icons/dots-bg-hero.svg"
        class="hero-dots"
      >
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'heroSection',
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);
</script>

<style>
    .hero-dots {
  position: absolute;
  right: -2rem;
  top: -5rem;
  z-index: -1;
  height: 20rem;
  overflow: hidden;
  display: inline-block;
}
</style>