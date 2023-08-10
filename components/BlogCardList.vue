<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-24 justify-items-center">
    <div
      v-for="post in posts"
      :key="post.sys.id"
      class="mb-8 cursor-pointer at-hover p-2.5 w-full md:w-80 lg:w-full "
      @click="navigateTo({name: 'blog-id', params: {id: post.sys.id},})"
    >
      <img
        :src="post.fields.image.fields.file.url"
        height="100"
        class="blog-image"
      >
      <div class="flex flex-row-reverse">
        <div class="blog-date mt-2">
          {{ formatDate(post.fields.date) }}
        </div>
      </div>
      <h4 class="blog-head">
        {{ post.fields.title }}
      </h4>
      <p class="blog-body">
        {{ post.fields.excerpt }}
        <a
          class="text-secondary cursor-pointer"
          @click="navigateTo({name: 'blog-id', params: {id: post.sys.id},})"
        >read more</a>
      </p>
      <div
        v-for="(tag, index) in post.fields.tags"
        :key="index"
        class="blog-tag inline-block"
      >
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: {
    type: Object,
    required: false,
    default:null
  }
})

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
}

</script>
<style>
.at-hover:hover{
  background: #F5F6F6;
  border-radius: 8px;
}
.blog-image {
  border-radius: 8px;
  height: 193px;
  width: 100%;
  object-fit: cover;
}
.blog-head {
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 147.023%;
  /* 29.405px */
}

.blog-body {
  color: #343538;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 147.023%;
}
.blog-date{
  color: #ACACAC;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 147.023%;
}
.blog-tag {
  border-radius: 4px;
  background: #ede8f2;
  padding: 5px;
  align-items: center;
  margin: 4px;
  color: #343538;

  font-feature-settings: "clig" off, "liga" off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>
