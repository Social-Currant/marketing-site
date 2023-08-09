<template>
  <div>
    <HeaderNav :display-banner="false" />
    <section class="container mx-auto px-6 md:px-8 mt-[57px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="order-2 md:order-1">
          <h3 class="text-hero">
            {{ pageData.fields.title }}
          </h3>
          <!-- <div>
            <label class="mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Subscribe"
              class="block"
            >
            <div class="inline-block my-6">
              <button class="bg-secondary text-white py-1.5 px-3 rounded-lg text-xl">
                {{ pageData.fields.HeaderBtnText }}
              </button>
            </div>
          </div> -->
        </div>
        <div class="h-80 order-1 md:order-2">
          <img
            :src="pageData.fields.heroImage.fields.file.url"
            class="mx-auto"
            height="300"
            width="300"
          >
        </div>
      </div>
      <div class="flex flex-col md:flex-row md:items-center mb-9 md:mb-0 md:my-8  md:space-y-0 md:space-x-8 items-start justify-between mt-12 md:mt-32">
        <div class="flex mb-3">
          <h2
            v-for="(blogCategory, index) in pageData.fields.blogCategories"
            :key="`bcategory` + index"
            class="text-style-all text-2xl md:text-4xl mr-6 cursor-pointer"
            :class="{'underline underline-offset-8':activeFilter===blogCategory }"
            @click="activeFilter=blogCategory"
          >
            {{ blogCategory }}
          </h2>
        </div>


        <div class="search-input-container">
          <span class="search-icon ">
            <img
              src="~/assets/icons/iconSearch.svg"
              alt="Search Icon"
            >
          </span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            class="search-input"
            @keyup.enter="fetchBlogEntries()"
          >
        </div>
      </div>
      <BlogCardList 
        class="md:ml-6"
        :posts="activeArray"
      />
    </section>
    <Footer />
  </div>
</template>
<script setup>
const { $contentfulClient } = useNuxtApp()
const searchQuery = ref('');
const pendingBlog = ref(true);
const pendingPage = ref(true);
const activeFilter=ref('All')

const pageData = await $contentfulClient.getEntries({
  order: '-sys.createdAt',
  content_type: 'blogPage',
}).then((pageData) => {
  pendingPage.value = false
  return pageData.items[0];
}).catch(console.error);

const posts = shallowRef([]);
const allEntries = ref([]); 

async function fetchBlogEntries() {
  posts.value = await $contentfulClient.getEntries({
    order: '-fields.date',
    content_type: 'blogPosts',
    'fields.title[match]': searchQuery.value,
  }).then((postsData) => {
    pendingBlog.value = false
    return postsData;
  }).catch(console.error);
  allEntries.value = posts.value.items?.slice()
}
fetchBlogEntries();
const brandEntries = computed(() =>
  posts.value.items?.filter(entry =>
    includesKeywords(entry.fields.tags, ['brand', 'company','brands'])
  )
);
const creatorEntries = computed(() =>
  posts.value.items?.filter(entry =>
    includesKeywords(entry.fields.tags, ['influencer', 'creators','creator'])
  )
);

const includesKeywords = (tags, keywords) => {
  tags = tags.map(tag => tag.toLowerCase());
  return keywords.some(keyword => tags.includes(keyword.toLowerCase()));
};
const activeArray = computed(() => {
      switch (activeFilter.value) {
        case 'All':
          return allEntries.value;
        case 'Brands':
          return brandEntries.value;
        case 'Creators':
          return creatorEntries.value;
        default:
          return allEntries.value; 
      }
    });

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
.search-input-container {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);

}

.search-input {
  padding-left: 38px;
}
</style>
