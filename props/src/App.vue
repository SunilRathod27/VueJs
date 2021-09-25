<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Props in Vue js</h1>
    <child v-bind:users="users"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import child from './components/child.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    child
  },
data()
{
    return {users:[
        {name:"vivek",email:"vivek@gmail.com"},
        {name:"Nirav",email:"nirav@gmail.com"},
        {name:"Ankit",email:"ankit@gmail.com"}
    ]}
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
