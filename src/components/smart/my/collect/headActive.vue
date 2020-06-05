<template>
<div>
    <header @click='handleClick'>
        <img src="@/assets/icon/active.png" alt="">
    </header>
</div>
</template>
<script>
export default {
    data() {
        return {
            value : true
        }
    },
    methods:{
        handleClick(){
            this.value = !this.value
            this.$emit('value',this.value)
        }
    }
}
</script>
<style lang="less" scoped>
header{
    position: fixed;
    top:0;right:0;
    z-index:99999;
    img{
        padding:.2rem;
        width:.64rem;height:.64rem;
    }
}
</style>