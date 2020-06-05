<template>
<div>
    <nav-go></nav-go>
    <div class='banner'>
        <img src="@/assets/img/features0.jpg" alt="">
    </div>
    <nav-details @value='handleInx'></nav-details>
    <router-view/>
    <footer>
        <div>
            <img :src="action ? isTrue : isFalse" @click='action = !action' alt="">
        </div>
        <button>立即报名</button>
    </footer>
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
                    this.$router.push('/smart/details/detail');
                break;
                case 1:
                    this.$router.push('/smart/details/ds');
                break;
                case 2:
                    this.$router.push('/smart/details/evaluate');
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
        // height:5rem;
    }
}
footer{
    position:fixed;
    bottom:0;width:100%;
    z-index:15;
    display:flex;
    background-color:#FFF;
    div{
        height: 1.2rem;
        width:2rem;
        text-align:center;
        display:flex;
        align-items:center;
        flex-shrink: 0;
        img{
            display:block;
            margin:0 auto;
            width:.5rem;
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