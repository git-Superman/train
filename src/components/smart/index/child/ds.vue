<template>
<div>
     <main>
         <ul v-for="(item,i) in icon" :key='i' class='item-list'>
             <li class='list-title'>
                 <h5>第{{i+1}}节课</h5>
                 <span>2019/12/20 15:00-16:00</span>
             </li>
             <li>{{item.title}}</li>
             <li class='list-content' :style="item.action ? 'height:auto' : 'height:0'">
                 课程介绍：{{item.cont}}
             </li>
             <li class='list-active'>
                 <img :src="!item.action ? isTrue : isFalse" @click="item.action = !item.action" alt="">
             </li>
         </ul>
     </main>
</div>
</template>
<script>
import isFalse from '@/assets/icon/kcjs-sqjt.png'
import isTrue from '@/assets/icon/kcjs-zkjt.png'
export default {
    data() {
        return {
            isFalse,
            isTrue,
            icon:[
                {
                    title : '听说，字母',
                    cont : '培养学习兴趣和自信心，建立纯正英语语感，并用基本句型简单和自我介绍',
                    action:true
                },
                {
                    title : '听说、字母拼读',
                    cont : '生活对话并能说出简单短句回应，同时运用Phonics技巧训练拼读，达到见词拼音、听音拼词的能力，数字0-20的初阶数学思维，生活科学观察',
                    action:false
                },
                {
                    title : '初步阅读能力、数学加减',
                    cont : '运用更多句型和单词来口语表达以及更为精准的描述自己的想法。熟练Phonics技巧做基础阅读建立。运用数学初阶逻辑思维和30以内加减运算。',
                    action:false
                },
                {
                    title : '自主阅读、语法时态',
                    cont : '发展自主阅读能力，能理解短篇中的主旨大意并加入语法时态的学习能以正确用语整句输出。数学的50以内加减法0-100的数字，时间的整点半点表达方式。初阶科学认知，观察分析能力建构。物理科学建构',
                    action:false
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
main{
    font-size:.32rem;
    color:#666;
    .item-list{
        background-color:#fff;
        box-sizing: border-box;
        padding:.2rem;
        margin-top:.06rem;
    }
    .list-title{
        color:#22AC39;
        display: flex;
        justify-content: space-between;
        margin-bottom:.1rem;
        span{
            color:#9E9E9E;
        }
    }
    .list-content{
        overflow: hidden;
        margin-top:.12rem;
        transition:all 1s;
    }
    .list-active{
        img{
            display:block;
            width:.36rem;
            height:.16rem;
            margin:0 auto;
            padding:.2rem;
        }
    }
}
</style>