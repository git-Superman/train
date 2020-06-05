<template>
<div class='navBar'>
    <nav @click='handleClickGo'>
        <img src="@/assets/icon/nav-left.png" >
        <p v-html="test"></p>
    </nav>
</div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props:{
        test:{
            type:String,
            default:'test is String'
        }
    },
    methods:{
        handleClickGo(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
.navBar{
    padding-top:1rem;
    nav{
        width:100%;
        position:fixed;
        top:0;
        display:flex;
        align-items:center;
        font-size:.36rem;
        color:#666;
        background-color:#fff;
        padding:.26rem 0;
        z-index:5;
        img{
            display:block;
            margin:0 .2rem;
            width:.46rem;
            height:.46rem;
        }
    }
}
</style>