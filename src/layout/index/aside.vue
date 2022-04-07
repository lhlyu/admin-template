<template>
    <menu>
        <router-link to="/setting" class="admin">
            <img src="/logo.png" alt="logo" />
            <strong>管理员：谕</strong>
        </router-link>

        <AMenu :menus="menus"></AMenu>
    </menu>
</template>

<script lang="ts" setup>
import type { MenuItem } from '../../components/AMenu'
import AMenu from '../../components/AMenu'
import { UserAdmin, SendAltFilled, FolderAdd } from '@vicons/carbon'
import { h } from 'vue'

const menus: MenuItem[] = [
    {
        key: '1',
        label: '一级菜单1',
        path: '/v5',
        icon: h(UserAdmin, { style: { width: '18px', verticalAlign: 'bottom' } }),
        childrens: [
            {
                key: '1-1',
                label: '一级菜单1子菜单1',
                path: '/setting'
            },
            {
                key: '1-2',
                label: '一级菜单1子菜单2',
                path: '/v4',
                icon: h(FolderAdd, { style: { width: '18px', verticalAlign: 'bottom' } }),
                childrens: [
                    {
                        key: '1-2-1',
                        label: '一级菜单1子菜单2-1,名字要长长长长长长长长长长长长长长长长',
                        path: '/v1'
                    }
                ]
            }
        ]
    },
    {
        key: '2',
        label: '一级菜单2',
        path: '/v2',
        icon: h(SendAltFilled, { style: { width: '18px', verticalAlign: 'bottom' } }),
        childrens: [
            {
                key: '2-1',
                label: '一级菜单2子菜单1',
                path: '/v2'
            },
            {
                key: '2-2',
                label: '一级菜单2子菜单2',
                path: '/v3'
            }
        ]
    }
]
</script>
