<template>
  <div class="p-5 d-flex flex-row">
    <div class="random__book-info-wrapper d-flex flex-column">
      <div class="random__book-info--cover-wrapper mb-5 d-flex flex-row justify-content-center">
        <img class="random__book-info--cover" :src="coverUrl" />
      </div>
      <div class="random__book-info-text-wrapper d-flex flex-column align-items-end">
        <div class="random__book-info--title mb-3">{{ title }}</div>
        <div class="random__book-info--authors">{{ authors }}</div>
      </div>
    </div>
    <BookmarkView :text="text" :page="page"></BookmarkView>
  </div>
</template>

<script>
import RandomBookIcon from '@/assets/random-book-cover.png';
import BookmarkView from '@/components/common/BookmarkView';

export default {
  name: 'RandomBookmark',
  components: { BookmarkView },
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

<style lang="scss">
.random__book-info--cover {
  width: 8rem;
}
.random__book-info-text-wrapper {
  width: 20rem;
  .random__book-info--title {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .random__book-info--authors {
    font-size: 0.9rem;
  }
}
</style>
