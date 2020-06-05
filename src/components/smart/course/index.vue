<template>
    <div>
        <header>
            <div>
                <p v-for='(item,i) in week' :key='i' v-html='item'></p>
            </div>
            <div>
                <p v-for='i in 7' :class='i == 4 ? "action" : ""'  :key='i'><span v-html='i+10'></span></p>
            </div>
        </header>
        <main>
            <ul>
                <li v-for='(item,i) in list' :key='i' @click="handleClickPush(item)" class='list-item'>
                    <img :src="item.img" alt="">
                    <div>
                        <p v-html='item.test'></p>
                        <div>
                            <img :src="isFalse" alt="">
                            <span>2019/12/20 15:00开课</span>
                        </div>
                    </div>
                </li>
            </ul>
        </main>
    </div>
</template>
<script>
import isTrue from '@/assets/icon/class-zzsk.png'
import isFalse from '@/assets/icon/class-kksj.png'
export default {
    data(){
        return {
            isTrue,
            isFalse,
            week : ['一','二','三','四','五','六','日'],
            list:[
                {
                    test:'语言智能 Language',
                    img:require('@/assets/img/0112.jpg'),
                    value:2862,
                    cont:'体听说读写的能力，个人能顺利而高效地利用语言描述事件，表达思想并与人交流的能力'
                },
                {
                    test:'音乐智能 Music',
                    img:require('@/assets/img/0215.jpg'),
                    value:8331,
                    cont:'个人感受、辨别、记忆、改变和表达音乐的能力，个人对节奏、音调和旋律的敏感以及通过作曲、演奏和歌唱等表达自己思想能力'
                },
                {
                    test:'逻辑数学智能 Math',
                    img:require('@/assets/img/0918.jpg'),
                    value:12642,
                    cont:'个体运算和推理的能力，能够将物体量化，对命题和假设，进行思考和推理，并进行复杂的数学运算等'
                },
                {
                    test:'音乐智能 Art',
                    img:require('@/assets/img/0922.jpg'),
                    value:57395,
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
        handleClickPush(e){
            this.$router.push({path:'/smart/details/detail',query:e});
        }
    }
}
</script>
<style lang="less" scoped>
header{
    background-color:#fff;
    padding-bottom:.2rem;
    div{
        display:flex;
        justify-content: space-between;
        p{
            width:14.3%;
            text-align:center;
            padding:.3rem 0;
            color:#9E9E9E;
        }
    }
    div:last-child{
        p{
            color:#666;
            position:relative;
            z-index:1;
        }
        span::before{
            content:'';
            display:block;
            width:.6rem;height:.6rem;
            position: absolute;
            top:50%;right:50%;
            margin-top:-0.3rem;
            margin-right:-0.31rem;
            background-color:transparent;
            border-radius:50%;
            z-index:-1;
        }
        p.action{
            span{
                color:#fff;
            }
            span::before{
                background-color:#71C99C;
            }
        }
    }
}
main{
    ul{
        box-sizing: border-box;
        padding:.12rem;
        .list-item{
            display:flex;
            border-radius:.12rem;
            overflow: hidden;
            height:2.4rem;
            background-color:#fff;
            margin-bottom:.12rem;
            box-shadow: #000 1px 1px 5px -2px;
            >img{
                width:45%;height:100%;
            }
            >div{
                width:55%;
                box-sizing: border-box;
                padding:.2rem;
                color:#666;
                p{
                    height:1.6rem;
                    overflow: hidden;
                }
                div{
                    display:flex;
                    align-items:center;
                    span{
                        font-size:.26rem;
                        color:#9E9E9E;
                    }
                    img{
                        width:.32rem;
                        height:.32rem;
                        margin-right:.12rem;
                    }
                }
            }
        }
    }
}
</style>