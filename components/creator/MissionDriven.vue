<template>
  <!-- Mission Driven -->
  <section class="container mx-auto">
    <!-- <span class=" text-3xl lg:text-5xl font-semibold text-primary text-center block">MISSION DRIVEN</span> -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 lg:mt-24 max-w-fit ml-auto mr-auto">
      <div
        v-for="(item, index) in columnOne"
        :key="'col1-' + index"
        class="flex items-center gap-2"
      >
        <img
          class="w-fit"
          src="~/assets/images/green-check.png"
          alt="Green check"
        >
        <span class="text-2xl">{{ item }}</span>
      </div>
      <div
        v-for="(item, index) in columnTwo"
        :key="'col2-' + index"
        class="flex items-center gap-2"
      >
        <img
          class="w-fit"
          src="~/assets/images/green-check.png"
          alt="Green check"
        >
        <span class="text-2xl">{{ item }}</span>
      </div>
      <div
        v-for="(item, index) in columnThree"
        :key="'col3-' + index"
        class="flex items-center gap-2"
      >
        <img
          class="w-fit"
          src="~/assets/images/green-check.png"
          alt="Green check"
        >
        <span class="text-2xl">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>

const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'simpleItems',
  'metadata.tags.sys.id[in]': 'creatorPage'
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);


const columnOne = computed(() => pageData.fields.items)
const columnTwo = computed(() => pageData.fields.secondColumn)
const columnThree = computed(() => pageData.fields.thirdColumn)

</script>