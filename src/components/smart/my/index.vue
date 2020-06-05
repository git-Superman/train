<template>
<div>
    <header>
        <div class='head'>
            <img src="@/assets/img/dt-face.png" alt="">
        </div>
        <div class='body'>
            <p>你的眼bay</p>
            <span>我就是我，不一样的烟火。</span>
        </div>
        <img @click='handleClickPush(0)' class='last' src="@/assets/icon/wd-bjicon.png" alt="">
    </header>
    <main>
        <ul>
            <li class='list-item' v-for='(item,inx) in list' :key='inx' @click="handleClickPush(inx+1)">
                <div>
                    <img :src="item.icon" alt="">
                    <p v-html="item.test"></p>
                </div>
                <img src="@/assets/icon/wd-jrjt.png" alt="">
            </li>
        </ul>
    </main>
</div>
</template>
<script>
import icon1 from '@/assets/icon/wd-scicon.png'
import icon2 from '@/assets/icon/wd-ddicon.png'
import icon3 from '@/assets/icon/wd-lxkficon.png'
import icon4 from '@/assets/icon/wd-szicon.png'
export default {
    data() {
        return{
            list:[
                {
                    icon : icon1,
                    test : '收藏'
                },
                {
                    icon : icon2,
                    test : '订单'
                },
                {
                    icon : icon3,
                    test : '联系客服'
                },
                {
                    icon : icon4,
                    test : '设置'
                },
            ]
        }
    },
    methods:{
        handleClickPush(i){
            switch(i){
                case 0:
                    this.$router.push('/smart/my/info');
                break;
                case 1:
                    this.$router.push('/smart/my/collect');
                break;
                case 2:
                    this.$router.push('/smart/my/order');
                break;
                case 3:
                    this.$router.push('/smart/my/call');
                break;
                case 4:
                    this.$router.push('/smart/my/set');
                break;
                default:
                break;
            }
        }
    }
}
</script>
<style lang="less" scoped>
header{
    display: flex;
    background-color:#fff;
    box-sizing: border-box;
    align-items:center;
    padding:.36rem .26rem;
    color:#666;
    position: relative;
    .head{
        height:100%;
        width:1.4rem;
        border-radius:50%;
        overflow: hidden;
        margin-right:.2rem;
        flex-shrink:0;
        img{
            width:1.4rem;
            height:1.4rem;
            
        }
    }
    .body{
        width:60%;
        height:1rem;
        overflow: hidden;
        p{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        span{
            display:block;
            margin-top:.2rem;
            font-size:.26rem;
            color:#9E9E9E;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    img.last{
        width:.5rem;
        height:.5rem;
        position:absolute;
        right:.5rem;
        flex-shrink:0;
    }
}
main{
    .list-item{
        display:flex;
        justify-content: space-between;
        background-color:#fff;
        box-sizing: border-box;
        padding:.3rem .2rem;
        margin-top:.06rem;
        align-items:center;
        // box-shadow: #000 1px 1px 2px -1px;
        div{
            display:flex;
            align-items:center;
            color:#666;
            img{
                width:.42rem;
                height:.42rem;
                margin-right:.12rem;
            }
        }
        >img{
            width:.2rem;
            height:.32rem;
        }
    }
}
</style>