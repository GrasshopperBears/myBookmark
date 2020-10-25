<template>
  <div class="p-5 d-flex flex-row">
    <BookInfo :coverUrl="coverUrl" :title="title" :authors="authors"></BookInfo>
    <BookmarkView :text="text" :page="page"></BookmarkView>
  </div>
</template>

<script>
import RandomBookIcon from '@/assets/random-book-cover.png';
import BookInfo from '@/components/common/BookInfo';
import BookmarkView from '@/components/common/BookmarkView';

export default {
  name: 'RandomBookmark',
  components: { BookInfo, BookmarkView },
  data() {
    return {
      coverUrl: '',
      title: '',
      authors: '',
      text: '',
      page: 0,
    };
  },
  computed: {
    index() {
      return this.$route.query.index;
    },
    pending() {
      return this.$store.state.pending;
    },
  },
  watch: {
    index() {
      this.updateValues();
    },
    pending() {
      this.pending;
      this.updateValues();
    },
  },
  mounted() {
    this.updateValues();
  },
  methods: {
    updateValues() {
      const index = this.$route.query.index;
      const newBookmark = this.$store.state.bookmark[index];
      if (!newBookmark) return;
      const newBook = newBookmark.Book;
      this.coverUrl = newBook.thumbnail_url || RandomBookIcon;
      this.title = newBook.title;
      this.authors = newBook.authors;
      this.text = newBookmark.text;
      this.page = newBookmark.page;
    },
  },
};
</script>

<style></style>
