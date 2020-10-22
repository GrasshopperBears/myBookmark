<template>
  <div id="app">
    <Sidebar></Sidebar>
    <div class="service">
      <Header></Header>
      <div class="service-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default {
  name: 'App',
  components: { Sidebar, Header },
};
</script>

<style>
.service {
  margin-left: 3.2rem;
}
.service-container {
  padding: 2rem;
}
</style>
