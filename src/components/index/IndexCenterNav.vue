<template>
    <nav>
        <router-link v-for="(lis,index) in nav" :key="index" :to="lis.link">
            <img class="planTicket" :src="lis.pic">
            <span>{{lis.word}}</span>
        </router-link>
    </nav>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        props:["nav"]
    }
</script>

<style scoped>

</style>