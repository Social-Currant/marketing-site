<template>
  <div>
    <HeaderNav :display-banner="false" />
    <section class="flex flex-col items-center px-6 md:px-8 mt-16">
      <img
        style="width: 290px; height: 235px;"
        src="~/assets/images/sales-team.png"
      >
      <h1 class="mt-6 text-center font-poppins text-2xl lg:text-4xl font-semibold leading-8 text-[#30104C]">
        Your form was sent!
      </h1>
      <p class="text-message-info mt-6">
        Our sales team will get back to you soon. If you'd like to choose a timeslot that works for you, reserve a spot on our calendar and schedule your today
      </p>
      <div class="mt-6 flex justify-center mb-24 md:mb-0">
        <a
          href="http://crnt.link/websiteleadsashwath"
          target="_blank"
        >
          <button
            type="submit"
            class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl "
          >
            Schedule Now
          </button>
        </a>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script setup>
useHead({
  title: 'Success - Social Currant'
})
</script>

<style>
.text-message-info {
 color: #343538;
text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 147.023%; /* 23.524px */
max-width: 504px;
}

</style>
