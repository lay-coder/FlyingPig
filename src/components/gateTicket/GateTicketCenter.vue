<template>
    <div class="center">
        <gate-ticket-search></gate-ticket-search>
        <fly-pig-swiper class="gateTicket_slider" :swiperImgs="FlyPigInfo.swiperImgs"></fly-pig-swiper>
        <gate-ticket-type :type="FlyPigInfo.type"></gate-ticket-type>
        <p class="comminute"></p>
        <gate-ticket-filters></gate-ticket-filters>
        <gate-ticket-gate-list v-for="(lis,index) in FlyPigInfo.gateList" :key="index" :lis="lis"></gate-ticket-gate-list>
    </div>
</template>
<script>
    import GateTicketSearch from "../gateTicket/GateTicketSearch.vue"
    import FlyPigSwiper from "../FlyPigSwiper.vue"
    import GateTicketType from "../gateTicket/GateTicketType.vue"
    import GateTicketFilters from "../gateTicket/GateTicketFilters.vue"
    import GateTicketGateList from "../gateTicket/GateTicketGateList.vue"

    export default {
        props:["FlyPigInfo"],
        components:{
            GateTicketSearch,
            FlyPigSwiper,
            GateTicketType,
            GateTicketFilters,
            GateTicketGateList
        },
    }
</script>

<style scoped>

</style>