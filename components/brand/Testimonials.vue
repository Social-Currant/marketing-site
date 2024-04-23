<template>
  <!-- What people are saying -->
  <section class="mt-32 relative testimonials-height">
    <h3 class="uppercase text-center text-primary text-[32px] md:text-5xl font-semibold leading-tight mx-4">
      What people are saying
    </h3>
    <div
      class="absolute"
      style="right: 0; z-index: -1; top: 0%"
    >
      <img
        src="~/assets/icons/gradient-circle.svg"
        class="h-48 circle-gradient opacity-30"
        style="width: 600px"
      >
    </div>

    <!-- Left arrow -->
    <div class="absolute z-30 cursor-pointer arrow-container left">
      <img
        src="~/assets/icons/left-arrow.svg"
        class="mx-auto hidden lg:block"
        @click="navigateCarousel()"
      >
      <img
        src="~/assets/icons/left-arrow-small.svg"
        class="mx-auto block lg:hidden"
        @click="navigateMobileTestimonialCarousel({ next: false, previous: true })"
      >
    </div>

    <!-- review contents -->
    <div
      class="flex flex-col lg:flex-row justify-center absolute"
      style="width: 115%; left: -100px; position: absolute; top: 18%;"
    >
      <div
        v-for="(image, n) in reviewTopRow"
        :key="`review-top-` + n"
        class="mx-4 mb-6 hidden lg:block"
      >
        <Transition
          name="slide-fade"
          mode="out-in"
        >
          <img
            :key="`active-review-` + activeReview"
            :src="image"
            class="z-20 mx-auto"
          >
        </Transition>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row items-center justify-center absolute"
      style="width: 100%; position: absolute; top: 56%"
    >
      <div
        v-for="(image, n) in reviewBottomRow"
        :key="`review-bottom-` + n"
        class="mx-5 hidden lg:block"
      >
        <Transition
          name="slide-fade"
          mode="out-in"
        >
          <img
            :key="`active-review-` + activeReview"
            :src="image"
            class="z-20 mx-auto"
          >
        </Transition>
      </div>
    </div>

    <div
      class="hidden lg:block"
      style="position: absolute; bottom: 0%; width: 100%;"
    >
      <div class="flex flex-row mt-8 justify-center items-center">
        <div
          v-for="n in 2"
          :key="`reviews-carousel` + n"
          @click="activeReview = n"
        >
          <img
            v-if="activeReview === n"
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

    <!-- / - review contents -->

    <!-- mobile view single row reviews -->
    <div class="grid grid-cols-1 items-center justify-center block lg:hidden mx-auto mt-8">
      <Transition
        name="slide-fade"
        mode="out-in"
      >
        <img
          :key="`mobile-review-carousel` + activeReviewMobile"
          :src="reviews[activeReviewMobile]"
          class="z-20 mx-auto my-auto image-container"
        >
      </Transition>
      <div class="flex mt-8 justify-center">
        <div
          v-for="(image, key) in reviews"
          :key="`mobile-reviews-carousel` + key"
          @click="activeReviewMobile = key"
        >
          <img
            v-if="activeReviewMobile === key"
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
    <!-- / - mobile view single row reviews -->


    <!-- Right arrow -->
    <div class="absolute z-30 cursor-pointer arrow-container right">
      <img
        src="~/assets/icons/right-arrow.svg"
        class="mx-auto hidden lg:block"
        @click="navigateCarousel()"
      >
      <img
        src="~/assets/icons/right-arrow-small.svg"
        class="mx-auto block lg:hidden"
        @click="navigateMobileTestimonialCarousel({ next: true, previous: false })"
      >
    </div>

    <!-- Gradient -->
    <div
      class="absolute"
      style="left: 0; z-index: -1; bottom: -90px"
    >
      <img
        src="~/assets/icons/gradient-circle.svg"
        class="h-48 circle-gradient opacity-30"
        style="width: 600px"
      >
    </div>
    <!-- / - Gradient -->
  </section>
</template>

<script setup>
// carousel icon
import circle from "~/assets/icons/circle.svg";
import circleActive from "~/assets/icons/circle-active.svg";

// testimonials / reviews
import review1 from "~/assets/images/reviews/review1.svg";
import review2 from "~/assets/images/reviews/review2.svg";
import review3 from "~/assets/images/reviews/review3.svg";
import review4 from "~/assets/images/reviews/review4.svg";
import review5 from "~/assets/images/reviews/review5.svg";
import review6 from "~/assets/images/reviews/review6.svg";
import review8 from "~/assets/images/reviews/review8.svg";
import review9 from "~/assets/images/reviews/review9.svg";
import review10 from "~/assets/images/reviews/review10.svg";
import review11 from "~/assets/images/reviews/review11.svg";
import review12 from "~/assets/images/reviews/review12.svg";

const reviews = ref([
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review8,
  review9,
  review10,
  review11,
  review12,
]);

const activeReview = ref(1);
const activeReviewMobile = ref(1);

const reviewTopRow = computed(() => {
  if (activeReview.value === 1) {
    return reviews.value.slice(0, 4)
  } else {
    return reviews.value.slice(4, 8)
  }
})
const reviewBottomRow = computed(() => {
  if (activeReview.value === 1) {
    return reviews.value.slice(4, 7)
  } else {
    return reviews.value.slice(8, reviews.length)
  }
})

function navigateCarousel() {
  activeReview.value = activeReview.value === 2 ? 1 : 2;
}

function navigateMobileTestimonialCarousel({ next = false, previous = false }) {
  if (next) {
    if (activeReviewMobile.value === reviews.value.length - 1) {
      activeReviewMobile.value = 0;
    } else {
      activeReviewMobile.value++;
    }
  } else if (previous) {
    if (activeReviewMobile.value === 0) {
      activeReviewMobile.value = reviews.value.length - 1;
    } else {
      activeReviewMobile.value--;
    }
  }
}

onMounted(() => {
  setInterval(() => {
    // for mobile
    if (activeReviewMobile.value === reviews.value.length - 1) {
      activeReviewMobile.value = 0;
    } else {
      activeReviewMobile.value += 1;
    }
    // for desktop
    navigateCarousel()
  }, 7000);
});

</script>
<style lang="scss" scoped>
.testimonials-height {
  height: 20rem;

  @media (min-width: 1024px) {
    min-height: 38rem;
  }
}

.arrow-container {
  top: 60%;

  @media (min-width: 625px) {
    top: 0%;
  }
}

.arrow-container.left {
  left: 8%;
}

.arrow-container.right {
  right: 8%;
}

// animate slide
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.image-container{
  @media (min-width: 1024px) {
    height: 250px; 
    width: 400px;
  }
    height: 170px; 
    width: 320px;
}
</style>
