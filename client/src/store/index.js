import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    authorized: false,
    currentPath: undefined,
    ocrResult: '',
    bookmark: [],
    pending: true,
  },
  getters: {
    currentPath(state) {
      return state.currentPath;
    },
    ocrResult(state) {
      return state.ocrResult;
    },
  },
  mutations: {
    authorizeUser(state) {
      state.authorized = true;
    },
    unauthorizeUser(state) {
      state.authorized = false;
    },
    changeCurrentPath(state, newPath) {
      state.currentPath = newPath;
    },
    setOcrResult(state, newText) {
      state.ocrResult = newText;
    },
    addBookmark(state, newBookmark) {
      state.bookmark.unshift(newBookmark);
    },
    deleteBookmarkById(state, bookmarkId) {
      const idx = state.bookmark.findIndex((bookmark) => bookmark.id === bookmarkId);
      state.bookmark.splice(idx, 1);
    },
    deleteByBookId(state, bookId) {
      state.bookmark = state.bookmark.reduce((acc, bookmark) => {
        if (bookmark.book_id !== bookId) acc.push(bookmark);
        return acc;
      }, []);
    },
  },
});
