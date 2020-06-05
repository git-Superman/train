<template>
<div>
    <nav-bar :test="test"></nav-bar>
    <main>
        <ul>
            <li class='list-item' v-for='(item,inx) in list' :key='inx' @click="handleClickPush(inx)">
                <div>
                    <img :src="item.icon" alt="">
                    <p v-html="item.test"></p>
                </div>
                <img src="@/assets/icon/wd-jrjt.png" alt="">
            </li>
        </ul>
    </main>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
import icon1 from '@/assets/icon/wdsz-bdzhicon.png'
import icon2 from '@/assets/icon/wdsc-xgmmicon.png'
export default {
    data() {
        return {
            test : '设置',
            list : [
                {
                    icon : icon1,
                    test : '绑定账号'
                },
                {
                    icon : icon2,
                    test : '修改登录密码'
                },
            ]
        }
    },
    methods:{
        handleClickPush(i){
            switch(i){
                case 0:
                    this.$router.push('/smart/my/user');
                break;
                case 1:
                    this.$router.push('/smart/my/pass');
                break;
                default:
                break;
            }
        }
    },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
main{
    .list-item{
        display:flex;
        justify-content: space-between;
        background-color:#fff;
        box-sizing: border-box;
        padding:.26rem .2rem;
        margin-top:.06rem;
        align-items:center;
        // box-shadow: #666 1px 0 3px -1px;
        div{
            display:flex;
            align-items:center;
            color:#666;
            img{
                width:.42rem;
                height:.42rem;
                margin-right:.12rem;
            }
        }
        >img{
            width:.2rem;
            height:.32rem;
        }
    }
}
</style>