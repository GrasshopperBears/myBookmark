import Vue from 'vue';
import Router from 'vue-router';
import { store } from '../store';
import AddBookmark from '../components/addBookmark/AddBookmark';
import RandomBookmark from '../components/randomBookmark/RandomBookmark';
import BookmarkCalendar from '../components/bookmarkCalendar/BookmarkCalendar';
import MyBookmark from '../components/myBookmark/MyBookmark';
import Signup from '../components/auth/Signup';
import Signin from '../components/auth/Signin';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: AddBookmark,
    },
    { path: '/random', component: RandomBookmark },
    { path: '/calendar', component: BookmarkCalendar },
    { path: '/my-bookmark', component: MyBookmark },
    { path: '/signup', component: Signup },
    { path: '/signin', component: Signin },
  ],
});

const routerConfig = () => {
  router.beforeEach((to, from, next) => {
    if (to.path === '/random' && !Object.keys(to.query).length)
      next({ path: to.path, query: { index: Math.floor(Math.random() * store.state.bookmark.length) } });
    if (to.path === from.path) next(false);
    if (to.path === '/signin' || to.path === '/signup') {
      store.commit('changeCurrentPath', to.path);
      next();
    }
    if (!store.state.authorized) {
      alert('로그인 후 이용해주세요!');
      store.commit('changeCurrentPath', '/signin');
      next('/signin');
    } else {
      store.commit('changeCurrentPath', to.path);
      next();
    }
  });
};

export { router, routerConfig };
