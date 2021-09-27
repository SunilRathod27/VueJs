<template>
    <div>
        <h1 ref="user">User component</h1>
    </div>
</template>

<script>
export default {
    name:'User', 
    beforeUnmount() // beforemount html show
            {
                console.log("beforeUnmount",this.$refs['user']);
            },
            unmounted() // unmount html not show null            
            {
                console.log("Unmounted",this.$refs['user']);
            }
}
</script>