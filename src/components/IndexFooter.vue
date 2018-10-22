<template>
    <footer>
        <router-link to="/">
            <div @click="_back_top()">
                <img src="http://10.35.162.9:3000/img2/feizhulogo_change.png">
            </div>
            <span>首页</span>
        </router-link>
        <router-link to="/gateTicket">
            <div>
                <img src="http://10.35.162.9:3000/img2/find.png">                
                <span></span>
            </div>
            <span>发现</span>
        </router-link>
        <router-link to="">
            <div>
                <img src="http://10.35.162.9:3000/img2/mudidi.png">       
            </div>
            <span>目的地</span>
        </router-link>
        <router-link to="">
            <div>
                <img src="http://10.35.162.9:3000/img2/xingcheng.png">    
            </div>           
            <span>行程</span>
        </router-link>
        <router-link to="">    
            <div>
                <img src="http://10.35.162.9:3000/img2/wode.png">     
            </div>
            <span>我的</span>
        </router-link>
    </footer>
</template>

<script>
    export default {
        data(){
            return{
               
            }
        },
        methods:{
            _back_top(){
                this.$emit("_center_top")
            }
        }
    }

</script>

<style scoped>

</style>