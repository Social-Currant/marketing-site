<template>
 <div class="flex flex-col items-center lg:justify-center lg:flex-row  gap-8 mb-24 mt-20">
    <div v-for="(feature, index) in features" :key="index" class="flex flex-col items-center max-w-[220px] ">
      <img class="h-16 w-fit" :src="feature.image" alt="Feature Image">
      <span class="text-primary font-extrabold text-xl text-center">{{ feature.title }}</span>
      <span class="text-center">{{ feature.description }}</span>
    </div>
  </div>
</template>
<script setup>

const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'twoColumns',
  'metadata.tags.sys.id[in]': 'creatorFeature'
}).then((pageData) => {
  pendingPage.value = false
  return pageData;
}).catch(console.error);

const features = computed(() => pageData.items.map((item) => ({
  title: item.fields.title,
  description: item.fields.paragraph,
  image: item.fields.image.fields.file.url,
})))

</script>