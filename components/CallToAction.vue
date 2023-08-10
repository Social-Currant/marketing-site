<template>
  <div class="flex flex-col lg:flex-row justify-left lg:justify-between lg:items-center">
    <div>
      <h4 class="text-3xl md:text-4xl font-bold">
        {{ pageData.fields.callToAction }}
      </h4>
      <p>{{ pageData.fields.subtitle }}</p>
    </div>
    <div class="my-4">
      <a :href="pageData.fields.url">
        <button
          class="border-secondary border-2 bg-secondary text-white font-medium border-secondary px-6 py-2 rounded-lg"
        >
          {{ pageData.fields.btnText }}
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'cta',
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);
</script>