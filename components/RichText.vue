<!-- components/RichText.vue -->
<template>
  <div
    v-if="content"
    class="rich-text mx-auto text-black mt-14 md:p-6"
    v-html="renderContent()"
  />
</template>

<script>
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    renderContent() {
      const options = {
          renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
                  `<img class="img" src="${fields.file.url}" alt="${fields.description}"/>`,
          },
      };
      return documentToHtmlString(this.content, options)
    },
  },
};
</script>

<style lang="scss">
.rich-text {
    h1 {
        color: #30104C;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 147.023%; /* 52.928px */
        margin-bottom: 16px;
        @media (min-width: 1024px) {
          font-size: 36px;
        }
    }
    h2{
      color: #30104C;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 147.023%; /* 47.047px */
        margin-bottom: 12px;
        @media (min-width: 1024px) {
          font-size: 32px;
        }
    }
    h3, h4, h5{
      color: #000;
      font-family: 'Inter', 'Poppins';
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      margin-bottom: 12px;
    }

    h1, h2, h3, h4, h5, h6 {
        &:not(:first-child) {
          margin-top: 20px;
        }
    }

    p {
        color: #000;
        font-family: 'Inter', 'Poppins';
        font-size: 18px;
        font-style: normal;
        line-height: 150%; /* 27px */
        margin-bottom: 12px;
        @media (min-width: 625px) {
          font-size: 20px;
        }
    }
    

    ul {
      list-style-type: disc;
      padding-left: 40px;
    }

    a{
      color: #2565F4;
      cursor:pointer;
    }
    img{
      margin: 0 auto;
      width: 75%;
    }
}
</style>