<template>
<div>
    <header>
        <div>
            <h5>{{title}}</h5>
            <span>
                成立于2015-01-15
            </span>
            <div>
                <img src="@/assets/icon/mian-rsicon.png" alt="">
                <span>157810</span>
            </div>
        </div>
        <div>
            <span>{{value}}分</span>
            <van-rate
                color='#4DBF68'
                :size="16"
                readonly
                v-model="value"
                allow-half
                void-icon="star"
                void-color="#eee"
                />
                <img class='sc' src="@/assets/icon/xxxq-sc.png" alt="">
        </div>
    </header>
    <main>
        <h5 class='title'>学校介绍</h5>
        <p class='main-item' v-html='cont'>
            这里是学校介绍，师资力量、开设课程、开创心路历程等等。这里是学校介绍，师资力量、开设课程、开创心路历程等等。这里是学校介绍，师资力量、开设课程、开创心路历程等等。这里是学校介绍，师资力量、开设课程、开创心路历程等等。这里是学校介绍，师资力量、开设课程、开创心路历程等等。这里是学校介绍，师资力量、开设课程、开创心路历程等等。这里是学校介绍，师资力量、开设课程、开创心路历程等等。
        </p>
    </main>
    <main>
        <h5 class='title'>老师介绍</h5>
        <ul class='list'>
            <li class='item-list' v-for="(item,i) in list" :key='i'>
                <img :src="item.img" alt="">
                <div>
                    <p>{{item.name}}</p>
                    <span>
                        {{item.sub}}
                    </span>
                </div>
            </li>
            <li class='item-end' @click='handleClick'>
                <img :src="action ? isTrue : isFalse" alt="">
            </li>
        </ul>
    </main>

</div>
</template>
<script>
import isFalse from '@/assets/icon/kcjs-sqjt.png'
import isTrue from '@/assets/icon/kcjs-zkjt.png'
export default {
    data() {
        return {
            isFalse,
            isTrue,
            action : false,
            ser : 3,
            value:2.5,
            title:'',
            cont:'',
            t : require('@/assets/icon/mian-rsicon.png'),
            list:[
                {
                    name : 'Arthur M',
                    sub : '英国',
                    img : require('@/assets/img/Arthur1.png')
                },
                {
                    name : 'Michelle S',
                    sub : '美国',
                    img : require('@/assets/img/Michelle.png')
                },
                {
                    name : 'Anthony C',
                    sub : '美国',
                    img : require('@/assets/img/Anthony-C_4.png')
                },
                {
                    name : 'Tina S',
                    sub : '美国',
                    img : require('@/assets/img/Tina.png')
                }
                
            ],
            queryList:[
                {
                    test:'晨师教育',
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
                }]
        }

    },
    methods:{
        handleClick(){
            if(!this.action){
                this.list.push({
                    name : 'Mike M',
                    sub : '美国',
                    img : require('@/assets/img/Mike.png')
                },
                {
                    name : 'Maxwell',
                    sub : '美国',
                    img : require('@/assets/img/Maxwell_1.png')
                })
                this.action = true;
            }else{
                this.list.splice(-2,2);
                this.action = false;
            }
        }
    },
    created(){

        var query = this.queryList[0];
        console.log(query);
        this.title = query.test;
        this.cont = query.cont;
        this.value = Number(query.value);
        this.t = query.t;
        console.log(this.t)
    }
}
</script>
<style lang="less" scoped>
header{
    font-size:.32rem;
    color:#666666;
    background-color:#fff;
    padding:.26rem;
    padding-right:0;
    margin-top:.06rem;
    display:flex;
    justify-content: space-between;
    position: relative;
    div:first-child{
        width:65%;
        box-sizing: border-box;
        color:#939292;
        h5{
            color:#666;
            font-size:.34rem;
            font-weight:600;
        }
        >span{
            font-size:.28rem;
        }
        div{
            display:flex;
            margin-top:.3rem;
            img{
                width:.5rem;
                height:.32rem;
            }
            span{
                color:#939292;
            }
        }
    }
    div:last-child{
        width:35%;
        text-align:center;
        span{
            color:#009944;
        }
        .sc{
            position:absolute;
            right:0;
            bottom:.26rem;
            width:1.7rem;
            height:.6rem;
        }
    }
}
main{
    box-sizing: border-box;
    padding:.2rem;
    margin-top:.12rem;
    background-color:#fff;
    font-size:.32rem;
    color:#666666;
    .title{
        color:#009944;
        font-weight: bold;
        font-size:.36rem;
        display:flex;
        align-items:center;
    }
    .title::before{
        content:'';
        display: inline-block;
        width:.12rem;
        height:.42rem;
        background-color:#009944;
        border-radius:50rem 50rem;
        margin-right:.2rem;
    }
    .list{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;
        padding-bottom:.6rem;
        position:relative;
        .item-list{
            width:48%;
            display:flex;
            margin-top:.2rem;
            align-items: center;
            span{
                font-size:.24rem;
                color:#939292;
                max-height:.5rem;
                overflow: hidden;
            }
            img{
                width:1.2rem;
                height:1.2rem;
                border-radius:50%;
            }
        }
        .item-end{
            position:absolute;
            bottom:.3rem;left:50%;
            width:.36rem;
            height:.16rem;
            margin-left:-.18rem;
            img{
                width:100%;
                height:100%;
            }
        }
    }
    
}
</style>
