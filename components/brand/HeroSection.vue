<template>
  <!-- Section First Impression -->
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
          <button
          class="text-base px-3 py-2 rounded-lg bg-secondary text-white hover-button-blue sm:text-xl sm:py-1.5 sm:px-3"
          @click="navigateTo('/book-a-demo/')"
        >
          {{ pageData.fields.buttonText1 }}
        </button>
        <NuxtLink to='/social-currant-university'>
          <div
            class="text-base px-3 py-2 rounded-lg border-2 border-primary text-primary mx-2 cursor-pointer hover:bg-primary hover:text-white sm:text-xl sm:py-1.5 sm:px-3"
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

const pageData = await $contentfulClient.getEntry('2EceAK9q8HxBhzkzaQTKap').then((pageData) => {
  pendingPage.value = false
  return pageData;
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

.hover-button-blue:hover {
  background: #4780ff;
}
.hover-primary:hover {
  background: #4f3467;
}

@media (max-width: 600px) {
  .mobile-button {
    padding: 8px;
  }
}
</style>