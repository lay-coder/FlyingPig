<template>
    <div :style="{background:this.bg}">
        <test-child  @testevent="testevent"></test-child>
        <component @testevent="testevent" v-bind:is="zujianming"></component>
        <test-child0 @testevent="testevent"></test-child0>
    </div>
</template>

<script>
    import TestChild from "../components/test/TestChild.vue"
    import TestChild0 from "../components/test/TestChild0.vue"
    import TestChild1 from "../components/test/TestChild1.vue"
    import TestChild2 from "../components/test/TestChild2.vue"
    export default {
        components:{
            TestChild,
            TestChild0,
            TestChild1,
            TestChild2
        },
        data(){
            return{
                bg:"red",
                zujianming:""
            }
        },
        methods:{
            testevent(data){
                console.log(data)
                this.zujianming=data
            }
        }
    }
</script>

<style scoped>

</style>