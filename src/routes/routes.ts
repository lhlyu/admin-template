import type { RouteRecordRaw } from 'vue-router'

// 布局
import IndexLayout from '../layout/index/index.vue'
import BlankLayout from '../layout/blank/index.vue'

// 页面
const LoginView = () => import('../views/login/index.vue')
const IndexView = () => import('../views/index.vue')



export const menuRoutes: RouteRecordRaw[] = [
    {
        name: 'dashboard',
        path: '/',
        component: IndexView,
        meta: {
            title: '仪表板'
        }
    },
    {
        name: 'user-manage',
        path: '',
        component: BlankLayout,
        meta: {
            title: '用户管理'
        },
        children: [
            {
                name: 'user',
                path: '/user',
                component: IndexView,
                meta: {
                    title: '用户列表'
                }
            }
        ]
    },
    {
        name: 'content-manage',
        path: '',
        component: BlankLayout,
        meta: {
            title: '内容管理'
        },
        children: [
            {
                name: 'content-image',
                path: '/content-image',
                component: IndexView,
                meta: {
                    title: '用户图片记录'
                }
            },
            {
                name: 'content-wording',
                path: '/content-wording',
                component: IndexView,
                meta: {
                    title: '用户文字记录'
                }
            }
        ]
    },
    {
        name: 'backend',
        path: '',
        component: BlankLayout,
        meta: {
            title: '后端'
        },
        children: [
            {
                name: 'errcode',
                path: '/errcode',
                component: IndexView,
                meta: {
                    title: '错误码'
                }
            },
            {
                name: 'monitor',
                path: '/monitor',
                component: IndexView,
                meta: {
                    title: '监控'
                }
            }
        ]
    },
    {
        name: 'operator-manage',
        path: '',
        component: BlankLayout,
        meta: {
            title: '运营'
        },
        children: [
            {
                name: 'resource-upload',
                path: '/resource-upload',
                component: IndexView,
                meta: {
                    title: '资源上传'
                }
            },
            {
                name: 'message-push',
                path: '/message-push',
                component: IndexView,
                meta: {
                    title: '推送消息'
                }
            },
            {
                name: 'acm',
                path: '/acm',
                component: IndexView,
                meta: {
                    title: '配置中心'
                }
            }
        ]
    },
    {
        name: 'setting',
        path: '/setting',
        component: IndexView,
        meta: {
            title: '个人设置'
        }
    },
    {
        name: 'account',
        path: '/account',
        component: IndexView,
        meta: {
            title: '账号管理'
        }
    }
]

export const routes: RouteRecordRaw[] = [
    {
        name: 'login',
        path: '/login',
        component: LoginView,
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'home',
        path: '/',
        component: IndexLayout,
        children: menuRoutes
    }
]