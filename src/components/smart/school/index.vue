<template>
<div>
    <nav-go></nav-go>
    <div class='banner'>
        <img src="@/assets/img/features0.jpg" alt="">
    </div>
    <nav-details @value='handleInx'></nav-details>
    <router-view/>
 
</div>
</template>
<script>
import navGo from '@/components/global/nav-go'
import navDetails from '@/components/global/nav-details'
import isTrue from '@/assets/icon/kcjs-yscicon.png'
import isFalse from '@/assets/icon/kcjs-scicon.png'
export default {
    data() {
        return {
            isTrue,
            isFalse,
            action : false
        }
    },
    methods:{
        handleInx(val){
            switch(val){
                case 0:
                    this.$router.push('/smart/schoolDetails/detail');
                break;
                case 1:
                    this.$router.push('/smart/schoolDetails/ds');
                break;
                case 2:
                    this.$router.push('/smart/schoolDetails/evaluate');
                break;
            }
        },
    },
    components:{
        navGo,
        navDetails
    }
}
</script>
<style lang="less" scoped>
.banner{
    img{
        width:100%;
        // height:6rem;
    }
}
footer{
    position:fixed;
    bottom:0;width:100%;
    z-index:15;
    display:flex;
    background-color:#fff;
    div{
        height: 1.5rem;
        width:2.5rem;
        text-align:center;
        display:flex;
        align-items:center;
        img{
            display:block;
            margin:0 auto;
            width:.6rem;
            transition:all .5s;
        }
    }
    button{
        width:100%;
        color:#fff;
        background-color:#34C47A;
        border:0;
        font-size:.32rem;
    }
}
</style>