<template>
    <div class="hancy_linear_2">
        <div class="travel_choice">
            <router-link :to="travelChoice.lef.link" :style="[{background: 'url('+travelChoice.lef.bg+')'},{backgroundSize:'cover'}]" class="choice_left" >
                <div class="travel_title">
                    <img class="travel_img" :src="travelChoice.lef.tit.img">
                    <div class="travel_date">
                        <span class="date_day">{{day}}</span>
                        <span class="date_month">{{monthArr[month]}}</span>
                    </div>
                </div>
                <div class="travel_introduce">
                    <h5>{{travelChoice.lef.introduce}}</h5>
                </div>
                <p class="travel_like">
                    <i class="iconfont icon-woshuohao"></i>
                    <span class="travel_likeNum">{{travelChoice.lef.likeNum}}</span><span>人说好</span>
                </p>
            </router-link>
            <div class="choice_right">
                <router-link :to="travelChoice.rightTop.link" :style="[{background: 'url('+travelChoice.rightTop.bg+')'},{backgroundSize:'cover'}]" class="choice_right_top">
                    <div class="travel_title">
                        <img class="brand_img" :src="travelChoice.rightTop.tit.img">
                    </div>
                    <div class="plane_route">
                        <h5 class="fly_start">{{travelChoice.rightTop.route.flyStart}}</h5>
                        <img class="plane_logo" :src="travelChoice.rightTop.route.planeLogo">
                        <h5 class="fly_end">{{travelChoice.rightTop.route.flyEnd}}</h5>
                        <span class="isback">{{travelChoice.rightTop.route.isBack}}</span>
                    </div>
                    <div class="brand_price_box">
                        <p class="brand_price_box_1">￥<span class="brand_price">{{travelChoice.rightTop.price.money}}</span>起</p>
                        <p class="brand_price_box_2"><span class="brand_discount">{{travelChoice.rightTop.price.discount}}</span>折</p>
                    </div>
                </router-link>
                <router-link :to="travelChoice.rightBottom.link" :style="[{background: 'url('+travelChoice.rightBottom.bg+')'}]" class="choice_right_bottom">
                    <div class="travel_title">
                        <h5 class="fly_start">{{travelChoice.rightBottom.route.flyStart}}</h5>
                    </div>
                    <div class="brand_price_box">
                        <p class="brand_price_box_1">￥<span class="brand_price">{{travelChoice.rightBottom.price.money}}</span>起</p>
                        <p class="brand_price_box_2"><span class="brand_discount"></span>{{travelChoice.rightBottom.price.discount}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["travelChoice"],
        data(){
            return{
                monthArr:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
                month:"",
                day:""
            }
        },
        mounted() {
            this._getDate()
        },
        methods:{
            _getDate(){
                let myDate=new Date();
                    this.month=myDate.getMonth();
                    this.day=myDate.getDate()
            }
        }
    }
</script>

<style scoped>

</style>