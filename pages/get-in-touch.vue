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
        Have any questions or comments? We’d love to hear from you! Please fill out the form below and someone on our team
        will get back to you soon.
      </p>
      <form
        ref="myForm"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit="handleSubmit"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
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
            <label>How did you hear about Social Currant?</label>
            <select name="source">
              <option value="Social Media">
                Social Media
              </option>
              <option value="Referral">
                Referral
              </option>
              <option value="Search Engine">
                Search Engine
              </option>
              <option value="Advertisement">
                Advertisement
              </option>
              <option value="Event or Conference">
                Event or Conference
              </option>
              <option value="Other">
                Other
              </option>
            </select>
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
            v-model="newsletter"
            name="newsletter"
            type="checkbox"
            class="checked:bg-secondary mr-2"
            checked
          >
          <div>
            Sign up for our Newsletter to stay up to date with new platform features and trends in the influencer space
          </div>
        </div>
        <div class="flex my-6">
          <div>
            <button
              type="submit"
              class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl"
            >
              Send Message
            </button>
          </div>
          <div
            v-if="errorMessage"
            class="text-red-500 inline-block error-message mx-8"
          >
            Oops! Something went wrong and the form was not submitted.
            Please stay on this page and try again in a few minutes.
          </div>
        </div>
      </form>
    </section>
    <Footer />
  </div>
</template>
<script setup>
const headerOverlay = useState('headerOverlay');
const newsletter = useState('newsletter', () => false)

const myForm = ref(null)
const errorMessage = ref(false);


function handleSubmit(e) {
  e.preventDefault();

  const formElement = myForm.value;
  const formData = new FormData(formElement);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      navigateTo({
        path: '/success/',
        query: {
          newsletter: newsletter.value,
        }
      })
    }).catch(() => errorMessage.value = true);
}
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

select,
option {
  display: block;
  width: 95%;
  height: 40px;
  border: 1px solid #ACACAC;
  border-radius: 5px;
  background: #FFF;
  padding: 8px 16px;
}

.error-message {
  width: 550px;
  color: #C24664;
}
</style>
