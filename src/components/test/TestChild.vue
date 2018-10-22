<template>
    <div>
        <button @click="childevent('TestChild1')" class="test"></button>
        <button @click="childevent('TestChild2')" class="test"></button>
    </div>
</template>

<script>
    export default {
        methods:{
            childevent(data){
                this.$emit("testevent",data)
            }
        }
    }
</script>

<style scoped>
.test{
    display: block;
    width: 50px;
    height: 50px;
}
</style>