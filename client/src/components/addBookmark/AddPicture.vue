<template>
  <div class="add-bookmark__add-picture-wrapper">
    <div class="add-bookmark__submit-picture-wrapper">
      <b-form-file
        accept="image/jpeg, image/jpg, image/png"
        placeholder="페이지 올리기"
        drop-placeholder="여기에 드롭하세요"
        @change="selectImage"
      ></b-form-file>
      <div class="add-bookmark__picture-preview">
        <img class="add-bookmark__picture-preview--img" v-if="imgUrl" :src="imgUrl" />
      </div>
    </div>
    <b-button variant="primary" @click="analyzeImage" v-if="!isLoading">분석하기</b-button>
    <b-spinner variant="primary" v-if="isLoading"></b-spinner>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddPicture',
  data() {
    return {
      image: undefined,
      imgUrl: undefined,
      isLoading: false,
    };
  },
  methods: {
    selectImage(e) {
      const image = e.target.files[0];
      if (image.size > 1024 * 1024 * 10) {
        e.preventDefault();
        alert('파일 사이즈는 10Mb를 넘길 수 없습니다.');
      } else {
        this.image = e.target.files[0];
        this.imgUrl = URL.createObjectURL(this.image);
      }
    },
    analyzeImage() {
      if (!this.image) return alert('사진을 추가해주세요');
      this.isLoading = true;
      const reader = new FileReader();
      reader.onload = () => {
        const image = {
          images: [
            {
              format: this.image.type.split('/')[1],
              name: this.image.name,
              data: reader.result.split(',')[1],
            },
          ],
          lang: 'ko',
        };
        axios
          .post('http://localhost:3000/api/ocr', image)
          .then((res) => {
            this.isLoading = false;
            this.$store.commit('setOcrResult', res.data.resultSentence);
          })
          .catch((err) => {
            if (err.response.status === 500) this.$bvModal.msgBoxOk(err.response.data.message);
            else this.$bvModal.msgBoxOk('알 수 없는 오류가 발생했어요');
            this.isLoading = false;
          });
      };
      reader.readAsDataURL(this.image);
    },
  },
};
</script>

<style>
.add-bookmark__add-picture-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 850px;
}
.add-bookmark__submit-picture-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 750px;
}
.add-bookmark__picture-preview {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 680px;
  border: 3px dashed gray;
}
.add-bookmark__picture-preview--img {
  max-width: 670px;
  max-height: 650px;
}
</style>
