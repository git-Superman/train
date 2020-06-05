<template>
<div>
    <header>
        <nav-input class='input' :test="test"></nav-input>
        <img class='sctp' @click='show = true' src="@/assets/icon/dt-sctp.png" alt="">
    </header>
    <main>
        <div class="content">
        <div @click="handleClickPush" v-for='(item,i) in list' :key='i'>
            <img :src="item.img" alt="">
            <div>
                <div class='content-t'>
                    <img :src="item.imgT" alt="">
                    <div>
                        <p>{{item.title}}</p>
                        <span>{{item.time}}</span>
                    </div>
                </div>
                <div class='content-item'>
                    <p>{{item.test}}</p>
                    <p>
                        <img :src="isTrue" alt="">
                        <span>{{item.value}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </main>
    <van-overlay
        class='overlay'
        :show="show"
        @click="show = false"
        />
    <footer :style="!show ? 'height:0' : 'height:4.2rem'" class='foot-alert-img'>
        <van-uploader capture='camera' multiple>
            <img src="@/assets/icon/scdt-pz.png" alt="">
            <span>拍照</span>
        </van-uploader>
        <van-uploader multiple>
            <img src="@/assets/icon/scdt-xc.png" alt="">
            <span>从相册中选取</span>
        </van-uploader>
        <div @click='show = false'>
            <p>取消</p>
        </div>
    </footer>
</div>
</template>
<script>
import navInput from '@/components/global/nav-input'
import isTrue from '@/assets/icon/dt-ydz.png'
import isFalse from '@/assets/icon/dt-wdz.png'
export default {
    data() {
        return {
            isTrue,
            isFalse,
            test : '搜索您想了解的话题..',
            show : false,
            list : [
                {
                    title : '怪阿姨',
                    img : require('@/assets/img/96781a9bcaf35368e7b062a23c827258.jpg'),
                    imgT : require('@/assets/img/96781a9bcaf35368e7b062a23c827258.jpg'),
                    test : '今天天气好棒呀！整个人的心情都立马棒棒哒了呢！！',
                    time : '09-26 14:30',
                    value : 35
                },
                {
                    title : '你的眼yey',
                    img : require('@/assets/img/dt-img.png'),
                    imgT : require('@/assets/img/dt-face.png'),
                    test : '生活是一场没有尽头的旅行',
                    time : '09-26 14:30',
                    value : 78
                },
                {
                    title : '你的眼yey',
                    img : require('@/assets/img/dt-img.png'),
                    imgT : require('@/assets/img/dt-face.png'),
                    test : '换个发型，  换个心情！',
                    time : '09-26 14:30',
                    value : 12
                },
                {
                    title : '多多',
                    img : require('@/assets/img/12cafd8e85e9ff2c3cb476632dd69cb6b4876f12c660-xTydNq_fw658.jpg'),
                    imgT : require('@/assets/img/12cafd8e85e9ff2c3cb476632dd69cb6b4876f12c660-xTydNq_fw658.jpg'),
                    test : '一夜之间家里的茶花都开了',
                    time : '09-28 7:30',
                    value : 326
                },
                {
                    title : '怪阿姨',
                    img : require('@/assets/img/96781a9bcaf35368e7b062a23c827258.jpg'),
                    imgT : require('@/assets/img/96781a9bcaf35368e7b062a23c827258.jpg'),
                    test : '今天吃点什么呢！！',
                    time : '09-28 15:23',
                    value : 35
                }
            ]
        }
    },
    methods:{
        handleClickPush(){
            this.$router.push('/smart/smartDynamicEditor');
        }
    },
    components:{
        navInput
    }
}
</script>
<style lang="less" scoped>
/deep/.van-uploader__input-wrapper{
    width:100%;
    text-align:center;
}
header{
    display:flex;
    background-color:#fff;
    .input{
        width:100%;
    }
    .sctp{
        width:.6rem;height:.5rem;
        padding:.26rem .3rem .26rem .1rem;
        flex-shrink: 0;
    }
}
main{
    .content{
        display:flex;
        flex-wrap: wrap;
        color:#666666;
        font-size:.32rem;
        >div{
            width:46%;
            border-radius:.2rem;
            overflow: hidden;
            margin:.2rem 0 0 .2rem;
            background-color:#fff;
            >img{
                width:100%;
                height:2.8rem;
            }
             .content-t{
                 display:flex;
                 align-items:center;
                 margin-top:.12rem;
                 padding-left:.12rem;
                 img{
                     width:.7rem;
                     height:.7rem;
                     flex-shrink:0;
                     border-radius:50%;
                     margin-right:.2rem;
                 }
                 div{
                     font-size:.28rem;
                     p{
                        width: 100%;
                        white-space:nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                     }
                     span{
                         font-size:.24rem;
                     }
                 }
             }
            .content-item{
                background-color:#fff;
                box-sizing: border-box;
                padding:.12rem;
                font-size:.28rem;
                p:first-child{
                    max-height:.8rem;
                    overflow: hidden;
                    margin-bottom:.12rem;
                }
                p:last-child{
                    float: right;
                    img{
                        width:.32rem;height:.28rem;
                    }
                    span{
                        vertical-align: text-bottom;
                        font-size:.26rem;
                        color:#22AC39;
                    }
                }
            }
            .content-item::after{
                content:'';
                display:block;
                clear: both;
            }
        }
        
    }
}
/deep/.overlay{
    z-index:98 !important;
}
.foot-alert-img{
    position:fixed;
    bottom:0;
    z-index:99;
    background-color:transparent;
    width:100%;
    transition:height .5s;
    div{
        width:100%;
        margin-top:.16rem;
        padding:.26rem 0;
        font-size:.36rem;
        background-color:#fff;
        text-align:center;
        color:#666666;
        img{
            width:.6rem;
            height:.5rem;
            margin-right:.12rem;
        }
        span{
            vertical-align: middle;
        }
    }
    div:last-child{
        background-color:#E4E4E4;
    }
}
</style>