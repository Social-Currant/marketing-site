<template>
    <div class="my-16">
      <label for="email" class="block mb-2 text-gray-700">Email Address</label>
      <input
        v-model="email"
        type="email"
        id="email"
        placeholder="Enter your Email Address"
        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      <button @click="subscribe" class="border-secondary border-2 bg-secondary text-white font-medium border-secondary px-6 py-2 rounded-lg mt-4">
        Subscribe
      </button>
      <div v-if="successMessage" class="text-green-600">{{ successMessage }}</div>
      <div v-if="errorMessage" class="text-red-600">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const email = ref('');
      const successMessage = ref('');
      const errorMessage = ref('');
  
      const subscribe = async () => {
        try {
          const listId = 'YpNHVb';
          const emailValue = email.value;
  
          const response = await axios.post(`https://a.klaviyo.com/api/v2/list/YpNHVb/members`, {
            api_key: process.env.KLAVIYO_PRIVATE_TOKEN,
            profiles: [{
              email: emailValue
            }]
          });
  
          if (response.status === 200) {
            successMessage.value = "Congratulations! You're signed up!";
            errorMessage.value = '';
          } else {
            throw new Error('API call failed');
          }
        } catch (error) {
          successMessage.value = '';
          errorMessage.value = 'Uh-Oh! Something went wrong. Please try again.';
          console.error(error);
        }
      };
  
      return {
        email,
        successMessage,
        errorMessage,
        subscribe,
      };
    },
  };
  </script>
  
  
  
  