<template>
    <div class="allType_box">
        <div class="allType_title">
            <div class="allType_title_left">
                <span></span>
                <h5>{{list.tit}}</h5>
            </div>
            <router-link :to="list.link">进入频道<span></span></router-link>
        </div>
        <div class="allType_link_box">
            <router-link to="" class="allType_link" v-for="(lis,index) in list.typelist" :key="index" :style="{background:'url('+lis.bg+')',backgroundSize:'.9375rem .8rem'}">
                <span>{{lis.type}}</span>
            </router-link>
        </div>
        <div class="allType_comminute"></div>
    </div>
</template>

<script>
    export default {
        props:["list"]
    }
</script>

<style scoped>

</style>