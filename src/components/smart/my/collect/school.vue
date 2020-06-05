<template>
<div>
    <my-active @value='handleClickValue'></my-active>
    <main>
        <ul v-for='(item,i) in list' :key='i'>
            <li :style='val ? "width:0; ":"width:1rem"' @click='clickItem(i)' class='list-img'>
                <img :src="!item.active ? require('@/assets/icon/wdsc-wx.png') : require('@/assets/icon/wdsc-xz.png')" alt="">
            </li>
            <li :style='val ? "margin-right:0; ":"margin-right:-1rem;"' class='list-item'>
                <div class='a'>
                    <img class='a' src="@/assets/img/xxxq-bimg.png" alt="">
                </div>
                <div class='b'>
                    <h5>小天才育林培训学校</h5>
                    <div class='grade'>
                        <p>综合类</p>
                        <img v-for='i in 5' :key='i' :src="i<5 ? isTrue :isFalse" alt="">
                    </div>
                    <div class='subject'>
                        <p>小学数学</p>
                        <p>小学英语</p>
                        <p>小学奥数</p>
                        <p>小学语文</p>
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
import isTrue from '@/assets/icon/school-star-yx.png'
import isFalse from '@/assets/icon/school-star-wx.png'
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
        color:#666;
        .list-img{
            img{
                width:.52rem;
                height:.52rem;
                margin-left:.2rem;
            }
        }
        .list-item{
            background-color:#fff;
            border-radius:.2rem;
            overflow: hidden;
            display:flex;
            align-items:center;
            margin-top:.08rem;
            width:100%;
            height:2.2rem;
            div.a{
                width:40%;height:100%;
                img{
                    width:100%;height:100%;
                }
            }
            div.b{
                width:60%;
                box-sizing: border-box;
                padding:.16rem 0 .16rem .2rem;
                font-size:.28rem;
                h5{
                    font-size:.32rem;
                    font-weight:bold;
                }
                .grade{
                    display:flex;
                    color:#9E9E9E;
                    margin:.12rem;
                    align-items:center;
                    img{
                        width:.42rem;
                    }
                    p{
                        margin-right:.12rem;
                    }
                }
                .subject{
                    display:flex;
                    flex-wrap: wrap;
                    margin-top:.12rem;
                    p{
                        width:50%;
                        display:flex;
                        align-items:center;
                    }
                    p::before{
                        content:'';
                        display:inline-block;
                        width:.08rem;height:.08rem;
                        border-radius:50%;
                        background-color:#666;
                        margin-right:.12rem;
                    }
                }
            }
            img.c{
                width:.2rem;
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