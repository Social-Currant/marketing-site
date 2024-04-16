<template>
  <div class="relative">
    <div :class="`apply-currant-bg-` + activeApplyCurrant" />
  </div>
  <div id="help" />
  <section class="container mx-auto px-6 md:px-8 mt-36 md:mt-64">
    <h3
      class="uppercase text-primary text-[32px] md:text-5xl text-center md:text-left font-semibold leading-tight mb-16"
    >
      {{ pageData.fields.title }}
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
                {{ pageData.fields.subtitles[0] }}
              </h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            {{ pageData.fields.paragraphs[0] }}
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
                {{ pageData.fields.subtitles[1] }}
              </h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            {{ pageData.fields.paragraphs[1] }}
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
                {{ pageData.fields.subtitles[2] }}
              </h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            {{ pageData.fields.paragraphs[2] }}
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
                {{ pageData.fields.subtitles[3] }}
              </h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            {{ pageData.fields.paragraphs[3] }}
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
                {{ pageData.fields.subtitles[4] }}
              </h4>
            </div>
          </div>
          <p class="lg:mr-32 mt-2">
            {{ pageData.fields.paragraphs[4] }}
          </p>
        </div>
        <a href="https://calendly.com/ashwath-2/30min?month=2023-06">
          <button
            class="mt-5 border-secondary border-2 bg-secondary text-white font-medium border-secondary text-xl px-3 py-1.5 rounded-lg"
          >
            {{ pageData.fields.btnText }}
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
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const [pageData] = await $contentfulClient.getEntries({
  content_type: 'useCases',
  'metadata.tags.sys.id[in]': 'homePage'
}).then((pageData) => {
  pendingPage.value = false
  return [pageData.items[0]];
}).catch(console.error);

// brand carousel images
const applyCurrantOptions = [
  "persuasion",
  "education",
  "activation",
  "ads",
  "build",
];
const activeApplyCurrant = ref("persuasion"); // persuasion, education, activation, ads, build


const iphoneImage = [
  pageData.fields.media1.fields.file.url,
  pageData.fields.media2.fields.file.url,
  pageData.fields.media3.fields.file.url,
  pageData.fields.media4.fields.file.url,
  pageData.fields.media5.fields.file.url,
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




</script>

<style lang="scss">
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
.hover-button-blue:hover {
  background: #4780ff;
}


</style>