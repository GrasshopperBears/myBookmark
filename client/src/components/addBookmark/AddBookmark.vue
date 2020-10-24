<template>
  <div class="add-bookmark-wrapper">
    <AddPicture ref="clearPicture"></AddPicture>
    <CustomOCR @clearPicture="clearPicture"></CustomOCR>
  </div>
</template>

<script>
import AddPicture from './AddPicture';
import CustomOCR from './CustomOCR';

export default {
  name: 'AddBookmark',
  components: { AddPicture, CustomOCR },
  methods: {
    clearPicture() {
      this.$refs.clearPicture.clearImage();
    },
  },
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
