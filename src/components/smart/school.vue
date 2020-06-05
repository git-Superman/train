<template>
<div>
    <nav-input test='搜索您想了解的学校'></nav-input>
    <nav-toop class='toop' @value="handleClick"></nav-toop>
    <main>
        <ul>
            <li @click="handleClickPush(item)" v-for='(item,i) in list' :key='i' class='list-item'>
                <div class='a'>
                    <img class='a' :src="item.img" alt="">
                </div>
                <div class='b'>
                    <h5>{{item.test}}</h5>
                    <div class='grade'>
                        <p>综合类</p>
                        <van-rate
                        color='#4DBF68'
                        :size="18"
                        readonly
                        v-model="item.value"
                        allow-half
                        void-icon="star"
                        void-color="#eee"
                        />
                    </div>
                    <div class='subject'>
                        <p>小学数学</p>
                        <p>小学英语</p>
                        <p>小学奥数</p>
                        <p>小学语文</p>
                    </div>
                </div>
                <img class='c' src="@/assets/icon/wd-jrjt.png" alt="">
            </li>
        </ul>
    </main>
</div>
</template>
<script>
import navInput from '@/components/global/nav-input'
import navToop from '@/components/global/nav-toop'
import isTrue from '@/assets/icon/school-star-yx.png'
import isFalse from '@/assets/icon/school-star-wx.png'
export default {
    data() {
        return {
            isTrue,
            isFalse,
            gradeIcon : [
                {
                    action : true
                },
                {
                    action : true
                },
                {
                    action : true
                },
                {
                    action : true
                },
                {
                    action : false
                },
            ],
            list:[
                {
                    test:'晨师教育tor1',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study1_1d094cd3.png'),
                    value:4,
                    cont:'“一日之计在于晨，百年大计在于师”。晨师教育集团于2012年12月成立。晨师教育由一线名师发起，以“做*有良心的教育”为宗旨，致力于中小学文化课课外辅导，既开设精品小班，又有个性化1对1教学。注重学生学习能力的培养，有众多一线名师及教育专家加盟，拥有自己独立的教材体系与教研体系，教育实力雄厚。晨师教育凭借着的师资队伍，专业的服务团队，先进的教育理念，深受家长欢迎，现已在湖北、江苏、安徽、河南等地开设多家分校，力求打造中国教育。晨师教育教学管理。在管理上分为教务部，咨询部，市场部，学管部四大部门，四大部门职务各有不同，将整个校区运作地井井有条。晨师*大的优势在于教学模式，学校采用“启发式”、“问题式”、“范例式”三大辅导模式相结合的个性教学模式，分层次教学，不同层度的学生采用不同的教学模式。对于同一个学生晨师学管部也会跟踪服务，根据学生平时上课听课情况，作业完成情况，阶段检测成绩来给孩子合理调配班级，量身定制辅导方案。'
                },
                {
                    test:'晨师教育tor2',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study2_31caa245.png'),
                    value:3.5,
                    cont:'晨师定位个性化大众市场是对精锐教育个性化的有力补充。未来将携手精锐教育完成对全国一，二，三线城市的全面布局。同时加大一对一、一对多特色教育辅导产品的研发。'
                },
                {
                    test:'晨师教育tor3',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study3_b7447b62.png'),
                    value:4.5,
                    cont:'晨师国际少儿英语，从2008年开始专注于2--12岁英语学习，2013年针对亚洲地区语言学习特征，研发了BF---ET课程学习体系，坚持全程全外教授课，采用情景——陶冶式教学方法，还原语言学习的本质，让孩子在真实的场景里大胆使用英语。'
                },
                {
                    test:'晨师教育tor4',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study4_a086ce89.png'),
                    value:5,
                    cont:'晨师教育是一所针对美术高考的合法培训机构，自成立以来至今已经发展成为河南较具影响力的一所高考培训机构。我们以教学为核心，吸收当下优秀的考前培训经验，已组建出一批优秀的教学团队。让学生不用出省就可以享受到优秀的专业课指导。'
                },
                {
                    test:'晨师教育tor5',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study5_638f3ef0.png'),
                    value:3.5,
                    cont:'郑州一中超级记忆实验班合作伙伴 省实验中学超级记忆实验班合作伙伴 创奇记忆 42小时让孩子变成“记忆王” 寒假班 全省限额招生 免费体验 测试录取'
                }],
            lists:[
                {
                    test:'晨师教育tor1',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study1_1d094cd3.png'),
                    value:4,
                    cont:'“一日之计在于晨，百年大计在于师”。晨师教育集团于2012年12月成立。晨师教育由一线名师发起，以“做*有良心的教育”为宗旨，致力于中小学文化课课外辅导，既开设精品小班，又有个性化1对1教学。注重学生学习能力的培养，有众多一线名师及教育专家加盟，拥有自己独立的教材体系与教研体系，教育实力雄厚。晨师教育凭借着的师资队伍，专业的服务团队，先进的教育理念，深受家长欢迎，现已在湖北、江苏、安徽、河南等地开设多家分校，力求打造中国教育。晨师教育教学管理。在管理上分为教务部，咨询部，市场部，学管部四大部门，四大部门职务各有不同，将整个校区运作地井井有条。晨师*大的优势在于教学模式，学校采用“启发式”、“问题式”、“范例式”三大辅导模式相结合的个性教学模式，分层次教学，不同层度的学生采用不同的教学模式。对于同一个学生晨师学管部也会跟踪服务，根据学生平时上课听课情况，作业完成情况，阶段检测成绩来给孩子合理调配班级，量身定制辅导方案。'
                },
                {
                    test:'晨师教育tor2',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study2_31caa245.png'),
                    value:3.5,
                    cont:'晨师定位个性化大众市场是对精锐教育个性化的有力补充。未来将携手精锐教育完成对全国一，二，三线城市的全面布局。同时加大一对一、一对多特色教育辅导产品的研发。'
                },
                {
                    test:'晨师教育tor3',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study3_b7447b62.png'),
                    value:4.5,
                    cont:'晨师国际少儿英语，从2008年开始专注于2--12岁英语学习，2013年针对亚洲地区语言学习特征，研发了BF---ET课程学习体系，坚持全程全外教授课，采用情景——陶冶式教学方法，还原语言学习的本质，让孩子在真实的场景里大胆使用英语。'
                },
                {
                    test:'晨师教育tor4',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study4_a086ce89.png'),
                    value:5,
                    cont:'晨师教育是一所针对美术高考的合法培训机构，自成立以来至今已经发展成为河南较具影响力的一所高考培训机构。我们以教学为核心，吸收当下优秀的考前培训经验，已组建出一批优秀的教学团队。让学生不用出省就可以享受到优秀的专业课指导。'
                },
                {
                    test:'晨师教育tor5',
                    img:require('@/assets/img/logo.png'),
                    t : require('@/assets/img/study5_638f3ef0.png'),
                    value:3.5,
                    cont:'郑州一中超级记忆实验班合作伙伴 省实验中学超级记忆实验班合作伙伴 创奇记忆 42小时让孩子变成“记忆王” 寒假班 全省限额招生 免费体验 测试录取'
                }],
        }  
    },
    methods:{
        handleClickPush(e){
            this.$router.push({path:'/smart/schoolDetails/detail',query:e});
        },
        handleClick(va){
            var val = va;
            switch(val){
                case 0:
                    this.list = this.lists
                break;
                case 1:
                    this.list=[
                        {
                            test:'晨师教育tor3',
                            img:require('@/assets/img/logo.png'),
                            t : require('@/assets/img/study3_b7447b62.png'),
                            value:4.5,
                            cont:'晨师国际少儿英语，从2008年开始专注于2--12岁英语学习，2013年针对亚洲地区语言学习特征，研发了BF---ET课程学习体系，坚持全程全外教授课，采用情景——陶冶式教学方法，还原语言学习的本质，让孩子在真实的场景里大胆使用英语。'
                        },
                        {
                            test:'晨师教育tor4',
                            img:require('@/assets/img/logo.png'),
                            t : require('@/assets/img/study4_a086ce89.png'),
                            value:5,
                            cont:'晨师教育是一所针对美术高考的合法培训机构，自成立以来至今已经发展成为河南较具影响力的一所高考培训机构。我们以教学为核心，吸收当下优秀的考前培训经验，已组建出一批优秀的教学团队。让学生不用出省就可以享受到优秀的专业课指导。'
                        }
                    ]
                break;
                case 2:
                    this.list=[
                        {
                            test:'晨师教育tor2',
                            img:require('@/assets/img/logo.png'),
                            t : require('@/assets/img/study2_31caa245.png'),
                            value:3.5,
                            cont:'晨师定位个性化大众市场是对精锐教育个性化的有力补充。未来将携手精锐教育完成对全国一，二，三线城市的全面布局。同时加大一对一、一对多特色教育辅导产品的研发。'
                        },
                        {
                            test:'晨师教育tor3',
                            img:require('@/assets/img/logo.png'),
                            t : require('@/assets/img/study3_b7447b62.png'),
                            value:4.5,
                            cont:'晨师国际少儿英语，从2008年开始专注于2--12岁英语学习，2013年针对亚洲地区语言学习特征，研发了BF---ET课程学习体系，坚持全程全外教授课，采用情景——陶冶式教学方法，还原语言学习的本质，让孩子在真实的场景里大胆使用英语。'
                        },
                        {
                            test:'晨师教育tor4',
                            img:require('@/assets/img/logo.png'),
                            t : require('@/assets/img/study4_a086ce89.png'),
                            value:5,
                            cont:'晨师教育是一所针对美术高考的合法培训机构，自成立以来至今已经发展成为河南较具影响力的一所高考培训机构。我们以教学为核心，吸收当下优秀的考前培训经验，已组建出一批优秀的教学团队。让学生不用出省就可以享受到优秀的专业课指导。'
                        },
                        {
                            test:'晨师教育tor5',
                            img:require('@/assets/img/logo.png'),
                            t : require('@/assets/img/study3_b7447b62.png'),
                            value:4.5,
                            cont:'晨师国际少儿英语，从2008年开始专注于2--12岁英语学习，2013年针对亚洲地区语言学习特征，研发了BF---ET课程学习体系，坚持全程全外教授课，采用情景——陶冶式教学方法，还原语言学习的本质，让孩子在真实的场景里大胆使用英语。'
                        },
                        {
                            test:'晨师教育tor4',
                            img:require('@/assets/img/logo.png'),
                            t : require('@/assets/img/study4_a086ce89.png'),
                            value:5,
                            cont:'晨师教育是一所针对美术高考的合法培训机构，自成立以来至今已经发展成为河南较具影响力的一所高考培训机构。我们以教学为核心，吸收当下优秀的考前培训经验，已组建出一批优秀的教学团队。让学生不用出省就可以享受到优秀的专业课指导。'
                        }
                    ]
                break;
                case 3:
                    this.list=[
                        {
                            test:'晨师教育tor6',
                            img:require('@/assets/img/logo.png'),
                            t : require('@/assets/img/study4_a086ce89.png'),
                            value:5,
                            cont:'晨师教育是一所针对美术高考的合法培训机构，自成立以来至今已经发展成为河南较具影响力的一所高考培训机构。我们以教学为核心，吸收当下优秀的考前培训经验，已组建出一批优秀的教学团队。让学生不用出省就可以享受到优秀的专业课指导。'
                        }
                    ]
                break;
            }
        }
    },
    components:{
        navInput,
        navToop
    }
}
</script>
<style lang="less" scoped>
.toop{
    margin-top:.08rem;
}
main{
    font-size:.32rem;
    color:#666;
    box-sizing: border-box;
    padding:.12rem;
    .list-item{
        background-color:#fff;
        border-radius:.2rem;
        overflow: hidden;
        display:flex;
        align-items:center;
        margin-top:.08rem;
        width:100%;
        height:2.2rem;
        div.a{
            width:38%;height:100%;
            img{
                width:100%;height:100%;
            }
        }
        div.b{
            width:57%;
            box-sizing: border-box;
            padding:.16rem 0 .16rem .2rem;
            font-size:.28rem;
            h5{
                font-size:.32rem;
                font-weight:600;
            }
            .grade{
                display:flex;
                color:#9E9E9E;
                margin:.12rem;
                align-items:center;
                p{
                    margin-right:.12rem;
                }
            }
            .subject{
                display:flex;
                flex-wrap: wrap;
                margin-top:.12rem;
                p{
                    width:50%;
                    display:flex;
                    align-items:center;
                }
                p::before{
                    content:'';
                    display:inline-block;
                    width:.08rem;height:.08rem;
                    border-radius:50%;
                    background-color:#666;
                    margin-right:.12rem;
                }
            }
        }
        img.c{
            width:.2rem;
        }
    }
}
</style>