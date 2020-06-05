<template>
<div class='login'>
    <van-swipe :autoplay="3000" indicator-color="#599E01">
        <van-swipe-item>
            <img src="@/assets/img/banner.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="@/assets/img/banner.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="@/assets/img/banner.png" alt="">
        </van-swipe-item>
    </van-swipe>
    <div class='router'>
        <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
/deep/.van-swipe-item{
    img{
        width:100%;
    }
}
/deep/.van-swipe__indicators{
    bottom:.08rem;
    .van-swipe__indicator{
        width:.18rem;
        height:.18rem;
        background-color:#fff;
    }
}
.login{
    width:100vw;
    height:100vh;
    background:url('../../assets/img/dl-bg.png') no-repeat;
    background-size:cover;
}
.router{
    margin-top:.26rem;
    position: relative;
    z-index:999;
}
</style>