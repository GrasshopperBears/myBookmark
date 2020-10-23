<template>
  <div class="sidebar" v-on:mouseover="showSidebarText" @mouseleave="hideSidebarText">
    <div class="sidebar__icons">
      <div class="sidebar__icons-top">
        <div
          v-for="(iconSrc, index) in iconSrcList"
          :key="index"
          :class="{ 'sidebar__icon-wrapper': true, 'sidebar__icon-selected': index === selectedIndex }"
          @click="changeSelectMode(index)"
        >
          <img class="sidebar__icon" :src="iconSrc" />
        </div>
      </div>
      <div class="sidebar__icons-bottom">
        <img
          id="sidebar__icon--logout"
          class="sidebar__icon--logout sidebar__icon"
          src="@/assets/sidebar/logout.png"
          v-if="$store.state.authorized"
        />
        <img
          id="sidebar__icon--signin"
          class="sidebar__icon--singin sidebar__icon"
          src="@/assets/sidebar/signin.png"
          v-if="!$store.state.authorized"
        />
        <img
          id="sidebar__icon--signup"
          class="sidebar__icon--signup sidebar__icon"
          src="@/assets/sidebar/signup.png"
          v-if="!$store.state.authorized"
        />
      </div>
    </div>
    <transition name="slide-right">
      <div class="sidebar__texts" v-show="sidebarTextShown">
        <div class="sidebar__texts-top">
          <div class="sidebar__text-wrapper" v-for="(modeName, index) in modeNames" :key="index">
            <div class="sidebar__text" :key="index" @click="changeSelectMode(index)">{{ modeName }}</div>
          </div>
        </div>
        <div class="sidebar__texts-bottom sidebar__text-wrapper">
          <div class="sidebar__text-wrapper" v-if="$store.state.authorized">
            <div class="sidebar__text">로그아웃</div>
          </div>
          <div class="sidebar__text-wrapper" v-if="!$store.state.authorized">
            <div class="sidebar__text">로그인</div>
          </div>
          <div class="sidebar__text-wrapper" v-if="!$store.state.authorized">
            <div class="sidebar__text">회원가입</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import AddIcon from '@/assets/sidebar/add.png';
import RandomIcon from '@/assets/sidebar/random.png';
import CalendarIcon from '@/assets/sidebar/calendar.png';
import BookIcon from '@/assets/sidebar/book.png';

export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarTextShown: false,
      modeNames: ['추가하기', '어떤 글', '달력', '내 책갈피'],
      iconSrcList: [AddIcon, RandomIcon, CalendarIcon, BookIcon],
      routers: ['/', '/random', 'calendar', '/my-bookmark'],
      selectedIndex: 0,
    };
  },
  methods: {
    showSidebarText() {
      this.sidebarTextShown = true;
    },
    hideSidebarText() {
      this.sidebarTextShown = false;
    },
    changeSelectMode(index) {
      if (index !== this.selectedIndex) {
        this.selectedIndex = index;
        this.$router.push(this.routers[index]);
      }
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: row;
  font-family: 'Dovemayo-Medium';
}
.sidebar__icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 3.2rem;
  height: 100vh;
  background-color: #f5edce;
  z-index: 2;
  > div {
    display: flex;
    flex-direction: column;
  }
}
.sidebar__icon-wrapper {
  padding: 1rem;
  cursor: pointer;
}
.sidebar__icon {
  height: 1.2rem;
}
.sidebar__icon-selected {
  background-color: #ccc6ad;
}
.sidebar__text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 0.5rem;
  height: 3.5rem;
  cursor: pointer;
}
.sidebar__texts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  background-color: #f5edce;
  z-index: 1;
}
.sidebar__text:hover {
  text-decoration: underline;
}
.slide-right-enter-active {
  transition: all 0.2s ease;
}
.slide-right-leave-active {
  transition: all 0.15s ease;
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-7rem);
}
.sidebar__icons-bottom {
  justify-content: flex-end;
  margin-bottom: 1rem;
  img {
    width: 2rem;
    height: 2rem;
    padding: 0.2rem;
    margin: 0.4rem;
    cursor: pointer;
  }
}
.sidebar__texts-bottom {
  justify-content: flex-end;
  margin-bottom: 1rem;
  .sidebar__text-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0.65rem 0;
  }
}
</style>
