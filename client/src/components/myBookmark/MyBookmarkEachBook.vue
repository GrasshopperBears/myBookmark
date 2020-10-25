<template>
  <div class="p-5 d-flex flex-row">
    <BookInfo
      :coverUrl="currentBook.thumbnail_url ? currentBook.thumbnail_url : defaultBookIcon"
      :title="currentBook.title"
      :authors="currentBook.authors"
    ></BookInfo>
    <div class="my-bookmark-each-book__bookmarks-wrapper d-flex flex-column w-100">
      <BookmarkView
        v-for="bookmark of bookmarks"
        :key="bookmark.id"
        :text="bookmark.text"
        :page="bookmark.page"
        @deleteBookmark="deleteBookmark(bookmark.id)"
      ></BookmarkView>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DefaultBookIcon from '@/assets/random-book-cover.png';
import BookInfo from '@/components/common/BookInfo';
import BookmarkView from '@/components/common/BookmarkView';

export default {
  name: 'MyBookmarkEachBook',
  components: { BookInfo, BookmarkView },
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
  methods: {
    deleteBookmark(bookmarkId) {
      axios
        .delete(`/api/bookmark/${bookmarkId}`)
        .then((res) => {
          if (res.data.ok) {
            const idx = this.bookmarks.findIndex((bookmark) => bookmark.id === bookmarkId);
            this.$delete(this.bookmarks, idx);
            this.$store.commit('deleteBookmarkById', bookmarkId);
          }
        })
        .catch((err) => alert(err));
    },
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
</style>
