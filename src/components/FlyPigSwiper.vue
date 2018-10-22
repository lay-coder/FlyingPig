<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <router-link :to="lis.link" class="swiper-slide" v-for="(lis,index) in swiperImgs" :key="index">
                    <img :src="lis.bg">
            </router-link>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from "swiper"

    export default {
        data(){
            return{

            }
        },
        props:["swiperImgs"],
        components:{
            
        },
        // beforeCreate() {
        //     console.log("beforeCreate")
        //     // console.log(this.swiperImgs)
        // },
        // created() {
        //     console.log("created")
        //     console.log(this.swiperImgs)
        // },
        // beforeMount() {
        //     console.log("beforeMount")
        //     console.log(this.swiperImgs)
        // },
        // mounted() {
        //     console.log("mounted")
        //     console.log(this.swiperImgs)
        // },
        // beforeUpdate() {
        //     console.log("beforeUpdate")
        //     console.log(this.swiperImgs)
        // },
        updated() {
            // console.log("updated")
            // console.log(this.swiperImgs)
            this._slide()
        },
        mounted() {
            this._slide()
        },
        methods:{
            _slide(){
               new Swiper ('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项
                    autoplay:{
                        disableOnInteraction: false
                    },
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    }
                })
            }
        }

        
    }
     
</script>

<style scoped>

</style>