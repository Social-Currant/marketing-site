<template>
  <div
    class="fixed top-0 right-0 w-full h-full bg-white opacity-99 overflow-x-auto "
  >
    <div class="flex py-16 px-8 justify-between">
      <img src="~/assets/icons/logo.svg">
      <div
        class=" bg-sky-500"
        @click="emit('close')"
      >
        <div class="p-1 rounded-md cursor-pointer close-hover">
          <img src="~/assets/icons/close.svg">
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute">
        <div class="bg-gradient-blue" />
      </div>
    </div>
    <div
      v-for="(header, key) in headerNavLinks"
      :key="`header-nav-` + key"
      class="py-8 px-8 border-b border-primary cursor-pointer"
      @click="navigateToLink(header.navigateTo)"
    >
      <h3 class="text-[28px] font-semibold">
        {{ header.text }}
      </h3>
    </div>
    <div class="flex justify-between items-center py-[32px]">
      <div>
        <a href="http://crnt.link/ashwathcalendar">
          <div class="mx-8 bg-secondary text-white py-1.5 px-3 rounded-lg text-lg">
            Book a Demo
          </div>
        </a>
      </div>
      <div>
        <div style="height: 80px; width: 100%">
          <img src="~/assets/icons/dots-overlay.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
  headerNavLinks: {
    type: Array,
    required: true,
  },
});

function navigateToLink(navigateTolink) {
  emit("close");
  navigateTo(navigateTolink)
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

.background-gradient {
  position: absolute;
  top: 108px;
}

.close-hover:hover {
  background: #F5F6F6;
  border-radius: 5px;
}
</style>
