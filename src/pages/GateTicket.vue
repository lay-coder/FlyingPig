<template>
    <div id="body_">
        <gate-ticket-header :tit="FlyPigInfo.tit"></gate-ticket-header>
        <gate-ticket-center :FlyPigInfo="FlyPigInfo"></gate-ticket-center>
    </div>
</template>

<script>
    import GateTicketHeader from "../components/FlyPigComHeader.vue"
    import GateTicketCenter from "../components/gateTicket/GateTicketCenter.vue"
    export default {
        data(){
            return{
                FlyPigInfo:{},
                loading:false
            }
        },
        components:{
            GateTicketHeader,
            GateTicketCenter
        },
        cerated(){
            
        },
        beforeMount() {
            this._initData()
        },
        methods:{
            _initData(){
                const FLYPIGAJAXURL="http://10.35.162.9:3000/gateticketinfo";
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