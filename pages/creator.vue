<template class="z-0">
  <div>
    <HeaderNav />
    <HeroCreator />
    <HowItWorksCreator />
    <!-- CARROUSEL -->
    <GetInvolved class=" mb-32" />

    <!-- 2 MILLON -->
    <div class="relative">
      <div class="flex justify-center items-center">
        <div class="relative flex items-center w-full max-w-screen-xl h-[422px] lg:h-[570px] p-8 lg:p-0">
          <div class="relative flex flex-col justify-center items-center p-8 bg-[#2565F4] rounded-[20px] mx-auto">
            <h1 class="text-5xl lg:text-[180px]  font-extrabold text-white text-center">
              2+ Million
            </h1>
            <p class=" text-3xl lg:text-[60px] font-medium text-white text-center mt-8">
              Total paid out to creators
            </p>
          </div>
        </div>
      </div>
      <div class="absolute max-h-[422px] lg:max-h-full overflow-hidden inset-0 flex items-center justify-center text-[72px] font-medium leading-none z-[-1]">
        <div class="w-full h-full text-center">
          <p
            v-for="n in 8"
            :key="n"
          >
            <span class="gradient-text">{{ "$".repeat(100) }}</span>
          </p>
        </div>
      </div>
    </div>

    <FeaturesCreator />
    <MissionDriven />
    <TestimonialsCreator />
    <OrganizationCarousel />
    <CreatorFooter />
  </div>
</template>



<style scoped>

.gradient-text {
  background: linear-gradient(to bottom, #D5C2E7, #B1AFEA);
  -webkit-background-clip: text;
  color: transparent;
}
</style>