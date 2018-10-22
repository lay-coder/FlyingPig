<template>
    <div class="center">
        <all-type-first-box :info="FlyPigInfo.first"></all-type-first-box>
        <div>
            <all-type-list-box v-for="(lis,index) in FlyPigInfo.list" :key="index" :list="lis"></all-type-list-box>
        </div>
        <all-type-last-box :info="FlyPigInfo.last"></all-type-last-box>
    </div>
</template>

<script>
    import AllTypeFirstBox from "../allType/AllTypeFirstBox.vue"
    import AllTypeListBox from "../allType/AllTypeListBox.vue"
    import AllTypeLastBox from "../allType/AllTypeLastBox.vue"
    export default {
        data(){
            return{
            }
        },
        props:["FlyPigInfo"],
        components:{
            AllTypeFirstBox,
            AllTypeListBox,
            AllTypeLastBox
        }
    }
</script>

<style scoped>

</style>