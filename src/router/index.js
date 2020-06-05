import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '我的信息', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/page',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'lock',
      roles: ['admin']
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user'),
        name: 'user',
        meta: { title: '帐号管理', roles: ['admin'] },
        children: [
          {
            path: 'edit/:id(\\d+)',
            component: () => import('@/views/system/components/user/edit'),
            name: 'userEdit',
            hidden: true,
            meta: { title: '用户编辑', roles: ['admin'] }
          }
        ]
      },
      {
        path: 'role',
        component: () => import('@/views/system/role'),
        name: 'role',
        meta: { title: '角色管理', roles: ['admin'] },
        children: [
          {
            path: 'edit/:id(\\d+)',
            component: () => import('@/views/system/components/role/edit'),
            name: 'roleEdit',
            hidden: true,
            meta: { title: '角色编辑', roles: ['admin'] }
          }
        ]
      },
      {
        path: 'right',
        component: () => import('@/views/system/right'),
        name: 'right',
        meta: { title: '权限管理', roles: ['admin'] },
        children: [
          {
            path: 'edit/:id(\\d+)',
            component: () => import('@/views/system/components/right/edit'),
            name: 'rightEdit',
            hidden: true,
            meta: { title: '权限编辑', roles: ['admin'] }
          }
        ]
      }
    ]
  },

  {
    path: '/analyse',
    component: Layout,
    redirect: '/analyse/index',
    name: 'system',
    meta: {
      title: '经营分析',
      icon: 'list',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/analyse/index'),
        name: 'index',
        meta: {
          title: '数据统计',
          roles: ['admin', 'editor']
        }
      }
    ]
  },
 
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
