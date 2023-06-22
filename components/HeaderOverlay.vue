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
    <div class="relative">
      <div class="absolute">
        <div class="opacity-40 bg-gradient-blue"></div>
      </div>
    </div>
    <div
      v-for="(header, key) in props.headerNavLinks"
      :key="`header-nav-` + key"
      class="py-8 px-8 border-b border-primary cursor-pointer"
      @click="emitScroll(header.scrollTo, header.text)"
    >
      <h3 class="text-[28px]">{{ header.text }}</h3>
    </div>
    <div class="flex justify-between items-center py-[32px]">
      <div>
        <div class="mx-8 bg-secondary text-white py-2 px-3 rounded-lg">
          Book a Demo
        </div>
      </div>
      <div>
        <div style="height: 80px; width: 100%">
          <img src="~/assets/icons/dots-overlay.svg" />
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
  emit("close");
  emit("scrollDiv", scrollTo, headerText);
}
</script>

<style lang="scss">
.bg-gradient-blue {
  background: #80a3eb;
  filter: blur(250px);
  width: 300px;
  height: 400px;
  z-index: -20;
  position: absolute;
  top: -130px;
}
</style>
