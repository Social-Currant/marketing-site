<template>
  <section class=" w-full px-6 md:px-8 mt-[83px] background py-8 text-[#30104C]">
    <div class="container flex flex-wrap flex-col xl:flex-nowrap items-center justify-center m-auto">
      <div class="font-semibold text-4xl leading-[60px] mb-6">
        What To Expect
      </div>
      <div class="text-center font-semibold text-2xl leading-[30px] mb-24">
        Let's do great work together
      </div>
      <div class="flex">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="expect in expectations"
            :key="expect.image"
            class="flex flex-col items-center text-center font-['Inter', 'Poppins'] text-xl leading-[29.405px]"
          >
            <img src="~/assets/expect1.svg">
            <div class="mt-2 text-center">
              {{ expect.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const expectations= [
        {
          image: "~/assets/expect1.svg",
          description: "Meet with experts for hands-on support on building out an integrated creator program",
        },
        {
          image: "~/assets/expect2.svg",
          description: "Go from start to finish on a creator campaign, working directly with creators to develop content for your campaign",
        },
        {
          image: "~/assets/expect3.svg",
          description: "Solve roadblocks with like-minded organization leaders",
        },
        {
          image: "~/assets/expect4.svg",
          description: "Receive lessons learned and best practices from Social Currant, which has stood up creator programs for over 50 organizations",
        },
      ]
</script>

<style>
.background{
    background: #F4EFF9;
}
</style>