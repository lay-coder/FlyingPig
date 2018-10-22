<template>
    <div class="allType_box">
        <div class="allType_title">
            <div class="allType_title_left">
                <span></span>
                <h5>{{info.tit}}</h5>
            </div>
            <router-link to=""></router-link>
        </div>
        <div class="allType_link_box">
            <router-link to="" class="allType_link" v-for="(lis,index) in info.typelist" :key="index" :style="{background:'url('+lis.bg+')',backgroundSize:'.9375rem .8rem'}">
                <span>{{lis.type}}</span>
            </router-link>
        </div>
        <div class="allType_comminute"></div>
    </div>
</template>

<script>
    export default {
        props:["info"]
    }
</script>

<style scoped>

</style>