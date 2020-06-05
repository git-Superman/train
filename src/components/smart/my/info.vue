<template>
<div>
    <nav-bar :test="test"></nav-bar>
    <main>
        <ul>
            <li class='item-list'>
                <p>头像</p>
                <img src="@/assets/img/dt-face.png" alt="">
            </li>
            <li class='item-list'>
                <p>昵称</p>
                <input maxlength="24" type="text" v-model='value'>
            </li>
            <li class='item-content'>
                <p>个性签名</p>
                <textarea v-model="text">
                </textarea>
            </li>
            <li class='item-gender'>
                <p>性别</p>
                <div class='gender'>
                    <div @click='active = true'>
                        <img :src="active ? isTrue : isFalse" alt="">
                        <span>男</span>
                    </div>
                    <div @click='active = false'>
                        <img :src="!active ? isTrue : isFalse" alt="">
                        <span>女</span>
                    </div>
                </div>
            </li>
        </ul>
    </main>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
import isTrue from '@/assets/icon/grxx-dxxz.png'
import isFalse from '@/assets/icon/grxx-dxwx.png'
export default {
    data() {
        return {
            test : '个人信息',
            value:'你的眼bay',
            show : true,
            isTrue,
            isFalse,
            active : false,
            text :'我就是我，不一样的烟火。'
        }
    },
    methods:{
        handleClick(){
            this.$dialog.confirm({
                title: '标题',
                message: '弹窗内容'
                }).then(() => {
                // on confirm
                }).catch(() => {
                // on cancel
                })
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
/deep/.van-overlay{
    background-color:transparent;
} 
main{
    ul{
        li{
            background-color:#fff;
            margin-top:.06rem;
            box-sizing: border-box;
            padding:.26rem;
            color:#666666;
        }
        .item-list{
            display:flex;
            align-items:center;
            justify-content: space-between;
            img{
                width:1.2rem;
                height:1.2rem;
                border-radius:50%;
            }
            input{
                border:0;
                width:2.6rem;
            }
            input:focus{
                width:3.6rem;
            }
        }
        .item-gender{
            display:flex;
            p{
                margin-right:1rem;
            }
            .gender{
                display:flex;
                div{
                    display:flex;
                    align-items:center;
                    margin-right:1rem;
                }
                img{
                    width:.4rem;
                    height:.4rem;
                    margin-right:.12rem;
                }
            }
        }
        .item-content{
            textarea{
                margin-top:.3rem;
                font-size:.32rem;
                display:block;
                width:100%;
                height:1.6rem;
                border:0;
            }
        }
    }
}
</style>