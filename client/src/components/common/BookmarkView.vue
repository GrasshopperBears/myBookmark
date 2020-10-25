<template>
  <div class="bookmark-each ml-5 mb-4 w-100 p-5 d-flex flex-column justify-content-between">
    <img class="bookmark-each--delete--btn" src="@/assets/delete-bookmark.png" @click="deleteBookmark" />
    <div>{{ text }}</div>
    <div v-if="page" class="bookmark-each--page text-right w-100">{{ page }}쪽</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Bookmark',
  props: ['text', 'page'],
  methods: {
    delete() {},
    deleteBookmark() {
      this.$bvModal
        .msgBoxConfirm('삭제하시겠습니까?')
        .then((select) => {
          if (select) this.$emit('deleteBookmark');
        })
        .catch((e) => alert('오류가 발생했습니다.'));
    },
  },
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
  &:hover {
    .bookmark-each--delete--btn {
      display: block;
    }
  }
}
.bookmark-each--delete--btn {
  display: none;
  position: absolute;
  width: 30px;
  height: 30px;
  padding: 5px;
  left: 100%;
  border-radius: 50%;
  transform: translate(-300%, -100%);
  cursor: pointer;
  &:hover {
    border: 2px solid rgba(241, 196, 15, 0.5);
  }
}
</style>
