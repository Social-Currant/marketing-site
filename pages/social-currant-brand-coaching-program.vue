<template>
  <div>
    <HeaderNav :display-banner="false" />
    <div
      :class="headerOverlay ? `blur-sm` : ``"
    >
      <Hero />
      <Logos />
      <AboutSC />
      <WhatToExpect />
      <HowCanHelp />
      <WeekItinerary />
      <CallToActionCoaching />
      <AboutSCFooter />
      <ContactForm />
      <Footer />
    </div>
  </div>
</template>
<script setup>
const headerOverlay = useState('headerOverlay');

</script>
<style>
</style>