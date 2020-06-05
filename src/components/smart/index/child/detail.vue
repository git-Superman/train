<template>
<div>
    <header>
        <p>{{title}}</p>
        <div>
            <p>
                <img src="@/assets/icon/mian-rsicon.png" alt="">
                <span>{{value}}</span>
            </p>
            <span>¥999.99</span>
        </div>
    </header>
    <main>
        <h5 class='title'>老师介绍</h5>
        <div class='main-item' @click='handleClickPush'>
            <div>
                <img src="@/assets/img/Arthur1.png" alt="">
            </div>
            <ul>
                <li>
                    <h6>Arthur M <span>英国特级少儿讲师</span> </h6>
                </li>
                <li class='item-p'>
                    <p>简介：Arthur老师来自英国，拥有非常丰富的少儿英语教学经验，曾在上海某国际学校教过半年，目前居住在瑞士，Arthur老师非常富有激情，热爱教学与音乐，会弹奏各种乐器，老师教学时喜欢用游戏与歌曲来丰富课堂氛围，小朋友们快来与Arthur老师一起学习吧！</p>
                </li>
                <li class='item-div'>
                    <h4>主讲课程：</h4>
                    <p>
                        如何成为一个自律的人?<br>
                        如何顺利完成职场晋升?<br>
                        想要提升业绩你该怎么做?
                    </p>
                </li>
                <li class='item-img'>
                    <img src="@/assets/icon/kcjs-more.png" alt="">
                </li>
            </ul>
        </div>
    </main>
    <main>
        <h5 class='title'>课程介绍</h5>
        <ul>
            <li class='item-plan'>
                <div>
                    <em :style='{width:plan+"%"}'></em>
                    <span>当前进度</span>
                </div>
                <p>{{plan}}%</p>
            </li>
            <li class='item-content'>
                <p>{{cont}}</p>
            </li>
        </ul>
    </main>
</div>
</template>
<script>
export default {
    data() {
        return {
            plan:50,
            title:'如何成为一个自律的人?',
            cont:'课程介绍:',
            value : 157810

        }

    },
    methods:{
        handleClickPush(){
            this.$router.push({path:'/smart/smartDynamicTeacherDetail',query:{
                title : 'Arthur M',
                img : require('@/assets/img/Arthur1.png'),
                cont : 'Arthur老师来自英国，拥有非常丰富的少儿英语教学经验，曾在上海某国际学校教过半年，目前居住在瑞士，Arthur老师非常富有激情，热爱教学与音乐，会弹奏各种乐器，老师教学时喜欢用游戏与歌曲来丰富课堂氛围，小朋友们快来与Arthur老师一起学习吧！',
                subTitle : '英国特级少儿讲师'
            }});
        }
    },
    created(){
        var query = this.$route.query;
        this.title = query.test;
        this.cont = query.cont;
        this.value = query.value;
    }
}
</script>
<style lang="less" scoped>
header{
    font-size:.32rem;
    color:#666666;
    background-color:#fff;
    padding:.26rem;
    margin-top:.06rem;
    >p{
        min-height:.7rem;
        padding-bottom:.2rem;
    }
    div{
        display:flex;
        justify-content: space-between;
        >span{
            font-size:.36rem;
            font-weight:bold;
            color:#FF5400;
        }
        p{
            img{
                width:.5rem;height:.32rem;
            }
            span{
                vertical-align: text-bottom;
                font-size:.26rem;
            }
        }
        
    }
}
main{
    box-sizing: border-box;
    padding:.2rem;
    margin-top:.12rem;
    background-color:#fff;
    font-size:.32rem;
    color:#666666;
    .title{
        color:#009944;
        font-weight: bold;
        font-size:.36rem;
        display:flex;
        align-items:center;
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
    .main-item{
        display:flex;
        justify-content:space-between;
        margin-top:.3rem;
        div{
            width:32%;
            img{
                width:100%;
            }
        }
        ul{
            width:65%;
            font-size:.28rem;
            h6{
                font-size:.32rem;
                font-weight:bold;
                span{
                    font-weight:normal;
                    font-size:.26rem;
                    color:#A1A1A1;
                }
                span::before{
                    content:'|';
                    font-size:.32rem;
                    font-weight: bold;
                    margin:0 .1rem;
                }
            }
            .item-p{
                margin:.12rem 0;
                max-height: .7rem;
                overflow: hidden;
                font-size:.26rem;
            }
            .item-div{
                display:flex;
                font-size:.24rem;
                p{
                    text-decoration: underline;
                    color:#009944;
                    height: 1.2rem;
                    overflow: hidden;
                }
            }
            .item-img{
                float:right;
                img{
                    padding:.12rem;
                    width:.6rem;
                    height:.2rem;
                }
            }
        }
    }
    // 课程介绍
    .item-plan{
        display:flex;
        justify-content: space-between;
        margin-top:.2rem;
        div{
            width:86%;height:.4rem;
            border-radius:1rem 1rem;
            text-align:center;
            line-height: .4rem;
            font-size:.28rem;
            border:1px solid #009944;
            overflow: hidden;
            position:relative;
            color:#fff;
            em{
                content:'';
                position:absolute;
                left:0;
                height:100%;
                background-color:#009944;
                border-top-right-radius:1rem;
                border-bottom-right-radius:1rem;
            }
            span{
                position: relative;
                z-index: 2;
                text-shadow: #009944 1px 1px 1px;
            }
        }
        p{
            color:#009944;
        }
    }
    .item-content{
        margin-top:.2rem;
        color:#9E9E9E;
        font-size:.32rem;
    }
}
</style>