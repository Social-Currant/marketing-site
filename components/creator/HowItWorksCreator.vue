<template>
  <!-- HOW IT WORKS -->
  <section class="container flex flex-col mx-auto px-4 lg:px-0 mt-11 lg:mt-28">
    <span class=" text-3xl lg:text-5xl font-semibold text-primary text-center mb-3 lg:mb-16">HOW IT WORKS</span>
    <div class="container flex flex-col items-center lg:justify-center lg:flex-row  gap-8 mx-auto lg:gap-8 lg:items-stretch">
      <div class="step-box flex flex-col gap-2 p-4 lg:p-0 flex-1">
        <span class="text-3xl font-bold text-primary text-center lg:text">{{ pageData.fields.steps[0] }}</span>
        <span class="text-xl text-primary font-semibold text-center lg:text">{{ pageData.fields.subtitle[0] }}</span>
        <p class="text-center lg:text">
          {{ pageData.fields.paragraphs[0] }}
        </p>
      </div>

      <div class="step-box flex flex-col gap-2 p-4 lg:p-0 flex-1">
        <span class="text-3xl font-bold text-primary text-center lg:text">{{ pageData.fields.steps[1] }}</span>
        <span class="text-xl text-primary font-semibold text-center lg:text">{{ pageData.fields.subtitle[1] }}</span>
        <p class="text-center lg:text">
          {{ pageData.fields.paragraphs[1] }}
        </p>
      </div>

      <div class="step-box flex flex-col gap-2 p-4 lg:p-0 flex-1">
        <span class="text-3xl font-bold text-primary text-center lg:text">{{ pageData.fields.steps[2] }}</span>
        <span class="text-xl text-primary font-semibold text-center lg:text">{{ pageData.fields.subtitle[2] }}</span>
        <p class="text-center lg:text">
          {{ pageData.fields.paragraphs[2] }}
        </p>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <a 
        href="https://app.currant.social/creator/signup" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl hover-button-blue">
          Sign Up Today
        </button>
      </a>
    </div>
  </section>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'howItWorks',
  'metadata.tags.sys.id[in]': 'creatorPage'
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);


</script>

<style>
.step-box{
  border-radius: 10px;
border: 1px solid #D5C2E7;
padding: 32px;
max-width: 380px;
}

</style>
