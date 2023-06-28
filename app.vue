<template class="z-0">
  <div class="bg-primary h-[61px]">
    <div class="container mx-auto px-4 h-full flex items-center">
      <div class="grow text-center">
        <p class="font-semibold text-white">
          <a href="https://manage.kmail-lists.com/subscriptions/subscribe?a=WQW4wi&g=YpNHVb" class="underline text-secondary cursor-pointer">Sign up</a> for our
          newsletter for updates + previews of new platform features!
        </p>
      </div>
      <!-- <div class="flex-none hidden lg:block">
        <img src="~/assets/icons/close.svg" />
      </div> -->
    </div>
  </div>
  <header class="mt-[16px] lg:mt-[54px] sticky top-0 bg-white z-50">
    <div class="container mx-auto px-6 md:px-8 flex items-center bg-white z-50">
      <h1 class="grow">
        <img src="~/assets/images/currant-logo.svg" />
      </h1>
      <div class="flex nav-links hidden lg:block">
        <a
          v-for="link in headerLinks"
          class="hover:text-primary hover:font-medium ml-[24px] text-xl cursor-pointer"
          @click="scrollToDiv(link.scrollTo, link.text)"
          >{{ link.text }}</a
        >
      </div>
      <div class="ml-[44px] hidden lg:block">
        <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
          <button
            class="border-secondary border-2 bg-secondary text-white font-medium border-secondary px-6 py-2 rounded-lg"
          >
            Get Started
          </button>
        </a>
      </div>
      <div
        class="block lg:hidden cursor-pointer"
        @click="headerOverlay = !headerOverlay"
      >
        <img src="~/assets/icons/hamburger.svg" />
      </div>
    </div>
    <HeaderOverlay
      v-show="headerOverlay"
      :header-nav-links="headerLinks"
      @close="headerOverlay = false"
      @scrollDiv="scrollToDiv"
      class="z-50"
    ></HeaderOverlay>
  </header>
  <!-- Section First Impression -->
  <section class="container mx-auto px-6 md:px-8 mt-[71px]">
    <div class="grid lg:grid-cols-2">
      <div class="lg:order-last">
        <div class="">
          <img
            src="~/assets/images/currantheroimage.png"
            class="lg:float-right mx-auto mb-8 lg:mb-0 lg:mr-0 lg:max-w-lg "
          />
        </div>
      </div>
      <div class="lg:order-first lg:w-10/12 xl:w-full">
        <h2 class="font-bold text-[24px] lg:text-[38px] text-primary">
          Find mission aligned creators for your campaign or cause.
        </h2>
        <p class="font-semibold text-xl mt-[24px]">
          We help nonprofits, impact & issue focused organizations
          collaborate with creators to reach audiences more effectively.
        </p>
        <div class="flex items-center mt-[32px]">
          <img src="~/assets/icons/dots-line.svg" />
            <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
              <div class="mx-4 bg-secondary text-white py-2 px-3 rounded-lg">
                Book a Demo
              </div>
            </a>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        src="~/assets/icons/dots-bg-hero.svg"
        class="hero-dots"
      />
    </div>
  </section>
  <!-- / - Section First Impression -->
  <!-- Organization carousel -->
  <section class="container mx-auto px-6 md:px-8 mt-[83px]">
    <div class="flex flex-wrap xl:flex-nowrap items-center justify-center">
      <div v-for="image in heroCarouselImages" class="my-4">
        <img :src="image" class="w-200 mx-4" />
      </div>
    </div>
  </section>

  <!-- /  Organization carousel -->

  <!-- How it works -->
  <div id="howItWorks"></div>
  <section class="container mx-auto px-6 md:px-8 mt-[105px]">
    <h3
      class="uppercase text-center text-primary text-5xl font-semibold leading-tight"
    >
      How it works
    </h3>
    <img
      src="~/assets/images/how-it-works.svg"
      class="mx-auto mt-[74px] hidden lg:block"
    />
    <div class="grid lg:grid-cols-3 gap-x-16">
      <div>
        <img
          src="~/assets/icons/step1.svg"
          class="block lg:hidden mt-[32px] mx-auto mb-8 w-[250px]"
        />
        <h4
          class="text-3xl text-center font-bold text-primary text-[24px] lg:text-left lg:text-[28px]"
        >
          Step 1
        </h4>
        <h5
          class="font-semibold mt-[20px] text-center text-[16px] lg:text-left lg:text-[20px]"
        >
          Outline Your Goals
        </h5>
        <p class="mt-4 text-center lg:text-left">
          We know you have a lot of great ideas but not a lot of time. Our two
          step process allows for you to quickly outline your campaign, goals
          and the communities you’re trying to reach.
        </p>
      </div>
      <div>
        <img
          src="~/assets/icons/step2.svg"
          class="block lg:hidden mt-[32px] mx-auto w-[250px]"
        />
        <h4
          class="text-3xl text-center font-bold text-primary text-[24px] lg:text-left lg:text-[28px]"
        >
          Step 2
        </h4>
        <h5
          class="font-semibold mt-[20px] text-center text-[16px] lg:text-left lg:text-[20px]"
        >
          Review Your Matches
        </h5>
        <p class="mt-4 text-center lg:text-left">
          Let us work our magic! Then it’s your turn to review your personalized
          creator matches with information on their issue area, audience, and
          more.
        </p>
      </div>
      <div>
        <img
          src="~/assets/icons/step3.svg"
          class="block lg:hidden mt-[32px] mx-auto w-[250px]"
        />
        <h4
          class="text-3xl text-center font-bold text-primary text-[24px] lg:text-left lg:text-[28px]"
        >
          Step 3
        </h4>
        <h5
          class="font-semibold mt-[20px] text-center text-[16px] lg:text-left lg:text-[20px]"
        >
          Run Your Campaign
        </h5>

        <p class="mt-4 text-center lg:text-left">
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
  <div id="getInvolved"></div>
  <section class="container mx-auto px-6 md:px-8 mt-[105px]">
    <h3
      class="uppercase text-center text-primary text-[32px] md:text-5xl font-semibold leading-tight"
    >
      Get Involved
    </h3>
    <div
      class="grid grid-cols-2 mt-[74px] content-center border-[3px] border-purple border-solid place-items-center"
    >
      <div
        class="text-center text-[28px] cursor-pointer text-black h-full w-full p-4"
        :class="
          activeBrandCreatorSelector === 'Brands'
            ? `bg-primary text-white`
            : ``
        "
        @click="activeBrandCreatorSelector = 'Brands'"
      >
        Brands
      </div>
      <div
        class="text-center text-[28px] text-black cursor-pointer h-full w-full p-4"
        :class="
          activeBrandCreatorSelector === 'Creators'
            ? `text-white bg-primary`
            : ``
        "
        @click="activeBrandCreatorSelector = 'Creators'"
      >
        Creators
      </div>
    </div>
    <div
      class="grid lg:grid-cols-2 mt-[70px] rounded-lg content-center gap-x-8"
    >
      <div class="mb-12">
        <img :src="activeCarouselImagePath" />
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
            />
            <img v-else :src="circle" class="cursor-pointer h-[20px]" />
          </div>
        </div>
      </div>
      <div>
        <p v-if="activeBrandCreatorSelector === 'Brands'" class="text-[28px] text-primary font-bold">
          Join some of the country’s largest nonprofits & impact organizations
          in working with Social Currant
        </p>
        <p v-if="activeBrandCreatorSelector === 'Creators'" class="text-[28px] text-primary font-bold">
          Collaborate on campaigns with organizations working towards impact and positive change
        </p>
        <div v-if="activeBrandCreatorSelector === 'Brands'" v-for="textPoint in brandPoints" class="flex mt-[24px]">
          <img src="~/assets/icons/bullet-point.svg" class="mr-6" />
          <p>{{ textPoint }}</p>
        </div>
        <div v-if="activeBrandCreatorSelector === 'Creators'" v-for="textPoint in creatorPoints" class="flex mt-[24px]">
          <img src="~/assets/icons/bullet-point.svg" class="mr-6" />
          <p>{{ textPoint }}</p>
        </div>
        <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
          <button class="bg-secondary text-white py-2 px-3 rounded-lg mx-14 mt-8">
            Get Started
          </button>
        </a>
      </div>
    </div>
  </section>
  <!-- / - Get Involved -->

  <!-- About Us -->
  <div id="aboutUs"></div>
  <section class="container mx-auto px-6 md:px-8 mt-32">
    <div>
      <img src="~/assets/icons/about-us-egg-left.svg" class="egg-left" />
    </div>
    <div class="flex flex-col lg:flex-row-reverse">
      <div class="w-full lg:w-[500px]">
        <h4 class="uppercase text-[32px] md:text-5xl text-primary font-semibold leading-tight">
          About Us
        </h4>
        <p class="mb-4 mt-4 uppercase text-[20px] font-semibold text-primary">
          From D.C. to across the world!
        </p>
        <p>
          We’re a creator led platform and managed service focusing on making a
          difference through the power of social media. Once described by the New
          York Times as “Only recently able to buy alcohol” This Gen Z led
          company is on a mission to empower young people and issues we care
          about.
        </p>
      </div>
    </div>
    <!-- mobile version of meet the team with carousel -->
    <div class="block lg:hidden">
      <div class="flex uppercase justify-center cursor-pointer my-8" @click="showMeetTeam = !showMeetTeam">
        <h4 class="mr-2 font-semibold text-xl">Meet the Team</h4>
        <img v-if="showMeetTeam" src="~/assets/icons/drop-arrow-up.svg">
        <img v-else src="~/assets/icons/drop-arrow-down.svg">
      </div>
      <div v-show="showMeetTeam" class="flex flex-nowrap mobile-meet-the-team" style="min-height: 300px;">
        <div v-for="team in teamRow" class="mx-4" style="min-width: 180px; height: 180px;">
          <img
            class="h-full w-full object-cover rounded-full mx-auto mb-8 sm:mb-5"
            :src="team.image"
          />
          <h6
            class="text-center text-primary font-bold text-xl mt-4 mb-1 font-semibold"
          >
            {{ team.name }}
          </h6>
          <p class="text-black text-center">{{ team.desc }}</p>
        </div>
      </div>
    </div>
    <!-- / - mobile version -->
    <div class="flex hidden lg:block">
      <h4
        class="uppercase text-primary font-semibold mt-32 sm:mt-12 text-[38px] leading-tight"
      >
        Meet the Team
      </h4>
    </div>
    <!-- First Row - Team Members -->
    <div
      class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between mb-4 mt-16 hidden lg:flex"
    >
      <div v-for="team in teamFirstRow" class="mb-5">
        <div class="w-40 h-40 mx-auto">
          <img
            class="w-full h-full object-cover rounded-full mx-auto mb-8 sm:mb-5"
            :src="team.image"
          />
        </div>
        <h6
          class="text-center text-primary font-bold text-xl mt-4 mb-1 font-semibold"
        >
          {{ team.name }}
        </h6>
        <p class="text-black text-center">{{ team.desc }}</p>
      </div>
    </div>
    <!-- Second Row - Team Members -->
    <div
      class="flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-between hidden lg:flex"
    >
      <div></div>
      <div v-for="team in teamSecondRow" class="mb-5 mx-2">
        <div class="w-40 h-40 mx-auto">
          <img
            class="w-full h-full object-cover rounded-full mx-auto"
            :src="team.image"
          />
        </div>
        <h6
          class="text-center text-primary font-bold text-xl mt-4 mb-1 font-semibold"
        >
          {{ team.name }}
        </h6>
        <p class="text-black text-center">{{ team.desc }}</p>
      </div>
      <div></div>
    </div>
  </section>
  <div class="container mx-auto px-6 md:px-8 mt-16 relative">
    <img
      src="~/assets/icons/about-us-line-left.svg"
      style="position: absolute; left: -100px"
      class="z-0 overflow-hidden"
    />
    <img
      src="~/assets/icons/about-us-line-right.svg"
      class="overflow-hidden"
      style="position: absolute; right: -100px"
    />
  </div>
  <!-- / About Us -->

  <!-- Ways to Apply Social Currant -->
  <div class="relative">
    <div
      :class="`apply-currant-bg-` + activeApplyCurrant">
    </div>
  </div>
  <div id="help"></div>
  <section class="container mx-auto px-6 md:px-8 mt-36 md:mt-64">
    <h3 class="uppercase text-primary text-[32px] md:text-5xl text-center md:text-left font-semibold leading-tight mb-16">
      Ways to Apply Social Currant
    </h3>
    <div class="grid grid-cols-3 gap-0 mt-4 lg:mt-24">
      <div class="col-span-3 lg:col-span-2">
        <!-- Persuasion -->
        <div
          class="cursor-pointer persusaion-height apply-currant-mobile-container"
          :class="activeApplyCurrant === 'persuasion' ? `apply-currant-mobile-bg-active`: ``"
          @click="activeApplyCurrant = 'persuasion'; activeApplyCurrantPhone=iphoneImage[0]">
          <div class="flex items-center">
            <div class="mr-3">
              <img src="~/assets/images/apply/persuasion.png" class="h-[27px] w-[27px] md:h-full md:w-full"/>
            </div>
            <div>
              <h4 class="font-semibold text-lg md:text-[28px]">
                Persuasion & Narrative Change
              </h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            Identify creators from the communities you’re trying to reach and have
            them share their lived experiences around your issues to change
            narrative and persuade audiences.
          </p>
        </div>
        <!-- Education -->
        <div
          class="cursor-pointer h-44 apply-currant-mobile-container"
          :class="activeApplyCurrant === 'education' ? `apply-currant-mobile-bg-active`: ``"
          @click="activeApplyCurrant = 'education' ; activeApplyCurrantPhone=iphoneImage[1]">
          <div class="flex items-center">
            <div class="mr-3">
              <img src="~/assets/images/apply/education.png" class="h-[27px] w-[27px] md:h-full md:w-full"/>
            </div>
            <div>
              <h4 class="font-semibold text-lg md:text-[28px]">Education &amp; Awareness</h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
             Identify creators who go to sources of information and work with them
            to spread key information in rapid response moments.
          </p>
        </div>
        <!-- Activation -->
        <div
          class="cursor-pointer h-44 apply-currant-mobile-container"
          :class="activeApplyCurrant === 'activation' ? `apply-currant-mobile-bg-active`: ``"
          @click="activeApplyCurrant = 'activation' ; activeApplyCurrantPhone=iphoneImage[2]">
          <div class="flex items-center">
            <div class="mr-3">
              <img src="~/assets/images/apply/activation.png" class="h-[27px] w-[27px] md:h-full md:w-full"/>
            </div>
            <div>
              <h4 class="font-semibold text-lg md:text-[28px]">Activation</h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            Find creators good at driving their followers to take action and work
            with them to activate petition signatures, calls to representatives
            and more.
          </p>
        </div>
        <!-- Ads -->
        <div
          class="cursor-pointer h-44 apply-currant-mobile-container"
          :class="activeApplyCurrant === 'ads' ? `apply-currant-mobile-bg-active`: ``"
          @click="activeApplyCurrant = 'ads' ; activeApplyCurrantPhone=iphoneImage[3]">
          <div class="flex items-center">
            <div class="mr-3">
              <img src="~/assets/images/apply/ads.png" class="h-[27px] w-[27px] md:h-full md:w-full"/>
            </div>
            <div>
              <h4 class="font-semibold text-lg md:text-[28px]">
                Ads & Other Comms Strategies
              </h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            Identify creators who create high converting content and work with
            them to produce ads and other forms of creative.
          </p>
        </div>
        <!-- Build -->
        <div class="cursor-pointer build-height apply-currant-mobile-container"
          :class="activeApplyCurrant === 'build' ? `apply-currant-mobile-bg-active`: ``"
          @click="activeApplyCurrant = 'build'; activeApplyCurrantPhone=iphoneImage[4]">
          <div class="flex items-center">
            <div class="mr-3">
              <img src="~/assets/images/apply/build.png" class="h-[27px] w-[27px] md:h-full md:w-full"/>
            </div>
            <div>
              <h4 class="font-semibold text-lg md:text-[28px]">
                Build an integrated strategy
              </h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            Build an integrated communications strategy that leverages creators to
            create content, serve as strategic partners, talk to press and a lot
            more through our platform.
          </p>
        </div>
        <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
          <button
            class="mt-5 border-secondary border-2 bg-secondary text-white font-medium border-secondary px-6 py-2 rounded-lg"
          >
            Get Started
          </button>
        </a>
      </div>
      <div class="hidden lg:block">
        <img  :src="activeApplyCurrantPhone" class="mt-[60px] mx-auto" />
      </div>
    </div>
  </section>
  <Testimonials></Testimonials>

  <!-- footer -->
  <footer id="footer" class="bg-primary text-white min-h-full relative mt-84">
    <div class="container mx-auto px-6 md:px-8 mt-48 pt-28 text-center md:text-left ">
      <!-- Sign Up Links -->
      <div
        class="bg-white text-black container mx-auto px-6 md:px-8 absolute drop-shadow-lg rounded-lg mx-auto py-8"
        style="top: -80px; width: 85%"
      >
        <div
          class="flex flex-col lg:flex-row justify-left lg:justify-between lg:items-center"
        >
          <div>
            <h4 class="text-3xl md:text-4xl font-bold">It's Time To Invest In People.</h4>
            <p>Work with creators today!</p>
          </div>
          <div class="my-4">
            <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
            <button
              class="border-secondary border-2 bg-secondary text-white font-medium border-secondary px-6 py-2 rounded-lg"
            >
              Sign up for a Demo
            </button>
            </a>
          </div>
        </div>
      </div>

      <div class="uppercase text-lg font-semibold mt-24 lg:mt-4 text-left">
        We can help you connect with creators
      </div>
      <h4 class="text-[32px] md:text-3xl lg:w-2/4 mt-16 font-semibold text-left">
        Stay updated on all things trending in the influencer space.
      </h4>
      <a href="https://manage.kmail-lists.com/subscriptions/subscribe?a=WQW4wi&g=YpNHVb">
      <button class="border-secondary border-2 bg-secondary text-white font-medium border-secondary px-6 py-2 rounded-lg my-12 text-left block">
        Subscribe
      </button>
    </a>
      <div class="flex">
        <div v-for="socials in socialMediaAccounts">
          <a :href="socials.url">
            <img :src="socials.image" class="mx-1" />
          </a>
        </div>
      </div>
      <hr class="border-white my-12" />
      <img src="~/assets/icons/logo-footer.svg" />
      <p class="py-8">A platform by Social Currant.</p>
    </div>
  </footer>
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

// brand carousel images
import phonePersuasion from "~/assets/images/apply/phone-persuasion.png";
import phoneEducation from "~/assets/images/apply/phone-education.png";
import phoneActivation from "~/assets/images/apply/phone-activation.png";
import phoneAds from "~/assets/images/apply/phone-ads.png";
import phoneBuild from "~/assets/images/apply/phone-build.png";

// creator carousel images
import creatorOne from "~/assets/images/creators/1.png";
import creatorTwo from "~/assets/images/creators/2.png";
import creatorThree from "~/assets/images/creators/3.png";

// components
import { defineComponent } from 'vue';
import KlaviyoForm from './components/KlaviyoForm.vue';

// social icons
import linkedin from "~/assets/icons/social/li.svg";
import facebook from "~/assets/icons/social/fb.svg";
import instagram from "~/assets/icons/social/ig.svg";
import twitter from "~/assets/icons/social/tw.svg";

import commChangeAction from "~/assets/images/hero-carousel/comm-change-action.png";
import nextGenAmerica from "~/assets/images/hero-carousel/nextgen-america.png";
import capitolHistorical from "~/assets/images/hero-carousel/capitol-historical.png";
import repairTheWorld from "~/assets/images/hero-carousel/repair-the-world.png";
import leftHook from "~/assets/images/hero-carousel/left-hook.png";
import jvaCampaigns from "~/assets/images/hero-carousel/jva-campaigns.png";
import mtrNewYork from "~/assets/images/hero-carousel/mtr-new-york.png";

// team
import will from "~/assets/images/team/will.png";
import erika from "~/assets/images/team/erika.png";
import sisir from "~/assets/images/team/sisir.png";
import ashwath from "~/assets/images/team/ashwath.png";
import ellie from "~/assets/images/team/ellie.png";
import jasmine from "~/assets/images/team/jasmine.png";
import vidyut from "~/assets/images/team/vidyut.png";
import abby from "~/assets/images/team/abby.png";
import aashna from "~/assets/images/team/aashna.png";

defineComponent({
  // components: {
  //   KlaviyoForm,
  // },
  setup() {
    useHead({
      title: "Currant | Creator Marketing Simplified",
      meta: [{ name: "description", content: "Social Currant." }],
    });

    // Your component setup logic here

    return {};
  },
});

const applyCurrantOptions = ["persuasion", "education", "activation", "ads", "build"]
const activeApplyCurrant = ref('persuasion'); // persuasion, education, activation, ads, build

const headerOverlay = ref(false);
const showMeetTeam = ref(false);

const activeCarouselImageIndex = ref(1);
const activeBrandCreatorSelector = ref("Brands");
const iphoneImage=[phonePersuasion,phoneEducation,phoneActivation,phoneAds, phoneBuild ]
const activeApplyCurrantPhone=ref(iphoneImage[0])

const activeCarouselImagePath = computed(() => {
  const imageMap = {
    1: activeBrandCreatorSelector.value === 'Brands' ? brandOne: creatorOne,
    2: activeBrandCreatorSelector.value === 'Brands' ? brandTwo: creatorTwo,
    3: activeBrandCreatorSelector.value === 'Brands' ? brandThree: creatorThree,
  };
  return imageMap[activeCarouselImageIndex.value];
});

onMounted(() => {
  setInterval(() => {
    if (activeCarouselImageIndex.value === 0 || activeCarouselImageIndex.value  === 3) {
      activeCarouselImageIndex.value = 1;
    } else {
      activeCarouselImageIndex.value += 1;
    }

    // const activeApplyCurrantIndex = applyCurrantOptions.indexOf(activeApplyCurrant.value)
    // const nextApplyCurrantIndex = (activeApplyCurrantIndex + 1) % applyCurrantOptions.length
    // activeApplyCurrant.value = applyCurrantOptions[nextApplyCurrantIndex]

    // activeApplyCurrantPhone.value = iphoneImage[nextApplyCurrantIndex]


  }, 7000);


});


watch(activeBrandCreatorSelector, () => {
  // reset the image index to 1
  activeCarouselImageIndex.value = 1;
});

const brandPoints = [
  "Leverage years of expertise and an impact focused creator network.",
  "Spend less time worrying about finding creators and more time focused on working with them.",
  "Reach a wider audience, leveraging the power of social media and influencers.",
];

const creatorPoints = [
  "Connect and collaborate with organizations and brands that align with your values.",
  "Get more deals with less effort. We'll notify you when you are requested to work on a campaign.",
  "Join a network of mission driven content creators working towards impact and change.",
]

const heroCarouselImages = [
  commChangeAction,
  nextGenAmerica,
  capitolHistorical,
  repairTheWorld,
  leftHook,
  jvaCampaigns,
  mtrNewYork
];

const socialMediaAccounts = [
  {
    image: linkedin,
    url: "https://www.linkedin.com/company/socialcurrant/"
  },
  {
    image: facebook,
    url: "https://www.facebook.com/socialcurrant/"
  },
  {
    image: instagram,
    url: "https://www.instagram.com/socialcurrant/"
  },
  {
    image: twitter,
    url: "https://twitter.com/socialcurrant?lang=en"
  }
]

const teamFirstRow = [
  {
    name: "Ashwath Narayanan",
    desc: "Co-Founder & CEO",
    image: ashwath
  },
  {
    name: "Vidyut Ghuwalewala",
    desc: "Co-Founder & COO",
    image: vidyut
  },
  {
    name: "Jasmine McCarton",
    desc: "Chief Design Officer",
    image: jasmine
  },
  {
    name: "Ellie Artone",
    desc: "Chief Creator Officer",
    image: ellie
  },
  {
    name: "William Cheshier",
    desc: "Chief Technology Officer",
    image: will
  },
];
const teamSecondRow = [
  {
    name: "Aashna Malhotra",
    desc: "Influencer Strategist",
    image: aashna
  },
  {
    name: "Abby Vang",
    desc: "Influencer Strategist",
    image: abby
  },
  {
    name: "Erika Alexandra Aquino Enrique",
    desc: "Frontend Engineer",
    image: erika
  },
  {
    name: "Sisir Ghimire Chettri",
    desc: "Software Engineer",
    image: sisir
  },
];

const teamRow = computed(() => {
  return teamFirstRow.concat(teamSecondRow);
})

const headerLinks = [
  // {
  //   text: "How it works",
  //   scrollTo: "howItWorks"
  // },
  {
    text: "Brands",
    scrollTo: "getInvolved"
  },
  {
    text: "Creators",
    scrollTo: "getInvolved"
  },
  {
    text: "About Us",
    scrollTo: "aboutUs"
  },
  {
    text: "How we help",
    scrollTo: "help"
  },
];
function scrollToDiv(scrollElement, navName) {
  const targetElement = document.getElementById(scrollElement);
  if (targetElement) {
    if (navName === "Brands" || navName === "Creators") {
      activeBrandCreatorSelector.value = navName;
    }
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
<style scoped lang="scss">
.hero-dots {
  position: absolute;
  right: -2rem;
  top: -5rem;
  z-index: -1;
  height: 20rem;
  overflow: hidden;
  display: inline-block;
}

.egg-left {
  position: absolute;
  right: 50%;
  z-index: -1;
  height: 680px;
  width: 800px;
}

.circle-gradient {
  background: #80a3eb;
  filter: blur(250px);
}

.gradient-wrapper {
  width: 354px;
  height: 352px;
  left: -70px;
  top: 5015px;
  z-index: -10;
}

// persuasion, education, activation, ads, build
$applyStatus: (
  persuasion: (19, 10),
  education: (30, 10),
  activation: (41, 10),
  ads: (52, 10),
  build: (63, 10),
);

$persuasion: persuasion;
$build: build;
.persusaion-height, .build-height {
  height: 22%;
  @media (min-width: 375px) { // xxs
	  height: 11rem;
  }
}
.build-height {
	height: 25%;
}
.apply-currant-mobile-container {
  @media (max-width: 374px) { // xxs
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.apply-currant-mobile-bg-active {
  @media (max-width: 374px) { // xxs
    margin: 0px -1.5rem;
    background: #c8d8ff;
    padding: 0 1.5rem;
  }
}

@each $key, $value in $applyStatus {

  .apply-currant-bg-#{$key} {
    position: absolute;
    width: 100%;
    z-index: -1;
    display: block;
    // default values for small screen
    background: #c8d8ff;

    @media (min-width: 375px) { // xxs
      top: (nth($value, 1) - 6) + rem;
      height: 11rem;
      @if $key == build {
        top: (nth($value, 1) - 7) + rem;
        height: 12rem;
      }
    }

    @media (min-width: 404px) { // xs
      top: (nth($value, 1) - 6) + rem;
      height: 11rem;
      @if $key == build {
        top: (nth($value, 1) - 7.5) + rem;
        height: 12rem;
      }
    }
    @media (min-width: 582px) { // sm
      top: (nth($value, 1) - 9) + rem;
      height: 9rem;
    }
    @media (min-width: 768px) { // md
      top: (nth($value, 1) + 2) + rem;
      height: 9rem;
    }
    @media (min-width: 1024px) { // lg
      top: nth($value, 1) + rem;
      height: 11rem;
      background: linear-gradient(91.35deg, #c8d8ff 46.61%, #2565f4 98.37%);
    }
    @media (min-width: 1280px) { // xl
      top: nth($value, 1) + rem; // increased this by 10
      height: 10rem;
      background: linear-gradient(91.35deg, #c8d8ff 46.61%, #2565f4 98.37%);
    }
    @media (min-width: 1536px) { // xxl
      top: nth($value, 1) + rem; // increased this by 10
      height: 10rem;
      background: linear-gradient(91.35deg, #c8d8ff 46.61%, #2565f4 98.37%);
    }
  }
}

.mobile-meet-the-team {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.mobile-meet-the-team::-webkit-scrollbar {
  display: none;
}

</style>
