<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-white opacity-99 overflow-x-auto"
  >
    <div class="flex py-16 px-8 justify-between items-center">
      <img src="~/assets/icons/logo.svg" />
      <div @click="emit('close')">
        <div class="bg-black opacity-75 p-1 rounded-md cursor-pointer">
          <img src="~/assets/icons/close.svg" />
        </div>
      </div>
    </div>
    <div
      v-for="(header, key) in props.headerNavLinks"
      :key="`header-nav-` + key"
      class="py-8 px-8 border-t border-primary cursor-pointer"
      @click="emitScroll(header.scrollTo, header.text)"
    >
      <h3 class="text-[28px]">{{ header.text }}</h3>
    </div>
    <div class="relative">
      <img
        src="~/assets/icons/dots-overlay.svg"
        class="w-96 object-none dots-overlay absolute"
        style="right: -100px; height: 10rem; width: 35rem"
      />
    </div>
    <div class="flex justify-between py-[32px]">
      <div>
        <div class="mx-4 bg-secondary text-white py-2 px-3 rounded-lg">
          Book a Demo
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close", "scrollDiv"]);

const props = defineProps({
  headerNavLinks: {
    type: Array,
    required: true,
  },
});

function emitScroll(scrollTo, headerText) {
  emit('close')
  emit('scrollDiv', scrollTo, headerText)
}
</script>

<style lang="scss"></style>
