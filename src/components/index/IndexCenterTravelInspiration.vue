<template>
    <div class="common_box travel_inspiration">
        <div class="common_title_box">
            <h3>{{travelInspiration.tit}}</h3>
            <span>{{travelInspiration.word}}</span>
        </div>
        <div class="travel_msg">
            <router-link :to="travelInspiration.msg.msgleft.link" class="travel_msg_box travel_msg_left" :style="[{background: 'url('+travelInspiration.msg.msgleft.bg+')'},{backgroundSize:'cover'}]">
                <div>
                    <span class="travel_msg_1">{{travelInspiration.msg.msgleft.msg1}}</span>
                </div>
                <span class="travel_msg_2">{{travelInspiration.msg.msgleft.msg2}}</span>
            </router-link>
            <router-link :to="travelInspiration.msg.msgright.link" class="travel_msg_box travel_msg_right" :style="[{background: 'url('+travelInspiration.msg.msgright.bg+')'},{backgroundSize:'cover'}]">
                <div>
                    <span class="travel_msg_1">{{travelInspiration.msg.msgright.msg1}}</span>
                </div>
                <span class="travel_msg_2">{{travelInspiration.msg.msgright.msg2}}</span>
            </router-link>
        </div>
        <div class="travel_city">
            <router-link :to="lis.link" v-for="(lis,index) in travelInspiration.city" :key="index" :style="[{background: 'url('+lis.bg+')'},{backgroundSize:'cover'}]">{{lis.name}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:["travelInspiration"]
    }
</script>

<style scoped>

</style>