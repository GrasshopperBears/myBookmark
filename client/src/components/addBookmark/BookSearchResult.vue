<template>
  <b-modal id="book-search-result-modal" title="책 검색 결과" size="lg" scrollable hide-footer>
    <div v-for="result in searchResult" :key="result.isbn" class="book-search-result__each-wrapper">
      <b-row>
        <b-col md="2"><img :src="result.thumbnail" class="book-search-result__info--cover-image" /></b-col>
        <b-col md="8" align-self="center">
          <div class="book-search-result__info-wrapper">
            <p class="book-search-result__info--title">{{ result.title }}</p>
            <p class="book-search-result__info--author">{{ result.authors.join(', ') }}</p>
          </div>
        </b-col>
        <b-col align-self="center"
          ><b-button size="sm" variant="dark" @click="selectBook($event, result.isbn)">선택하기</b-button></b-col
        >
      </b-row>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'BookSearchResult',
  props: ['searchResult'],
  methods: {
    selectBook(e, key) {
      this.$emit('select-book', e, key);
      this.$bvModal.hide('book-search-result-modal');
    },
  },
};
</script>

<style>
.book-search-result__each-wrapper {
  padding: 0.8rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
}
.book-search-result__info--cover-image {
  height: 7rem;
}
.book-search-result__info--title {
  font-weight: bold;
}
.book-search-result__info--author {
  font-size: 0.8rem;
  color: gray;
}
</style>
