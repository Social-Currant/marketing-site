<template>
  <div class="square-card">
    <div class="description">
      {{ description }}
    </div>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: 'Week'
  },
description: {
    type: String,
    required: false,
    default: 'Week'
  }
  })
 
</script>

<style scoped>
.square-card {
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 0px 50px;
  background: #4780FF;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
}

.square-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}

.title {
  color: var(--white, #FFF);
  font-family: Poppins;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 194.812px;
  flex-shrink: 0;
}

.description {
  color: var(--white, #FFF);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 250px;
  flex-shrink: 0;
}
@media (max-width: 1440px) {
  .square-card {
    width: 90%;
    height: 260px;
    border-radius: 0px 20px;
    padding: 16px;
  }
  
  .title {
    font-size: 32px;
    width: auto;
    height: auto;
  }
  
  .description {
    font-size: 16px;
    width: auto;
    height: auto;
  }
}
@media (max-width: 768px) {
  .square-card {
    height: 300px;
    width: 300px;

  }
}
@media (max-width: 480px) {
  .square-card {
    padding: 16px;
  }
  
  .title {
    font-size: 32px;
    margin-bottom: 12px;
  }
  
  .description {
    font-size: 16px;
  }
}
.square-card:nth-child(odd) {
  background-color: #4780FF;
}

.square-card:nth-child(even) {
  background-color: #30104C;
}
</style>