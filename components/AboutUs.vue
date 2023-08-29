<template>
  <!-- About Us -->
  <div id="aboutUs" />
  <section class="container mx-auto px-6 md:px-8 mt-12">
    <div>
      <img
        src="~/assets/icons/about-us-egg-left.svg"
        class="egg-left"
      >
    </div>
    <div>
      <img
        class="purple-shape"
        src="~/assets/images/purpleshape.svg"
      >
    </div>
    <div class="flex flex-col lg:flex-row-reverse">
      <div class="w-full lg:w-[500px] text-center md:text-left">
        <h4 class="uppercase text-[32px] md:text-5xl text-primary font-semibold leading-tight">
          {{ pageData.fields.title }}
        </h4>
        <p class="mb-4 mt-4 text-[20px] font-semibold text-primary">
          {{ pageData.fields.subtitle }}
        </p>
        <RichText
          style="margin-top: 0; padding: 0;"
          :content="pageData.fields.paragraph"
        />
      </div>
    </div>
    <!-- mobile version of meet the team with carousel -->
    <div class="block lg:hidden">
      <div
        class="flex uppercase justify-center cursor-pointer my-8"
        @click="showMeetTeam = !showMeetTeam"
      >
        <h4 class="mr-2 font-semibold text-xl text-primary">
          {{ pageData.fields.team }}
        </h4>
        <img
          v-if="showMeetTeam"
          src="~/assets/icons/drop-arrow-up.svg"
        >
        <img
          v-else
          src="~/assets/icons/drop-arrow-down.svg"
        >
      </div>
      <div
        v-show="showMeetTeam"
        class="flex flex-nowrap mobile-meet-the-team"
        style="min-height: 300px"
      >
        <div
          v-for="(team, index) in teamRow"
          :key="`teamrow-` + index"
          class="mx-4"
          style="min-width: 180px; height: 180px"
        >
          <img
            class="h-full w-full object-cover rounded-full mx-auto mb-8 sm:mb-5"
            :src="team.image"
          >
          <h6 class="text-center text-primary font-bold text-xl mt-4 mb-1 font-semibold">
            {{ team.name }}
          </h6>
          <p class="text-black text-center">
            {{ team.desc }}
          </p>
        </div>
      </div>
    </div>
    <!-- / - mobile version -->
    <div class="flex hidden lg:block">
      <h4 class="uppercase text-primary font-semibold mt-32 sm:mt-12 text-[38px] leading-tight">
        {{ pageData.fields.team }}
      </h4>
    </div>
    <!-- First Row - Team Members -->
    <div class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between mb-4 mt-16 hidden lg:flex">
      <div
        v-for="team in teamFirstRow"
        :key="`team-` + team.name"
        class="mb-5"
      >
        <div class="w-40 h-40 mx-auto">
          <img
            class="w-full h-full object-cover rounded-full mx-auto mb-8 sm:mb-5"
            :src="team.image"
          >
        </div>
        <h6 class="text-center text-primary font-bold text-xl mt-4 mb-1 font-semibold">
          {{ team.name }}
        </h6>
        <p class="text-black text-center">
          {{ team.desc }}
        </p>
      </div>
    </div>
    <!-- Second Row - Team Members -->
    <div class="flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-between hidden lg:flex">
      <div />
      <div
        v-for="team in teamSecondRow"
        :key="`team-` + team.name"
        class="mb-5 mx-2"
      >
        <div class="w-40 h-40 mx-auto">
          <img
            class="w-full h-full object-cover rounded-full mx-auto"
            :src="team.image"
          >
        </div>
        <h6 class="text-center text-primary font-bold text-xl mt-4 mb-1 font-semibold">
          {{ team.name }}
        </h6>
        <p class="text-black text-center">
          {{ team.desc }}
        </p>
      </div>
      <div />
    </div>
  </section>
  <div class="container mx-auto px-6 md:px-8 mt-16 relative">
    <img
      src="~/assets/icons/about-us-line-left.svg"
      style="position: absolute; left: -100px"
      class="z-0 overflow-hidden"
    >
    <img
      src="~/assets/icons/about-us-line-right.svg"
      class="overflow-hidden"
      style="position: absolute; right: -100px"
    >
  </div>
</template>

<script setup>
const { $contentfulClient } = useNuxtApp()
const pendingPage = ref(true)

const [pageData, assets] = await $contentfulClient.getEntries({
  content_type: 'aboutUs',
  'metadata.tags.sys.id[in]': 'homePage'
}).then((pageData) => {
  pendingPage.value = false
  return [pageData.items[0], pageData.includes.Asset];
}).catch(console.error);

const teamFirstRow = [];
const teamSecondRow = [];

for (let i = 0; i < assets.length; i++) {
  const asset = assets[i];
  
  if (asset.fields.description.includes("Chief ")) {
    teamFirstRow.push({
      name: asset.fields.title,
      desc: asset.fields.description,
      image: asset.fields.file.url,
    });
  }  else {
    teamSecondRow.push({
      name: asset.fields.title,
      desc: asset.fields.description,
      image: asset.fields.file.url,
    });
  }
}

const teamRow = computed(() => {
  return teamFirstRow.concat(teamSecondRow);
});

const showMeetTeam=ref(false)

</script>

<style lang="scss" scoped>
.egg-left {
  position: absolute;
  right: 50%;
  z-index: -1;
  height: 680px;
  width: 800px;
}
.purple-shape {
  position: absolute;
  z-index: -1;
  right: max(calc(50% - 800px), 0px);
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
</style>