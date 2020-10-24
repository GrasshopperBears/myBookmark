<template>
  <div class="custom-ocr-wrapper">
    <div class="custom-ocr__search-wrapper">
      <b-row class="custom-ocr__search--each-line" align-v="center">
        <b-col sm="2" align-self="end"><label for="custom-ocr--title">책 제목</label></b-col>
        <b-col sm="6"
          ><b-form-input id="custom-ocr--title" v-model="form.title" @keydown="changeBookState"></b-form-input
        ></b-col>
        <b-col sm="4"><b-button class="ml-5" @click="searchBook">검색하기</b-button></b-col>
      </b-row>
      <b-row class="custom-ocr__search--each-line mt-4" align-v="center">
        <b-col cols="2"><label for="custom-ocr--author">지은이</label></b-col>
        <b-col cols="5"
          ><b-form-input id="custom-ocr--author" v-model="form.author" @keydown="changeBookState"></b-form-input
        ></b-col>
        <b-col cols="2"><label for="custom-ocr--page">페이지</label></b-col>
        <b-col cols="3"><b-form-input id="custom-ocr--page" v-model="form.page"></b-form-input></b-col>
      </b-row>
    </div>
    <b-form-textarea
      id="custom-ocr__ocr-result"
      class="mt-5"
      v-model="$store.state.ocrResult"
      rows="20"
    ></b-form-textarea>
    <div class="custom-ocr__confirm-area d-flex justify-content-end">
      <div @click="submitBookmark" class="custom-ocr__confirm-wrapper d-flex align-items-center justify-content-center">
        <img src="@/assets/bookmark-confirm.png" class="custom-ocr__confirm--img" />
        <div class="custom-ocr__confirm--text">책갈피 꽂기</div>
      </div>
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
      searchedBookInfo: [],
      selectedBook: undefined,
      form: {
        isbn: '',
        title: '',
        author: '',
        highlights: '',
        omits: '',
        page: '',
      },
    };
  },
  watch: {
    selectedBook(newBook, prevBook) {
      if (newBook) {
        this.form.title = this.selectedBook.title;
        this.form.author = this.selectedBook.authors.join(', ');
      }
    },
  },
  methods: {
    clearFields() {
      this.selectedBook = undefined;
      this.form = {
        isbn: '',
        title: '',
        author: '',
        highlights: '',
        omits: '',
        page: '',
      };
      this.$store.state.ocrResult = '';
      this.$emit('clearPicture');
    },
    searchBook() {
      if (!this.form.title) return;
      axios.get('/api/search/book', { params: { title: this.form.title } }).then((res) => {
        this.searchedBookInfo = res.data.result;
        this.$bvModal.show('book-search-result-modal');
      });
    },
    selectBook(e, key) {
      this.selectedBook = this.searchedBookInfo.find((book) => book.isbn === key);
    },
    changeBookState(e) {
      if (this.selectedBook) {
        if (!confirm('선택된 책 정보를 변경하시겠어요?')) {
          e.preventDefault();
        } else {
          this.selectedBook = undefined;
        }
      }
    },
    submitBookmark() {
      if (!this.form.title) return alert('책 제목 입력은 필수입니다!');
      const data = {
        book: this.selectedBook || {},
        title: this.form.title,
        authors: this.form.author,
        text: this.$store.getters.ocrResult,
        highlights: undefined,
        omits: undefined,
        page: parseInt(this.form.page),
      };
      axios
        .post('/api/bookmark', data)
        .then((res) => {
          alert('책갈피가 추가되었습니다.');
          this.clearFields();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.custom-ocr-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 700px;
  height: 750px;
}
.custom-ocr__confirm-wrapper {
  margin-top: 2.5rem;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
  border-radius: 10px;
  &:hover {
    border: 2px solid gray;
    cursor: pointer;
  }
}
.custom-ocr__confirm--img {
  height: 3rem;
  margin-right: 0.5rem;
}
.custom-ocr__confirm--text {
  font-family: 'Dovemayo-Medium';
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
