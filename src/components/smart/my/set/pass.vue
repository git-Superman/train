<template>
<div>
    <nav-bar :test="test"></nav-bar>
    <main>
        <div>
            <input type="text" placeholder="请输入现在的登录密码">
        </div>
        <div>
            <input type="password" v-model="input2" placeholder="请输入新的登录密码">
        </div>
        <div>
            <input type="password" v-model="input3" placeholder="请再次输入新的登录密码">
            <p v-show='show'>
                <img src="@/assets/icon/wdsz-cuowu.png" alt="">
                <span>密码不一致!</span>
            </p>
        </div>
    </main>
    <div class="btn">
        <button @click='handleClick'>确认修改</button>
    </div>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            test : '修改登录密码',
            input2 : '',
            input3 : '',
            show : false
        }
    },
    methods:{
        handleClick(){
            if(this.input2 && this.input3){
                this.input2 !=this.input3 ? this.show = true : '';
                setTimeout(()=>{
                    this.show = false;
                },3000)
            }
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
                position: absolute;
                top:0.06rem;right:.3rem;
                display:flex;
                color:#D8232A;
                img{
                    width:.36rem;
                    height:.36rem;
                    margin-right:.12rem;
                }
            }
        }
        div + div{
            margin-top:.5rem;
        }
    }
.btn{
    width:3.8rem;
    margin:1.6rem auto 0;
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
