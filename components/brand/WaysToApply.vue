<template>
  <div id="help" />
  <section
    ref="waysToApply"
    class="container mx-auto px-6 md:px-8 mt-36 relative"
  >
    <h3
      class="uppercase text-primary text-[32px] md:text-5xl text-center md:text-center font-semibold leading-tight mb-16"
    >
      {{ pageData.fields.title }}
    </h3>
    <div class="grid grid-cols-3 gap-0 mt-4 lg:mt-24">
      <div class="col-span-3 lg:col-span-2">
        <div
          class="absolute w-screen z-[-1]"
          :style="blueBackground"
        />
        <!-- Persuasion -->
        <div
          id="persuasion"
          class="cursor-pointer py-5"
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
          id="education"
          class="cursor-pointer py-5"
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
          id="activation"
          class="cursor-pointer py-5"
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
          id="ads"
          class="cursor-pointer py-5"
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
          id="build"
          class="cursor-pointer py-5"
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
        <button
          class="mt-5 border-secondary border-2 bg-secondary text-white font-medium text-xl px-3 py-1.5 rounded-lg hover:bg-[#4780ff]"
          @click="navigateTo('/book-a-demo')"
        >
          {{ pageData.fields.btnText }}
        </button>
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

const waysToApply = ref(null)

const blueBackground = computed(() => {
  if (waysToApply.value) {
    const activeDiv = document.querySelector(`#${activeApplyCurrant.value}`);
    if (!activeDiv) {
      return {}
    }
    const activeDivHeight = activeDiv.clientHeight
    const activeDivTop = activeDiv.offsetTop
    const paddingLeft = parseInt(window.getComputedStyle(waysToApply.value).paddingLeft);
    const activeDivLeft = activeDiv.getBoundingClientRect().left
    return {
      background: 'linear-gradient(91.35deg, #c8d8ff 46.61%, #2565f4 98.37%)',
      height: `${activeDivHeight}px`,
      top: `${activeDivTop}px`,
      left: `-${activeDivLeft - paddingLeft}px`,
    };
  }
});


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