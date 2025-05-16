<template>
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay } }"
      class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4"
    >
      <component :is="item.icon" class="w-12 h-12 text-secondary" />
      <template v-if="item.type==='problem'">
        <h3 class="text-xl font-semibold text-gray-800">{{ item.title }}</h3>
        <p class="text-gray-600 text-sm">{{ item.text }}</p>
      </template>
      <template v-else>
        <div class="text-4xl font-extrabold text-primary">{{ item.number }}</div>
        <div class="text-gray-700">{{ item.label }}</div>
      </template>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    item: Object,
    delay: { type: Number, default: 0 }
  })
  </script>
  