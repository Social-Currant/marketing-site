<template>
  <section class="container mx-auto px-6 md:px-8 mt-[83px] py-8 text-[#30104C]">
    <div class="flex flex-wrap flex-col xl:flex-nowrap items-center justify-center">
      <div class="font-semibold text-4xl leading-[60px] text-center mb-6">
        From Vision to Impact: A 6-Week Creator Program Success
      </div>
      <div class="text-center font-semibold text-2xl leading-[30px] mb-24">
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
          title: "Week 1",
          description: "Questions that your organization should answer before launching a creator program",
        },
        {
          title: "Week 2",
          description: "Defining your messaging and call-to-actions",
        },
        {
          title: "Week 3",
          description: "Setting your creator program up for metrics, success, and overall impact",
        },
        {
          title: "Week 4",
          description: " Identifying creators that align with your mission and vision",
        },
        {
          title: "Week 5",
          description: "Integrating creators into your ongoing communications plan",
        },
        {
          title: "Week 6",
          description: "Tactics to ensure continued engagement with creators ",
        },
       
      ]
</script>
