import { defineStore } from 'pinia'

export interface MenuStateOption {
    // 菜单path对应的key
    menuMap: any
    // 当前菜单展开的key
    expandKeys: any
    // 当前被选中的path
    selectedPath: string
}

// 菜单配置
const useMenuStore = defineStore({
    id: 'menu',
    state: () =>
        ({
            menuMap: {},
            expandKeys: {},
            selectedPath: ''
        } as MenuStateOption),
    getters: {
        // 获取当前选中的key
        getSelectedKey: state => state.menuMap[state.selectedPath],
        // 是否存在
        hasMenuMap: state => (path: string = '') => state.menuMap[path]?.length > 0,
        // 是否是激活
        isActive: state => (key: string = '') => state.menuMap[state.selectedPath] === key,
        // 是否展开
        isExpand: state => (key: string = '') => state.expandKeys[key] === 1
    },
    actions: {
        init(
            opt: MenuStateOption = {
                menuMap: {},
                expandKeys: {},
                selectedPath: ''
            }
        ) {
            this.menuMap = opt.menuMap
            this.expandKeys = opt.expandKeys
            this.selectedPath = opt.selectedPath
        },
        setSelectedPath(path: string) {
            this.selectedPath = path
        },
        addExpandKeys(...keys: string[]) {
            keys.map(key => {
                this.expandKeys[key] = 1
            })
        },
        removeExpandKey(key: string) {
            delete this.expandKeys[key]
        }
    },
    // 启用持久化
    persist: {
        enabled: true,
        storage: window.sessionStorage
    }
})

export default useMenuStore
