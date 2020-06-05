<template>
<div class='curse'>
        <div class="course">
                <header>
                        <span>课程</span>
                        <img @click='handleClickPush(0)' src="@/assets/icon/xhr-sj.png" alt="">
                </header>
                <nav>
                        <p :class='active ? "action" : ""' @click='handleClickPush(1)'>课程表</p>
                        <p :class='!active ? "action" : ""' @click='handleClickPush(2)'>我的课程</p>
                </nav>
        </div>
        <router-view></router-view>
</div>
</template>
<script>
export default {
        data() {
                return {
                        active: true
                }
        },
        methods:{
                handleClickPush(i){
                        switch(i){
                                case 0:
                                        this.$router.push('/smart/courseDay')
                                break;
                                case 1:
                                        this.$router.push('/smart/course');
                                        this.active = true;
                                break;
                                case 2:
                                        this.$router.push('/smart/course/info')
                                        this.active = false;
                                break;
                        }
                }
        }
}
</script>
<style lang='less' scoped>
.curse{
        padding-top:2rem;
        .course{
                width:100%;
                position:fixed;
                top:0;
                z-index:2;
                background-color:#F1F1F1;
                header{
                        width:100%;
                        background-color:#fff;
                        text-align:center;
                        font-size:.32rem;
                        color:#666;
                        padding:.26rem;
                        img{
                                float:right;
                                margin-right:.5rem;
                                width:.42rem;
                                height:.42rem;
                        }
                }
                nav{
                        width:100%;
                        display:flex;
                        background-color:#fff;
                        margin:.06rem 0;
                        color:#666666;
                        p{
                                width:50%;
                                text-align:center;
                                padding:.3rem 0;
                                transition:all .1s;
                                border-bottom:.04rem solid transparent;
                        }
                        p.action{
                                color:#50A278;
                                border-color: #50A278;
                        }
                }
        }
}
</style>
