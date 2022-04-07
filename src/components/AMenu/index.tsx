import { defineComponent, onBeforeMount, PropType, ref, VNode } from 'vue'
import { useRoute } from 'vue-router'

export interface MenuItem {
    // 唯一值
    key: string
    // 菜单的名字
    label: string
    // 菜单的图标
    icon?: VNode
    // 菜单跳转的地址
    path?: string
    // 子菜单
    childrens?: MenuItem[]
    // 是否折叠菜单
    close?: boolean
}

const AMenu = defineComponent({
    props: {
        menus: {
            type: Array as PropType<MenuItem[]>,
            default: () => []
        }
    },
    setup: function (props) {
        // 已展开的菜单key
        const expandKeys = ref<Set<string>>(new Set<string>())
        // 子路由与父路由path相等的key
        const duplicateKeys = ref<Set<string>>(new Set<string>())

        // 遍历菜单
        const iterMenus = (m: MenuItem[], parentPath: string, parentKey: string, matchPath: string): boolean => {
            let ok = false
            for (let i = 0; i < m.length; i++) {
                if (m[i].path === parentPath) {
                    duplicateKeys.value.add(parentKey)
                }

                if (m[i].path === matchPath) {
                    if (parentKey !== '') {
                        expandKeys.value.add(parentKey)
                        ok = true
                    }
                }
                if (m[i]?.childrens?.length) {
                    if (iterMenus(m[i].childrens!, m[i].path!, m[i].key, matchPath)) {
                        if (parentKey !== '') {
                            expandKeys.value.add(parentKey)
                            ok = true
                        }
                    }
                }
            }
            return ok
        }

        onBeforeMount(() => {
            const route = useRoute()
            // 刷新页面，打开指定的菜单
            iterMenus(props.menus, '', '', route.path)
        })

        // 展开菜单
        const triggleMenu = (key: string) => {
            if (expandKeys.value.has(key)) {
                expandKeys.value.delete(key)
                return
            }
            expandKeys.value.add(key)
        }

        // 渲染子元素
        const renderItem = (layer: number, childrens: MenuItem[]) => {
            return childrens.map(v => {
                if (v?.childrens?.length) {
                    return (
                        <li>
                            <router-link
                                to={v.path}
                                exact-active-class={duplicateKeys.value.has(v.key) ? 'parent-active' : 'active'}
                                class={{ expand: expandKeys.value.has(v.key) }}
                                style={{ paddingLeft: layer * 22 + 'px' }}
                                onClick={() => triggleMenu(v.key)}
                            >
                                <span class="menu-more"></span>
                                {v?.icon} <span>{v.label}</span>
                            </router-link>
                            <ul>{renderItem(layer + 1, v.childrens)}</ul>
                        </li>
                    )
                }
                if (v?.label?.length) {
                    return (
                        <li>
                            <router-link to={v.path} exact-active-class="active" style={{ paddingLeft: layer * 22 + 'px' }}>
                                {v?.icon} <span>{v.label}</span>
                            </router-link>
                        </li>
                    )
                }
            })
        }

        // 渲染菜单
        const renderMenu = () => {
            if (!props?.menus?.length) {
                return
            }
            return (
                <ul>
                    {(props.menus as MenuItem[]).map(v => {
                        if (v?.childrens?.length) {
                            return (
                                <li>
                                    <router-link
                                        to={v.path}
                                        exact-active-class={duplicateKeys.value.has(v.key) ? 'parent-active' : 'active'}
                                        class={{ expand: expandKeys.value.has(v.key) }}
                                        onClick={() => triggleMenu(v.key)}
                                    >
                                        <span class="menu-more"></span> {v?.icon} <span>{v.label}</span>
                                    </router-link>
                                    <ul>{renderItem(2, v.childrens)}</ul>
                                </li>
                            )
                        }
                        if (v?.label?.length) {
                            return (
                                <li>
                                    <router-link to={v.path} exact-active-class="active">
                                        {v?.icon} <span>{v.label}</span>
                                    </router-link>
                                </li>
                            )
                        }
                    })}
                </ul>
            )
        }

        return () => <div class="menu">{renderMenu()}</div>
    }
})

export default AMenu
