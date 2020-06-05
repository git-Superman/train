<template>
<div>
    <nav-bar :test="test"></nav-bar>
    <nav-details class='details' @value='handleClickPush'></nav-details>
    <router-view/>
</div>
</template>
<script>
import navBar from '@/components/global/navBar'
import navDetails from './order/nav-details'
export default {
    data() {
        return {
            test : '订单'
        }
    },
    methods:{
        handleClickPush(val){
            switch(val){
                case 0:
                    this.$router.push('/smart/my/order');
                break;
                case 1:
                    this.$router.push('/smart/my/order/affirm');
                break;
                case 2:
                    this.$router.push('/smart/my/order/evaluate');
                break;
                case 3:
                    this.$router.push('/smart/my/order/over');
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