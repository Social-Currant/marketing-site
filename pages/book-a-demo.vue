<template>
  <div>
    <HeaderNav />
    <div class="container mx-auto mt-16 flex flex-wrap lg:flex-nowrap justify-center mb-24 md:mb-0">
      <div class="mx-6">
        <h1 class="mb-4 font-poppins text-4xl font-semibold leading-8 text-[#30104C]">
          Book a Tailored Demo
        </h1>
        
        <p class="paragraph mb-6">
          Explore the features and capabilities of Social Currant through a detailed product demonstration. 
          Schedule your live demo today and discover why Social Currant is the preferred platform for your needs!
        </p>

        <div class="mb-12">
          <img :src="activeCarouselImagePath">
          <div class="flex mt-8 justify-center">
            <div
              v-for="n in 3"
              :key="`brand-carousel-img` + n"
              @click="activeCarouselImageIndex = n"
            >
              <img
                v-if="activeCarouselImageIndex === n"
                :src="circleActive"
                class="cursor-pointer h-[20px]"
              >
              <img
                v-else
                :src="circle"
                class="cursor-pointer h-[20px]"
              >
            </div>
          </div>
        </div>
      </div>
      <form
        ref="myForm"
        class="px-6 grow"
        name="book-a-demo"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit="handleSubmit"
      >
        <input
          type="hidden"
          name="form-name"
          value="book-a-demo"
        >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label>First Name*</label>
            <input
              name="FirstName"
              type="text"
              placeholder=""
              required
            >
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="LastName"
              type="text"
              placeholder=""
            >
          </div>
        </div>
        <div class="mt-8">
          <label>Work Email*</label>
          <input
            name="Email"
            type="email"
            placeholder=""
            required
          >
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <label>Organization Name*</label>
            <input
              name="OrganizationName"
              type="text"
              placeholder=""
              required
            >
          </div>
          <!-- <div>
            <label>Organization Type</label>
            <select name="OrganizationType">
              <option value="Startup">
                Startup
              </option>
              <option value="Political Org">
                Political Org
              </option>
              <option value="Non-Profit">
                Non-Profit
              </option>
              <option value="Enterprise">
                Enterprise
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div> -->
          <div>
            <label>Phone Number</label>
            <input
              name="PhoneNumber"
              type="text"
              placeholder=""
            >
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <!-- <div>
            <label for="industry">Industry</label>
            <select
              id="industry"
              v-model="selectedIndustry"
              name="industry"
            >
              <option
                v-for="industry in industries"
                :key="industry"
                :value="industry"
              >
                {{ industry }}
              </option>
            </select>
          </div> -->
        </div>
        <div>
          <label>Anything else you'd like us to know?</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
          />
        </div>
        <div class="mt-8">
          <label class="mb-2">Are you actively working with influencers?</label>
          <div class="flex gap-6">
            <div>
              <input
                id="yes"
                type="radio"
                name="WorkingWithInfluencers"
                value="Yes"
              >
              <span for="yes">
                Yes
              </span>
            </div>
            <div>
              <input
                id="no"
                type="radio"
                name="WorkingWithInfluencers"
                value="No"
              >
              <span for="no">
                No
              </span>
            </div>
            <div>
              <input
                id="interested"
                type="radio"
                name="WorkingWithInfluencers"
                value="Not yet, but interested"
              >
              <span for="interested">
                Not yet, but interested
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col my-6">
          <div class="justify-center">
            <button
              type="submit"
              class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl "
            >
              Submit
            </button>
          </div>
          <div
            v-if="errorMessage"
            class="text-red-500 mt-6 inline-block error-message"
          >
            Something went wrong and the form was not submitted.
            Please stay on this page and try again in a few minutes.
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>
<script setup>
// carousel icon
import circle from "~/assets/icons/circle.svg";
import circleActive from "~/assets/icons/circle-active.svg";
const { $contentfulClient } = useNuxtApp()
const activeCarouselImageIndex = ref(1);

const myForm = ref(null)
const errorMessage = ref(false);

useSeoMeta({
  title: 'Book a Demo'
})

onMounted(() => {
  setInterval(() => {
    if (
      activeCarouselImageIndex.value === 0 ||
      activeCarouselImageIndex.value === 3
    ) {
      activeCarouselImageIndex.value = 1;
    } else {
      activeCarouselImageIndex.value += 1;
    }
  }, 7000);
});

const pendingPage = ref(true)
const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'getInvolved',
  'metadata.tags.sys.id[in]': 'homePage'
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);

const brandOne = pageData?.fields.brandImage1.fields.file.url
const brandTwo = pageData?.fields.brandImage2.fields.file.url
const brandThree = pageData?.fields.brandImage3.fields.file.url

const activeCarouselImagePath = computed(() => {
  const imageMap = {
    1:brandOne, 
    2:brandTwo, 
    3:brandThree,
  };
  return imageMap[activeCarouselImageIndex.value];
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const industries = [
  'Agriculture & Forestry',
  'Animals & Pets',
  'Arts & Craft',
  'Beauty & Fashion',
  'Civic Engagement',
  'Education',
  'Entertainment & Film',
  'Environment',
  'Family & Parenting',
  'Finance',
  'Government & Public Sector',
  'Health & Wellness',
  'Hospitality & Tourism',
  'Lifestyle',
  'Media',
  'Music',
  'Nature',
  'Nonprofit & Social Services',
  'Professional Services',
  'Sports & Outdoor',
  'Technology',
  'Other'
];


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectedIndustry = ref('');

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
        path: '/demo-success/',
        query: {
          
        }
      })
    }).catch(() => errorMessage.value = true);
}
</script>

<style lang="scss">
label {
  color: #343538;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

input[type="text"],
input[type="email"] {
  display: block;
  border: 1px solid #ACACAC;
  border-radius: 5px;
  width: 100%;
  padding: 8px 16px;
  height: 40px;
  margin-top: 4px;
}
textarea {
  display: block;
  border: 1px solid #ACACAC;
  border-radius: 5px;
  width: 100%;
  padding: 8px 16px;
  margin-top: 4px;
}
.paragraph{
color: #343538;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 147.023%; /* 23.524px */
max-width: 591px;
}
select,
option {
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid #ACACAC;
  border-radius: 5px;
  background: #FFF;
  padding: 8px 16px;
  margin-top: 4px;
  color: #343538;
}

select {
  appearance: none;
  background-image: url("assets/icons/arrow-down-gray.svg");
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;
}
.error-message {
  max-width: 550px;
  color: #C24664;
}
</style>