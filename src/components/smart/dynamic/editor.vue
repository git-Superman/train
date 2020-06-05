<template>
<div>
    <nav-bar :test='test'></nav-bar>
    <main>
        <div class='critic'>
            <textarea placeholder="此时此刻，你有什么想说的？"></textarea>
            <div class='uploader'>
                <van-uploader :after-read="handleClick" v-model="fileList" multiple />
            </div>
        </div>
        <van-button class='btn' color='#66BC90'>确定</van-button>
    </main>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
export default {
    data(){
        return {
            test:'编辑动态',
            fileList: [
                { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
                { url: 'https://img.yzcdn.cn/vant/cat.jpeg', isImage: true }
            ]
        }
    },
    methods:{
        handleClick(file){
            console.log(file)
            
        }
    },
    created(){

    },
    components:{
        navBar
    }
}
</script>
<style lang='less' scoped>
main{
    width:100%;
    font-size:.32rem;
    color:#9E9E9E;
    padding-bottom:1rem;
    .content{
        width:100%;
        background-color:#fff;
        box-sizing: border-box;
        padding:.2rem;
        h5{
            font-size:.36rem;
            color:#50A278;
            font-weight: bold;
            text-align:center;
            padding-bottom:.3rem;
        }
    }
    .critic{
        width:100%;
        margin-top:.06rem;
        background-color:#fff;
        box-sizing: border-box;
        padding:.2rem;
        div.uploader{
            margin-top:.2rem;
        }
        textarea{
            display:block;
            background-color:#F1F1F1;
            border:0;
            border-radius:.12rem;
            width:100%;
            box-sizing: border-box;
            padding:.2rem;
            height:2.6rem;
            color:#000;
        }
    }   
    .btn{
        display:block;
        width:3rem;
        margin:.6rem auto;
        font-size:.36rem;
        border-radius:.12rem;
    }
}
</style>
