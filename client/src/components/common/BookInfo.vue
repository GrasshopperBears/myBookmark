<template>
  <div class="book-info-wrapper d-flex flex-column">
    <div class="book-info--cover-wrapper mb-5 d-flex flex-row justify-content-center">
      <img class="book-info--cover" :src="coverUrl" />
    </div>
    <div class="book-info-text-wrapper d-flex flex-column align-items-end">
      <div class="book-info--title mb-3">{{ title }}</div>
      <div class="book-info--authors">{{ authors }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookInfo',
  props: ['title', 'authors', 'coverUrl'],
};
</script>

<style lang="scss">
.book-info--cover {
  width: 8rem;
}
.book-info-text-wrapper {
  width: 20rem;
  .book-info--title {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .book-info--authors {
    font-size: 0.9rem;
  }
}
</style>
