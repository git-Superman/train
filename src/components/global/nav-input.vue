<template>
<div class='nav-input'>
    <header>
        <img  @click="handleClickValue" src="@/assets/icon/mian-searchicon.png" alt="">
        <input v-model='value' :placeholder="test" type="text">
    </header>
</div>
</template>
<script>
export default {
    data(){
        return {
            value:''
        }
    },
    props:['test'],
    methods:{
        handleClickValue(){
            if(this.value) this.$emit('value',this.value);
        }
    }
}
</script>
<style lang="less" scoped>
.nav-input{
    background-color:#fff;
    padding:.16rem .24rem;
    header{
        background-color:#F1F1F1;
        border-radius:.12rem;
        box-sizing: border-box;
        padding:.12rem .24rem;
        max-height:1rem;
        font-size:.36rem;
        display:flex;
        align-items:center;
        img{
            width:.42rem;height:.42rem;
            vertical-align: middle;
        }
        input{
            border:0;width:80%;
            font-size:.32rem;
            background-color:#F1F1F1;
            vertical-align: middle;
            padding-left:.2rem;
        }
        input::-webkit-input-placeholder {
            color: #aab2bd;
            font-size: .28rem;
        }
    }
}
</style>