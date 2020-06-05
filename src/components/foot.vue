<template>
<div class="smart">
    <footer>
        <img v-for="(item,i) in icon" :key='i' :src="i == inx ? item.istrue : item.isfalse" @click="handleClick(i)" alt="">
    </footer>
</div>
</template>
<script>
import icon_1 from '@/assets/icon/main-wx.png'
import icon_2 from '@/assets/icon/school-wx.png'
import icon_3 from '@/assets/icon/kcb-wx.png'
import icon_4 from '@/assets/icon/wd-wx.png'
import icon_5 from '@/assets/icon/main-yx.png'
import icon_6 from '@/assets/icon/school-yx.png'
import icon_7 from '@/assets/icon/kc-yx.png'
import icon_8 from '@/assets/icon/wd-xz.png'
// 教师动态
import icon_9 from '@/assets/icon/dt-yx.png'
import icon_10 from '@/assets/icon/dt-wx.png'
export default {
  data () {
    return {
      icon:[
        {
          istrue:icon_5,
          isfalse:icon_1
        },
        {
          istrue:icon_6,
          isfalse:icon_2
        },
        {
          istrue:icon_7,
          isfalse:icon_3
        },
        {
          istrue:icon_9,
          isfalse:icon_10
        },
        {
          istrue:icon_8,
          isfalse:icon_4
        },
      ],
      inx : 0,
      list :[
        {
          path:'/smart',
          lable : '首页'
        },
        {
          path:'/smart/school',
          lable : '学校'
        },
        {
          path:'/smart/course',
          lable : '课程'
        },
        {
          path:'/smart/smartDynamic',
          lable : '动态'
        },
        {
          path:'/smart/my',
          lable : '我的'
        }
      ]
    }
  },
  mounted(){
    if(this.$route.name == 'index'){
      this.inx = 0;
    }else 
    if(this.$route.name == 'school'){
      this.inx = 1;
    }else
    if(this.$route.name == 'course'){
      this.inx = 2;
    }else
    if(this.$route.name == 'smartDynamic'){
      this.inx = 3;
    }else
    if(this.$route.name == 'my'){
      this.inx = 4;
    }
  },
  created(){
  },
  methods:{
    handleClick(e){
      let that = e;
      this.inx = that;
      switch(that){
        case 0:
          this.$router.push('/smart');
        break;
        case 1:
          // this.$router.push('/smart/school');
          this.$router.push('/smart/schoolDetails');
        break;
        case 2:
          this.$router.push('/smart/course');
        break;
        case 3:
          this.$router.push('/smart/smartDynamic');
        break;
        case 4:
          this.$router.push('/smart/my');
        break;
      }
    }
  }
}
</script>

<style lang='less' scoped>
.smart{
  position:relative;
  padding-bottom:1.5rem;
  footer{
    width:100%;
    position:fixed;
    bottom:0;
    z-index:2;
    display:flex;
    justify-content: space-around;
    background-color:#fff;
    img{
      width:.58rem;
      height:.8rem;
      padding:.2rem 0;
    }
  }
}
</style>