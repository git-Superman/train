<template>
<div>
    <main>
        <ul>
            <li v-for='(item,i) in list' :key='i' class='list-items'>
                <img :src="item.img" alt="">
                <div>
                    <h5>{{item.title}}</h5>
                    <span v-html='item.time'></span>
                    <p v-html='item.cont'>
                        
                    </p>
                </div>
            </li>
        </ul>
    </main>
</div>
</template>
<script>
export default{
    data() {
        return {
            list:[
                {
                    name : '学生A',
                    cont : '课程非常好，老师讲解的很清楚，通俗易懂',
                    time : '2019/09/18&nbsp;15:06',
                    img : require('@/assets/img/dt-face2.png')
                },
                {
                    name : '学生B',
                    cont : '通俗易懂，值得推荐。',
                    time : '2019/09/18&nbsp;13:23',
                    img : require('@/assets/img/wd-face.png')
                },
                {
                    name : '学生C',
                    cont : '课程非常好，老师也很棒！',
                    time : '2019/09/18&nbsp;9:03',
                    img : require('@/assets/img/wd-face.png')
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
    .list-items{
        display:flex;
        background-color:#fff;
        margin-top:.06rem;
        box-sizing: border-box;
        padding:.2rem;
        >img{
            display:block;
            min-width:1.2rem;
            min-height:1.2rem;
            max-width:1.2rem;
            max-height:1.2rem;
            border-radius:50%;
            margin-right:.2rem;
            flex-shrink:0;
        }
        div{
            h5{
                color:#22AC39;
            }
            span{
                display:block;
                margin:.1rem 0 .16rem;
                color:#9E9E9E;
                font-size:.28rem;
            }
        }
    }
}
</style>
