<template>
   <!-- Testimonial -->
 <section class="container mx-auto px-4 mt-40">
    <div class="flex items-center justify-between">
      <!-- Left arrow -->
      <div @click="prevPage">
        <img src="~/assets/icons/left-arrow.svg" class="mx-auto hidden lg:block cursor-pointer">
        <img src="~/assets/icons/left-arrow-small.svg" class="mx-auto block lg:hidden cursor-pointer">
      </div>
      <span class=" text-3xl lg:text-5xl font-semibold text-primary text-center block">TESTIMONIALS</span>
      <!-- Right arrow -->
      <div @click="nextPage">
        <img src="~/assets/icons/right-arrow.svg" class="mx-auto hidden lg:block cursor-pointer">
        <img src="~/assets/icons/right-arrow-small.svg" class="mx-auto block lg:hidden cursor-pointer">
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="showCards" :key="currentPage" class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 mt-24">
        <div v-for="(card, index) in paginatedCards" :key="card.name + index" class="card-container mt-24">
          <div class="relative profile-image-container">
            <img class="profile-image" :src="card.image" alt="Profile Image">
          </div>
          <p class="text-center mt-20">{{ card.testimonial }}</p>
          <div class="flex flex-col items-center">
            <span class="font-bold text-primary">{{ card.name }}</span>
            <span class="font-semibold">{{ card.role }}</span>
          </div>
        </div>
      </div>
    </transition>
</section>
</template>

<script setup >

const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'testimonial',
  'metadata.tags.sys.id[in]': 'creatorTestimonial'
}).then((pageData) => {
  pendingPage.value = false
  console.log("pageData", pageData)
  return pageData;
}).catch(console.error);


const cards = computed(() => pageData.items.map((item) => ({
  testimonial: item.fields.testimonial,
  name: item.fields.name,
  role:item.fields.role,
  image: item.fields.image.fields.file.url,
})))


const currentPage = ref(0);
const itemsPerPage = 3;
const showCards = ref(true);


const paginatedCards = computed(() => {
  const start = currentPage.value * itemsPerPage;
  return cards.value.slice(start, start + itemsPerPage);
});

const nextPage = () => {
  showCards.value = false;
  nextTick(() => {
    if ((currentPage.value + 1) * itemsPerPage < cards.value.length) {
      currentPage.value += 1;
    } else {
      currentPage.value = 0; // loop back to the first page
    }
    showCards.value = true;
  });
};

const prevPage = () => {
  showCards.value = false;
  nextTick(() => {
    if (currentPage.value > 0) {
      currentPage.value -= 1;
    } else {
      currentPage.value = Math.ceil(cards.value.length / itemsPerPage) - 1; // go to the last page
    }
    showCards.value = true;
  });
};
</script>

<style scoped>

/* testimonials */
.card-container {
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  border: 1px solid var(--Purple-300, #D5C2E7);
  position: relative;
  text-align: center;
  max-width: 400px;
}

.profile-image-container {
  position: absolute;
  top: -75px; /* Move the container up half the image height */
  left: 50%;
  transform: translateX(-50%);
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid var(--Purple-300, #D5C2E7);
  object-fit: cover; 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>