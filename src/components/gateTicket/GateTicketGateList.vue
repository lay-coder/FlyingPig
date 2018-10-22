<template>
    <router-link :to="lis.link" class="gate_list">
        <img :src="lis.img">
        <div class="gate_list_right">
            <div>
                <h5 class="gate_list_title">{{lis.tit}}</h5>
                <p class="gate_list_label">
                    <label v-for="(w,index) in lis.label" :key="index">{{w}}</label>
                </p>
            </div>
            <div class="gate_list_sale">
                <p><span class="price_color">￥<span class="gate_list_price">{{lis.price}}</span></span><span>起</span></p>
                <p>
                    <span class="score_color"><span class="gate_list_score">{{lis.score}}</span>分</span>
                    <span>月售<span>{{lis.num}}</span>笔</span>
                </p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props:["lis"]
    }
</script>

<style scoped>

</style>