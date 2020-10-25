<template>
  <div class="d-flex flex-row flex-wrap">
    <div
      v-for="{ id, book } in books"
      :key="id"
      class="my-bookmark-each d-flex flex-column align-items-center m-4"
      @click="goEachBook(id, book)"
    >
      <img class="bookmark--book-delete-btn" src="@/assets/delete-bookmark.png" @click.stop="deleteBook(id)" />
      <img
        :src="book.thumbnail_url ? book.thumbnail_url : defaultBookIcon"
        :class="'my-bookmark--book-cover ' + (book.thumbnail_url ? '' : 'my-bookmark__cover-default')"
      />
      <div class="font-weight-bold mt-4">{{ book.title }}</div>
      <div>{{ book.authors }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
    deleteBookRequest(bookId) {
      axios
        .delete(`/api/bookmark/book/${bookId}`)
        .then((res) => {
          const idx = this.books.findIndex((book) => book.id === bookId);
          this.$delete(this.books, idx);
          this.$store.commit('deleteByBookId', bookId);
        })
        .catch((err) => alert(err));
    },
    goEachBook(bookId, book) {
      this.$router.push({ path: '/my-bookmark/book', query: { bookId, book } });
    },
    deleteBook(bookId) {
      this.$bvModal
        .msgBoxConfirm('책의 모든 책갈피를 삭제하시겠습니까?')
        .then((select) => {
          this.deleteBookRequest(bookId);
        })
        .catch((err) => alert(err));
    },
  },
};
</script>

<style lang="scss">
.my-bookmark-each {
  width: 200px;
  .my-bookmark--book-cover {
    width: 120px;
  }
  .bookmark--book-delete-btn {
    position: absolute;
    display: none;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    transform: translateX(300%);
  }
  &:hover {
    cursor: pointer;
    .bookmark--book-delete-btn {
      display: block;
      &:hover {
        border: 2px solid rgba(128, 128, 128, 0.5);
      }
    }
  }
}
.my-bookmark__cover-default {
  padding: 27px 0;
}
</style>
