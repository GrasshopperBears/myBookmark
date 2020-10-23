<template>
  <b-modal title="책 검색 결과" id="book-search-result-modal">
    <div v-for="result in searchResult" :key="result.isbn">
      {{ result.title }}
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'BookSearchResult',
  props: ['searchResult'],
};
</script>

<style></style>
