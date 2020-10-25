<template>
  <div class="p-5 d-flex flex-row">
    <div class="d-flex flex-column">
      <div class="w-100 mb-5 d-flex flex-row justify-content-center">
        <img
          class="my-bookmark-each-book__book-cover"
          :src="currentBook.thumbnail_url ? currentBook.thumbnail_url : defaultBookIcon"
        />
      </div>
      <div class="my-bookmark-each__book-info-text-wrapper d-flex flex-column align-items-end">
        <div class="my-bookmark-each__book-info--title mb-3">{{ currentBook.title }}</div>
        <div class="my-bookmark-each__book-info--authors">{{ currentBook.authors }}</div>
      </div>
    </div>
    <div class="my-bookmark-each-book__bookmarks-wrapper d-flex flex-column w-100">
      <div
        v-for="bookmark of bookmarks"
        :key="bookmark.id"
        class="my-bookmark-each-book__bookmark-each ml-5 mb-4 w-100 p-5"
      >
        <div>{{ bookmark.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultBookIcon from '@/assets/random-book-cover.png';

export default {
  name: 'MyBookmarkEachBook',
  data() {
    return {
      bookmarks: [],
      currentBookId: undefined,
      currentBook: undefined,
      defaultBookIcon: DefaultBookIcon,
    };
  },

  beforeMount() {
    this.currentBookId = this.$route.query.bookId;
    this.currentBook = this.$route.query.book;
    this.bookmarks = this.$store.state.bookmark.filter((bookmark) => bookmark.book_id === this.currentBookId);
  },
};
</script>

<style lang="scss">
.my-bookmark-each-book__book-cover {
  width: 8rem;
}
.my-bookmark-each__book-info-text-wrapper {
  width: 20rem;
  .my-bookmark-each__book-info--title {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .my-bookmark-each__book-info--authors {
    font-size: 0.9rem;
  }
}
.my-bookmark-each-book__bookmark-each {
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 5px;
  font-family: 'Dovemayo-Medium';
  font-size: 1.2rem;
}
</style>
