<template>
    <div class="common_box hancy_linear_1 guss_like">
        <div class="common_title_box">
            <h3>{{gussLike.tit}}</h3>
            <span>{{gussLike.word}}</span>
        </div>
        <div>
            <router-link to="" class="travel_msg_box" v-for="(lis,index) in gussLike.msg" :key="index">
                <img :src="lis.pic">
                <span class="guss_like_msg_box guss_like_title">{{lis.tit}}</span><!--颜色随机-->
                <span class="travel_msg_1 guss_like_msg_box">{{lis.word}}</span>
                <div class="guss_like_msg_box">
                    <div>
                        <p>￥<span class="guss_like_price">{{lis.money}}</span></p>
                        <p><span class="guss_like_bought">{{lis.bought}}</span>人购买</p>
                    </div>
                    <i class="iconfont icon-gengduo"></i>                                                     
                </div>
            </router-link>
        </div> 
    </div>
</template>

<script>
    export default {
        props:["gussLike"]
    }
</script>

<style scoped>

</style>