<template>
  <div class="custom-ocr-wrapper">
    <div class="custom-ocr__search-wrapper">
      <b-row class="custom-ocr__search--each-line">
        <b-col sm="2"><label for="custom-ocr--title">책 제목</label></b-col>
        <b-col sm="6"><b-form-input id="custom-ocr--title" v-model="title"></b-form-input></b-col>
        <b-col sm="4"><b-button class="ml-5" @click="searchBook">검색하기</b-button></b-col>
      </b-row>
      <b-row class="custom-ocr__search--each-line mt-4">
        <b-col sm="2"><label for="custom-ocr--author">지은이</label></b-col>
        <b-col sm="6"><b-form-input id="custom-ocr--author" v-model="author"></b-form-input></b-col>
      </b-row>
    </div>
    <BookSearchResult :searchResult="searchedBookInfo" v-on:select-book="selectBook"></BookSearchResult>
  </div>
</template>

<script>
import axios from 'axios';
import BookSearchResult from './BookSearchResult';

export default {
  name: 'CustomOCR',
  components: { BookSearchResult },
  data() {
    return {
      title: '',
      author: '',
      searchedBookInfo: [],
      selectedBook: undefined,
    };
  },
  watch: {
    selectedBook() {
      this.title = this.selectedBook.title;
      this.author = this.selectedBook.authors.join(', ');
    },
  },
  methods: {
    searchBook() {
      if (!this.title) return;
      axios.get('/api/search/book', { params: { title: this.title } }).then((res) => {
        this.searchedBookInfo = res.data.result;
        this.$bvModal.show('book-search-result-modal');
      });
    },
    selectBook(e, key) {
      this.selectedBook = this.searchedBookInfo.find((book) => book.isbn === key);
    },
  },
};
</script>

<style lang="scss">
.custom-ocr-wrapper {
  width: 600px;
}
</style>
