<template>
  <div class="bookmark-each ml-5 mb-4 w-100 p-5 d-flex flex-column justify-content-between">
    <div>{{ text }}</div>
    <div v-if="page" class="bookmark-each--page text-right w-100">{{ page }}쪽</div>
  </div>
</template>

<script>
export default {
  name: 'Bookmark',
  props: ['text', 'page'],
};
</script>

<style lang="scss">
.bookmark-each {
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 5px;
  font-family: 'Dovemayo-Medium';
  font-size: 1.2rem;
  .bookmark-each--page {
    color: gray;
    font-size: 1rem;
  }
}
</style>
