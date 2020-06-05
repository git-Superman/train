<template>
<div>
    <nav-bar :test='test'></nav-bar>
    <header>
        <div class="month">
            <p v-for='(item,i) in dayList' :key='i' :class="i == month ? 'action' : '' "  @click="handleDay(i)" v-html='item'></p>
        </div>
        <div class='sky'>
            <div>
                <p v-for='(item,i) in week' :key='i' v-html='item'></p>
            </div>
            <div>
                <!-- <p v-show='y!=7' v-for='s of y' :key='s' v-html='y'></p>
                 -->
                <p :style='{minWidth:y}'></p>
                <p v-for='i in dates' :class='i == day ? "action" : ""' :key='i'><span v-html='i'></span></p>
            </div>
        </div>
    </header>
    <main>
        <ul>
            <li v-for='(item,i) in list' @click="handleClickPush(item)" :key='i' class='list-item'>
                <img :src="item.img" alt="">
                <div>
                    <p>{{item.test}}</p>
                    <div>
                        <img :src="isFalse" alt="">
                        <span>{{item.value}}开课</span>
                    </div>
                </div>
            </li>
        </ul>
    </main>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
import isTrue from '@/assets/icon/class-zzsk.png'
import isFalse from '@/assets/icon/class-kksj.png'
export default {
    data() {
        return {
            test : '课程日历',
            dayList : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            month : Number,
            dates : Number,
            day : Number,
            y : '',
            week : ['一','二','三','四','五','六','日'],
            isTrue,
            isFalse,
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
                    value:'2019/12/20 15:00',
                    cont:'个人感受、辨别、记忆、改变和表达音乐的能力，个人对节奏、音调和旋律的敏感以及通过作曲、演奏和歌唱等表达自己思想能力'
                },
                {
                    test:'逻辑数学智能 Math',
                    img:require('@/assets/img/0918.jpg'),
                    value:'2019/10/20 15:00',
                    cont:'个体运算和推理的能力，能够将物体量化，对命题和假设，进行思考和推理，并进行复杂的数学运算等'
                },
                {
                    test:'音乐智能 Art',
                    img:require('@/assets/img/0922.jpg'),
                    value:'2019/11/20 15:00',
                    cont:'利用视觉信息和三维空间的方式进行思维的能力'
                },
                {
                    test:'身体智能 TPR',
                    img:require('@/assets/img/09191207.jpg'),
                    value:'2019/11/20 15:00',
                    cont:'灵活的操纵物体，调整身体的能力'
                }
            ]
        }
    },
    created(){
        var myDate = new Date();
        // 获取当前月份
        this.month = myDate.getMonth();
        // 获取当前月份天数
        this.day = myDate.getDate();
        var year = myDate.getFullYear();
        var d = new Date(year,this.month + 1,0);
        this.dates = d.getDate();
        // 获取当前星期
        var y = myDate.getDay();
        this.y = (7 - y) * 14.2 +'%';
        console.log(this.y);
    },
    methods:{
        handleDay(i){
            this.day = 0;
            this.month = i;
            var myDate = new Date();
            var year = myDate.getFullYear();
            // 获取当前月份
            var month = myDate.getMonth();
            // 获取当前月天数数
            var day = myDate.getDate();
            i == month ? this.day=day : '';
            var d = new Date(year,i+1,0);
            this.dates = d.getDate();
            
        },
        handleClickPush(e){
            this.$router.push({path:'/smart/details/detail',query:e});
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
header{
    width:100%;
    margin-top:.06rem;
    .month{
        overflow-x:auto;
        -webkit-overflow-scrolling:touch;
        display:flex;
        background-color:#fff;
        margin-bottom:.06rem;
        width:100%;
        p{
            min-width:1.5rem;
            padding:.3rem 0;
            color:#666666;
            text-align:center;
        }
        p.action{
            background-color:#71C99C;
            color:#fff;
        }
    }
    .month::-webkit-scrollbar {
        display: none;
    }
    .sky{
        background-color:#fff;
        padding-bottom:.2rem;
        div{
            display:flex;
            p{
                width:14.2%;
                text-align:center;
                padding:.26rem 0;
                color:#9E9E9E;
            }
        }
        div:last-child{
            width:100%;
            flex-wrap: wrap;
            p{
                color:#666;
            }
            p.a span::after{
                background-color:#F39800;
            }
            p.action{
                color:#fff;
                span::before{
                    background-color:#71C99C;
                }
            }

            span{
                position:relative;
                z-index:2;
            }
            span::after,span::before{
                content:'';
                position:absolute;
                width:.1rem;height:.1rem;
                top:50%;
                left:50%;
                margin-top:0.4rem;
                margin-left:-.05rem;
                background-color:transparent;
                border-radius:50%;
            }
            span:before{
                width:.6rem;height:.6rem;
                background-color:transparent;
                margin-left:-0.3rem;
                margin-top:-0.3rem;
                z-index:-1;
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