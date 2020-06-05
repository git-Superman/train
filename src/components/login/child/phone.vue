<template>
<div class="log">
    <header>
        <p @click='handleClickPush(0)'>账号密码登陆</p>|
        <p @click='handleClickPush(1)' class='p'>手机验证码登陆</p>
        <span @click='handleClickPush(2)'>立即注册</span>
    </header>
    <ul class='list'>
        <li class='list-item'>
            <input type="text" maxlength="11" placeholder="请输入手机号码">
        </li>
        <li class='list-item list-input'>
            <input class='inp' type="text" placeholder="动态码">
            <van-button color='#A2D264'>获取动态码</van-button>
        </li>
        <li class='list-item list-input'>
            <input type="text" placeholder="请输入验证码">
            <div>
                <p></p>
                <img src="@/assets/icon/dl-sxbtn.png" alt="">
            </div>
        </li>
        <li class='btn'>
            <van-button color="#599E01">登陆</van-button>
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
    .list-input{
        border:0;
        padding:0 0;
        justify-content: space-between;
        input{
                width:56%;
                box-sizing: border-box;
                padding:.2rem;
                border:1px solid #DFDFDF;
        }
        button,div{
                width:40%;
                height:.84rem;
                span{
                        font-size: 0.28rem;
                        color:#fff;
                        margin:0;

                }
        }
        div{
            display:flex;
            justify-content: space-between;
            align-items:center;
            p{
                    width:76%;
                    height:100%;
                    background-color:#E3E3E3;
            }
        }
    }
    .btn{
        width:100%;
        margin-top:.5rem;
        button{
            width:100%;
            span{
                font-size:.28rem;
            }     
        }
    }
}
</style>