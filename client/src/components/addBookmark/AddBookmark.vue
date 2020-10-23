<template>
  <div class="add-bookmark-wrapper">
    <AddPicture></AddPicture>
    <CustomOCR></CustomOCR>
  </div>
</template>

<script>
import AddPicture from './AddPicture';
import CustomOCR from './CustomOCR';

export default {
  name: 'AddBookmark',
  components: { AddPicture, CustomOCR },
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
