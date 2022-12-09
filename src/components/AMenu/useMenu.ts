import { onBeforeMount, VNode } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import useMenuStore from '../../stores/menu'

export interface MenuItem {
    // 菜单的名字
    label: string
    // 菜单的图标
    icon?: VNode
    // 菜单跳转的地址
    path?: string
    // 子菜单
    childrens?: MenuItem[]
}

const empty: MenuItem = {
    label: ''
}

const useMenu = (menus: MenuItem[]) => {
    const route = useRoute()
    const router = useRouter()
    const store = useMenuStore()

    // 所需数据
    // 菜单path对应的key
    const menuMap: any = {}
    // 当前菜单展开的key
    const expandKeys: any = {}

    // 遍历菜单
    const iterMenus = (items: MenuItem[], parent: MenuItem, parentKey: string, matchPath: string): boolean => {
        let ok = false
        for (let i = 0; i < items.length; i++) {
            const key = `${parentKey}${parentKey.length > 0 ? '-' : ''}${i + 1}`

            if (items[i].path?.length) {
                menuMap[items[i].path!] = key
            }

            if (items[i].path === matchPath) {
                if (parentKey != '') {
                    expandKeys[parentKey] = 1
                    ok = true
                }
            }

            if (items[i]?.childrens?.length) {
                if (iterMenus(items[i].childrens!, items[i], key, matchPath)) {
                    if (parentKey != '') {
                        expandKeys[parentKey] = 1
                        ok = true
                    }
                }
            }
        }
        return ok
    }

    // 初始化
    const init = (path: string = '') => {
        if (path.length === 0) {
            path = route.path
        }

        // 如果与缓存一致，直接使用缓存的数据
        if (store.selectedPath === path && menuMap.hasOwnProperty(store.selectedPath)) {
            return
        }

        // 遍历菜单
        iterMenus(menus, empty, '', path)

        store.init({
            menuMap: menuMap,
            expandKeys: expandKeys,
            selectedPath: path
        })
    }

    // 选择菜单
    const selectedMenuFn = (path: string) => {
        store.setSelectedPath(path)
        router.push(path)
    }

    // 展开/折叠菜单
    const triggleMenuFn = (key: string, path: string) => {
        if (store.isExpand(key)) {
            store.removeExpandKey(key)
            if (store.hasMenuMap(path)) {
                selectedMenuFn(path)
            }
            return
        }
        store.addExpandKeys(key)
        if (store.hasMenuMap(path)) {
            selectedMenuFn(path)
        }
    }

    onBeforeMount(() => {
        init()
    })

    onBeforeRouteUpdate(u => {
        init(u.path)
    })

    return {
        selectedMenuFn,
        triggleMenuFn
    }
}

export default useMenu
