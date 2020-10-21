<template>
  <div id="app">
    <span v-if="show">{{ my }}</span>
    <button v-on:click="btnClicked">Button</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { x: 1, y: 2, show: true };
  },
  methods: {
    btnClicked(event) {
      this.show = !this.show;
    },
  },
  computed: {
    my() {
      return this.x + this.y;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
