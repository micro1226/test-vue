<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!-- <Todo v-if="hideTodo"/> -->
<!-- <button @click="clickHide">hide</button> -->

<AdvancedUse />

  </div>
</template>

<script>
// import Todo from './components/Todo.vue'
// import HelloWorld from './components/HelloWorld.vue'
import AdvancedUse from './components/AdvancedUse/index'
export default {
  name: 'App',
  components: {
    // Todo,
    // HelloWorld,
    AdvancedUse
  },
  data() {
    return {
      hideTodo: false
    }
  },
  methods: {
    clickHide() {
      this.hideTodo = !this.hideTodo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
