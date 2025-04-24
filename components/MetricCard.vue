<template>
  <div class="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
    <div class="p-3 bg-primary-50 rounded-full mb-4">
      <component :is="icon" class="h-6 w-6 text-primary-700" />
    </div>
    <div class="font-poppins font-bold text-3xl text-primary-700">{{ value }}</div>
    <div class="font-inter text-sm text-[#343538] mt-1">{{ label }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  value: String,
  icon: Object,
})
</script>