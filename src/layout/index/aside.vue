<template>
    <menu>
        <router-link to="/v1_3_1" class="admin">
            <img src="/logo.png" alt="logo" />
            <strong>管理员：谕</strong>
        </router-link>
        <AMenu :menus="menus"></AMenu>
    </menu>
</template>

<script lang="ts" setup>
import AMenu from '../../components/AMenu'
import { hicon } from '../../components/Icon/index'
import type { MenuItem } from '../../components/AMenu/useMenu'

const menus: MenuItem[] = [
    {
        label: '一级菜单A',
        path: '/v1',
        icon: hicon('home'),
        childrens: [
            {
                label: '二级菜单a',
                path: '/v1_1'
            },
            {
                label: '二级菜单b',
                path: '/v1_2'
            },
            {
                label: '二级菜单c',
                path: '/v1_3',
                childrens: [
                    {
                        label: '三级菜单1',
                        path: '/v1_3_1'
                    },
                    {
                        label: '三级菜单2',
                        path: '/v1_3_2'
                    }
                ]
            }
        ]
    },
    {
        label: '一级菜单B',
        path: '/v2',
        childrens: [
            {
                label: '二级菜单d',
                path: '/v2'
            },
            {
                label: '二级菜单e',
                path: '/v2_2'
            }
        ]
    }
]
</script>
