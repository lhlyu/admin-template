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
import AMenu from '../../components/AMenu'
import { hicon } from '../../components/Icon/index'
import type { MenuItem } from '../../components/AMenu/useMenu'
import type { RouteRecordRaw } from 'vue-router'
import { menuRoutes } from '../../routes/routes'
import { onBeforeMount, ref } from 'vue'


const routesToMenus = (routes: RouteRecordRaw[] = []):MenuItem[] => {
    if (routes.length === 0) {
        return []
    }
    const items:MenuItem[] = []
    for (let i = 0; i < routes.length; i++) {
        const childs = routesToMenus(routes[i].children)
        items.push({
            label: routes[i].meta?.title as string,
            icon: hicon(routes[i].name as string),
            path: routes[i].path,
            // 子菜单
            childrens: childs
        })
    }
    return items
}

const menus = ref<MenuItem[]>([])

onBeforeMount(() => {
    menus.value = routesToMenus(menuRoutes)
    console.log('---->', menuRoutes)
})

</script>
