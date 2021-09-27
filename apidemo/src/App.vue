<template>
  <h1> Call Api </h1>
  <h2>list Data</h2>
<ul class="item" v-for="item in list" :key="item">
  <li>{{item.id}}</li>
  <li>{{item.email}}</li>
  <li>{{item.first_name}}</li>
  <li><img :src="item.avtar" alt=""></li>
</ul>
 
</template> 

<script>
import axios from 'axios';
export default {
  name: 'App',
  data(){
    return{
      list:[]
    }
  },
  async mounted()
  {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn("api data",result.data.data);
    this.list=result.data.data
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
.item {
   
}
.item li {
   display: inline-block;
    width: 200px;
    border: 1px solid;
    padding: 5px;
}
</style>
