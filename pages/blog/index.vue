<template>
  <div>
    <HeaderNav :display-banner="false" />
    <section class="container mx-auto px-6 md:px-8 mt-[57px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="order-2 md:order-1">
          <h3 class="text-hero mb-12">
            Stay up to date with the latest trends, strategies, and success stories that showcase the potential of
            creator collaborations
          </h3>
          <div>
            <label class="mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Subscribe"
              class="block"
            >
            <div class="inline-block my-6">
              <button class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div class="relative h-80 order-1 md:order-2">
          <img
            src="~/assets/blog/frame1.png"
            class="absolute right-frame-1 md:right-0"
            height="200"
            width="200"
          >
          <img
            src="~/assets/blog/frame2.png"
            class="absolute top-24 right-frame-2 md:right-24"
            height="200"
            width="200"
          >
        </div>
      </div>
      <div class="flex justify-between mt-32">
        <h2 class="text-style-all">
          All
        </h2>
        <div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            @keyup.enter="fetchBlogEntries()"
          >
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-24">
        <div
          v-for="post in posts.items"
          :key="post.sys.id"
          class="mb-8"
        >
          <img
            :src="post.fields.image.fields.file.url"
            height="100"
            class="blog-image"
          >
          <div class="flex flex-row-reverse">
            <div class="blog-date">
              June 23, 2023
            </div>
          </div>
          <h4 class="blog-head">
            {{ post.fields.title }}
          </h4>
          <p class="blog-body">
            {{ post.fields.excerpt }}
            <a
              class="text-secondary cursor-pointer"
              @click="navigateTo('/')"
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
    </section>
    <Footer />
  </div>
</template>
<script setup>
const client = useContentful();
const searchQuery = ref('');

const posts = shallowRef([]);

function fetchBlogEntries() {
  client.getEntries({
    order: '-sys.createdAt',
    content_type: 'blogPosts',
    'fields.title[match]': searchQuery.value,
  }).then((postsData) => {
    posts.value = postsData
  }).catch(console.error);
}
fetchBlogEntries();

</script>
<style lang="scss" scoped>
.text-hero {
  color: #30104C;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 147.023%;
  /* 58.809px */
}

input {
  height: 40px;
  padding: 8px 16px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #ACACAC;
}

.text-style-all {
  color: #30104C;
  font-family: Poppins;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 147.023%;
  /* 58.809px */
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

.blog-date {
  color: #ACACAC;
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 147.023%;
}

.blog-tag {
  border-radius: 4px;
  background: #EDE8F2;
  padding: 5px;
  align-items: center;
  margin: 4px;
  color: #343538;

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.blog-image {
  border-radius: 8px;
  height: 193px;
  width: 100%;
  object-fit: cover;
}

.right-frame-1 {
  right: 10%;
}

.right-frame-2 {
  right: 35%;
}

input[type="email"] {
  display: block;
  border: 1px solid #ACACAC;
  border-radius: 5px;
  width: 80%;
  padding: 8px 16px;
  height: 40px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
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
</style>
