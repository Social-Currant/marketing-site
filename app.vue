<template>
  <div class="bg-primary h-[61px]">
    <div class="container mx-auto px-8 h-full flex items-center">
      <div class="grow text-center">
        <p class="font-bold text-white">
          <a href="" class="underline text-secondary">Sign up</a> for our
          newsletter for updates + previews of new platform features!
        </p>
      </div>
      <div class="flex-none">
        <img src="~/assets/icons/close.svg" />
      </div>
    </div>
  </div>
  <header class="container mx-auto px-8 mt-[54px] sticky top-0 bg-white">
    <div class="flex items-center">
      <h1 class="text-2xl font-bold underline grow">
        <img src="~/assets/images/currant-logo.svg" />
      </h1>
      <div class="flex nav-links">
        <a v-for="link in headerLinks" href="" class="hover:underline ml-[24px] text-[20px]">{{
          link.text
        }}</a>
      </div>
      <div class="ml-[44px]">
        <button
          class="border-secondary border-2 bg-secondary text-white font-medium border-secondary px-6 py-2 rounded-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  </header>
  <!-- Section First Impression -->
  <section class="container mx-auto px-8 mt-[71px]">
    <div class="grid md:grid-cols-2">
      <div class="md:order-last">
        <img
          src="~/assets/images/hero-placeholder.svg"
          class="float-right mr-16"
        />
        <img
          src="~/assets/icons/dots-bg-hero.svg"
          class="hero-dots w-96 h-96"
        />
      </div>
      <div class="md:order-first">
        <h2 class="font-bold text-[38px] text-primary">
          Find mission aligned creators for your campaign or cause.
        </h2>
        <p class="font-semibold text-xl mt-[24px]">
          We help nonprofits, impact organizations & issue focused organizations
          collaborate with creators to reach audiences more effectively.
        </p>
        <div class="flex items-center mt-[32px]">
          <img src="~/assets/icons/dots-line.svg" />
          <div class="mx-4 bg-secondary text-white py-2 px-3 rounded-lg">
            Book a Demo
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- / - Section First Impression -->
  <!-- Organization carousel -->
  <section class="container mx-auto px-8 mt-[83px]">
    <div class="flex flex-row items-center">
      <div v-for="image in heroCarouselImages" class="grow">
        <img :src="image" class="w-200" />
      </div>
    </div>
  </section>
  <!-- /  Organization carousel -->

  <!-- How it works -->
  <section class="container mx-auto px-8 mt-[105px]">
    <h3
      class="uppercase text-4xl text-center text-primary text-[50px] font-semibold"
    >
      How it works?
    </h3>
    <img src="~/assets/images/how-it-works.svg" class="mx-auto mt-[74px]" />
    <div class="grid md:grid-cols-3 gap-x-16">
      <div>
        <h4 class="text-3xl">Step 1</h4>
        <h5 class="font-semibold mt-[20px]">Outline Your Goals</h5>
        <p class="mt-4">
          We know you have a lot of great ideas but not a lot of time. Our two
          step process allows for you to quickly outline your campaign, goals
          and the communities you’re trying to reach.
        </p>
      </div>
      <div>
        <h4 class="text-3xl">Step 2</h4>
        <h5 class="font-semibold mt-[20px]">Review Your Matches</h5>
        <p class="mt-4">
          Let us work our magic. Then it’s your turn to review your personalized
          creator matches with information on their issue area, audience, and
          more.
        </p>
      </div>
      <div>
        <h4 class="text-3xl">Step 3</h4>
        <h5 class="font-semibold mt-[20px]">Run Your Campaign</h5>
        <p class="mt-4">
          We have your back! Let us make it easy for you to manage your creator
          campaigns with automating contracts, payments, and more all in one
          place. This way, you can focus on what matters most- building strong
          relationships with your creators.
        </p>
      </div>
    </div>
  </section>
  <!-- / - How it works -->
  <!-- Get Involved -->
  <section class="container mx-auto px-8 mt-[105px]">
    <h3
      class="uppercase text-4xl text-center text-primary text-[50px] font-semibold"
    >
      Get Involved
    </h3>
    <div
      class="grid grid-cols-2 mt-[74px] rounded-lg content-center border-[3px] border-purple border-solid"
    >
      <div
        class="text-center text-[28px] cursor-pointer py-4 text-black"
        :class="
          activeBrandCreatorSelector === 'Brands'
            ? `bg-primary rounded-tl-md rounded-bl-md text-white`
            : ``
        "
        @click="activeBrandCreatorSelector = 'Brands'"
      >
        Brands
      </div>
      <div
        class="text-center text-[28px] text-black cursor-pointer py-4"
        :class="
          activeBrandCreatorSelector === 'Creators'
            ? `text-white bg-primary rounded-tr-md rounded-br-md`
            : ``
        "
        @click="activeBrandCreatorSelector = 'Creators'"
      >
        Creators
      </div>
    </div>
    <div class="grid grid-cols-2 mt-[70px] rounded-lg content-center gap-x-8">
      <div>
        <img :src="activeCarouselImagePath" />
        <div class="flex mt-8 justify-center">
          <div
            v-for="n in 3"
            :key="`brand-carousel-img` + n"
            @click="activeBrandImageIndex = n"
          >
            <img
              v-if="activeBrandImageIndex === n"
              :src="circleActive"
              class="cursor-pointer h-[20px]"
            />
            <img v-else :src="circle" class="cursor-pointer h-[20px]" />
          </div>
        </div>
      </div>
      <div>
        <p class="text-[28px] text-primary font-bold">
          Join some of the country’s largest nonprofits & impact organizations
          in working with Social Currant
        </p>
        <div v-for="textPoint in brandPoints" class="flex mt-[24px]">
          <img src="~/assets/icons/bullet-point.svg" class="mr-6" />
          <p>{{ textPoint }}</p>
        </div>
        <button class="bg-secondary text-white py-2 px-3 rounded-lg mx-14 mt-8">
          Get Started
        </button>
      </div>
    </div>
  </section>
  <!-- / - Get Involved -->

  <!-- About Us -->
  <section class="container mx-auto px-8 mt-32">
    <div class="flex flex-row-reverse">
      <div class="w-[500px]">
        <h4 class="uppercase text-[50px] text-primary font-semibold">About Us</h4>
        <p class="mb-4 mt-4 uppercase text-[20px] font-semibold text-primary">From D.C. to across the world!</p>
        <p>
          We’re a creator led platform and managed service focusing on making a
          different through the power of social media. Once described by the New
          York Times as “Only recently able to buy alcohol” This Gen Z led
          company is on a mission to empower young people and issues we care
          about.
        </p>
      </div>
      <div>
        <img src="~/assets/icons/about-us-egg-left.svg" style="position: absolute; left: 0%; z-index: -1; height: 800px; width: 800px">
      </div>
    </div>
    <div class="flex">
      <h4 class="uppercase text-primary font-semibold mt-32 text-[38px]">Meet the Team</h4>
    </div>
    <!-- First Row - Team Members -->
    <div class="flex justify-center mb-4 mt-16">
      <div v-for="team in teamFirstRow" class="w-72">
        <img class="w-128 h-128 rounded-full mx-auto mb-8" :src="avatar" />
        <h6 class="text-center text-primary font-bold text-xl font-semibold">
          {{ team.name }}
        </h6>
        <p class="text-black text-center">{{ team.desc }}</p>
      </div>
    </div>
    <!-- Second Row - Team Members -->
    <div class="flex justify-center">
      <div v-for="team in teamSecondRow" class="w-64">
        <img class="w-128 h-128 rounded-full mx-auto mb-8" :src="avatar" />
        <h6 class="text-center text-primary font-bold text-xl font-semibold">
          {{ team.name }}
        </h6>
        <p class="text-black text-center">{{ team.desc }}</p>
      </div>
    </div>
  </section>
  <!-- / About Us -->

  <!-- test footer -->
  <div class="mt-64"></div>
</template>

<script setup>
// carousel icon
import circle from "~/assets/icons/circle.svg";
import circleActive from "~/assets/icons/circle-active.svg";

// avatar placeholder
import avatar from "~/assets/icons/avatar-placeholder.svg";

// brand carousel images
import brandOne from "~/assets/images/brands/1.png";
import brandTwo from "~/assets/images/brands/2.png";
import brandThree from "~/assets/images/brands/3.png";

import commChangeAction from "~/assets/images/hero-carousel/comm-change-action.png";
import nextGenAmerica from "~/assets/images/hero-carousel/nextgen-america.png";
import capitolHistorical from "~/assets/images/hero-carousel/capitol-historical.png";
import repairTheWorld from "~/assets/images/hero-carousel/repair-the-world.png";
import leftHook from "~/assets/images/hero-carousel/left-hook.png";
import jvaCampaigns from "~/assets/images/hero-carousel/jva-campaigns.png";

useHead({
  title: "Currant | Creator Marketing Simplified",
  meta: [{ name: "description", content: "Social Currant." }],
});

const activeBrandImageIndex = ref(1);
const activeBrandCreatorSelector = ref("Brands");

const activeCarouselImagePath = computed(() => {
  const imageMap = {
    1: brandOne,
    2: brandTwo,
    3: brandThree,
  };
  return imageMap[activeBrandImageIndex.value];
});

const brandPoints = [
  "Leverage years of expertise and an impact focused creator network.",
  "Spend less time worrying about finding creators and more time focused on working with them.",
  "Reach a wider audience, leveraging the power of social media and influencers.",
];

const heroCarouselImages = [
  commChangeAction,
  nextGenAmerica,
  capitolHistorical,
  repairTheWorld,
  leftHook,
  jvaCampaigns,
];

const teamFirstRow = [
  {
    name: "Ashwath Narayanan",
    desc: "Co-Founder & CEO",
  },
  {
    name: "Vidyut Ghuwalewala",
    desc: "Co-Founder & COO",
  },
  {
    name: "Jasmine McCarton",
    desc: "Chief Design Officer",
  },
  {
    name: "Ellie Artone",
    desc: "Chief Creator Officer",
  },
  {
    name: "William Chesier",
    desc: "Chief Technology Officer",
  },
];
const teamSecondRow = [
  {
    name: "Aashna Malhotra",
    desc: "Influencer Strategist",
  },
  {
    name: "Abby Vang",
    desc: "Influencer Strategist",
  },
  {
    name: "Erika",
    desc: "Software Engineer",
  },
  {
    name: "Sisir Ghimire Chettri",
    desc: "Software Engineer",
  },
];

const headerLinks = [
  {
    text: "How it works",
    link: "/",
  },
  {
    text: "Brands",
    link: "/",
  },
  {
    text: "Creators",
    link: "/",
  },
  {
    text: "About Us",
    link: "/",
  },
  {
    text: "How can we help",
    link: "/",
  },
];
</script>
<style scoped lang="scss">
.hero-dots {
  position: absolute;
  right: 0%;
  top: 65.5%;
  transform: rotate(-34.49deg);
  z-index: -1;
  height: 400px;
  height: 400px;
}
</style>
