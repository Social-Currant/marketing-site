<template class="z-0">
  <div>
    <HeaderNav />
    <HeroSection />
    <!-- / - Section First Impression -->
    <img
      class="background-gradient"
      src="~/assets/images/backgroundgradientcircle.svg"
    >
    <OrganizationCarousel />
    <HowItWorks />
    <Features />
    <WaysToApply />
    <Testimonials />
    <Footer />
  </div>
</template>

<script setup>

import { defineComponent } from "vue";
// import KlaviyoForm from "./components/KlaviyoForm.vue";


defineComponent({
  // components: {
  //   KlaviyoForm,
  // },
  setup() {
    useHead({
      title: "Currant | Creator Marketing Simplified",
      meta: [{ name: "description", content: "Social Currant." }],
    });

    return {};
  },
});



</script>
<style lang="scss">


.circle-gradient {
  background: #80a3eb;
  filter: blur(250px);
}

.gradient-wrapper {
  width: 354px;
  height: 352px;
  left: -70px;
  top: 5015px;
  z-index: -10;
}

.hover-button-blue:hover {
  background: #4780ff;
}

.background-gradient {
  position: absolute;
  top: 108px;
  z-index: -1;
}

.hover-primary:hover {
  background: #4f3467;
}

</style>
