import Vue from 'vue'
import Router from 'vue-router'
// 登陆--------------------
import login from '@/components/login'
import loginIndex from '@/components/login/child/login'
import loginPhone from '@/components/login/child/phone'
import loginSignIn from '@/components/login/child/signIn'

import smart from '@/components/smart'
// 首页-------
import smartIndex from '@/components/smart/index'
import smartIndexDetails from '@/components/smart/index/index' //详情
import smartIndexDetail from '@/components/smart/index/child/detail' //---详情
import smartIndexDs from '@/components/smart/index/child/ds' //目录
import smartIndexEvalute from '@/components/smart/index/child/evaluate' //评价

// 学校------
import smartSchool from '@/components/smart/school'
import smartSchoolDetails from '@/components/smart/school/index' //详情
import smartSchoolDetail from '@/components/smart/school/child/detail' //---详情
import smartSchoolDs from '@/components/smart/school/child/ds' //目录
import smartSchoolEvalute from '@/components/smart/school/child/evaluate' //评论
import smartSchoolCritic from '@/components/smart/school/child/critic' //评论详情
// 课程------
import smartCourse from '@/components/smart/course'
import smartCourseINdex from '@/components/smart/course/index'
import smartCourseInfo from '@/components/smart/course/info'
import smartCourseDay from '@/components/smart/course/day'
//我的-------
import smartMy from '@/components/smart/my'
import smartMyIndex from '@/components/smart/my/index'
import smartMyInfo from '@/components/smart/my/info'
import smartMyCollect from '@/components/smart/my/collect'
// 收藏
import smartMyCollectCurriculum from '@/components/smart/my/collect/curriculum'
import smartMyCollectTeacher from '@/components/smart/my/collect/teacher'
import smartMyCollectSchool from '@/components/smart/my/collect/school'
// 订单
import smartMyOrder from '@/components/smart/my/order'
import smartMyOrderPayment from '@/components/smart/my/order/payment'
import smartMyOrderEvaluate from '@/components/smart/my/order/evaluate'
import smartMyOrderAffirm from '@/components/smart/my/order/affirm'
import smartMyOrderOver from '@/components/smart/my/order/over'

import smartMyCall from '@/components/smart/my/call'
import smartMySet from '@/components/smart/my/set'
// 设置
import smartMySetUser from '@/components/smart/my/set/user'
import smartMySetPass from '@/components/smart/my/set/pass'
// 动态----------------
import smartDynamic from '@/components/smart/dynamic'
import smartDynamicEditor from '@/components/smart/dynamic/editor'
import smartDynamicSign from '@/components/smart/dynamic/sign'
import smartDynamicTeacherDetail from '@/components/smart/dynamic/teacher-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',redirect:'login'
    },
    {
      path: '/smart',
      component: smart,
      children:[
        {
          path:'/',redirect:'index'
        },
        {
          path:'index',
          name:'index',
          component:smartIndex
        },
        {
          path:'school',
          component:smartSchool
        },
        {
          path:'course',
          component:smartCourse,
          children:[
            { path:'/',redirect:'index' },
            { path:'index',
              name:'course',
              component:smartCourseINdex},
            { path:'info',component:smartCourseInfo}
          ]
        },
        // 我的
        { path:'my',
          component:smartMy,
          children:[
            { path:'/' ,redirect:'index'},
            { path:'index' ,
              name:'my',
              component:smartMyIndex},
            { path:'info' ,component:smartMyInfo},
            { path:'collect' ,
              component:smartMyCollect,
              children:[
                { path:'/' ,redirect:'curriculum'},
                { path:'curriculum' ,component:smartMyCollectCurriculum},
                { path:'teacher' ,component:smartMyCollectTeacher},
                { path:'school' ,component:smartMyCollectSchool},
              ]
            },
            
            { path:'order' ,
              component:smartMyOrder,
              children:[
                { path:'/',redirect:'payment' },
                { path:'payment',component:smartMyOrderPayment },
                { path:'evaluate',component:smartMyOrderEvaluate },
                { path:'affirm',component:smartMyOrderAffirm },
                { path:'over',component:smartMyOrderOver }
              ]
            },
            { path:'call' ,component:smartMyCall},
            { path:'set' ,component:smartMySet },
            { path:'user',component:smartMySetUser},
            { path:'pass',component:smartMySetPass}
          ]
        },
        // 首页详情
        { path:'details',component:smartIndexDetails ,
          children:[
            {
              path:'/',redirect:'detail'
            },
            {
              path:'detail',component:smartIndexDetail
            },
            {
              path:'ds',component:smartIndexDs
            },
            {
              path:'evaluate',component:smartIndexEvalute
            },
          ]  
        },
        // 学校详情
        { path:'schoolDetails',component:smartSchoolDetails ,
          children:[
            {
              path:'/',redirect:'detail'
            },
            {
              path:'detail',
              name:'school',
              component:smartSchoolDetail
            },
            {
              path:'ds',component:smartSchoolDs
            },
            {
              path:'evaluate',component:smartSchoolEvalute
            },
            
          ]  
        },
        // 课程日历
        { path:'courseDay',component:smartCourseDay},
        // 学校评价
        { path:'schoolCritic',component:smartSchoolCritic },

        {
          path:'smartDynamic',
          name:'smartDynamic',
          component:smartDynamic},
        { path:'smartDynamicEditor',component:smartDynamicEditor},
        // 教师端----签到   --smart/smartDynamicSign
        { path:'smartDynamicSign',component:smartDynamicSign},
        // ----老师详情   --/smart/smartDynamicTeacherDetail
        { path:'smartDynamicTeacherDetail',component:smartDynamicTeacherDetail}
      ]
    },
    // 登陆
    {
      path:'/login',
      component:login,
      children:[
        { path:'/',redirect:'index'},
        { path:'index',component:loginIndex },
        { path:'phone',component:loginPhone },
        { path:'sign',component:loginSignIn },
      ]
    },
    {
      path: '**',   // 错误路由
      redirect: '/smart'   
    }
  ]
  // ,
  // mode : 'history'
})
