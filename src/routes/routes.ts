import type { RouteRecordRaw } from 'vue-router'
import { formatFlatteningRoutes } from './util'

// 布局
const IndexLayout = () => import('../layout/index.vue')
const BlankLayout = () => import('../layout/blank.vue')
// 页面
const LoginView = () => import('../views/login/index.vue')

const DashboardView = () => import('../views/dashboard/index.vue')
const UserView = () => import('../views/setting/user/index.vue')
const SiteView = () => import('../views/setting/site/index.vue')

/**
 * Note: 会根据menuRoutes自动生成左侧的菜单列表
 * 1.会取menuRoutes列表中的第一个元素作为首页
 */
export const menuRoutes: RouteRecordRaw[] = [
    {
        name: 'dashboard',
        path: '/dashboard',
        component: DashboardView,
        meta: {
            title: '仪表板',
            icon: 'dashboard'
        }
    },
    {
        name: 'setting',
        path: '/setting',
        redirect: '/setting/user',
        component: BlankLayout,
        meta: {
            title: '设置',
            icon: 'setting'
        },
        children: [
            {
                name: 'user',
                path: 'user',
                component: UserView,
                meta: {
                    title: '用户设置',
                    icon: 'user'
                }
            },
            {
                name: 'site',
                path: 'site',
                component: BlankLayout,
                meta: {
                    title: '网站设置',
                    icon: 'setting'
                },
                children: [
                    {
                        name: 'acm',
                        path: 'acm',
                        component: BlankLayout,
                        meta: {
                            title: '配置中心',
                            icon: 'acm'
                        },
                        children: [
                            {
                                name: 'site2',
                                path: 'site2',
                                component: DashboardView,
                                meta: {
                                    title: '网站设置2',
                                    icon: 'setting'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export const routes: RouteRecordRaw[] = [
    {
        name: 'login',
        path: '/',
        component: LoginView,
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'home',
        path: '/',
        redirect: 'dashboard',
        component: IndexLayout,
        children: formatFlatteningRoutes(menuRoutes)
    }
]
