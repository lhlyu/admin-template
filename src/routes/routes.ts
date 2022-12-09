import type { RouteRecordRaw } from 'vue-router'

// 图标
import { hicon } from '../components/Icon'

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
            title: '仪表板',
            icon: hicon('dashboard')
        }
    },
    {
        name: 'user-manage',
        path: '',
        component: BlankLayout,
        meta: {
            title: '用户管理',
            icon: hicon('user-manage')
        },
        children: [
            {
                name: 'user',
                path: '/user',
                component: IndexView,
                meta: {
                    title: '用户列表',
                    icon: hicon('user')
                }
            }
        ]
    },
    {
        name: 'content-manage',
        path: '',
        component: BlankLayout,
        meta: {
            title: '内容管理',
            icon: hicon('content-manage')
        },
        children: [
            {
                name: 'content-image',
                path: '/content-image',
                component: IndexView,
                meta: {
                    title: '用户图片记录',
                    icon: hicon('content-image')
                }
            },
            {
                name: 'content-wording',
                path: '/content-wording',
                component: IndexView,
                meta: {
                    title: '用户文字记录',
                    icon: hicon('content-wording')
                }
            }
        ]
    },
    {
        name: 'backend',
        path: '',
        component: BlankLayout,
        meta: {
            title: '后端',
            icon: hicon('backend')
        },
        children: [
            {
                name: 'errcode',
                path: '/errcode',
                component: IndexView,
                meta: {
                    title: '错误码',
                    icon: hicon('errcode')
                }
            },
            {
                name: 'monitor',
                path: '/monitor',
                component: IndexView,
                meta: {
                    title: '监控',
                    icon: hicon('monitor')
                }
            }
        ]
    },
    {
        name: 'operator-manage',
        path: '',
        component: BlankLayout,
        meta: {
            title: '运营',
            icon: hicon('operator-manage')
        },
        children: [
            {
                name: 'resource-upload',
                path: '/resource-upload',
                component: IndexView,
                meta: {
                    title: '资源上传',
                    icon: hicon('resource-upload')
                }
            },
            {
                name: 'message-push',
                path: '/message-push',
                component: IndexView,
                meta: {
                    title: '推送消息',
                    icon: hicon('message-push')
                }
            },
            {
                name: 'acm',
                path: '/acm',
                component: BlankLayout,
                meta: {
                    title: '配置中心',
                    icon: hicon('acm')
                },
                children: [
                    {
                        name: 'content-image2',
                        path: '/content-image2',
                        component: IndexView,
                        meta: {
                            title: '用户图片记录2',
                            icon: hicon('content-image')
                        }
                    },
                    {
                        name: 'content-wording2',
                        path: '/content-wording2',
                        component: IndexView,
                        meta: {
                            title: '用户文字记录2',
                            icon: hicon('content-wording')
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'setting',
        path: '/setting',
        component: IndexView,
        meta: {
            title: '个人设置',
            icon: hicon('setting')
        }
    },
    {
        name: 'account',
        path: '/account',
        component: IndexView,
        meta: {
            title: '账号管理',
            icon: hicon('account')
        }
    },
    {
        name: 'account2',
        path: '/account2',
        component: IndexView,
        meta: {
            title: '账号管理2',
            icon: hicon('account')
        }
    },
    {
        name: 'account3',
        path: '/account3',
        component: IndexView,
        meta: {
            title: '账号管理3',
            icon: hicon('account')
        }
    },
    {
        name: 'account4',
        path: '/account4',
        component: IndexView,
        meta: {
            title: '账号管理4',
            icon: hicon('account')
        }
    },
    {
        name: 'account5',
        path: '/account5',
        component: IndexView,
        meta: {
            title: '账号管理5',
            icon: hicon('account')
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
