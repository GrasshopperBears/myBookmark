<template>
  <div class="d-flex flex-row flex-wrap">
    <div
      v-for="{ id, book } in books"
      :key="id"
      class="my-bookmark-each d-flex flex-column align-items-center m-4"
      @click="goEachBook(id, book)"
    >
      <img
        :src="book.thumbnail_url ? book.thumbnail_url : defaultBookIcon"
        :class="book.thumbnail_url ? '' : 'my-bookmark__cover-default'"
      />
      <div class="font-weight-bold mt-4">{{ book.title }}</div>
      <div>{{ book.authors }}</div>
    </div>
  </div>
</template>

<script>
import DefaultBookIcon from '@/assets/random-book-cover.png';

export default {
  name: 'MyBookmark',
  data() {
    return {
      defaultBookIcon: DefaultBookIcon,
    };
  },
  computed: {
    books() {
      const bookmarks = this.$store.state.bookmark;
      const addedBooks = new Set();
      const books = bookmarks.reduce((acc, bookmark) => {
        const bookId = bookmark.book_id;
        if (!addedBooks.has(bookId)) {
          acc.push({ id: bookId, book: bookmark.Book });
          addedBooks.add(bookId);
        }
        return acc;
      }, []);
      return books;
    },
  },
  methods: {
    goEachBook(bookId, book) {
      this.$router.push({ path: '/my-bookmark/book', query: { bookId, book } });
    },
  },
};
</script>

<style lang="scss">
.my-bookmark-each {
  width: 200px;
  img {
    width: 120px;
  }
  &:hover {
    cursor: pointer;
  }
}
.my-bookmark__cover-default {
  padding: 27px 0;
}
</style>
