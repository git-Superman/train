<template>
<div>
    <nav-bar :test='test'></nav-bar>
    <main>
        <ul v-for='i in 10' :key='i'>
            <li class='list-item'>
                <h5>李一一</h5>
                <div>
                    <img v-show='show' @click='show=false' src="@/assets/icon/sk-qdbtn.png" alt="">
                    <p v-show='!show'>已签</p>
                    <img @click='height = "height:1.8rem;"' src="@/assets/icon/sk-bzbtn.png" alt="">
                </div>
            </li>
            <li class='list-test' :style="height">
                <div>
                    <textarea placeholder="在此输入备注信息"></textarea>
                </div>
            </li>
        </ul>
        <div class="btn">
            <van-button color='#66BC90'>确定</van-button>
        </div>
    </main>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
export default {
    data() {
        return {
            test : '签到（50-70）',
            height : 'height:0;',
            action : false,
            show : true
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
main{
    ul{
        margin-top:.08rem;
        background-color:#fff;
        .list-item{
            display:flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding:.26rem .2rem;
            color:#666;
            align-items:center;
            h5{
                display:flex;
                align-items:center;
                vertical-align: middle;
            }
            h5::before{
                content:'';
                display:inline-block;
                width:.18rem;
                height:.6rem;
                background-color:#50A278;
                border-radius:1rem 1rem;
                margin-right:.2rem;
            }
            div{
                display:flex;
                align-items:center;
                p{
                    font-weight:bold;
                    color:#50A278;
                }
                img{
                    width:.72rem;
                    height:.72rem;
                }
                img:last-child{
                    margin-left:.2rem;
                }
            }
        }
        .list-test{
            width:100%;
            box-sizing: border-box;
            overflow: hidden;
            transition: height .5s;
            div{
                box-sizing: border-box;
                padding:0 .2rem .2rem .2rem;
                textarea{
                    display:block;
                    background-color:#f1f1f1;
                    border:0;width:100%;
                    height:1.6rem;
                    box-sizing: border-box;
                    padding:.2rem;
                    border-radius:.12rem;
                }
            }
        }
    }
    .btn{
        width:3rem;
        margin:.6rem auto;
        button{
            width:100%;
            border-radius:.12rem;
        }
    }
}
</style>