<template>
  <section class="container mx-auto px-6 md:px-8 mt-[105px]">
    <h3 class="uppercase text-center text-primary text-[32px] md:text-5xl font-semibold leading-tight">
      {{ pageData.fields.title }}
    </h3>
    <div
      class="grid grid-cols-2 rounded-lg mt-[74px] content-center border-[3px] border-purple border-solid place-items-center"
    >
      <div
        class="text-center text-[28px] cursor-pointer font-bold text-black h-full w-full p-4"
        :class="activeBrandCreatorSelector === 'Brands'
          ? `bg-primary text-white hover-primary`
          : `secondary-text`
        "
        @click="activeBrandCreatorSelector = 'Brands'"
      >
        Brands
      </div>
      <div
        class="text-center text-[28px] font-bold cursor-pointer h-full w-full p-4"
        :class="activeBrandCreatorSelector === 'Creators'
          ? `text-white bg-primary hover-primary `
          : `secondary-text
          `
        "
        @click="activeBrandCreatorSelector = 'Creators'"
      >
        Creators
      </div>
    </div>
    <div class="grid lg:grid-cols-2 mt-[70px] rounded-lg content-center gap-x-8">
      <div class="mb-12">
        <img :src="activeCarouselImagePath">
        <div class="flex mt-8 justify-center">
          <div
            v-for="n in 3"
            :key="`brand-carousel-img` + n"
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
          v-if="activeBrandCreatorSelector === 'Brands'"
          class="text-[28px] text-primary font-bold"
        >
          {{ pageData.fields.brandParagraph }}
        </p>
        <p
          v-if="activeBrandCreatorSelector === 'Creators'"
          class="text-[28px] text-primary font-bold"
        >
          {{ pageData.fields.creatorParagraph }}
        </p>
        <div v-if="activeBrandCreatorSelector === 'Brands'">
          <div
            v-for="(textPoint, index) in brandPoints"
            :key="index + `-textpoints`"
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
        <button
          class="bg-secondary text-white rounded-lg mx-14 mt-8 text-xl px-3 py-1.5"
          @click="navigateTo('/book-a-demo')"
        >
          {{ pageData.fields.btnText }}
        </button>
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
const activeBrandCreatorSelector = ref("Brands");
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'getInvolved',
  'metadata.tags.sys.id[in]': 'homePage'
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);

// brand carousel images
const brandOne = pageData.fields.brandImage1.fields.file.url
const brandTwo = pageData.fields.brandImage2.fields.file.url
const brandThree = pageData.fields.brandImage3.fields.file.url

// Creator carousel images
const creatorOne = pageData.fields.creatorImage1.fields.file.url
const creatorTwo = pageData.fields.creatorImage2.fields.file.url
const creatorThree = pageData.fields.creatorImage3.fields.file.url

const activeCarouselImagePath = computed(() => {
  const imageMap = {
    1: activeBrandCreatorSelector.value === "Brands" ? brandOne : creatorOne,
    2: activeBrandCreatorSelector.value === "Brands" ? brandTwo : creatorTwo,
    3:
      activeBrandCreatorSelector.value === "Brands" ? brandThree : creatorThree,
  };
  return imageMap[activeCarouselImageIndex.value];
});

const brandPoints = pageData.fields.brandPoints;

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