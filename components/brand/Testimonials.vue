<template>
  <section
    id="testimonials"
    class="py-20 py-20"
  >
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-24 text-primary">
        What Our Network Is Saying
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(t,i) in testimonials"
          :key="i"
          class="relative bg-white rounded-lg border border-purple p-6 pt-16 shadow-lg"
        >
          <!-- Avatar -->
          <div class="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              :src="t.image"
              alt="Photo of {{ t.name }}"
              class="w-24 h-24 rounded-full border-4 border-purple"
            >
          </div>
          <!-- Quote -->
          <p class="text-gray-700 text-center mb-6 leading-relaxed">
            "{{ t.quote }}"
          </p>
          <!-- Name & Role -->
          <h4 class="text-center font-semibold text-primary">
            {{ t.name }}
          </h4>
          <p class="text-center text-gray-500">
            {{ t.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import mikka from '~/assets/images/testimonials/mikka.jpeg'
import chezik from '~/assets/images/testimonials/chezik.jpeg'
import lauren from '~/assets/images/testimonials/lauren.jpeg'

const testimonials = [
{
  image: mikka,
  quote: 'I cannot speak highly enough about Social Currant. Watching them grow, perfect their craft, and push our campaigns to impact more people across the country has been nothing short of inspiring. Their team is what the future of political change looks like: fearlessly creative, compassionate, and egoless strategy that prioritizes the creators.',
  name: 'Mikka Kei Macdonald',
  role: 'Creative Director - Community Change'
},
{
  image: chezik,
  quote: 'We are deeply grateful to Social Currant for helping us spread awareness and reach new audiences through thoughtful influencer partnerships. Their team brought creativity, flexibility, and deep expertise to the process. They truly made the process seamless, which allowed us to stay focused on our mission,  message, and impact',
  name: 'Chezik Tsunoda',
  role: 'Founder - No More Under'
},
{
  image: lauren,
  quote: 'As political and/or climate creators, we have a responsibility not just to educate our communities about what is happening, but to direct them toward tangible ways they can take action. In moments of crisis, many people want to help but do not know how. By partnering with Social Currant, we can make this invitation for action seamless and obvious.',
  name: 'Lauren Bash',
  role: 'Creator'
}
]

</script>
<style lang="scss" scoped>
// no styles
</style>
