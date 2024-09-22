<template>
  <section class="container mx-auto px-6 md:px-8 mt-14 lg:mt-[105px] justify-center">
    <div class="grid lg:grid-cols-2 mt-[70px] rounded-lg content-center gap-x-8">
      <div class="mb-12 flex flex-col justify-center">
        <img :src="activeCarouselImagePath">
        <div class="flex mt-8 justify-center">
          <div
            v-for="n in 3"
            :key="`creator-carousel-img` + n"
            @click="activeCarouselImageIndex = n"
          >
            <img
              v-if="activeCarouselImageIndex === n"
              :src="circleActive"
              class="cursor-pointer h-[20px]"
            >
            <img
              v-else
              :src="circle"
              class="cursor-pointer h-[20px]"
            >
          </div>
        </div>
      </div>
      <div>
        <p
          v-if="activeBrandCreatorSelector === 'Creators'"
          class="text-[28px] text-primary font-bold"
        >
          {{ pageData.fields.creatorParagraph }}
        </p>
        <div v-if="activeBrandCreatorSelector === 'Creators'">
          <div
            v-for="(textPoint, index) in creatorPoints"
            :key="index + `-creatorpoints`"
            class="flex mt-[24px]"
          >
            <img
              src="~/assets/icons/bullet-point.svg"
              class="mr-6"
            >
            <p :class="{ 'font-semibold': activeCarouselImageIndex === index + 1 }">
              {{ textPoint }}
            </p>
          </div>
        </div>
        <a 
        href="https://app.currant.social" 
        target="_blank" 
        rel="noopener noreferrer">
          <button
            class="bg-secondary text-white rounded-lg mx-14 mt-8 text-xl px-3 py-1.5"
          >
            {{ pageData.fields.btnText }}
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  setInterval(() => {
    if (
      activeCarouselImageIndex.value === 0 ||
      activeCarouselImageIndex.value === 3
    ) {
      activeCarouselImageIndex.value = 1;
    } else {
      activeCarouselImageIndex.value += 1;
    }
  }, 7000);
});

// carousel icon
import circle from "~/assets/icons/circle.svg";
import circleActive from "~/assets/icons/circle-active.svg";

const activeCarouselImageIndex = ref(1);
const activeBrandCreatorSelector = ref("Creators");
const { $contentfulClient } = useNuxtApp();
const pendingPage = ref(true);

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'getInvolved',
  'metadata.tags.sys.id[in]': 'creatorPage'
}).then((pageData) => {
  pendingPage.value = false;
  return pageData.items[0];
}).catch(console.error);

// Creator carousel images
const creatorOne = pageData.fields.creatorImage1.fields.file.url;
const creatorTwo = pageData.fields.creatorImage2.fields.file.url;
const creatorThree = pageData.fields.creatorImage3.fields.file.url;

const activeCarouselImagePath = computed(() => {
  const imageMap = {
    1: creatorOne,
    2: creatorTwo,
    3: creatorThree,
  };
  return imageMap[activeCarouselImageIndex.value];
});

const creatorPoints = pageData.fields.creatorPoints;
watch(activeBrandCreatorSelector, () => {
  // reset the image index to 1
  activeCarouselImageIndex.value = 1;
});
</script>

<style lang="scss">
.hover-primary:hover {
  background: #4f3467;
}
.secondary-text {
  color: #7f6b90;

  &:hover {
    color: #30104c;
  }
}
</style>
