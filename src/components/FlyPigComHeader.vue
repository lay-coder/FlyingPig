<template>
    <header class="gateTicket_header">
        <img @click="_backPage()" src="http://10.35.162.9:3000/img2/back.png"> 
        <h3>{{tit}}</h3>
        <i></i>
    </header>
</template>

<script>
    export default {
        props:["tit"],
        methods:{
            _backPage(){
                window.history.back()
            }
        }
    }
</script>

<style scoped>

</style>