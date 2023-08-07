<template class="z-0">
  <div>
    <HeaderNav @activate-selector="activateSelector" />
    <HeroSection />
    <!-- / - Section First Impression -->
    <img
      class="background-gradient"
      src="~/assets/images/backgroundgradientcircle.svg"
    >
    <OrganizationCarousel />
    <HowItWorks />
    <GetInvolved />
    <AboutUs />

    <!-- Ways to Apply Social Currant -->
    <div class="relative">
      <div :class="`apply-currant-bg-` + activeApplyCurrant" />
    </div>
    <div id="help" />
    <section class="container mx-auto px-6 md:px-8 mt-36 md:mt-64">
      <h3
        class="uppercase text-primary text-[32px] md:text-5xl text-center md:text-left font-semibold leading-tight mb-16"
      >
        Ways to Apply Social Currant
      </h3>
      <div class="grid grid-cols-3 gap-0 mt-4 lg:mt-24">
        <div class="col-span-3 lg:col-span-2">
          <!-- Persuasion -->
          <div
            class="cursor-pointer persusaion-height apply-currant-mobile-container"
            :class="activeApplyCurrant === 'persuasion'
              ? `apply-currant-mobile-bg-active`
              : ``
            "
            @click="
              activeApplyCurrant = 'persuasion';
              activeApplyCurrantPhone = iphoneImage[0];
            "
          >
            <div class="flex items-center">
              <div class="mr-3">
                <img
                  src="~/assets/images/apply/persuasion.png"
                  class="h-[27px] w-[27px] md:h-full md:w-full"
                >
              </div>
              <div>
                <h4 class="font-semibold text-lg md:text-[28px]">
                  Persuasion & Narrative Change
                </h4>
              </div>
            </div>
            <p class="lg:mr-32 mt-2">
              Identify creators from the communities you’re trying to reach and
              have them share their lived experiences around your issues to change
              narrative and persuade audiences.
            </p>
          </div>
          <!-- Education -->
          <div
            class="cursor-pointer h-44 apply-currant-mobile-container"
            :class="activeApplyCurrant === 'education'
              ? `apply-currant-mobile-bg-active`
              : ``
            "
            @click="
              activeApplyCurrant = 'education';
              activeApplyCurrantPhone = iphoneImage[1];
            "
          >
            <div class="flex items-center">
              <div class="mr-3">
                <img
                  src="~/assets/images/apply/education.png"
                  class="h-[27px] w-[27px] md:h-full md:w-full"
                >
              </div>
              <div>
                <h4 class="font-semibold text-lg md:text-[28px]">
                  Education &amp; Awareness
                </h4>
              </div>
            </div>
            <p class="lg:mr-32 mt-2">
              Identify creators who go to sources of information and work with them to spread key
              information in rapid response moments.
            </p>
          </div>
          <!-- Activation -->
          <div
            class="cursor-pointer h-44 apply-currant-mobile-container"
            :class="activeApplyCurrant === 'activation'
              ? `apply-currant-mobile-bg-active`
              : ``
            "
            @click="
              activeApplyCurrant = 'activation';
              activeApplyCurrantPhone = iphoneImage[2];
            "
          >
            <div class="flex items-center">
              <div class="mr-3">
                <img
                  src="~/assets/images/apply/activation.png"
                  class="h-[27px] w-[27px] md:h-full md:w-full"
                >
              </div>
              <div>
                <h4 class="font-semibold text-lg md:text-[28px]">
                  Activation
                </h4>
              </div>
            </div>
            <p class="lg:mr-32 mt-2">
              Find creators good at driving their followers to take action and
              work with them to activate petition signatures, calls to
              representatives and more.
            </p>
          </div>
          <!-- Ads -->
          <div
            class="cursor-pointer h-44 apply-currant-mobile-container"
            :class="activeApplyCurrant === 'ads' ? `apply-currant-mobile-bg-active` : ``
            "
            @click="
              activeApplyCurrant = 'ads';
              activeApplyCurrantPhone = iphoneImage[3];
            "
          >
            <div class="flex items-center">
              <div class="mr-3">
                <img
                  src="~/assets/images/apply/ads.png"
                  class="h-[27px] w-[27px] md:h-full md:w-full"
                >
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
          <div
            class="cursor-pointer build-height apply-currant-mobile-container"
            :class="activeApplyCurrant === 'build'
              ? `apply-currant-mobile-bg-active`
              : ``
            "
            @click="
              activeApplyCurrant = 'build';
              activeApplyCurrantPhone = iphoneImage[4];
            "
          >
            <div class="flex items-center">
              <div class="mr-3">
                <img
                  src="~/assets/images/apply/build.png"
                  class="h-[27px] w-[27px] md:h-full md:w-full"
                >
              </div>
              <div>
                <h4 class="font-semibold text-lg md:text-[28px]">
                  Build an integrated strategy
                </h4>
              </div>
            </div>
            <p class="lg:mr-32 mt-2">
              Build an integrated communications strategy that leverages creators
              to create content, serve as strategic partners, talk to press and a
              lot more through our platform.
            </p>
          </div>
          <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
            <button
              class="mt-5 border-secondary border-2 bg-secondary text-white font-medium border-secondary text-xl px-3 py-1.5 rounded-lg"
            >
              Get Started
            </button>
          </a>
        </div>
        <div class="hidden lg:block">
          <img
            :src="activeApplyCurrantPhone"
            class="mt-[60px] mx-auto"
          >
        </div>
      </div>
    </section>
    <Testimonials />

    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup>

// avatar placeholder
// import avatar from "~/assets/icons/avatar-placeholder.svg";



// brand carousel images
import phonePersuasion from "~/assets/images/apply/phone-persuasion.png";
import phoneEducation from "~/assets/images/apply/phone-education.png";
import phoneActivation from "~/assets/images/apply/phone-activation.png";
import phoneAds from "~/assets/images/apply/phone-ads.png";
import phoneBuild from "~/assets/images/apply/phone-build.png";


// components
import { defineComponent } from "vue";
// import KlaviyoForm from "./components/KlaviyoForm.vue";





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

// global state
const headerOverlay = useState('headerOverlay', () => false)

const applyCurrantOptions = [
  "persuasion",
  "education",
  "activation",
  "ads",
  "build",
];
const activeApplyCurrant = ref("persuasion"); // persuasion, education, activation, ads, build


const iphoneImage = [
  phonePersuasion,
  phoneEducation,
  phoneActivation,
  phoneAds,
  phoneBuild,
];
const activeApplyCurrantPhone = ref(iphoneImage[0]);



onMounted(() => {
  setInterval(() => {

    const activeApplyCurrantIndex = applyCurrantOptions.indexOf(
      activeApplyCurrant.value
    );
    const nextApplyCurrantIndex =
      (activeApplyCurrantIndex + 1) % applyCurrantOptions.length;
    activeApplyCurrant.value = applyCurrantOptions[nextApplyCurrantIndex];

    activeApplyCurrantPhone.value = iphoneImage[nextApplyCurrantIndex];
  }, 7000);
});



function activateSelector(headerNav) {
  activeBrandCreatorSelector.value = headerNav;
}

</script>
<style scoped lang="scss">


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
  persuasion: (19,
    10,
  ),
  education: (30,
    10,
  ),
  activation: (41,
    10,
  ),
  ads: (52,
    10,
  ),
  build: (63,
    10,
  ),
);

$persuasion: persuasion;
$build: build;

.persusaion-height,
.build-height {
  height: 22%;

  @media (min-width: 375px) {
    // xxs
    height: 11rem;
  }
}

.build-height {
  height: 25%;

  @media (min-width: 375px) {
    // xxs
    height: 11rem;
  }
}

.apply-currant-mobile-container {
  @media (max-width: 374px) {
    // xxs
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.apply-currant-mobile-bg-active {
  @media (max-width: 374px) {
    // xxs
    margin: 0px -1.5rem;
    background: #c8d8ff;
    padding: 0 1.5rem;
  }
}

@each $key,
$value in $applyStatus {
  .apply-currant-bg-#{$key} {
    position: absolute;
    width: 100%;
    z-index: -1;
    display: block;
    // default values for small screen
    background: #c8d8ff;

    @media (min-width: 375px) {
      // xxs
      top: (nth($value, 1) - 6) + rem;
      height: 11rem;

      @if $key ==build {
        top: (nth($value, 1) - 7) + rem;
        height: 12rem;
      }
    }

    @media (min-width: 404px) {
      // xs
      top: (nth($value, 1) - 6) + rem;
      height: 11rem;

      @if $key ==build {
        top: (nth($value, 1) - 7.5) + rem;
        height: 12rem;
      }
    }

    @media (min-width: 582px) {
      // sm
      top: (nth($value, 1) - 9) + rem;
      height: 9rem;
    }

    @media (min-width: 768px) {
      // md
      top: (nth($value, 1) + 2) + rem;
      height: 9rem;
    }

    @media (min-width: 1024px) {
      // lg
      top: nth($value, 1) + rem;
      height: 11rem;
      background: linear-gradient(91.35deg, #c8d8ff 46.61%, #2565f4 98.37%);
    }

    @media (min-width: 1280px) {
      // xl
      top: nth($value, 1) + rem; // increased this by 10
      height: 10rem;
      background: linear-gradient(91.35deg, #c8d8ff 46.61%, #2565f4 98.37%);
    }

    @media (min-width: 1536px) {
      // xxl
      top: nth($value, 1) + rem; // increased this by 10
      height: 10rem;
      background: linear-gradient(91.35deg, #c8d8ff 46.61%, #2565f4 98.37%);
    }
  }
}

.mobile-meet-the-team {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.mobile-meet-the-team::-webkit-scrollbar {
  display: none;
}

.hover-button-blue:hover {
  background: #4780ff;
}

.background-gradient {
  position: absolute;
  top: 108px;
  z-index: -1;
}

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
