<template>
  <div>
    <HeaderNav :display-banner="false" />

    <section
      class="container mx-auto px-6 md:px-8 mt-[57px]"
      :class="headerOverlay ? `blur-sm` : ``"
    >
      <h3 class="text-3xl mb-4">
        <img
          class="inline mr-2"
          src="~/assets/icons/get-in-touch.svg"
        >
        Get in touch
      </h3>
      <p class="mb-4">
        Have any questions or comments? We’d love to hear from you. Please fill out the form below and someone on our team
        will get back to you soon.
      </p>
      <form
        name="contact"
        method="POST"
        netlify
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label>Full Name*</label>
            <input
              name="fullname"
              type="text"
              placeholder=""
              required
            >
          </div>
          <div>
            <label>Brand / Organization (if applicable)</label>
            <input
              name="organization"
              type="text"
              placeholder=""
            >
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label>Email Address*</label>
            <input
              name="email"
              type="email"
              placeholder=""
              required
            >
          </div>
          <div>
            <label>Phone Number</label>
            <input
              name="phone"
              type="text"
              placeholder=""
            >
          </div>
        </div>
        <div class="grid grid-cols-1 mb-8">
          <div>
            <label>How did you hear about Social Currant?*</label>
            <input
              name="source"
              type="text"
              placeholder=""
              class="source"
              required
            >
          </div>
        </div>
        <div class="grid grid-cols-1 mb-8">
          <div>
            <label>Message*</label>
            <textarea
              name="message"
              placeholder="Enter your message here"
              required
            />
          </div>
        </div>
        <div class="flex">
          <input
            name="newsletter"
            type="checkbox"
            class="checked:bg-secondary mr-2"
            checked
          >
          <div>
            Sign up for our Newsletter to stay up to date with new platform features and trends in the influencer space
          </div>
        </div>
        <div class="inline-block my-6">
          <button
            type="submit"
            class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
    <Footer />
  </div>
</template>
<script setup>
const headerOverlay = useState('headerOverlay');
</script>
<style scoped lang="scss">
label {
  color: #343538;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 2px;
}

input[type="text"],
input[type="email"] {
  display: block;
  border: 1px solid #ACACAC;
  border-radius: 5px;
  width: 90%;
  padding: 8px 16px;
  height: 40px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
}

input.source {
  width: 95%;
}

textarea {
  display: block;
  height: 158px;
  width: 95%;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid #ACACAC;
  background: #FFF;
}
</style>
