<template>
<div>
    <nav-bar :test="test"></nav-bar>
    <main>
        <div>
            <input type="text" maxlength="11" placeholder="请输入手机号码">
        </div>
        <div>
            <input type="text" maxlength="12" placeholder="请输入验证码">
            <p>获取验证码</p>
        </div>
    </main>
    <div class="btn">
        <button>确认绑定</button>
    </div>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
export default {
    data() {
        return {
            test : '绑定手机号码'
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
    main{
        box-sizing: border-box;
        padding:.8rem .08rem 0;
        div{
            padding-bottom:.08rem;
            border-bottom:0.02rem solid #C7C7C7;
            color:#9E9E9E;
            position:relative;
            input{
                width:100%;
                border:0;
                box-sizing: border-box;
                padding-left:.36rem;
                background-color:transparent;
            }
            p{
                font-size:.28rem;
                padding:.16rem .6rem;
                background-color:#71C99C;
                color:#FFFFFF;
                position: absolute;
                top:-0.28rem;right:.12rem;
            }
        }
        div + div{
            margin-top:.5rem;
        }
    }
.btn{
    width:3.8rem;
    margin:1.8rem auto 0;
    button{
        width:100%;
        padding:.26rem;
        border:0;
        background-color:#50A278;
        color:#fff;
        border-radius:1rem 1rem;
    }
}
</style>
