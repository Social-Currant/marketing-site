<template>
  <div>
    <HeaderNav :display-banner="false" />
    <section class="container mx-auto px-6 md:px-8 mt-[57px]">
      <div class="circle">
        <img
          style=""
          src="~/assets/contact-page/success.gif"
          class="animated-gif"
        >
        <h3
          v-if="newsletterSubscribed"
          class="center-message text-center text-message"
        >
          Thank you for submitting your form and subscribing to our
          newsletter!
        </h3>
        <div
          v-else
          class="center-message text-center text-message"
        >
          <h3>
            Your form was sent!
          </h3>
          <p class="text-message-info">
            Someone on our team will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script setup>
const route = useRoute();
const newsletterSubscribed = computed(() => {
  return route.query.newsletter === "true";
})
</script>

<style>
.circle {
  width: 500px;
  height: 500px;
  background-color: #E7EEFD;
  border-radius: 50%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
}

.center-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.animated-gif {
  top: 45%;
  height: 300px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    top: 30%;
    height: 150px;
  }
}

.text-message,
.text-message-info {
  top: 68%;
  color: #30104C;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 340px;

  @media screen and (max-width: 768px) {
    top: 48%;
    height: 150px;
    font-size: 18px;
    width: 240px;
  }
}

.text-message-info {
  top: 92%;
  font-size: 16px;
  font-weight: 400;
}
</style>
