<template>
  <div id="app">
    <Sidebar></Sidebar>
    <div class="service">
      <div class="header">책갈피</div>
      <div>내용</div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: { Sidebar },
};
</script>

<style>
.service {
  margin-left: 3.2rem;
}
</style>
