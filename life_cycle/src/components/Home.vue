<template>
<div>
    <h1>Life Cycle Methods {{name}} </h1>

    <ul>
        <li> BeforeCreate and created</li> 
        <li> beforeMount and Mounted</li>
        <li> beforeupdated  and Updated </li>
        <li> BeforeUnmount    and Unmounted </li>
        </ul>
        <h1 ref="count">{{counter}}</h1>
        <button v-on:click="counter=counter+1">Update Count</button>
</div>

<br>
<button v-on:click="show=!show">Toggle</button>
<User v-if="show"/>
</template>

<script>
import User from  './User'
export default {
    
    name:"Home",
    data()
    {
        console.warn("created");
        return{
            name : 'Sunil',
            counter:0,
            show:true,
            
        }

    },
  
    components:{
        User
    },


    beforeCreate()
    {
      
        alert("BeforeCreate ");
    },
    created()
    {
        this.name="Vivek";
        alert("Created");
    },
    beforeMount()      // template attach se pehle he is liye value null hogi  after mount   element  data is show , Not access Element beforemount use Mounted
    { 
       console.warn("beforemount",this.$el);
       
    },
     mounted()  // Element Complet Data Show    
     {
        console.warn("Mounted",this.$el);
    },
    beforeUpdate() // Ui Update hone se pehle call hogi befor update  ,dikh chuka hoga to updated life cycle call hoga 
    {
        console.log("BeforeUpdate",this.$refs['count'].textContent);
    },
    updated()
    {
          console.log("Update",this.$refs['count'].textContent);
    }
    
}
</script>
<style scoped>
ul{
    color: blue;
}
</style>