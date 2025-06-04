<template>
<section id="testimonials" class="py-20 py-20">
<div class="container mx-auto px-6">
  <h2 class="text-3xl font-bold text-center mb-24 text-primary">What Organizations Are Saying</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="(t,i) in testimonials"
      :key="i"
      v-motion-fade-in-step
      class="relative bg-white rounded-lg border border-purple p-6 pt-16 shadow-lg"
    >
      <!-- Avatar -->
      <div class="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img
          :src="t.image"
          alt="Photo of {{ t.name }}"
          class="w-24 h-24 rounded-full border-4 border-purple"
        />
      </div>
      <!-- Quote -->
      <p class="text-gray-700 text-center mb-6 leading-relaxed">
        "{{ t.quote }}"
      </p>
      <!-- Name & Role -->
      <h4 class="text-center font-semibold text-primary">{{ t.name }}</h4>
      <p class="text-center text-gray-500">{{ t.role }}</p>
    </div>
  </div>
</div>
</section>
</template>

<script setup>

const testimonials = [
{
  image: '/assets/images/team/will.jpeg',
  quote: 'Working with Social Currant has been a game‑changer for our brand. Their platform seamlessly connects us with top‑notch creators who perfectly align with our values. Highly recommend!',
  name: 'Noah Fisher',
  role: 'Creator Relations Manager'
},
{
  image: '/assets/images/team/ashwath.png',
  quote: 'Partnering with Social Currant boosted our campaign engagement by 45%. The streamlined dashboard made it so easy!',
  name: 'Jordan Smith',
  role: 'Marketing Director'
},
{
  image: '/assets/images/team/jasmine.png',
  quote: 'The proposal tools and metrics dashboard gave us the confidence to scale our influencer efforts efficiently.',
  name: 'Samuel Lee',
  role: 'Campaign Lead'
}
]

</script>
<style lang="scss" scoped>
// no styles
</style>
