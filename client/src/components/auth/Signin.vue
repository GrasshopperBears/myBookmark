<template>
  <div class="signin-wrapper">
    <div class="signin--title">로그인</div>
    <b-form @submit="signin" class="sigin__form">
      <b-form-input class="m-2" placeholder="아이디" required v-model="form.id"></b-form-input>
      <b-form-input class="m-2" placeholder="비밀번호" type="password" required v-model="form.password"></b-form-input>
      <b-button class="m-5" type="submit">로그인</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Signin',
  data() {
    return {
      form: {
        id: '',
        password: '',
      },
    };
  },
  methods: {
    signin(e) {
      e.preventDefault();
      axios
        .post('/auth/signin', this.form)
        .then((res) => {
          this.$store.commit('authorizeUser');
          this.$store.commit('setUserToken', res.data.token);
          this.$router.push('/');
        })
        .catch((err) => {
          if (err.response.status === 500 || err.response.status === 404)
            this.$bvModal.msgBoxOk(err.response.data.message);
          else this.$bvModal.msgBoxOk('알 수 없는 오류가 발생했어요');
        });
    },
  },
};
</script>

<style lang="scss">
.signin-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
}
.signin--title {
  font-size: 2rem;
}
.sigin__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
