<!-- components/RichText.vue -->
<template>
  <div
    v-if="content"
    class="rich-text mx-auto mt-14 md:p-6"
    v-html="renderContent()"
  />
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    renderContent() {
      return this.traverseNodes(this.content);
    },
    traverseNodes(node) {
      if (node.nodeType === 'document') {
        return node.content.map(this.traverseNodes).join('');
      }

      if (node.nodeType === 'paragraph') {
        return `<p>${node.content.map(this.traverseNodes).join('')}</p>`;
      }

      if (node.nodeType === 'heading-1') {
        return `<h1>${node.content.map(this.traverseNodes).join('')}</h1>`;
      }

      if (node.nodeType === 'heading-2') {
        return `<h2>${node.content.map(this.traverseNodes).join('')}</h2>`;
      }

      if (node.nodeType === 'heading-3') {
        return `<h3>${node.content.map(this.traverseNodes).join('')}</h3>`;
      }

      if (node.nodeType === 'heading-4') {
        return `<h4>${node.content.map(this.traverseNodes).join('')}</h4>`;
      }

      if (node.nodeType === 'heading-5') {
        return `<h5>${node.content.map(this.traverseNodes).join('')}</h5>`;
      }

      if (node.nodeType === 'heading-6') {
        return `<h6>${node.content.map(this.traverseNodes).join('')}</h6>`;
      }

      if (node.nodeType === 'text') {
        return node.value;
      }

      return '';
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
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
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
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
        margin-bottom: 12px;
    }
    max-width: 794px;
    
}
</style>