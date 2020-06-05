<template>
<div>
    <!-- :list 绑定数组 -->
    <!-- @value 获取值 -->
    <nav>
        <p v-for='(item,i) in list' :class='i == inx ? "action" : ""' @click="handleClick(i)" :key='i'>{{item}}</p>
    </nav>
</div>
</template>
<script>
export default {
    data() {
        return {
            inx : 0
        }
    },
    methods:{
        handleClick(i){
            this.inx = i;
            this.$emit('value',this.inx,this.list[this.inx])
        }
    },
    props:{
        list:{
            type:Array,
            default:()=>{
                return ['推荐','TED','社会','科技','人文','艺术','其他']
            }
        }
    }
}
</script>
<style lang="less" scoped>
nav{
    display:flex;
    overflow-x: auto;
    -webkit-overflow-scrolling:touch;
    font-size:.32rem;
    background-color:#fff;
    align-items: center;
    p{
        min-width:.8rem;
        text-align:center;
        position:relative;
        padding:.26rem .26rem;
        letter-spacing: .02rem;
        color:#666666;
    }
    p::after{
        content:'';
        position:absolute;
        bottom:0;left:.4rem;
        width:.5rem;height:.12rem;
        background-color:transparent;
        border-radius:1rem 1rem;
        transition:all .5s;
    }
    p.action{
        color:#50A278;
    }
    p.action::after{
        background-color:#50A278;
    }
}
nav::-webkit-scrollbar {
    display: none;
}
</style>