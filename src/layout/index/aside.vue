<template>
    <menu>
        <router-link to="/setting" class="admin">
            <img src="/logo.png" alt="logo" />
            <strong>管理员：阿尔法</strong>
        </router-link>

        <AMenu :menus="menus"></AMenu>
    </menu>
</template>

<script lang="ts" setup>
import type { MenuItem } from '../../components/AMenu'
import AMenu from '../../components/AMenu'

const menus: MenuItem[] = [
    {
        key: '',
        label: '一级菜单1',
        path: '/v5',
        childrens: [
            {
                key: '',
                label: '一级菜单1子菜单1',
                path: '/setting',
            },
            {
                key: '',
                label: '一级菜单1子菜单2',
                path: '/v4',
                childrens: [
                    {
                        key: '',
                        label: '一级菜单1子菜单2-121312313123sdfksdl;f萨迪克蓝卡队蓝卡队',
                        path: '/v1',
                    }
                ]
            }
        ]
    },
    {
        key: '',
        label: '一级菜单2',
        path: '/v2',
        childrens: [
            {
                key: '',
                label: '一级菜单2子菜单1',
                path: '/v3',
            }
        ]
    }
]
</script>
