<template>
<div>
    <main>
        <ul>
            <li class='item-title' @click='handleClickPush'>
                <img src="@/assets/icon/xhr-jh.png" alt="">
                <p>写评价</p>
            </li>
            <li v-for='i in 3' :key='i' class='list-items'>
                <img src="@/assets/img/wd-face.png" alt="">
                <div>
                    <h5>学生小AA</h5>
                    <div class="span">
                        <span>2019/12/20 15:00</span>
                        <van-rate
                            color='#4DBF68'
                            :size="20"
                            readonly
                            v-model="value"
                            allow-half
                            void-icon="star"
                            void-color="#eee"
                            />
                            <p>{{value}}</p>
                    </div>
                    <p>
                        课程非常好，老师也很棒！通俗易懂，值得推荐。
                    </p>
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
            value : 4.5
        }
    },
    methods:{
        handleClickPush(){
            this.$router.push('/smart/schoolCritic');
        }
    }
}
</script>
<style lang="less" scoped>
main{
    font-size:.32rem;
    color:#666;
    min-height:12rem;
    .item-title{
        width:1.6rem;
        display:flex;
        margin:0 auto;
        align-items:center;
        justify-content: space-between;
        color:#22AC39;
        padding:.2rem 0;
        img{
            width:.5rem;
            height:.5rem;
        }
    }
    .list-items{
        display:flex;
        background-color:#fff;
        margin-top:.06rem;
        box-sizing: border-box;
        padding:.2rem;
        >img{
            display:block;
            width:1.2rem;
            height:1.2rem;
            border-radius:50%;
            margin-right:.2rem;
            flex-shrink: 0;
        }
        div{
            h5{
                color:#22AC39;
            }
            .span{
                display:flex;
                align-items:center;
                padding:.1rem 0;
                span{
                    display:block;
                    margin-right:.12rem;
                    color:#9E9E9E;
                    font-size:.28rem;
                }
                p{
                    color:#22AC39;
                    margin-left:.12rem;
                }
            }
        }
    }
}
</style>
