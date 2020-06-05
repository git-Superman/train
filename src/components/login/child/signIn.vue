<template>
<div class="log">
    <header>
        <p class='p'>注册新用户</p>
        <p class='t'>已有账号&nbsp;请<span @click='handleClickPush'>登陆</span></p>
    </header>
    <ul class='list'>
        <li class='list-item list-letter'>
            <span>用户名</span>
            <input type="text" placeholder="您的用户名和登陆名">
        </li>
        <li class='list-item'>
            <span>设置密码</span>
            <input type="password" placeholder="建议使用两种字符组合">
        </li>
        <li class='list-item'>
            <span>确认密码</span>
            <input type="password" placeholder="请再次输入密码">
        </li>
        <li class='list-item'>
            <span>中国+86</span>
            <input type="text" placeholder="建议使用常用手机">
        </li>
        <li class='list-item list-input'>
            <span>手机验证码</span>
            <input type="text" placeholder="验证码">
            <button >获取验证码</button>
        </li>
        <li class='list-pdu'>
                <img src="@/assets/icon/zc-dg.png" alt="">
                <p>我已阅读并同意用户使用规范</p>
        </li>
        <li class='btn'>
            <van-button color="#599E01">注册</van-button>
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
                this.$router.push('/login/index');
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
            font-size:.32rem;
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
        .t{
            font-size:.28rem;
            position:absolute;
            right:0;
            color:#999;
        }
        span{
            color:#599E01;
        }
    }
}
.list{
    padding:.4rem .4rem .6rem;
    .list-letter{
        span{
            letter-spacing: .06rem;
        }
    }
    .list-item{
        display:flex;
        align-items:center;
        box-sizing: border-box;
        padding:.2rem;
        border:1px solid #DFDFDF;
        span{
            display:inline-block;
            font-size:.28rem;
            color:#666;
            margin-right:.3rem;
            width:1.2rem;
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
        margin-top:.12rem;
    }
    .list-input{
        position:relative;
        span{
            width:1.4rem;
        }
        input{
                width:26%;
        }
        button{
            width:32%;
            height:.7rem;
            right:.06rem;
            position: absolute;
            font-size:.24rem;
            color:#fff;
            margin:0;
            background-color:#7CC223;
            border:0;
        }
    }
    .list-pdu{
            display:flex;
            font-size:.24rem;
            align-items: center;
            margin-top:.12rem;
            color:#999999;
            img{
                height:.24rem;
                margin-right:.12rem;
            }
    }
    .btn{
        width:100%;
        margin-top:.12rem;
        button{
            width:100%;
            span{
                font-size:.32rem;
            }     
        }
    }
}
</style>