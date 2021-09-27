<template>
<router-link to="/Home">Home Page</router-link> <br>
<router-link to="/Login">Login Page </router-link> <br>
<router-link to="/Profile">Profile Page </router-link> <br>

<router-link to="/Profile/1">vivek Profile Page</router-link><br>
<router-link to="/Profile/2"> Raj Profile Page</router-link><br>
<router-link to="/404/2"> not found</router-link>
  <router-view></router-view>

</template>

<script>


export default {
  
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
