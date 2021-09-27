<template>
    <h1>
        {{profile}}Profilepage
    </h1>
</template>
<script>
import {useRoute} from  'vue-router'
export default {
    data()
    {
        return{
            profile:' '
        }
    },
    name:"Profile",
    mounted()
    {
        const route=useRoute();
        console.warn("route",route.params.name)
        this.profile=route.params.name;
    }
}

</script>