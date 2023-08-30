<template>
  <section class="container mx-auto px-6 md:px-8 mt-[83px] text-[#30104C]">
    <div class="flex flex-wrap flex-col xl:flex-nowrap items-center justify-center">
      <div class="font-semibold text-4xl leading-[60px] mb-6">
        How Can We Help You?
      </div>
      <div class="text-center font-semibold text-2xl leading-[30px] mb-24">
        Let's do great work together
      </div>
      <div class="flex">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="expect in expectations"
            :key="expect.image"
            class="flex flex-col items-center"
          >
            <img src="~/assets/expect1.svg">
            <div class="mt-2 text-center font-semibold text-3xl leading-[48px]">
              {{ expect.title }}
            </div>
            <div class="text-center font-['Inter', 'Poppins'] text-xl leading-[29.405px] mt-2 text-[#475467]">
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
          title:"Group Synergy for Collective Growth",
          description: "Join six immersive group sessions that foster collaboration and knowledge exchange. Engage with experts and fellow participants, sharing insights and strategies to cultivate successful integrated creator programs. ",
        },
        {
          image: "~/assets/expect2.svg",
          title:"Personalized 1-on-1 Guidance",
          description: "Experience the personalized touch of 41:1 sessions, where our experts dedicate their undivided attention to your specific goals. Receive tailored advice, detailed feedback, and targeted solutions as you navigate the intricacies of creator campaigns.",
        },
        {
          image: "~/assets/expect3.svg",
          title:"Unleash Creativity Across 7 Dynamic Collaborators",
          description: "Collaborate with a diverse pool of seven talented creators, each bringing their unique perspectives to the table. Dive deep into content development for your campaign.",
        },
      ]
</script>