<template>
<div>
    <main>
        <ul>
            <li v-for='(item,i) in list' @click="handleClickPush(item)" :key='i' class='list-item'>
                <img :src="item.img" alt="">
                <div>
                    <p v-html='item.test'></p>
                    <div class="item-div">
                        <img :src="isFalse" alt="">
                        <span>2019/12/20 15:00开课</span>
                    </div>
                    <div class='item-plan'>
                        <div>
                            <div>
                                <em :style='{width:Number(item.value)+"%"}'></em>
                                <span>{{Number(item.value)}}%</span>
                            </div>
                        </div>
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
            plan:50,
            list:[
                {
                    test:'音乐智能 Art',
                    img:require('@/assets/img/09191207.jpg'),
                    value:30,
                    cont:'利用视觉信息和三维空间的方式进行思维的能力'
                },
                {
                    test:'身体智能 TPR',
                    img:require('@/assets/img/0922.jpg'),
                    value:60,
                    cont:'灵活的操纵物体，调整身体的能力'
                },
                {
                    test:'自然观察智能 Science',
                    img:require('@/assets/img/0918.jpg'),
                    value:90,
                    cont:'善于观察自然界中的各种形态，对物体进行辨认和分类，洞察自然的能力；'
                },
                {
                    test:'人际关系智能 Social',
                    img:require('@/assets/img/0215.jpg'),
                    value:42,
                    cont:'个体与人相处与交往的能力，个人觉察、体验他人情绪、情感和意图并据此作出适宜反应的能力'
                },
                {
                    test:'内省智能 Speech',
                    img:require('@/assets/img/0112.jpg'),
                    value:64,
                    cont:'意识到自己的心理活动以及原因，理解他人的思想、情绪和情感，依据对自己的认识及对他人的理解指导自己的行为'
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
main{
    ul{
        box-sizing: border-box;
        padding:0 .12rem .12rem .12rem;
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
                    height:1rem;
                    overflow: hidden;
                }
                .item-div{
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
                .item-plan{
                    display:flex;
                    justify-content: space-between;
                    margin-top:.2rem;
                    >div{
                        width:86%;height:.4rem;
                        border-radius:1rem 1rem;
                        text-align:center;
                        line-height: .4rem;
                        font-size:.28rem;
                        border:1px solid #009944;
                        overflow: hidden;
                        position:relative;
                        color:#fff;
                        padding:.02rem;
                        div{
                            width:100%;height: 100%;
                            position:relative;
                            box-sizing: border-box;
                            em{
                                content:'';
                                position:absolute;
                                left:0;
                                height:100%;
                                max-width:100%;
                                background-color:#009944;
                                border-top-left-radius:1rem;
                                border-bottom-left-radius:1rem;
                                border-top-right-radius:1rem;
                                border-bottom-right-radius:1rem;
                            }
                            span{
                                position: relative;
                                text-shadow: #009944 1px 1px 1px;
                            }
                        }
                    }
                }

            }
        }
    }
}
</style>