<template>
<div>
    <my-active @value='handleClickValue'></my-active>
    <main>
        <ul v-for='(item,i) in list' :key='i'>
            <li :style='val ? "width:0; ":"width:1rem"' @click='clickItem(i)' class='list-img'>
                <img :src="!item.active ? require('@/assets/icon/wdsc-wx.png') : require('@/assets/icon/wdsc-xz.png')" alt="">
            </li>
            <li :style='val ? "margin-right:0; ":"margin-right:-1rem;"' class='list-item'>
                <img src="@/assets/img/wdsc-kcimg.png" alt="">
                <div>
                    <p>怎样成为一个自律的人呢？</p>
                    <div>
                        <img :src="isFalse" alt="">
                        <span>2019/12/20 15:00开课</span>
                    </div>
                </div>
            </li>
        </ul>
    </main>
    <footer v-show='!val'>
        <div @click='handleClick'>
             <img :src="!active ? require('@/assets/icon/wdsc-wx.png') : require('@/assets/icon/wdsc-xz.png')" alt="">
             <p>全选</p>
        </div>
        <img src="@/assets/icon/wdsc-delet.png" alt="">
    </footer>
</div>
</template>
<script>
import isTrue from '@/assets/icon/class-zzsk.png'
import isFalse from '@/assets/icon/class-kksj.png'
import myActive from './headActive'
export default {
    data() {
        return {
            isTrue,
            isFalse,
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
            height:2.4rem;
            background-color:#fff;
            margin-bottom:.12rem;
            box-shadow: #000 1px 1px 5px -2px;
            max-width:100%;
            >img{
                width:45%;height:100%;
            }
            >div{
                width:55%;
                box-sizing: border-box;
                padding:.2rem;
                color:#666;
                p{
                    height:1.6rem;
                    overflow: hidden;
                }
                div{
                    display:flex;
                    align-items:center;
                    span{
                        font-size:.26rem;
                        color:#9E9E9E;
                    }
                    img{
                        width:.32rem;
                        height:.32rem;
                        margin-right:.12rem;
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
</style>