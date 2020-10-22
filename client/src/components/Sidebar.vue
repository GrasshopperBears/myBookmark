<template>
  <div class="sidebar" v-on:mouseover="showSidebarText" v-on:mouseleave="hideSidebarText">
    <div class="sidebar__icons">
      <div class="sidebar__icon-wrapper"><img class="sidebar__icon" src="../assets/sidebar/add.png" /></div>
      <div class="sidebar__icon-wrapper"><img class="sidebar__icon" src="../assets/sidebar/random.png" /></div>
      <div class="sidebar__icon-wrapper"><img class="sidebar__icon" src="../assets/sidebar/calendar.png" /></div>
      <div class="sidebar__icon-wrapper"><img class="sidebar__icon" src="../assets/sidebar/book.png" /></div>
    </div>
    <transition name="slide-right">
      <div class="sidebar__texts" v-show="sidebarTextShown">
        <div class="sidebar__text-wrapper"><div class="sidebar__text">추가하기</div></div>
        <div class="sidebar__text-wrapper"><div class="sidebar__text">어떤 글</div></div>
        <div class="sidebar__text-wrapper"><div class="sidebar__text">달력</div></div>
        <div class="sidebar__text-wrapper"><div class="sidebar__text">내 책갈피</div></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarTextShown: false,
    };
  },
  methods: {
    showSidebarText() {
      this.sidebarTextShown = true;
    },
    hideSidebarText() {
      this.sidebarTextShown = false;
    },
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: row;
}
.sidebar__icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3.2rem;
  height: 100vh;
  background-color: #f5edce;
  z-index: 2;
}
.sidebar__icon-wrapper {
  padding: 1rem;
  cursor: pointer;
}
.sidebar__icon {
  height: 1.2rem;
}
.sidebar__text-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5rem;
  cursor: pointer;
}
.sidebar__texts {
  width: 7rem;
  background-color: #f5edce;
  z-index: 1;
}
.sidebar__text:hover {
  text-decoration: underline;
  text-underline-position: under;
}
.slide-right-enter-active {
  transition: all 0.2s ease;
}
.slide-right-leave-active {
  transition: all 0.2s ease;
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(-7rem);
}
</style>
