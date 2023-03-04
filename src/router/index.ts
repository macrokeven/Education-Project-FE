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
        path: "/HomePage",
        name: "HomePage",
        component: () =>
            import(/* webpackChunkName: "HomePage" */ "../pages/HomePage.vue"),
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
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router