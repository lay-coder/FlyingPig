<template>
    <div class="center">
        <fly-pig-swiper class="index_slider" :swiperImgs="FlyPigInfo.swiperImgs"></fly-pig-swiper>
        <index-center-nav :nav="FlyPigInfo.nav"></index-center-nav>
        <index-center-hancy :travelHancy="FlyPigInfo.travel_hancy"></index-center-hancy>
        <index-center-travel-choice :travelChoice="FlyPigInfo.travel_choice"></index-center-travel-choice>
        <index-center-travel-inspiration :travelInspiration="FlyPigInfo.travel_inspiration"></index-center-travel-inspiration>
        <index-center-travel-plan :travelPlan="FlyPigInfo.travel_plan"></index-center-travel-plan>
        <index-center-travel-theme :travelTheme="FlyPigInfo.travel_theme"></index-center-travel-theme>
        <index-center-guss-like :gussLike="FlyPigInfo.guss_like"></index-center-guss-like>
    </div>
</template>
<script>
    import FlyPigSwiper from "../FlyPigSwiper.vue"
    import IndexCenterNav from "../index/IndexCenterNav.vue"
    import IndexCenterHancy from "../index/indexCenterHancy.vue"
    import IndexCenterTravelChoice from "../index/IndexCenterTravelChoice.vue"
    import IndexCenterTravelInspiration from "../index/IndexCenterTravelInspiration.vue"
    import IndexCenterTravelPlan from "../index/IndexCenterTravelPlan.vue"
    import IndexCenterTravelTheme from "../index/IndexCenterTravelTheme.vue"
    import IndexCenterGussLike from "../index/IndexCenterGussLike.vue"
    export default {
        props:["FlyPigInfo"],
        components:{
            FlyPigSwiper,
            IndexCenterNav,
            IndexCenterHancy,
            IndexCenterTravelChoice,
            IndexCenterTravelInspiration,
            IndexCenterTravelPlan,
            IndexCenterTravelTheme,
            IndexCenterGussLike
        },
    }
</script>

<style scoped>

</style>