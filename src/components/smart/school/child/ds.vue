<template>
<div>
     <main>
         <ul class='list'>
             <li @click='handleClickPush' v-for="(item,i) in list" :key='i' class="item-list">
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

export default {
    data() {
        return {
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
        handleClickPush(){
            this.$router.push('/smart/details/evaluate');
        }
    }
}
</script>
<style lang="less" scoped>
main{
    font-size:.32rem;
    color:#666;
    .list{
        // 
        box-sizing: border-box;
        padding:.16rem;
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