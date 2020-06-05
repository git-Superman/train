<template>
<div>
    <my-active @value='handleClickValue'></my-active>
    <main>
        <ul v-for='(item,i) in list' :key='i'>
            <li :style='val ? "width:0; ":"width:1rem"' @click='clickItem(i)' class='list-img'>
                <img :src="!item.active ? require('@/assets/icon/wdsc-wx.png') : require('@/assets/icon/wdsc-xz.png')" alt="">
            </li>
            <li :style='val ? "margin-right:0; ":"margin-right:-1rem;"' class='list-item'>
                <div class='left'>
                    <p>怎样成为一个自律的人呢？</p>
                    <span>2019-10-12&nbsp;15:00</span>
                </div>
                <div class='right'>
                    <div>
                        <p>数量</p>
                        <p>单价</p>
                        <p>状态</p>
                    </div>
                    <div>
                        <p>1</p>
                        <p>5000</p>
                        <p>已完成</p>
                    </div>
                    <div>
                        <span>订单号：1548766868</span>
                    </div>
                </div>
            </li>
        </ul>
    </main>
    <footer v-show='!val'>
        <div class="footer">
            <div @click='handleClick'>
                <img :src="!active ? require('@/assets/icon/wdsc-wx.png') : require('@/assets/icon/wdsc-xz.png')" alt="">
                <p>全选</p>
            </div>
            <img src="@/assets/icon/wdsc-delet.png" alt="">
        </div>
    </footer>
</div>
</template>
<script>
import myActive from './headActive'
export default {
    data() {
        return {
            width: '0',
            val : true,
            list : [
                {
                    active : false
                }
            ],
            active : false
        }
    },
    methods:{
        handleClickValue(val){
            this.val = val;
            if(val){
                this.width = '1rem'
            }else{
                this.width = '0'
            }
        },
        clickItem(i){
            this.list[i].active = !this.list[i].active;
            var n = 0;
            for(var k of this.list){
                k.active == true ? n++ : n;
            }
            n == 4 ? this.active = true : this.active = false;
        },
        handleClick(){
            this.active = !this.active
            if(this.active == false){
                for(var key of this.list){
                    key.active = false;
                }
            }else{
                for(var key of this.list){
                    key.active = true;
                }
            }
        }
    },
    components:{
        myActive
    }
}
</script>
<style lang="less" scoped>
main{
    ul{
        box-sizing: border-box;
        padding:.0rem .12rem 0 .12rem;
        display:flex;
        align-items:center;
        width:100%;
        overflow: hidden;
        .list-img{
            img{
                width:.52rem;
                height:.52rem;
                margin-left:.2rem;
            }
        }
        .list-item{
            display:flex;
            border-radius:.12rem;
            overflow: hidden;
            height:2rem;
            background-color:#fff;
            margin-bottom:.12rem;
            box-shadow: #000 1px 1px 5px -2px;
            width:100%;
            color:#9E9E9E;
            .left{
                box-sizing: border-box;
                padding:.2rem .2rem .12rem .2rem;
                width:40%;
                font-size:.28rem;
                p{
                    height:80%;
                    overflow: hidden;
                    color:#666;
                }
                span{
                    color:#9E9E9E;
                }
            }
            .right{
                box-sizing: border-box;
                padding:.12rem;
                font-size:.28rem;
                width:60%;
                div{
                    display:flex;
                    justify-content: space-around;
                    p{
                        width:33%;
                        text-align:center;
                    }
                }
                div + div{
                    margin-top:.32rem;
                }
                div:nth-child(2){
                    p:last-child{
                        color:#50A278;
                    }
                }
                div:last-child{
                    display:block;
                    text-align:right;
                    span{
                        display: inline-block;
                    }
                }
            }
        }
    }
}
footer{
    display:flex;
    position:fixed;
    bottom:0;
    z-index:999;
    background-color:#fff;
    width:100%;
    .footer{
        display:flex;
        position:fixed;
        bottom:0;
        z-index:999;
        background-color:#fff;
        width:100%;
        justify-content: space-between;
        box-sizing: border-box;
        align-items:center;
        padding:.3rem .3rem;
        color:#9E9E9E;
        img{
            width:.6rem;
            height:.6rem;
        }
        div{
            display:flex;
            align-items:center;
            img{
                width:.52rem;
                height:.52rem;
                margin-right:.1rem;
            }
        }
    }
}

</style>