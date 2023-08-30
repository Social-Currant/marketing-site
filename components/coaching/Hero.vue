<template>
  <section
    class="w-full px-6 md:px-8 mt-[71px] hero-section p-8"
  >
    <div class="container grid lg:grid-cols-2 max-w-screen-xl m-auto">
      <div>
        <h1 class="text-5xl font-bold text-primary leading-[70px]">
          {{ pageData.fields.title }}
        </h1>
        <h4 class="mt-6 text-2xl font-semibold">
          {{ pageData.fields.subtitle }}
        </h4>
        <div class="flex items-center mt-[32px]">
          <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
            <div class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl hover-button-blue">
              {{ pageData.fields.buttonText1 }}
            </div>
          </a>
          <a
            href="#"
            @click.prevent="scrollToContactUs"
          >
            <div
              class="mx-2 border-2 border-primary text-primary py-1.5 px-3 rounded-lg text-xl hover:bg-primary hover:text-white cursor-pointer"
            >
              {{ pageData.fields.buttonText2 }}
            </div>
          </a>
        </div>
      </div>
      <div>
        <div>
          <img
            :src="pageData.fields.heroImage.fields.file.url"
            class="lg:float-right mx-auto mb-8 lg:mb-0 lg:mr-0 lg:max-w-lg"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'heroSection',
  'metadata.tags.sys.id[in]': 'offer'
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);

const scrollToContactUs = () => {
  const offset = document.querySelector("header")?.getBoundingClientRect().height || 0; // height of the navbar
  const element = document.querySelector('#contact-us');
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
</script>

<style scoped>
.hero-section{
  background: #EDE8F2;
}
</style>