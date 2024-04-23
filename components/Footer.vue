<template>
  <footer
    id="footer"
    class="bg-primary text-white min-h-full relative mt-84"
  >
    <div class="container mx-auto px-6 md:px-8 mt-16 lg:mt-48 pt-28 text-center md:text-left">
      <!-- Sign Up Links -->
      <div
        class="bg-white text-black container px-6 md:px-8 absolute drop-shadow-lg rounded-lg mx-auto py-16"
        style="top: -80px; width: 85%"
      >
        <CallToAction />
      </div>

      <div class="uppercase text-lg font-semibold mt-32 lg:mt-4 text-left">
        We can help you connect with creators
      </div>
      <h4 class="text-[32px] md:text-3xl lg:w-2/4 mt-8 lg:mt-16 font-semibold text-left">
        Stay updated on all things trending in the influencer space.
      </h4>
      <a href="https://manage.kmail-lists.com/subscriptions/subscribe?a=WQW4wi&g=YpNHVb">
        <button
          class="border-2 bg-secondary text-white font-medium border-secondary px-6 py-2 rounded-lg my-8 lg:my-12 text-left block"
        >
          Subscribe
        </button>
      </a>
      <div class="flex">
        <div
          v-for="(socials, index) in socialMediaAccounts"
          :key="`socials` + index"
        >
          <a :href="socials.url">
            <img
              :src="socials.image"
              class="mx-1"
            >
          </a>
        </div>
      </div>
      <hr class="border-white my-8">
      <div class="flex justify-between items-center flex-wrap">
        <div class="hidden lg:block">
          <span class="inline-block">Need to get in touch?</span>
          <a
            class="inline-block"
            @click="navigateTo('/get-in-touch')"
          >
            <div class="mx-3 bg-secondary text-white py-1.5 px-4 text-center rounded-lg cursor-pointer">
              Contact Us
            </div>
          </a>
        </div>
        <div>
          <div class="py-2 text-left text-lg flex items-start lg:items-center flex-col lg:flex-row lg:gap-4">
            <img
              class="inline-block mb-6 lg:mb-0"
              src="~/assets/icons/logo-footer.svg"
            >
            <p>A platform by Social Currant.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
// social icons
import linkedin from "~/assets/icons/social/li.svg";
import facebook from "~/assets/icons/social/fb.svg";
import instagram from "~/assets/icons/social/ig.svg";
import twitter from "~/assets/icons/social/tw.svg";

const socialMediaAccounts = [
  {
    image: linkedin,
    url: "https://www.linkedin.com/company/socialcurrant/",
  },
  {
    image: facebook,
    url: "https://www.facebook.com/socialcurrant/",
  },
  {
    image: instagram,
    url: "https://www.instagram.com/socialcurrant/",
  },
  {
    image: twitter,
    url: "https://twitter.com/socialcurrant?lang=en",
  },
];
</script>
