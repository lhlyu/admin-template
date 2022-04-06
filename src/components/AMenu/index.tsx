import { defineComponent, PropType, VNode, withModifiers } from 'vue'

export interface MenuItem {
    // 唯一
    key: string
    // 菜单的名字
    label: string
    // 菜单的图标
    icon?: VNode
    // 菜单跳转的地址
    path: string
    // 子菜单
    childrens?: MenuItem[]
}

const AMenu = defineComponent({
    props: {
        menus: {
            type: Array as PropType<MenuItem[]>,
            default: () => []
        }
    },
    setup: function (props) {
        const triggleChildrenMenu = (v: PointerEvent) => {
            console.log(v.target)
            if (!v?.target) {
                return
            }
            const dom = v.target as HTMLElement
            if (dom.nextElementSibling?.classList.contains('close')) {
                dom.nextElementSibling.classList.remove('close')
            } else {
                dom.nextElementSibling?.classList.add('close')
            }
        }

        // 渲染子元素
        const renderItem = (layer: number, childrens: MenuItem[]) => {
            return childrens.map(v => {
                if (v?.childrens?.length) {
                    return (
                        <li>
                            <router-link to={v.path} exact-active-class="active" style={{ paddingLeft: layer * 22 + 'px' }} onClick={triggleChildrenMenu}>
                                {v?.icon} <span>{v.label}</span>
                            </router-link>
                            <ul class="close">{renderItem(layer + 1, v.childrens)}</ul>
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
                                    <router-link to={v.path} exact-active-class="active" onClick={triggleChildrenMenu}>
                                        {v?.icon} <span>{v.label}</span>
                                    </router-link>
                                    <ul class="close">{renderItem(2, v.childrens)}</ul>
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
