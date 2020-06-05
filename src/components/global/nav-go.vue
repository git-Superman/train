<template>
<div>
    <div class='fixed' @click='handleClickPush'>
        <img src="@/assets/icon/kcjs-return.png" alt="">
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            p : ''
        }
    },
    watch:{
        $route(form,go){
            // console.log(form,go);
            this.p = form.path;
        }
    },
    methods:{
        handleClickPush(){
            if(this.p == '/smart/details/ds' || this.p == '/smart/details/evaluate' || this.p == '/smart/details/detail'){
                this.$router.push('/smart/course/index');
            }else{
                this.$router.go(-1);
            }
        }
    }
}
</script>
<style lang="less" scoped>
.fixed{
    height:.8rem;
    width:100%;
    position: fixed;
    top:0;
    background-color:rgba(0,0,0,.6);
    img{
        width: 0.28rem;
        height: 0.42rem;
        position: absolute;
        left: 0.2rem;
        top: 50%;
        margin-top: -0.21rem;
    }
}
</style>