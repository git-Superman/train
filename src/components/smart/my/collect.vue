<template>
<div>
    <nav-bar :test="test"></nav-bar>
    <nav-details class='details' :list='list' @value='handleClickPush'></nav-details>
    <router-view/>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
import navDetails from '@/components/global/nav-details'
export default {
    data() {
        return {
            test : '收藏',
            list : ['课程','老师','学校']
        }
    },
    methods:{
        handleClickPush(val){
            switch(val){
                case 0:
                    this.$router.push('/smart/my/collect/curriculum');
                break;
                case 1:
                    this.$router.push('/smart/my/collect/teacher');
                break;
                case 2:
                    this.$router.push('/smart/my/collect/school');
                break;
            }
        }
    },
    components:{
        navBar,
        navDetails
    }
}
</script>
<style lang="less" scoped>
    .details{
        margin:.08rem 0;
    }
</style>