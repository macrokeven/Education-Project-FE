import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import(/* webpackChunkName: "MainLayout" */ '../pages/Login.vue')
  },
  {
    redirect:"/HomePage",
    path:"/HomePage",
    name: 'MainLayout',
    component: () => import(/* webpackChunkName: "MainLayout" */ '../layouts/MainLayout.vue'),
    children:[
      {
        path: "/Home",
        name: "Home.vue",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/Home.vue"),
      },{
        path: "/WebSocketTest",
        name: "WebSocketTest",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/WebSocketTest.vue"),
      },
      {
        path: "/TableData",
        name: "TableData",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/TableData.vue"),
      },
      {
        path: "/ManageStudent",
        name: "学生管理",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/Student/ManageStudent.vue"),
      },
      {
        path: "/SimulateCourse",
        name: "模擬上課",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/Course/SimulateCourse.vue"),
      },
      {
        path: "/ManageCourse",
        name: "管理課程",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/Course/ManageCourse.vue"),
      },
      {
        path: "/CurrentCourseManage",
        name: "進行中的課程",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/Course/CurrentCourseManage.vue"),
      },
      {
        path: "/CurrentCourseDetail",
        name: "進行課程實況",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/Course/CurrentCourseDetail.vue"),
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router