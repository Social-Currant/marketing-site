<template>
  <div class="cta-container flex items-center mt-[83px] flex-col px-6 md:px-8 py-8">
    <div class="cta-title">
      For priority consideration apply by April 30th
    </div>
    <a
      href="#"
      @click.prevent="scrollToContactUs"
    >
      <div
        class="mx-2 border-2 border-primary text-primary py-1.5 px-3 rounded-lg text-xl hover:bg-primary hover:text-white cursor-pointer"
      >
        Apply Now
      </div></a>
  </div>
</template>

<script setup>
const scrollToContactUs = () => {
  const offset = document.querySelector("header")?.getBoundingClientRect().height || 0; // height of the navbar
  const element = document.querySelector('#contact-us');
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
</script>

<style scoped>
.cta-container{
    background: linear-gradient(129deg, rgba(199, 214, 250, 0.75) 20.12%, #D5C2E7 100%);
}
.cta-title{
color: #30104C;
text-align: center;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 147.023%; /* 58.809px */
margin-bottom: 46px;
max-width: 50%;

}
@media (max-width: 768px) {.cta-title{
  font-size: 24px;
}}
</style>