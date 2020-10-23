<template>
  <div class="add-bookmark-wrapper">
    <AddPicture></AddPicture>
    <div class="add-bookmark__ocr-result-wrapper"></div>
  </div>
</template>

<script>
import AddPicture from './AddPicture';

export default {
  name: 'AddBookmark',
  components: { AddPicture },
};
</script>

<style>
.add-bookmark-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
