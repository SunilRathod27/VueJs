<template>
  
  <router-link to="/">Home</router-link><br>
  <router-link to="/login">Login</router-link><br>
  <router-link to="/profile">Profile</router-link>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home'
export default {
  name: 'App',
  components: {
    // HelloWorld,,
    // Home
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
