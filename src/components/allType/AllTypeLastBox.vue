<template>
    <div class="allType_box">
        <div class="allType_title">
            <div class="allType_title_left">
                <span></span>
                <h5>{{info.tit}}</h5>
            </div>
            <router-link :to="info.link">进入频道<span></span></router-link>
        </div>
        <div class="allType_link_box">
            <all-type-last-box-list v-for="(lis,index) in info.list" :key="index" :list="lis"></all-type-last-box-list>
        </div>
        <img class="enjoy_different" src="http://10.35.162.9:3000/img2/xiangshoudabutong.jpg">
    </div>
</template>

<script>
    import AllTypeLastBoxList from "../allType/AllTypeLastBoxList.vue"
    export default {
        props:["info"],
        components:{
            AllTypeLastBoxList
        }
    }
</script>

<style scoped>

</style>