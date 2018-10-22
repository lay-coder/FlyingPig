<template>
    <div id="body_" v-if="loading">
        <index-header :header="FlyPigInfo.header"></index-header>
        <index-center :FlyPigInfo="FlyPigInfo"></index-center>
        <index-footer @_center_top="_center_top"></index-footer>
    </div>
</template>

<script>
    import IndexHeader from "../components/index/IndexHeader.vue"
    import IndexCenter from "../components/index/IndexCenter.vue"
    import IndexFooter from "../components/IndexFooter.vue"

    export default {
        data(){
            return {
                FlyPigInfo:{},
                loading:false,
            }
        },
        components:{
            IndexHeader,
            IndexCenter,
            IndexFooter
        },
        created(){
            this._initData()
        },
        methods:{
            _initData(){
                const FLYPIGAJAXURL="http://10.35.162.9:3000/indexinfo";
                fetch(FLYPIGAJAXURL).then(res=>{
                    res.json().then(data=>{
                        this.FlyPigInfo=data
                        this.loading=true
                    })
                })
            },
            _center_top(){
                document.querySelector(".center").scrollTop=0;
            }
        }
    }
    
</script>

<style scoped>

</style>