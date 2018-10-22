<template>
    <div id="body_" v-if="loading">
        <all-type-header :tit="FlyPigInfo.tit"></all-type-header>
        <all-type-center :FlyPigInfo="FlyPigInfo"></all-type-center>
    </div>
</template>

<script>
    import AllTypeHeader from "../components/FlyPigComHeader.vue"
    import AllTypeCenter from "../components/allType/AllTypeCenter.vue"
    export default {
        data(){
            return{
                FlyPigInfo:{},
                loading:false
            }
        },
        components:{
            AllTypeHeader,
            AllTypeCenter
        },
        beforeMount() {
            this._initData()
        },
        methods:{
            _initData(){
                const FLYPIGAJAXURL="http://10.35.162.9:3000/alltypeinfo";
                fetch(FLYPIGAJAXURL).then(res=>{
                    res.json().then(data=>{
                        this.FlyPigInfo=data
                        this.loading=true
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>