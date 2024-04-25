<template>
  <!-- About Us -->
  <div id="aboutUs" />
  <section class="container mx-auto px-6 md:px-8 lg:mt-12">
    <div class="relative mb-6">
      <div class="lg:absolute md:text-left lg:p-14">
        <h4 class=" p-4 sm:p-8 lg:p-0 max-w-[240] lg:max-w-none absolute lg:static text-[32px] mb-6 md:text-5xl text-primary leading-tight font-bold">
          {{ pageData.fields.title }}
        </h4>
        <RichText
          class="hidden lg:block font-semibold text-black text-xl "
          style="margin-top: 0; padding: 0;"
          :content="pageData.fields.paragraph"
        />
      </div>
      
      <img
        class=" z-[-1] w-full lg:block"
        src="~/assets/images/Illustration.png"
      >
    </div>
    <RichText
      class="lg:hidden text-center lg:text-left block font-semibold text-black text-xl "
      style="margin-top: 0; padding: 0;"
      :content="pageData.fields.paragraph"
    />
    <div class="flex flex-col lg:flex-row-reverse" />
 
    <h4 class="uppercase text-primary text-center font-semibold mb-6 lg:mb-8 mt-12 lg:mt-14 text-[32px] lg:text-[50px] leading-tight">
      Our Mission
    </h4>
    <p class="text-black text-xl text-inter text-center lg:text-left font-['Inter'] ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc scelerisque. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Vitae et leo duis ut. Nisl suscipit adipiscing bibendum est ultricies integer. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.
    </p>
    
    <h4 class="uppercase text-primary text-center font-semibold mb-6 lg:mb-8 mt-12 lg:mt-14 text-[32px] lg:text-[50px] leading-tight">
      {{ pageData.fields.team }}
    </h4>
   
    <!-- mobile version of meet the team with carousel -->
    <div class="block lg:hidden">
      <div
        class="flex flex-nowrap mobile-meet-the-team"
      >
        <div
          v-for="(team, index) in teamRow"
          :key="`teamrow-` + index"
          class="mx-4"
        >
          <img
            class="object-cover rounded-full mx-auto mb-8 sm:mb-5 min-w-[180px] h-[180px]"
            :src="team.image"
          >
          <h6 class="text-center text-primary text-xl mt-4 mb-1 font-semibold">
            {{ team.name }}
          </h6>
          <p class="text-black text-center">
            {{ team.desc }}
          </p>
        </div>
      </div>
    </div>
   
    <!-- First Row - Team Members -->
    <div class="flex-wrap lg:flex-nowrap justify-center lg:justify-between mb-4 hidden lg:flex">
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