<template>
  <div
    v-if="displayBanner"
    class="bg-primary h-[61px]"
    :class="headerOverlay ? `blur-sm` : ``"
  >
    <div class="container mx-auto px-4 h-full flex items-center">
      <div class="grow text-center">
        <p class="font-semibold text-white text-base sm:text-xl">
          <NuxtLink
            to="/book-a-demo"
            class="underline text-secondary cursor-pointer"
          >Book a Demo</NuxtLink>
          today and start partnering with top content creators to amplify your mission and drive narrative change
        </p>
      </div>
      <!-- <div class="flex-none hidden lg:block">
        <img src="~/assets/icons/close.svg" />
      </div> -->
    </div>
  </div>
  <header class="mt-[16px] lg:mt-[54px] sticky top-0 bg-white z-50">
    <div class="container mx-auto px-6 md:px-8 flex items-center bg-white z-50">
      <h1
        class="grow"
        :class="headerOverlay ? `blur-sm` : ``"
      >
        <img
          src="~/assets/images/currant-logo.svg"
          class="cursor-pointer"
          @click="navigateTo('/')"
        >
      </h1>
            <div class="flex nav-links hidden lg:block headerLink font-semibold">
        <a
          v-for="link in headerLinks"
          :key="link.scrollTo + `-link`"
          class="hover:text-primary ml-3 xl:ml-6 text-xl cursor-pointer"
          :class="{'text-secondary': isActive(link)}"
          @click="navigateTo(link.navigateTo)"
        >{{ link.text }}</a>
      </div>
      <div class="ml-6 xl:ml-11 hidden lg:block">
        <button
          class="border-secondary border-2 bg-secondary text-white text-xl border-secondary text-xl px-3 py-1.5 rounded-lg hover-button-blue"
          @click="navigateTo('/book-a-demo')"
        >
          Get Started
        </button>
      </div>
      <div
        class="block lg:hidden cursor-pointer"
        @click="headerOverlay = !headerOverlay"
      >
        <img src="~/assets/icons/hamburger.svg">
      </div>
    </div>
    <HeaderOverlay
      v-show="headerOverlay"
      :header-nav-links="headerLinks"
      class="z-50 header-overlay-width"
      @close="headerOverlay = false"
    />
  </header>
</template>
<script setup>
defineProps({
  displayBanner: {
    type: Boolean,
    required: false,
    default: true
  }
})

const headerOverlay = useState('headerOverlay')
const router = useRouter();

const headerLinks = [
  {
    text: "Brand",
    navigateTo: '/',
  },
  {
    text: "Creator",
    navigateTo: '/creator',
  },
  {
    text: "About Us",
    navigateTo: '/about-us',
  },
  {
    text: "Plans",
    navigateTo: '/plans',
  },
  {
    text: "Blog",
    navigateTo: '/blog',
  },
  {
    text: "Contact Us",
    navigateTo: '/get-in-touch',
  },
];

const isActive = (link) => {
  return router.currentRoute.value.path === link.navigateTo;
};
</script>
<style lang="scss">
.header-overlay-width {
  width: 50%;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
}
</style>
