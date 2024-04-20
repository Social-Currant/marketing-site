<template>
  <div>
    <HeaderNav @activate-selector="activateSelector" />
    <div class="container mx-auto mt-6 flex flex-col flex-wrap lg:flex-nowrap justify-center">
      <h1 class="text-center text-3xl lg:text-5xl text-primary font-semibold">
        PREVIEW OUR PLANS
      </h1>
      <div class="flex mt-11 gap-6 justify-center flex-wrap">
        <PlanCard
          v-for="(plan, index) in plans"
          :key="index"
          :title="plan.name"
          :description="plan.description"
          :imagelink="plan.image"
          :features="plan.features"
        />
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-12 bg-[#F5F6F6] py-2 justify-center">
        <img :src="calendar">
        <div class="font-poppins ml-6 lg:ml-0 text-center lg:text-left text-black font-semibold leading-[147.023%] ">
          If you 
          would like to speak with someone on our team to figure out which plan 
          is best for you, request a demo today!
        </div>
        <div
          class="button-outline"
          @click="navigateTo('/book-a-demo/')"
        >
          Request Demo
        </div>
      </div>
      <h1 class="text-center text-3xl lg:text-5xl items-center text-primary font-semibold mt-12 mb-8">
        PLAN BREAKDOWN
      </h1>
      <div class="px-6 lg:px-0 flex flex-col items-center gap-8 max-w-full overflow-x-auto">
        <div
          v-for="featuresGroup in plansTable[0].features"
          :key="featuresGroup.name"
          class="table-container"
        >
          <table>
            <thead>
              <tr>
                <th class=" text-xl h-[90px]">
                  {{ featuresGroup.name }}
                </th>
                <th
                  v-for="plan in planOptions"
                  :key="plan.name"
                  class="min-w-[198px]"
                >
                  <span :class="{'purpleTag flex items-center gap-1': plan==='Growth Plan'} "> 
                    <img
                      v-if="plan==='Growth Plan'"
                      style="width: 10px; height: 10px;"
                      :src="star"
                    >
                    <p>{{ plan }}</p>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="feature in featuresGroup.features"
                :key="feature.name"
              >
                <td class="bg-[#F6F9FD] w-[350px] font-medium h-[68px]">
                  {{ feature.name }}
                </td>
                <td
                  v-for="plan in planOptions"
                  :key="plan"
                  class="w-[198px] h-[68px]"
                >
                  <img
                    v-if="getFeatureValue(plan, feature.name) === true"
                    class="m-auto"
                    :src="check"
                  >
                  <img
                    v-else-if="getFeatureValue(plan, feature.name) === false"
                    class="m-auto"
                    :src="cross"
                  >
                  <span
                    v-else
                  >{{ getFeatureValue(plan, feature.name) }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex items-center justify-center flex-wrap gap-4 mt-20">
        <p class="font-semibold text-black text-center lg:text-text-left">
          You can learn more about our plans and services by requesting a demo today!
        </p> <button
          class="bg-secondary text-white my-4 py-1.5 px-3 rounded-lg text-xl hover-button-blue"
          @click="navigateTo('/book-a-demo/')"
        >
          Request a Demo
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import {plans, plansTable} from "~/constants/plans"
import calendar from "~/assets/images/calendar.png";
import check from "~/assets/icons/green-check.svg";
import cross from "~/assets/icons/red-cross.svg";
import star from "~/assets/icons/star.svg";


const planOptions = ['Starter Plan', 'Growth Plan', 'Scale Plan', 'Enterprise']

const getFeatureValue = (planName, feature) => {
    const plan = plansTable.find(({name}) => name === planName)
    const featureGroup = plan.features.find(featureGroup => featureGroup.features.some(({name}) => name === feature))
    const value = featureGroup.features.find(({name}) => name === feature).value

    switch(value) {
        case "yes":
            return true
        case "no":
            return false
        default:
            return value
    }
};


</script>
<style lang="scss" scoped>
.purpleTag{
    border-radius: 4px;
    background: #EBE2F4;
    padding: 4px 8px;
    justify-content: center;
    width: max-content;  
    margin: auto; 
}
.button-outline{
    border-radius: 8px;
    border: 1.5px solid #30104C; 
    padding: 6px 12px;
    color: #30104C;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
}

.table-container {
  max-width: 100%;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid #D9D9D9;
  color:#343538;
  text-align: center
}

th {
  background-color: #F6F9FD;
  color:#30104C;
  font-weight: bold;
}

table img {
  width: 24px;
  height: 24px;
}


.table-container {
    border-radius: 20px;
    border: 1px solid #D9D9D9;
}

thead tr {
    th {
        border-top: none;
    }
    & > th:first-child {
        border-left: none;
    }

    & > th:last-child {
        border-right: none;
    }
}

tbody tr {
    
    & > td:first-child {
        border-left: none;
    }

    & > td:last-child {
        border-right: none;
    }
}

tbody tr:last-child td {
    border-bottom: none;
}
</style>