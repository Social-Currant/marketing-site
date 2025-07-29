<template>
  <footer
    id="footer"
    class="bg-primary text-white min-h-full relative mt-84"
  >
    <div class="container mx-auto px-6 md:px-8 mt-16 pt-24 text-center md:text-left">
      <h4 class="text-[32px] md:text-3xl lg:w-3/4 font-semibold text-left">
        Stay updated on how you can use your platform for social impact.
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
     
      <div class="pt-12 pb-20 flex gap-6 underline font-semibold">
        <a
          href="https://currantsocial.notion.site/Terms-and-Conditions-2276f38bb72a46a194e4bc6496b8b259"
          target="_blank"
        >Terms & Conditions</a>
        <a
          href="https://currantsocial.notion.site/Privacy-Policy-d56fe485223342c79d4d4447e7aca468"
          target="_blank"
        >Privacy Policy</a>
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
