<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
const seoValues = {
  title: 'Social Currant',
  description: 'Find mission aligned creators for your campaign or cause',
  image: 'http://images.ctfassets.net/3pfwjoohrkvu/205PBKoPDTdidK8tYE8SJM/167f0df74e437d6a09f140ceb8e176bd/currantheroimage.png',
  url: 'https://socialcurrant.co'
}

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  charset: 'utf-8',
  title: seoValues.title,
  titleTemplate: title => title !== 'Social Currant' ? `${title} - Social Currant` : title,
})

useSeoMeta({
  title: seoValues.title,
  description: seoValues.description,
  image: seoValues.image,

  // open graph / facebook
  ogTitle: seoValues.title,
  ogDescription: seoValues.description,
  ogType: 'website',
  ogUrl: seoValues.url,
  ogImage: seoValues.image,

  // twitter
  twitterCard: 'summary_large_image',
  twitterTitle: seoValues.title,
  twitterDescription: seoValues.description,
  twitterImage: seoValues.image,
  twitterImageType: 'png',

  themeColor: "#30104C"
})

</script>
