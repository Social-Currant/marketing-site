<template>
  <div
    class="card-container relative"
  >
    <h2 class="text-center font-poppins text-2xl font-bold leading-[147.023%] text-secondary mb-4">
      {{ title }}
    </h2>
    <img :src="imagelink">
    <p class="text-center font-poppins text-base leading-[125%] text-gray-800 mt-4 max-w-[238px]">
      {{ description }}
    </p>
    <hr>
    <div class="flex flex-col max-w-[238px]">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="feature-item"
      >
        <img
          :src="getIcon(feature)"
          class="feature-icon"
        >
        <div class="flex flex-col">
          <span :class="{'feature-value': true, 'font-bold': feature.name.toLowerCase().includes('everything') }">
            {{ feature.name }}
          </span>
          <span
            v-if="feature.name === 'Customer Support'"
            class="feature-value"
          >{{ feature.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import check from "~/assets/icons/green-check.svg";
import cross from "~/assets/icons/red-cross.svg";
import headset from "~/assets/icons/headset.svg";
import star from "~/assets/icons/star.svg";

defineProps({
  title: {
    type: String,
    required: false,
    default:null
  },
  description: {
    type: String,
    required: false,
    default:null
  },
  imagelink: {
    type: URL,
    required: false,
    default:null
  },
  features: {
    type: Array,
    required: false,
    default:null,
  },
})
const getIcon = (feature) => {
  if (feature.name === "Customer Support") {
    return headset;
  }
  return feature.value ? check : cross;
};
</script>

<style scoped>
.card-container-popular {
  border-radius: 20px;
  border: 2px solid #D5C2E7 !important;
  background: #FFF;
  box-shadow: 0px 0px 6px 0px #D5C2E7;
}

.card-container{
border-radius: 20px;
border: 2px solid #D9D9D9;
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 24px;
}
hr{
    margin: 24px 0px;
    color: #E5E5E5;
    width: 100%;
}
.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.feature-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.purpleTag{
    border-radius: 4px;
    background: #EBE2F4;
    padding: 4px 8px;
    align-items: center;
    color: #4F3467;
    font-family: Poppins;
    font-weight: 600;
    position: absolute;
    top: -2%;
}
</style>