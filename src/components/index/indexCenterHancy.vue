<template>
    <div class="hancy_linear_1">
        <div class="hancy">
            <div class="hancy_box">
                <router-link :to="lis.link" class="hancy_link" v-for="(lis,index) in travelHancy.list" :key="index">
                    <span class="hancy_title">{{lis.word1}}</span>
                    <span class="hancy_word">{{lis.word2}}</span>
                </router-link>
            </div>
            <div class="hancy_bottom">
                <router-link :to="travelHancy.everyday.fuli.link" class="fuli_box">
                    <img :src="travelHancy.everyday.fuli.pic">
                    <p>{{travelHancy.everyday.fuli.word}}</p>
                </router-link>
                <router-link :to="travelHancy.everyday.qiandao.link" class="qiandao_box">
                    <img :src="travelHancy.everyday.qiandao.pic">
                    <p>{{travelHancy.everyday.qiandao.word}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["travelHancy"],
        updated() {
            this._hancy_hot()
        },
        methods:{
            _hancy_hot(){
                document.querySelectorAll(".hancy_word")[0].classList.add("hancy_hot");
                document.querySelectorAll(".hancy_word")[5].classList.add("hancy_hot");
            }
        }
    }
</script>

<style scoped>

</style>