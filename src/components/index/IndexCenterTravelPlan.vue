<template>
    <div class="common_box travel_plan">
        <div class="common_title_box">
            <h3>{{travelPlan.tit}}</h3>
            <span>{{travelPlan.word}}</span>
        </div>
        <div class="travel_msg">
            <router-link :to="travelPlan.msg.hot.link" class="travel_msg_box travel_msg_left" :style="[{background: 'url('+travelPlan.msg.hot.bg+')'},{backgroundSize:'cover'}]">
                <p class="travel_msg_1">
                    <span class="msg_bold">风向标</span>
                    <span>|</span>
                    <span>Hot</span>
                </p>
                <p class="travel_msg_2">
                    <span class="msg_2_word1">{{travelPlan.msg.hot.word1}}</span>
                    <span class="msg_2_word2">{{travelPlan.msg.hot.word2}}</span>
                </p>
            </router-link>
            <router-link to="" class="travel_msg_box travel_msg_right" :style="[{background: 'url('+travelPlan.msg.next.bg+')'},{backgroundSize:'cover'}]">
                <p class="travel_msg_1">
                    <span class="msg_bold">下一站</span>
                    <span>|</span>
                    <span>Next</span>
                </p>
                <p class="travel_msg_2">
                    <span class="msg_2_word1">{{travelPlan.msg.next.word1}}</span>
                    <span class="msg_2_word2">{{travelPlan.msg.next.word1}}</span>
                </p>
            </router-link>
            <router-link to="" class="travel_msg_box travel_msg_right" :style="[{background: 'url('+travelPlan.msg.dream.bg+')'},{backgroundSize:'cover'}]">
                <p class="travel_msg_1">
                    <span class="msg_bold">理想地</span>
                    <span>|</span>
                    <span>Dream</span>
                </p>
                <p class="travel_msg_2">
                    <span class="msg_2_word1">{{travelPlan.msg.dream.word1}}</span>
                    <span class="msg_2_word2">{{travelPlan.msg.dream.word1}}</span>
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:["travelPlan"]
    }
</script>

<style scoped>

</style>