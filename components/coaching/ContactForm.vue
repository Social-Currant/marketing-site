<template>
  <div id="contact-us">
    <section
      class="container mx-auto px-6 md:px-8 mt-[57px]"
      :class="headerOverlay ? `blur-sm` : ``"
    >
      <h3 class="mb-4 text-center font-poppins text-xl font-semibold leading-8 text-[#30104C]">
        Get in touch
      </h3>
      <h1 class="mb-4 title-form">
        Contact Us
      </h1>
      <p class="text-center font-inter text-lg font-normal leading-6 text-[#30104C] mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>
      <form class="form-container">
        <div class="grid grid-cols-1 mb-8">
          <label>Brand Name</label>
          <input
            name="Brand Name"
            type="text"
            placeholder=""
            required
          >
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label>Brand Representative First name</label>
            <input
              name="FirstName"
              type="text"
              placeholder=""
            >
          </div>
          <div>
            <label> Brand Representative Last name</label>
            <input
              name="LastName"
              type="text"
              placeholder=""
            >
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <label>Email</label>
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
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Type your message"
              required
            />
          </div>
        </div>
        <div class="flex my-6">
          <div class="justify-center">
            <button
              type="submit"
              class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl "
            >
              Submit
            </button>
          </div>
          <!-- <div
            v-if="errorMessage"
            class="text-red-500 inline-block error-message mx-8"
          >
            Something went wrong and the form was not submitted.
            Please stay on this page and try again in a few minutes.
          </div> -->
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.title-form{
  color: #30104C;
text-align: center;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 48px */
}
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
  width: 100%;
  padding: 8px 16px;
  height: 40px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
}


textarea {
  display: block;
  height: 158px;
  width: 100%;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid #ACACAC;
  background: #FFF;
}

.error-message {
  width: 550px;
  color: #C24664;
}
.form-container{
  max-width: 85%;
  margin: auto;
}
</style>
