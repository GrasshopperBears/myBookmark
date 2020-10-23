<template>
  <div class="signup-wrapper">
    <div class="signup--title">회원가입</div>
    <b-form @submit="signup" class="signup__form">
      <b-form-input class="m-2" placeholder="아이디" required v-model="form.id"></b-form-input>
      <b-form-input class="m-2" placeholder="비밀번호" type="password" required v-model="form.password"></b-form-input>
      <b-form-input class="m-2" placeholder="이름" required v-model="form.userName"></b-form-input>
      <b-button class="m-5" type="submit btn-dark" variant="primary">회원가입</b-button>
    </b-form>
    <div class="signup-to-signin">
      <p class="m-0">이미 계정이 있다면?</p>
      <b-button class="ml-3 signup" variant="secondary" @click="goToSignin">로그인하러 가기</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Signup',
  data() {
    return {
      form: {
        id: '',
        password: '',
        userName: '',
      },
    };
  },
  methods: {
    signup(e) {
      e.preventDefault();
      axios
        .post('/auth/signup', this.form)
        .then((res) => {
          alert('책장이 만들어졌습니다!');
          this.$router.push('/signin');
        })
        .catch((err) => {
          if (err.response.status === 500 || err.response.status === 404)
            this.$bvModal.msgBoxOk(err.response.data.message);
          else this.$bvModal.msgBoxOk('알 수 없는 오류가 발생했어요');
        });
    },
    goToSignin() {
      this.$router.push('/signin');
    },
  },
};
</script>

<style>
.signup-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 25rem;
}
.signup--title {
  font-size: 2rem;
}
.signup__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signup-to-signin {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
