<template>
    <div>
        <h1> Child Component</h1>
        <h3 v-for="user in users" :key="user.name">
            {{user.name}}-- {{user.email}}
        </h3>
    </div>
</template>


<script>
export default {
    name:'child',
    props:['users']
}
</script>