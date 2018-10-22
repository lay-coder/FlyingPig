<template>
    <div class="type_link">
        <router-link :to="lis.link" v-for="(lis,index) in type" :key="index">
            <img :src="lis.img">
            <span>{{lis.tit}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        props:["type"]
    }
</script>

<style scoped>

</style>