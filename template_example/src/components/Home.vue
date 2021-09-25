<template>
    <div>
      <p v-html="rowHtml"></p>
        <h2>{{name}}</h2>
        <h3>{{email}}</h3>
        <h4>{{ok?"Yes":"No"}}</h4>
        <button v-on:click="updatetext">Clickme</button>
    </div>
</template>
<script>
export default {
    name: "Home",
    data()
    {
        return{
            name: 'Sunil',
            email:'shrathod515@gmail.com',
            ok:true,
            rowHtml:"<h1>Template  in Vue Js</h1>"
        }

    },methods:{
        updatetext()
        {
            this.name="Vivek",
            this.email="vivek@gmail.com",
            this.ok=!this.ok
        }
    }
}
</script>