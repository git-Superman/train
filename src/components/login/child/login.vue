<template>
<div class="log">
    <header>
        <p @click='handleClickPush(0)' class='p'>账号密码登陆</p>|
        <p @click='handleClickPush(1)'>手机验证码登陆</p>
        <span @click='handleClickPush(2)'>立即注册</span>
    </header>
    <ul class='list'>
        <li class='list-item'>
            <img src="@/assets/icon/dl-yhm.png" alt="">
            <span>|</span>
            <input type="text" placeholder="邮箱/用户名/已验证手机">
        </li>
        <li class='list-item'>
            <img src="@/assets/icon/dl-mm.png" alt="">
            <span>|</span>
            <input type="password" placeholder="密码">
        </li>
        <li class='btn'>
            <van-button @click='handleClick' color="#599E01">登陆</van-button>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        handleClickPush(val){
            switch(val){
                case 0:
                    this.$router.push('/login/index');
                break;
                case 1:
                    this.$router.push('/login/phone');
                break;
                case 2:
                    this.$router.push('/login/sign');
                break;
                default:
                break;
            }
        },
        handleClick(){
            this.$router.push('/smart');
        }
    }
}
</script>
<style lang="less" scoped>
.log{
    width:6.6rem;
    margin:0 auto;
    background-color:#fff;
    header{
        display: flex;
        color:#333333;
        font-family: MicrosoftYaHei;
        border-bottom:1px solid #D4D4D7;
        align-items:center;
        position:relative;
        p{
            font-size:.28rem;
            padding:.26rem;
            position:relative;
        }
        p::after{
            content:'';
            position: absolute;
            bottom:0;left:0.32rem;
            display:block;
            width:70%;
            height:.04rem;
            background-color:transparent;
        }
        .p::after{
            background-color:#599E01;
        }
        span{
            font-size:.24rem;
            color:#599E01;
            position: absolute;
            right:.3rem;
        }
        span::after{
            content:'>';
            font-size:.3rem;
        }
    }
}
.list{
    padding:.6rem .4rem .8rem;
    .list-item{
        display:flex;
        align-items:center;
        box-sizing: border-box;
        padding:.2rem;
        border:1px solid #DFDFDF;
        img{
            width:.4rem;
        }
        span{
            display:inline-block;
            font-size:.4rem;
            color:#DFDFDF;
            margin:0 .2rem;
        }
        input{
            border:0;
            outline: none;
            font-size:.28rem;
        }
        ::-webkit-input-placeholder{
            color:#DFDFDF;
        }
    }
    .list-item + .list-item{
        margin-top:.3rem;
    }
    .btn{
        width:100%;
        margin-top:.5rem;
        button{
            width:100%;  
            span{
                font-size:.32rem;
            }     
        }
    }
}
</style>