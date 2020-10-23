import Vue from 'vue';
import Router from 'vue-router';
import AddBookmark from '../components/addBookmark/AddBookmark';
import RandomBookmark from '../components/randomBookmark/RandomBookmark';
import BookmarkCalendar from '../components/bookmarkCalendar/BookmarkCalendar';
import MyBookmark from '../components/myBookmark/MyBookmark';
import Signup from '../components/auth/Signup';
import Signin from '../components/auth/Signin';

Vue.use(Router);

export default new Router({
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
