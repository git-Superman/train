<template>
<div>
    <nav-bar :test="test"></nav-bar>
    <main>
        <ul class='list'>
            <li>
                <img src="@/assets/img/lxkf-img.png" alt="">
            </li>
            <li class='list-phone'>
                <p><span>联系电话：</span>4006-888-887</p>
            </li>
            <li class='list-span'>
                <span>客服电话  免长途费</span>
                <span>服务时间：周一至周日 8:00-22:00</span>
            </li>
        </ul>
    </main>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
export default {
    data() {
        return {
            test : '联系客服'
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
.list{
    box-sizing: border-box;
    padding:.2rem;
    width:100%;
    li{
        width:100%;
        color:#9E9E9E;
        img{
            width:100%;
        }
    }
    .list-phone{
       p{
            width:100%;
            font-size:.42rem;
            color:#666666;
            font-weight:bold;
            text-align:center;
            line-height:.42rem;
            span{
                font-size:.32rem;
                font-weight:normal;
            }
        }
    }
    .list-span{
        span{
            display:block;
            width:100%;
            text-align:center;
        }
        span + span{
            margin-top:.12rem;
        }
    }
    li + li{
        margin-top:.46rem !important;
    }
}
</style>