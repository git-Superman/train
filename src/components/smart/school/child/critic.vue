<template>
<div>
    <nav-bar :test='test'></nav-bar>
    <header>
        <img src="@/assets/img/xxxq-bimg.png" alt="">
    </header>
    <main>
        <div class="content">
            <h5>小天才育林培训学校</h5>
            <p>这里是学校简介，这里是学校简介，这里是学校简介，这
                这里是学校简介，这里是学校简介，这里是学校简介，这
                这里是学校简介，这里是学校简介，这里是学校简介。
            </p>
        </div>
        <div class='critic'>
            <h5>评价：</h5>
            <div class="c">
                <van-rate
                color='#4DBF68'
                :size="26"
                v-model="value"
                allow-half
                void-icon="star"
                void-color="#eee"
                />
                <span>{{value}}</span>
            </div>
            <textarea placeholder="请写下一些评价"></textarea>
            <van-button class='btn' color='#66BC90'>确定</van-button>
        </div>
    </main>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
export default {
    data() {
        return {
            test : '学校评价',
            value : 3.5
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
header{
    img{
        width:100%;
    }
}
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
        div.c{
            display: flex;
            align-items:center;
            color:#50A278;
            margin:.2rem 0;
            span{
                margin-left:.2rem;
                font-size:.36rem;
            }
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
        .btn{
            display:block;
            width:3rem;
            margin:.3rem auto;
            font-size:.36rem;
            border-radius:.12rem;
        }
    }   
}
</style>