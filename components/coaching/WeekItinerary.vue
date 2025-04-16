<template>
  <section class="container mx-auto px-6 md:px-8 mt-[83px] py-8 text-[#30104C]">
    <div class="flex flex-wrap flex-col xl:flex-nowrap items-center justify-center">
      <div class="font-semibold text-3xl lg:text-5xl leading-tight text-center mb-6 uppercase">
        From Vision to Impact: An 8 Session Program for Creator Success
      </div>
      <div class="text-center font-semibold text-xl leading-tight mb-11 lg:mb-24">
        Crafting, Launching, and Sustaining Effective Collaborative Campaigns
      </div>
      <div class="flex">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WeekCard
            v-for="week in itinerary"
            :key="week.title"
            :title="week.title"
            :description="week.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const itinerary= [
        {
          title: "Session 1",
          description: "The Far Right’s Digital Playbook and Creator Ecosystem",
        },
        {
          title: "Session 2",
          description: "The Boom & Bust Problem – Why We Can’t Win with One-Off Content",
        },
        {
          title: "Session 3",
          description: "The Budget Myth – How to Fund a Winning Digital Strategy",
        },
        {
          title: "Session 4",
          description: "Messaging, Narrative & How to Write a Great Creative Brief",
        },
        {
          title: "Session 5",
          description: "Finding & Partnering with Creators – The Messenger Matters",
        },
        {
          title: "Session 6",
          description: "Contracts, Timelines & Reviewing Creator Content",
        },
        {
          title: "Session 7",
          description: "How to Measure Success in Creator Campaigns",
        },
        {
          title: "Session 8",
          description: "Final Presentations – Scaling for the Future",
        },
       
      ]
</script>
