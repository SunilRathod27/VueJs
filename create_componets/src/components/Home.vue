<template>
    <div>
        <h1>Home component</h1>
        <Users/>
        <Products/>
    </div>
</template>
<script>

import Users from './Users.vue'
import Products from './Products.vue'
export default {
    name : 'Home',
    components:{
        Users,
        Products
    }

}
</script>
<style scoped>
div{
    background-color: aliceblue;
}
</style>