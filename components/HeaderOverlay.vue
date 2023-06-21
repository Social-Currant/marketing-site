<template>
  <div class="fixed top-0 left-0 w-full h-full bg-white opacity-99 overflow-x-auto">
    <div class="flex py-12 px-8 justify-between items-center">
      <img src="~/assets/icons/logo.svg" />
      <div @click="emit('close')">
        <div class="bg-black opacity-75 p-1 rounded-md cursor-pointer">
          <img src="~/assets/icons/close.svg" />
        </div>
      </div>
    </div>
    <hr />
    <div class="py-[32px] px-8">
      <h3 class="text-[28px]">How It Works</h3>
    </div>
    <hr />
    <div class="py-[32px] px-8">
      <h3 class="text-[28px]">Brands</h3>
    </div>
    <hr />
    <div class="py-[32px] px-8">
      <h3 class="text-[28px]">Creators</h3>
    </div>
    <hr />
    <div class="py-[32px] px-8">
      <h3 class="text-[28px]">About Us</h3>
    </div>
    <hr />
    <div class="py-[32px] px-8">
      <h3 class="text-[28px]">How We Can Help</h3>
    </div>
    <hr />
    <div class="flex justify-between py-[32px]">
      <div>
        <div class="mx-4 bg-secondary text-white py-2 px-3 rounded-lg">
          Book a Demo
        </div>
      </div>
      <div>
        <img src="~/assets/icons/dots-overlay.svg" class="w-96 object-none dots-overlay"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);

</script>

<style lang="scss">
</style>
