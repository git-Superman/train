<template>
<div>
    <nav-bar :test='test'></nav-bar>
    <div class="content">
        <img class='t' :src="img" alt="">
        <h5>{{title}}</h5>
        <p >{{subTitle}}</p>
        <span>{{cont}}</span>
        <img class='float' src="@/assets/icon/lsxq-scicon.png" alt="">
    </div>
    <main>
        <h5 class='title'>课程介绍</h5>
         <ul class='list'>
             <li v-for="(item,i) in list" :key='i' class="item-list">
                 <img :src="item.img" alt="">
                 <div>
                     <p>{{item.test}}</p>
                     <span>¥{{item.value}}</span>
                 </div>
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
            test : '老师详情',
            height : 'height:0;',
            action : false,
            show : true,
            title : '李茶的',
            cont : '这里是老师简介，这里是老师简介，这里是老师简介，这里是老师简介，这里是老师简介，这里是老师简介，这里是老师简介。',
            subTitle : '国家特级情商讲师',
            img : '',
            list:[
                {
                    test:'语言智能 Language',
                    img:require('@/assets/img/0112.jpg'),
                    value:286,
                    cont:'体听说读写的能力，个人能顺利而高效地利用语言描述事件，表达思想并与人交流的能力'
                },
                {
                    test:'音乐智能 Music',
                    img:require('@/assets/img/0215.jpg'),
                    value:833,
                    cont:'个人感受、辨别、记忆、改变和表达音乐的能力，个人对节奏、音调和旋律的敏感以及通过作曲、演奏和歌唱等表达自己思想能力'
                },
                {
                    test:'逻辑数学智能 Math',
                    img:require('@/assets/img/0918.jpg'),
                    value:1268,
                    cont:'个体运算和推理的能力，能够将物体量化，对命题和假设，进行思考和推理，并进行复杂的数学运算等'
                },
                {
                    test:'音乐智能 Art',
                    img:require('@/assets/img/0922.jpg'),
                    value:5739,
                    cont:'利用视觉信息和三维空间的方式进行思维的能力'
                },
                {
                    test:'身体智能 TPR',
                    img:require('@/assets/img/09191207.jpg'),
                    value:2862,
                    cont:'灵活的操纵物体，调整身体的能力'
                }
            ]
        }
    },
    methods:{
        
    },
    created(){
        var query = this.$route.query;
        this.title = query.title;
        this.subTitle = query.subTitle;
        this.cont = query.cont;
        this.img = query.img;
    },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
.content{
    position:relative;
    background-color:#fff;
    margin-top:.12rem;
    box-sizing: border-box;
    padding:.2rem;
    img.t{
        display:block;
        width:2rem;height:2rem;
        border-radius:50%;
        margin:0 auto;
    }
    h5,p{
        text-align:center;
        color:#666666;
    }
    h5{
        font-size:.36rem;
        font-weight:bold;
        color:#50A278;
        margin:.08rem 0;
    }
    span{
        margin-top:.2rem;
        display:block;
        color:#9E9E9E;
    }
    img.float{
        position: absolute;
        right:0.2rem;top:0.2rem;
        width:.62rem;
    }
}
main{
    font-size:.32rem;
    color:#666;
    .title{
        color:#009944;
        font-weight: bold;
        font-size:.36rem;
        display:flex;
        align-items:center;
        background-color:#fff;
        box-sizing: border-box;
        padding:.1rem .12rem;
        margin-top:.12rem;
    }
    .title::before{
        content:'';
        display: inline-block;
        width:.12rem;
        height:.42rem;
        background-color:#009944;
        border-radius:50rem 50rem;
        margin-right:.2rem;
    }
    .list{
        // 
        box-sizing: border-box;
        padding:0 .16rem .16rem .16rem;
        .item-list{
            margin-top:.1rem;
            background-color:#fff;
            border-radius:.2rem;
            overflow: hidden;
            height:2.4rem;
            display:flex;
            box-shadow: #000 .02rem .02rem .08rem -.02rem;
            img{
                width:50%;
                height:100%;
            }
            div{
                width: 50%;height:100%;
                box-sizing: border-box;
                padding:.2rem;
                p{
                    height:1.5rem;
                    overflow: hidden;
                }
                span{
                    font-size:.36rem;
                    color:#FE6B0D;
                    font-weight:bold;
                }
            }
        }
    }

}
</style>