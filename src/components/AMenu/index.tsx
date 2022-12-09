import { defineComponent, PropType } from 'vue'
import type { MenuItem } from './useMenu'
import useMenu from './useMenu'
import useMenuStore from '../../stores/menu'

const AMenu = defineComponent({
    props: {
        menus: {
            type: Array as PropType<MenuItem[]>,
            default: () => []
        }
    },
    setup: function (props) {
        const store = useMenuStore()
        const { selectedMenuFn, triggleMenuFn } = useMenu(props.menus)

        // 渲染子元素
        const renderItem = (parentKey: string, layer: number, childrens: MenuItem[]) => {
            return childrens.map((v, i) => {
                const key = `${parentKey}-${i + 1}`
                if (v?.childrens?.length) {
                    return (
                        <li data-key={key}>
                            <div
                                class={{
                                    'menu-item': true,
                                    active: store.isActive(key),
                                    expand: store.isExpand(key)
                                }}
                                onClick={() => triggleMenuFn(key, v.path!)}
                                style={{ paddingLeft: layer * 25 + 'px' }}
                            >
                                {v?.icon} <span>{v.label}</span>
                                <span class="menu-more"></span>
                            </div>
                            <ul>{renderItem(key, layer + 1, v.childrens)}</ul>
                        </li>
                    )
                }
                if (v?.label?.length) {
                    return (
                        <li data-key={key}>
                            <div
                                class={{
                                    'menu-item': true,
                                    active: store.isActive(key)
                                }}
                                style={{ paddingLeft: layer * 25 + 'px' }}
                                onClick={() => selectedMenuFn(v.path!)}
                            >
                                {v?.icon} <span>{v.label}</span>
                            </div>
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
                    {(props.menus as MenuItem[]).map((v, i) => {
                        const key = (i + 1).toString()
                        if (v?.childrens?.length) {
                            return (
                                <li data-key={key}>
                                    <div
                                        class={{
                                            'menu-item': true,
                                            active: store.isActive(key),
                                            expand: store.isExpand(key)
                                        }}
                                        onClick={() => triggleMenuFn(key, v.path!)}
                                    >
                                        {v?.icon} <span>{v.label}</span>
                                        <span class="menu-more"></span>
                                    </div>
                                    <ul>{renderItem(key, 2, v.childrens)}</ul>
                                </li>
                            )
                        }
                        if (v?.label?.length) {
                            return (
                                <li data-key={key}>
                                    <div
                                        class={{
                                            'menu-item': true,
                                            active: store.isActive(key)
                                        }}
                                        onClick={() => selectedMenuFn(v.path!)}
                                    >
                                        {v?.icon} <span>{v.label}</span>
                                    </div>
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
