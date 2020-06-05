<template>
<div>
    <!-- :list 绑定数组 -->
    <!-- @value 获取值 -->
    <nav>
        <div v-for='(item,i) in list' :class='i == inx ? "action" : ""' @click="handleClick(i)" :key='i'>
            <p>{{item}}</p>
        </div>
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
                return ['详情','目录','评价']
            }
        }
    }
}
</script>
<style lang="less" scoped>
nav{
    display:flex;
    justify-content: space-evenly;
    font-size:.32rem;width:100%;
    background-color:#fff;
    div{
        width:33%;
        p{
            width:1.2rem;
            margin:0 auto;
            text-align:center;
            position:relative;
            box-sizing: border-box;
            padding:.26rem .26rem;
            letter-spacing: .02rem;
            color:#666666;
        }
        p::after{
            content:'';
            position:absolute;
            bottom:0;left:.26rem;
            width:.7rem;height:.08rem;
            background-color:transparent;
            border-radius:1rem 1rem;
            transition:all .5s;
        }
    }
    div.action{
        p{
            color:#50A278;
        }
        ::after{
            background-color:#50A278;
        }
    }
}
nav::-webkit-scrollbar {
    display: none;
}
</style>