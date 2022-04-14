import { defineStore } from 'pinia'

export interface SiteOption {
    // 主题
    theme: 'dark' | 'light'
    // 菜单是否折叠
    collapsed: boolean
}

// 网页设置
const useSiteStore = defineStore({
    id: 'site',
    state: () =>
        ({
            theme: 'dark',
            collapsed: false
        } as SiteOption),
    getters: {},
    actions: {
        async setTheme(theme: 'dark' | 'light') {
            this.theme = theme
        },
        triggleCollapsed() {
            this.collapsed = !this.collapsed
        }
    },
    // 启用持久化
    persist: {
        enabled: true,
        storage: window.localStorage,
        compress: true
    }
})

export default useSiteStore
