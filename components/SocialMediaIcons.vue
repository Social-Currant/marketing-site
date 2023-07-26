<template>
  <div class="flex gap-4">
    <div class="relative">
      <img
        class="social-media ml-0"
        src="~/assets/images/socialMedia/copyLink.svg"
        alt="Copy Link"
        @click="copyToClipboard"
      >
      <div
        class="tooltip"
        :class="{ active: isTooltipVisible }"
      >
        Link copied!
        <div class="tooltip-arrow" />
      </div>
    </div>


    <a
      :href="getEmailShareLink"
      target="_blank"
      rel="noopener"
    >
      <img
        class="social-media"
        src="~/assets/images/socialMedia/email.svg"
        alt="Share via Email"
      >
    </a>

    <a
      :href="getLinkedInShareLink"
      target="_blank"
      rel="noopener"
    >
      <img
        class="social-media"
        src="~/assets/images/socialMedia/LI.svg"
        alt="Share on LinkedIn"
      >
    </a>

    <a
      :href="getTwitterShareLink"
      target="_blank"
      rel="noopener"
    >
      <img
        class="social-media"
        src="~/assets/images/socialMedia/TW.svg"
        alt="Share on Twitter"
      >
    </a>

    <a
      :href="getFacebookShareLink"
      target="_blank"
      rel="noopener"
    >
      <img
        class="social-media"
        src="~/assets/images/socialMedia/FB.svg"
        alt="Share on Facebook"
      >
    </a>
  </div>
</template>

<script setup>
const props= defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  }
})
const isTooltipVisible = ref(false);

function copyToClipboard() {
  const copyText = window.location.href;
  const tempInput = document.createElement('input');
  tempInput.style.position = 'absolute';
  tempInput.style.left = '-1000px';
  tempInput.value = copyText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Show the tooltip for a few seconds
  isTooltipVisible.value = true;
  setTimeout(() => {
    isTooltipVisible.value = false;
  }, 2000);
}
const getFacebookShareLink = computed(() => {
  const url = encodeURIComponent(window.location.href);
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
});
const getTwitterShareLink = computed(() => {
  const encodedTitle = encodeURIComponent(props.title);
  const url = encodeURIComponent(window.location.href);
  return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${url}`;
});
const getEmailShareLink = computed(() => {
  const subject = encodeURIComponent(props.title);
  const body = encodeURIComponent(window.location.href);
  return `mailto:?subject=${subject}&body=${body}`;
});
const getLinkedInShareLink = computed(() => {
  const url = encodeURIComponent(window.location.href);
  return `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
});
</script>

<style lang="scss">
.social-media{
  height: 49px;
  width: 48px;
  cursor: pointer;
   &:hover{
    filter: brightness(0) saturate(100%) invert(21%) sepia(17%) saturate(1688%) hue-rotate(229deg) brightness(100%) contrast(93%);
  }
}
.tooltip {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #EDE8F2;
  color: #343538;
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  bottom: calc(100% + 8px);
  transform: translateX(-50%);
  white-space: nowrap;
}

.tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #EDE8F2;
  transform: translateX(-50%);
}

.tooltip.active {
  opacity: 1;
}

</style>