<template>
    <div>
        <div class="child1" @click="_close">
                
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            _close(){
                this.$emit("testevent","")
            }
        }
    }
</script>

<style scoped>
.child1{
    height: 100px;
    background-color: black;
}
</style>