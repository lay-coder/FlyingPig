<template>
   <div class="common_box travel_theme">
        <div class="common_title_box">
            <h3>{{travelTheme.tit}}</h3>
            <span>{{travelTheme.word}}</span>
        </div>
        <div class="travel_msg">
            <router-link :to="travelTheme.msg.topleft.link" class="travel_msg_box travel_msg_left travel_msg_two_left" :style="[{background: 'url('+travelTheme.msg.topleft.bg+')'},{backgroundSize:'cover'}]">
                <p class="travel_msg_2">
                    <span class="msg_2_word1">{{travelTheme.msg.topleft.word1}}</span>
                    <span class="msg_2_word2">{{travelTheme.msg.topleft.word2}}</span>
                </p>
            </router-link>
            <router-link :to="travelTheme.msg.topright.link" class="travel_msg_box travel_msg_right" :style="[{background: 'url('+travelTheme.msg.topright.bg+')'},{backgroundSize:'cover'}]">
                <!-- <p class="travel_msg_1"> -->
                <p class="travel_msg_2">
                    <span class="msg_2_word1">{{travelTheme.msg.topright.word1}}</span>
                    <span class="msg_2_word2">{{travelTheme.msg.topright.word2}}</span>
                </p>
            </router-link>
        </div>
        <div class="travel_msg">
            <router-link :to="travelTheme.msg.bottom1.link" class="travel_msg_box travel_msg_left" :style="[{background: 'url('+travelTheme.msg.bottom1.bg+')'},{backgroundSize:'cover'}]">
                <!-- <p class="travel_msg_1"> -->
                <p class="travel_msg_2">
                    <span class="msg_2_word1">{{travelTheme.msg.bottom1.word1}}</span>
                    <span class="msg_2_word2">{{travelTheme.msg.bottom1.word2}}</span>
                </p>
            </router-link>
            <router-link :to="travelTheme.msg.bottom2.link" class="travel_msg_box travel_msg_right" :style="[{background: 'url('+travelTheme.msg.bottom2.bg+')'},{backgroundSize:'cover'}]">
                <!-- <p class="travel_msg_1"> -->
                <p class="travel_msg_2">
                    <span class="msg_2_word1">{{travelTheme.msg.bottom2.word1}}</span>
                    <span class="msg_2_word2">{{travelTheme.msg.bottom2.word2}}</span>
                </p>
            </router-link>
            <router-link :to="travelTheme.msg.bottom3.link" class="travel_msg_box travel_msg_right" :style="[{background: 'url('+travelTheme.msg.bottom3.bg+')'},{backgroundSize:'cover'}]">
                <!-- <p class="travel_msg_1"> -->
                <p class="travel_msg_2">
                    <span class="msg_2_word1">{{travelTheme.msg.bottom3.word1}}</span>
                    <span class="msg_2_word2">{{travelTheme.msg.bottom3.word2}}</span>
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:["travelTheme"]
    }
</script>

<style scoped>

</style>