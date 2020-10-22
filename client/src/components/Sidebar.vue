<template>
  <div class="sidebar" v-on:mouseover="showSidebarText" @mouseleave="hideSidebarText">
    <div class="sidebar__icons">
      <div
        v-for="(iconSrc, index) in iconSrcList"
        :key="index"
        :class="{ 'sidebar__icon-wrapper': true, 'sidebar__icon-selected': index === selectedIndex }"
        @click="changeSelectMode(index)"
      >
        <img class="sidebar__icon" :src="iconSrc" />
      </div>
    </div>
    <transition name="slide-right">
      <div class="sidebar__texts" v-show="sidebarTextShown">
        <div class="sidebar__text-wrapper" v-for="(modeName, index) in modeNames" :key="index">
          <div class="sidebar__text" :key="index" @click="changeSelectMode(index)">{{ modeName }}</div>
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
      this.selectedIndex = index;
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
.sidebar__icon-selected {
  background-color: #ccc6ad;
}
.sidebar__text-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0.5rem;
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
</style>
