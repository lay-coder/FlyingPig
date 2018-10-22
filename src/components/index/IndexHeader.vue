<template>
    <header class="Index_header">
        <div class="header_left">
            <i class="iconfont icon-saoyisao"></i>
        </div>
        <div class="header_center">
            <i class="iconfont icon-sousuo"></i>
            <input class="search" type="text" :placeholder="header.searchWord">
            <i class="iconfont icon-yuyin"></i>
        </div>
        <div class="header_right">
            <i class="iconfont icon-xiaoxi"></i>
            <span class="msgNum" v-if="header.msgNum!=''">{{header.msgNum}}</span>
        </div>
    </header>
</template>

<script>
    export default {
        props:["header"],
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>